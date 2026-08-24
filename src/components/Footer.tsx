import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <span className="wordmark-mark">AMN</span>
          <p className="footer-tagline">Built by students, for students.</p>
        </div>
        <nav className="footer-nav" aria-label="Footer">
          <Link to="/about">About</Link>
          <Link to="/subjects">Subjects</Link>
          <Link to="/library">Library</Link>
          <Link to="/events">Events</Link>
          <Link to="/mentors">Mentors</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>
      </div>
    </footer>
  );
}
