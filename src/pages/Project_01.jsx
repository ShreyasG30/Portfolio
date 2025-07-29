import React, { useEffect } from 'react';

/**
 * Project_01
 *
 * This component combines the discussion of two finite element analyses of
 * post‑tensioned anchorage systems: a twenty‑four‑anchor configuration and a
 * twelve‑strand anchor.  Rather than focusing on confidential numerical
 * results, the narrative below provides a high‑level explanation of the
 * physical behaviour, engineering significance and typical applications of
 * these systems.  When the component mounts it forces the window to scroll
 * to the top so the page always opens from the beginning rather than from
 * an internal section.
 */
const Project_01 = () => {
  // Scroll to the top of the page when the component mounts.  Without this
  // call, navigation or deep links could cause the view to start at an
  // internal element (e.g. a section identified by an anchor), which is
  // undesirable when first loading the project page.
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  return (
    <main
      className="project-content"
      style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}
    >
      <header>
        <h1>Anchorage System Simulations</h1>
        <p>
          Post‑tensioned anchorage systems use steel strands or bars gripped by
          wedges inside a specialized anchor head.  By tensioning the strands
          against a bearing plate, the system imparts a controlled compressive
          force into concrete or rock.  Anchors are widely used for retaining
          walls, bridge abutments, slope stabilization and underground
          structures.  Numerical simulation is a powerful tool for understanding
          how stresses and deformations develop within these complex assemblies
          before any physical testing occurs.
        </p>
      </header>

      <section>
        <h2>Overview of the Twenty‑Four‑Anchor Simulation</h2>
        <p>
          The twenty‑four‑anchor model represents a large group of anchors
          arranged radially around a central region.  Each anchor consists of
          multiple steel tendons bonded to a cylindrical grout bulb within the
          surrounding medium.  In the simulation, load was applied to the
          exposed ends of the anchors and the resulting stress field in the
          surrounding material was observed.  As tension increased, axial
          forces were transferred through the grout to the adjacent soil or
          concrete, producing an outward pressure around each anchor.  The
          distribution of load among anchors was mostly uniform due to the
          symmetrical layout, and zones of influence around individual anchors
          were seen to overlap at higher load levels.  Global displacements
          remained small relative to the anchor length, with the largest
          movements occurring near the free ends where the tendon entered the
          soil.  Such simulations help engineers verify that a closely spaced
          group of anchors will share loads as intended without causing
          excessive ground deformations.
        </p>
      </section>

      <section>
        <h2>Overview of the Twelve‑Strand Anchor Simulation</h2>
        <p>
          The twelve‑strand anchor model focuses on a single post‑tensioning
          tendon comprised of twelve high‑strength steel strands seated in a
          cast‑iron anchor head.  During tensioning, each strand is gripped by
          wedges which bear against a plate, transferring force into the
          anchorage zone.  Finite element analysis was used to investigate how
          the tensile force is distributed among the strands and how the grout
          and surrounding material respond.  The results showed that stresses
          along the strands remain fairly consistent, indicating that the
          anchorage hardware effectively equalizes load.  Minor local slip was
          observed at the wedge interfaces as the strands seated, but this did
          not compromise the overall capacity.  The surrounding concrete
          experienced compressive stresses concentrated near the anchor head
          and more gradual stress decay along the bonded length.  These
          observations confirm that properly designed twelve‑strand anchors
          develop their capacity over a predictable embedment length, and they
          highlight the importance of detailing the anchorage zone to
          accommodate the compressive stresses.
        </p>
      </section>

      <section>
        <h2>Engineering Significance and Applications</h2>
        <p>
          Understanding the behaviour of multi‑strand and multi‑anchor systems
          is essential for safe and economical design.  Anchors provide
          resistance to uplift, overturning and sliding forces, and they are
          commonly used to reinforce retaining walls, tie back excavation
          bracing, support bridge decks and stabilize slopes or underground
          caverns.  Numerical simulations like those described above allow
          engineers to study the influence of parameters such as tendon
          arrangement, strand count, grout properties and soil stiffness
          without divulging proprietary values.  They reveal how load is
          transferred from the tendon into the surrounding medium, where the
          highest stresses occur and how the system deforms under service and
          ultimate loads.  By comparing the performance of a twenty‑four‑anchor
          group with that of a twelve‑strand anchor, one can appreciate the
          different scales of behaviour—from group effects and ground
          interactions to detailed mechanics at the anchor head.  This
          knowledge guides the selection of appropriate anchor types for
          specific projects and informs decisions about spacing, embedment
          length and safety factors.
        </p>
      </section>

      <footer style={{ marginTop: '2rem', fontStyle: 'italic' }}>
        <p>
          <strong>Note:</strong> The descriptions above intentionally omit
          numerical values and proprietary data.  They provide a qualitative
          summary of the simulations to respect confidentiality while still
          conveying the physical mechanisms and design implications.
        </p>
      </footer>
    </main>
  );
};

export default Project_01;