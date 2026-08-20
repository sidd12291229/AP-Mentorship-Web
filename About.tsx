import { milestones } from "../data";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="section-head">
        <p className="eyebrow">ABOUT / WHY AMN EXISTS</p>
        <h2>Started because AP help shouldn't depend on your zip code.</h2>
      </div>

      <div className="about-grid">
        <div className="about-copy">
          <p>
            Most serious AP prep sits behind a paywall: private tutors,
            review course subscriptions, or a school that happens to offer
            extra sections. Students at under-resourced schools are left to
            figure it out from the textbook alone.
          </p>
          <p>
            AMN started as a group chat between three students helping each
            other study for AP Physics. It's grown into a Discord server
            with subject channels, a shared resource library, and a
            rotating schedule of student-run workshops. Every mentor is a
            student or recent graduate who has taken the exam they teach.
          </p>
          <p>
            The program has no paid staff and no office. It runs on
            Discord, a shared drive, and whatever hour a mentor can give in
            a given week.
          </p>
        </div>

        <div className="milestones">
          <p className="milestones-label">History</p>
          <ol className="milestones-list">
            {milestones.map((milestone, i) => (
              <li key={i}>
                <span className="milestone-year">{milestone.year}</span>
                <span>{milestone.text}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
