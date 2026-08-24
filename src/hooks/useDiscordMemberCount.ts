import { useEffect, useState } from "react";

interface DiscordInviteCounts {
  memberCount: number | null;
  isLoading: boolean;
  error: string | null;
}

interface DiscordInviteResponse {
  approximate_member_count?: number;
}

/**
 * Fetches an approximate member count for a Discord server using
 * Discord's public invite endpoint. No bot token or auth required,
 * since this is the same endpoint the Discord client itself uses to
 * preview an invite before you click it.
 *
 * The count is "approximate" on Discord's end (their words, not ours),
 * refreshed periodically rather than truly live. If the fetch fails for
 * any reason (invite not created yet, offline, rate-limited), memberCount
 * stays null so the caller can fall back to a static placeholder instead
 * of showing an error to visitors.
 */
export function useDiscordMemberCount(inviteCode: string): DiscordInviteCounts {
  const [memberCount, setMemberCount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchCount() {
      try {
        const response = await fetch(
          `https://discord.com/api/v10/invites/${inviteCode}?with_counts=true`
        );
        if (!response.ok) {
          throw new Error(`Discord API returned ${response.status}`);
        }
        const data: DiscordInviteResponse = await response.json();
        if (!cancelled && typeof data.approximate_member_count === "number") {
          setMemberCount(data.approximate_member_count);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Failed to load member count");
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    }

    fetchCount();
    return () => {
      cancelled = true;
    };
  }, [inviteCode]);

  return { memberCount, isLoading, error };
}
