import { useState } from "react";
import { navItems } from "../data";
import { useScrollSpy } from "../hooks/useScrollSpy";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const activeId = useScrollSpy(navItems.map((item) => item.id));

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header" id="top">
      <div className="header-inner">
        <a className="wordmark" href="#top">
          <span className="wordmark-mark">AMN</span>
          <span className="wordmark-sub">AP MENTOR NETWORK</span>
        </a>

        <button
          className="nav-toggle"
          aria-expanded={isOpen}
          aria-controls="siteNav"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? "CLOSE" : "MENU"}
        </button>

        <nav
          className={isOpen ? "site-nav is-open" : "site-nav"}
          id="siteNav"
          aria-label="Primary"
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={closeMenu}
              aria-current={activeId === item.id ? "true" : undefined}
            >
              {item.label}
            </a>
          ))}
          <a href="#join" className="nav-cta" onClick={closeMenu}>
            Join AMN
          </a>
        </nav>
      </div>
    </header>
  );
}
