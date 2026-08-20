export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <span className="wordmark-mark">AMN</span>
          <p className="footer-tagline">Built by students, for students.</p>
        </div>
        <nav className="footer-nav" aria-label="Footer">
          <a href="#subjects">Subjects</a>
          <a href="#library">Library</a>
          <a href="#events">Events</a>
          <a href="#mentors">Mentors</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
