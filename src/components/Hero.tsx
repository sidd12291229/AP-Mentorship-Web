import { Link } from "react-router-dom";
import { coverFields } from "../data";
import { useInkStamp } from "../hooks/useInkStamp";
import InkRipples from "./InkRipples";

export default function Hero() {
  const joinStamp = useInkStamp();
  const aboutStamp = useInkStamp();

  return (
    <section className="hero" id="home">
      <div className="hero-inner">
        <p className="eyebrow">AP MENTORSHIP NETWORK</p>
        <h1 className="hero-title">
          Free AP help, taught by students who just took the exam.
        </h1>
        <p className="hero-sub">
          AMN connects students with peer mentors, workshop notes, and subject
          resources for the major AP courses, free of cost.
        </p>
        <div className="hero-actions">
          <a
            className={`btn btn-primary ${joinStamp.stampClassName}`}
            href="https://discord.gg/Eke2BFAAT"
            onClick={joinStamp.trigger}
            onAnimationEnd={joinStamp.onAnimationEnd}
          >
            <InkRipples ripples={joinStamp.ripples} onDone={joinStamp.removeRipple} />
            Join AMN on Discord
          </a>
          <Link
            className={`btn btn-ghost ${aboutStamp.stampClassName}`}
            to="/about"
            onClick={aboutStamp.trigger}
            onAnimationEnd={aboutStamp.onAnimationEnd}
          >
            <InkRipples ripples={aboutStamp.ripples} onDone={aboutStamp.removeRipple} />
            More about AMN
          </Link>
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