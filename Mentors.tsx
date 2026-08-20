import { mentors } from "../data";

export default function Mentors() {
  return (
    <section className="section section-alt" id="mentors">
      <div className="section-head">
        <p className="eyebrow">ROSTER / MENTORS</p>
        <h2>The people answering your questions.</h2>
        <p className="section-lede">
          Every mentor has taken the exam they teach and scored a 4 or
          higher. The roster is updated each semester.
        </p>
      </div>

      <div className="roster" role="table" aria-label="Mentor roster">
        <div className="roster-row roster-head" role="row">
          <span role="columnheader">Name</span>
          <span role="columnheader">Subjects</span>
          <span role="columnheader">Background</span>
          <span role="columnheader">Status</span>
        </div>
        {mentors.map((mentor) => (
          <div className="roster-row" role="row" key={mentor.name}>
            <span data-label="Name">{mentor.name}</span>
            <span data-label="Subjects">{mentor.subjects}</span>
            <span data-label="Background">{mentor.background}</span>
            <span data-label="Status">{mentor.status}</span>
          </div>
        ))}
      </div>

      <p className="roster-note">
        Want to see your name here? See{" "}
        <a className="text-link" href="#join">
          Join AMN
        </a>{" "}
        below.
      </p>
    </section>
  );
}
