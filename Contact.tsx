import { useState, type FormEvent, type ChangeEvent } from "react";
import { contactLines } from "../data";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [confirmation, setConfirmation] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (message.trim().length === 0) {
      setConfirmation("Write a message before sending.");
      return;
    }
    setConfirmation(
      "Received. (Connect this form to an email service to go live.)"
    );
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="section section-alt" id="contact">
      <div className="section-head">
        <p className="eyebrow">INQUIRIES / CONTACT</p>
        <h2>Get in touch.</h2>
        <p className="section-lede">
          Pick the line that matches what you need, or use the form.
          Anonymous feedback is read but never replied to individually.
        </p>
      </div>

      <div className="contact-grid">
        <ul className="contact-lines">
          {contactLines.map((line) => (
            <li key={line.label}>
              <span>{line.label}</span>
              <a className="text-link" href={line.href}>
                {line.value}
              </a>
            </li>
          ))}
        </ul>

        <form className="contact-form" id="contact-form" onSubmit={handleSubmit}>
          <p className="form-note">
            This form doesn't send anywhere yet. Wire it to your email
            service or a form endpoint before launch.
          </p>

          <label htmlFor="cf-name">Name (optional for anonymous feedback)</label>
          <input
            type="text"
            id="cf-name"
            name="name"
            autoComplete="name"
            value={name}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
          />

          <label htmlFor="cf-email">Email</label>
          <input
            type="email"
            id="cf-email"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          />

          <label htmlFor="cf-message">Message</label>
          <textarea
            id="cf-message"
            name="message"
            rows={4}
            required
            value={message}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
          />

          <button type="submit" className="btn btn-primary btn-small">
            Send
          </button>
          <p className="form-confirm" aria-live="polite">
            {confirmation}
          </p>
        </form>
      </div>
    </section>
  );
}
