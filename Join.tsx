import { joinPaths } from "../data";

export default function Join() {
  return (
    <section className="section section-alt" id="join">
      <div className="section-head">
        <p className="eyebrow">ENROLL / GET INVOLVED</p>
        <h2>Four ways to get involved.</h2>
      </div>

      <ul className="join-list">
        {joinPaths.map((path) => (
          <li className="join-row" key={path.title}>
            <div className="join-text">
              <h3>{path.title}</h3>
              <p>{path.description}</p>
            </div>
            <a
              className={
                path.variant === "primary"
                  ? "btn btn-primary btn-small"
                  : "btn btn-ghost btn-small"
              }
              href={path.ctaHref}
            >
              {path.ctaLabel}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
