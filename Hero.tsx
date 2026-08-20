import { useState } from "react";
import { coverFields } from "../data";

export default function Hero() {
  const [isStamped, setIsStamped] = useState(false);

  const handleJoinClick = () => {
    // Retrigger the stamp animation even on repeat clicks.
    setIsStamped(false);
    requestAnimationFrame(() => setIsStamped(true));
  };

  return (
    <section className="hero" id="home">
      <div className="hero-inner">
        <p className="eyebrow">AMN / AP MENTOR NETWORK</p>
        <h1 className="hero-title">
          Free AP help, taught by students who just took the exam.
        </h1>
        <p className="hero-sub">
          AMN connects students with peer mentors, workshop notes, and subject
          resources for six major AP courses. No cost. No account needed to
          browse the library.
        </p>
        <div className="hero-actions">
          <a
            className={isStamped ? "btn btn-primary is-stamped" : "btn btn-primary"}
            href="https://discord.gg/replace-with-amn-invite"
            onClick={handleJoinClick}
            onAnimationEnd={() => setIsStamped(false)}
          >
            Join AMN on Discord
          </a>
          <a className="btn btn-ghost" href="#library">
            Browse the resource library
          </a>
        </div>
      </div>

      <div className="cover-sheet" aria-label="Program summary">
        <div className="cover-sheet-head">
          <span>PROGRAM SUMMARY</span>
          <span>FILED FALL 2025</span>
        </div>
        <dl className="cover-fields">
          {coverFields.map((field) => (
            <div className="cover-field" key={field.label}>
              <dt>{field.label}</dt>
              <dd className={field.filled ? "filled" : undefined}>{field.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
