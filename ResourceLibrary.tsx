import { libraryTree } from "../data";

export default function ResourceLibrary() {
  return (
    <section className="section section-alt" id="library">
      <div className="section-head">
        <p className="eyebrow">STACKS / RESOURCE LIBRARY</p>
        <h2>Organized the way you'd search a card catalog.</h2>
        <p className="section-lede">
          Every resource is filed under Subject, then Unit, then Resource
          type. Only material AMN has permission to host or link is listed.
          If something's missing, request it from the contact section below.
        </p>
      </div>

      <div className="callnumber-demo">
        <p className="callnumber-label">Worked example</p>
        <div className="callnumber-path">
          <span>AP Physics 1</span>
          <span className="sep">/</span>
          <span>Unit 6</span>
          <span className="sep">/</span>
          <span>Rotational Motion</span>
          <span className="sep">/</span>
          <span>Workshop Slides</span>
        </div>
        <p className="callnumber-code">
          Call number: AP-PHYS1.U6.ROT-MOT.SLIDES
        </p>
      </div>

      <div className="tree">
        {libraryTree.map((branch, i) => (
          <details className="tree-node" open={i === 0} key={branch.subject}>
            <summary>{branch.subject}</summary>
            <div className="tree-children">
              {branch.units.map((unit) => (
                <details className="tree-node" key={unit.unit}>
                  <summary>{unit.unit}</summary>
                  <ul className="plain-list tree-leaf">
                    {unit.resources.map((resource) => (
                      <li key={resource}>{resource}</li>
                    ))}
                  </ul>
                </details>
              ))}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
