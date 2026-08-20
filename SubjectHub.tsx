import { useState } from "react";
import { subjects } from "../data";

export default function SubjectHub() {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setOpenIds((current) => {
      const next = new Set(current);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <section className="section" id="subjects">
      <div className="section-head">
        <p className="eyebrow">CATALOG / BY SUBJECT</p>
        <h2>Six subjects, sorted like the stacks.</h2>
        <p className="section-lede">
          Every subject page holds the same five things: a course overview,
          recommended resources, current CED and exam information, AMN's own
          workshop materials, and a link to that subject's Discord help
          channel.
        </p>
      </div>

      <ul className="catalog">
        {subjects.map((subject) => {
          const isOpen = openIds.has(subject.id);
          return (
            <li
              className={isOpen ? "catalog-item is-open" : "catalog-item"}
              data-dept={subject.dept}
              key={subject.id}
            >
              <button
                className="catalog-trigger"
                aria-expanded={isOpen}
                onClick={() => toggle(subject.id)}
              >
                <span className="catalog-tag">{subject.tag}</span>
                <span className="catalog-name">{subject.name}</span>
                <span className="catalog-toggle" aria-hidden="true">
                  ＋
                </span>
              </button>
              <div className="catalog-body">
                <div className="catalog-body-inner">
                  <p>{subject.description}</p>
                  <ul className="plain-list">
                    <li>Course overview and unit weighting</li>
                    <li>Recommended external resources</li>
                    <li>CED and official exam information</li>
                    <li>AMN workshop slides and recordings</li>
                    <li>Study strategies from past 4s and 5s</li>
                  </ul>
                  <a className="text-link" href="#">
                    Open the {subject.channel} channel
                  </a>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
