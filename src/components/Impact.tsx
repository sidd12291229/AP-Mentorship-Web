import { ledgerStats, feedbackQuotes } from "../data";

export default function Impact() {
  return (
    <section className="section" id="impact">
      <div className="section-head">
        <h2>Our impact so far.</h2>
      </div>

      <dl className="ledger">
        {ledgerStats.map((stat) => (
          <div className="ledger-row" key={stat.label}>
            <dt>{stat.label}</dt>
            <dd>{stat.value}</dd>
          </div>
        ))}
      </dl>

      <div className="feedback">
        <p className="feedback-label">From the workshop survey</p>
        <div className="feedback-cards">
          {feedbackQuotes.map((item) => (
            <blockquote className="feedback-card" key={item.source}>
              <p>{item.quote}</p>
              <footer>{item.source}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
