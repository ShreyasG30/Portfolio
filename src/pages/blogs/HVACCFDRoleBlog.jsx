import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BlogRelatedPosts from '../../components/BlogRelatedPosts';

const HVACCFDRoleBlog = () => {
  const navigate = useNavigate();
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleBack = () => {
    const canGoBack = typeof window !== 'undefined'
      && typeof window.history.state?.idx === 'number'
      && window.history.state.idx > 0;

    if (canGoBack) {
      navigate(-1);
      return;
    }

    navigate('/', { replace: true });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    const onScroll = () => {
      setShowScrollTop(window.scrollY > 320);
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const mythVsReality = [
    {
      title: 'Pretty pictures are not proof',
      body: 'A smooth velocity contour can look convincing even when the mesh is weak, the boundary conditions are optimistic, or the turbulence model is the wrong choice.'
    },
    {
      title: 'A CFD model is only as honest as its inputs',
      body: 'If supply conditions, occupancy, wall properties, or heat gains are guessed, the simulation becomes a polished guess rather than an engineering result.'
    },
    {
      title: 'More detail does not automatically mean more truth',
      body: 'Refining the mesh or adding complexity can increase confidence, but it can also create the illusion of precision when the underlying assumptions are still weak.'
    }
  ];

  const drawbacks = [
    {
      title: 'The boundary-condition problem',
      desc: 'CFD does not magically know how many people will enter, how a diffuser will be commissioned, or how operators will actually run the plant. Those guesses drive the result.'
    },
    {
      title: 'The mesh can lie by omission',
      desc: 'If important flow features are not resolved properly, the model can hide jets, swirl, recirculation, and short-circuiting in the name of computational convenience.'
    },
    {
      title: 'Turbulence models are compromises',
      desc: 'Most HVAC CFD work depends on closures that simplify real turbulence. That is practical, but it also means the answer is a modeled approximation, not a direct measurement.'
    },
    {
      title: 'Convergence is not the same as correctness',
      desc: 'A solver can converge to a stable answer that still reflects the wrong physics, the wrong geometry simplification, or the wrong occupancy pattern.'
    },
    {
      title: 'Validation is expensive and often skipped',
      desc: 'Without measurements or field checks, teams can end up presenting simulation output as certainty when it is really a structured hypothesis.'
    },
    {
      title: 'The report can become theater',
      desc: 'Some projects use CFD as a branding device rather than a design tool: impressive renderings, no real decisions, and no change to the actual HVAC layout.'
    }
  ];

  const whereItHelps = [
    'When geometry is too complex for hand-waving or rule-of-thumb zoning.',
    'When a room has strong thermal plumes, unusual occupancy, or layered air movement.',
    'When short-circuiting, stagnant corners, or draft complaints would be expensive to fix later.',
    'When the project is high-risk enough that a visual, physics-based argument matters to clients and reviewers.',
    'When you want to challenge an HVAC concept before drawings turn into site problems.'
  ];

  const honestWorkflow = [
    {
      step: '1. Ask the uncomfortable question',
      desc: 'What decision will this simulation change? If the answer is "none," you may be producing graphics, not engineering.'
    },
    {
      step: '2. Define the real uncertainty',
      desc: 'Identify the parts of the model that are guessed: occupancy, control logic, equipment heat gain, leakage, and commissioning assumptions.'
    },
    {
      step: '3. Build the simplest model that can still reveal the problem',
      desc: 'Overbuilding the model is not a virtue. The goal is to isolate the physics that matters, not to win an animation contest.'
    },
    {
      step: '4. Check sensitivity, not just output',
      desc: 'If a small change in diffuser angle, supply temperature, or boundary condition flips the conclusion, the design is fragile.'
    },
    {
      step: '5. Compare against reality wherever possible',
      desc: 'Field measurements, commissioning observations, and operator feedback should be treated as serious evidence, not an afterthought.'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-6 py-6">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
        >
          ← Back
        </button>
      </div>

      <header className="relative border-b border-border bg-card/30 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            MEP Engineering · CFD and HVAC
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            CFD in HVAC: <span className="text-primary">Powerful Tool</span> or Expensive Theater?
          </h1>

          <p className="text-lg text-foreground/70 mb-6 max-w-2xl">
            HVAC engineers love CFD because it promises truth in three dimensions. Critics hate it because it can disguise bad assumptions behind beautiful color plots. Both sides have a point.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-foreground/60">
            <span>Model Fidelity</span>
            <span className="opacity-50">◆</span>
            <span>Assumption Risk</span>
            <span className="opacity-50">◆</span>
            <span>Design Debate</span>
          </div>
        </div>

        <div className="border-t border-border bg-background/50 backdrop-blur-sm">
          <div className="max-w-3xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-primary">3D</div>
              <div className="text-xs uppercase tracking-widest text-foreground/60 mt-1">Not a 1D Average</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-primary">Assumptions</div>
              <div className="text-xs uppercase tracking-widest text-foreground/60 mt-1">Drive the Result</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-primary">Sensitivity</div>
              <div className="text-xs uppercase tracking-widest text-foreground/60 mt-1">What Changes the Answer</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-primary">Reality</div>
              <div className="text-xs uppercase tracking-widest text-foreground/60 mt-1">Field vs. Model</div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <section className="mb-12">
          <div className="border border-border rounded-lg p-4 bg-card">
            <p className="text-sm text-foreground/70">
              This is Part 4 of the HVAC series, but it is less about equations and more about the uncomfortable truth behind simulation. {' '}
              <Link to="/blogs/hvac-systems" className="text-primary hover:text-primary/80 font-semibold">
                Start with Part 1 if you want the foundation first
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm font-bold uppercase tracking-widest text-primary">01 — Why This Topic Is Controversial</span>
            <div className="flex-1 h-px bg-border"></div>
          </div>

          <h2 className="text-3xl font-bold mb-6">CFD Is Useful, but It Is Also Easy to Abuse</h2>

          <p className="text-foreground/80 mb-4">
            In HVAC, CFD sits in a strange place. It is respected by engineers, expected by clients, and sometimes misunderstood by everyone involved. The software can reveal real flow problems, but it can also make a weak design look sophisticated.
          </p>

          <p className="text-foreground/80 mb-6">
            That tension is exactly why the topic is worth discussing. CFD is not a magic truth machine. It is a model of reality built on geometry, physics choices, boundary conditions, and engineering judgment.
          </p>

          <div className="border-l-4 border-primary bg-primary/5 rounded-r-lg p-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-2">The uncomfortable point</h3>
            <p className="text-foreground/80">
              A beautiful CFD plot can be more convincing than a bad HVAC design deserves. That is the risk. The visuals can win the argument before the physics has been properly checked.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm font-bold uppercase tracking-widest text-primary">02 — What CFD Actually Adds</span>
            <div className="flex-1 h-px bg-border"></div>
          </div>

          <h2 className="text-3xl font-bold mb-6">The Case for Using It at All</h2>

          <p className="text-foreground/80 mb-6">
            HVAC calculations tell you how much air and cooling you need on paper. CFD shows you what the air does after it leaves the diffuser, meets the room, collides with people, and reacts to geometry that never appears in a simple calculation sheet.
          </p>

          <div className="space-y-3 bg-card border border-border rounded-lg p-6 mb-6">
            {whereItHelps.map((item, idx) => (
              <div key={idx} className="flex gap-3">
                <span className="text-primary font-bold flex-shrink-0">✓</span>
                <p className="text-foreground/80 text-sm">{item}</p>
              </div>
            ))}
          </div>

          <p className="text-foreground/80">
            So the real value is not that CFD replaces HVAC engineering. The value is that it exposes where HVAC engineering becomes too simplified to trust.
          </p>
        </section>

        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm font-bold uppercase tracking-widest text-primary">03 — Where CFD Falls Apart</span>
            <div className="flex-1 h-px bg-border"></div>
          </div>

          <h2 className="text-3xl font-bold mb-6">The Hidden Cost of Simulation</h2>

          <p className="text-foreground/80 mb-6">
            The biggest problem with CFD is not that it is wrong. The biggest problem is that it can be wrong in a way that looks polished, technical, and hard to challenge.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {drawbacks.map((item, idx) => (
              <div key={idx} className="border border-border rounded-lg p-4 bg-card">
                <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                <p className="text-sm text-foreground/70">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="border-l-4 border-amber-500 bg-amber-500/5 rounded-r-lg p-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-amber-500 mb-2">The real drawback</h3>
            <p className="text-foreground/80">
              CFD can shift attention away from whether the HVAC concept is sensible in the first place. Sometimes the better move is not a more detailed simulation, but a better design question.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm font-bold uppercase tracking-widest text-primary">04 — The Model vs. The Building</span>
            <div className="flex-1 h-px bg-border"></div>
          </div>

          <h2 className="text-3xl font-bold mb-6">Why Simulated Air Is Not the Same as Real Air</h2>

          <div className="space-y-6">
            {mythVsReality.map((item, idx) => (
              <div key={idx} className="border border-border rounded-lg p-5 bg-card">
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-foreground/80">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 border-l-4 border-blue-500 bg-blue-500/5 rounded-r-lg p-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-blue-500 mb-2">The debate</h3>
            <p className="text-foreground/80">
              Supporters say CFD gives the designer a real view of flow behaviour. Skeptics say it often gives the client confidence without enough proof. The honest position is that both are true depending on how the model was built.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm font-bold uppercase tracking-widest text-primary">05 — Where CFD Becomes Worth It</span>
            <div className="flex-1 h-px bg-border"></div>
          </div>

          <h2 className="text-3xl font-bold mb-6">Use It When the Risk Is Bigger Than the Guess</h2>

          <div className="space-y-4 mb-6">
            {[
              {
                scenario: 'Complex spaces with strong geometry effects',
                why: 'A simple zoning approach cannot explain the real air paths.',
                impact: 'CFD helps you see whether the layout itself is the problem.'
              },
              {
                scenario: 'Comfort-sensitive interiors',
                why: 'People do not experience the average temperature; they experience the local draft, hot patch, or stale corner.',
                impact: 'CFD is useful when comfort complaints would be expensive or reputationally damaging.'
              },
              {
                scenario: 'Smoke, contamination, or pressure-sensitive spaces',
                why: 'In these cases, flow direction is not a detail. It is the entire design problem.',
                impact: 'Simulation helps expose failures before they become operational issues.'
              },
              {
                scenario: 'Retrofits and constrained sites',
                why: 'You do not get the freedom to redesign everything, so you need to know what the existing geometry is really doing.',
                impact: 'CFD can show the least bad intervention instead of the most elegant one.'
              }
            ].map((item, idx) => (
              <div key={idx} className="border border-border rounded-lg p-4 bg-card">
                <h4 className="font-bold text-foreground mb-2">{item.scenario}</h4>
                <p className="text-sm text-foreground/80 mb-2"><strong>Why:</strong> {item.why}</p>
                <p className="text-sm text-foreground/70"><strong>Impact:</strong> {item.impact}</p>
              </div>
            ))}
          </div>

          <div className="border-l-4 border-emerald-500 bg-emerald-500/5 rounded-r-lg p-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-emerald-500 mb-2">Good rule of thumb</h3>
            <p className="text-foreground/80">
              If a bad airflow decision would be hard to fix later, CFD is usually worth the effort. If the result will not change the design, the simulation is probably decorative.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm font-bold uppercase tracking-widest text-primary">06 — An Honest CFD Workflow</span>
            <div className="flex-1 h-px bg-border"></div>
          </div>

          <h2 className="text-3xl font-bold mb-6">How to Avoid Turning CFD Into a Fancy Screenshot</h2>

          <div className="space-y-4 mb-6">
            {honestWorkflow.map((item, idx) => (
              <div key={idx} className="flex gap-4 pb-4 border-b border-border last:border-b-0">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center flex-shrink-0">
                  {idx + 1}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{item.step}</h4>
                  <p className="text-sm text-foreground/70">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-l-4 border-primary bg-primary/5 rounded-r-lg p-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-2">What matters most</h3>
            <p className="text-foreground/80">
              The best CFD studies are not the most elaborate ones. They are the ones that force a clearer engineering decision and expose the weakest assumption in the HVAC concept.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm font-bold uppercase tracking-widest text-primary">07 — Final Position</span>
            <div className="flex-1 h-px bg-border"></div>
          </div>

          <h2 className="text-3xl font-bold mb-6">CFD Should Challenge HVAC, Not Decorate It</h2>

          <div className="space-y-3 bg-card border border-border rounded-lg p-6">
            {[
              'Use CFD to question an HVAC concept, not to excuse a weak one.',
              'Treat every result as conditional on the assumptions behind it.',
              'Do not confuse solver convergence with design truth.',
              'Use the model to compare options, uncover weak zones, and reduce risk.',
              'If the simulation cannot change a decision, it is probably just presentation.'
            ].map((item, idx) => (
              <div key={idx} className="flex gap-3">
                <span className="text-primary font-bold flex-shrink-0">✓</span>
                <p className="text-foreground/80 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 pt-8 border-t border-border">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm font-bold uppercase tracking-widest text-primary">Closing Thought</span>
            <div className="flex-1 h-px bg-border"></div>
          </div>

          <h2 className="text-3xl font-bold mb-6">The Useful, Uncomfortable Middle Ground</h2>

          <p className="text-foreground/80 mb-4">
            CFD and HVAC are not rivals. CFD is what happens when the HVAC question is too spatial, too local, or too politically sensitive to trust a simple average.
          </p>

          <p className="text-foreground/80 mb-6">
            But CFD is also not an excuse to stop thinking. The simulation is only valuable when it makes the HVAC decision clearer, sharper, and more defensible.
          </p>

          <p className="font-semibold text-foreground text-lg">
            The best CFD work does not say, "Look how realistic this plot is." It says, "Here is why the HVAC design should change."
          </p>
        </section>

        <BlogRelatedPosts
          title="Other Blogs in the HVAC Series"
          posts={[
            {
              link: '/blogs/hvac-systems',
              part: 'Part 1',
              banner: 'HVAC Fundamentals',
              title: 'HVAC Systems in Large Buildings',
              subtitle: 'Conceptual foundation and system overview',
              gradient: 'bg-gradient-to-r from-indigo-500/30 via-blue-500/20 to-transparent'
            },
            {
              link: '/blogs/hvac-load-calculations',
              part: 'Part 2',
              banner: 'Load Calculation Walkthrough',
              title: 'HVAC Load Calculation Deep Dive',
              subtitle: 'Worked equations and sizing examples',
              gradient: 'bg-gradient-to-r from-sky-500/30 via-cyan-500/20 to-transparent'
            },
            {
              link: '/blogs/hvac-citation-calculations',
              part: 'Part 3',
              banner: 'Calculation Proof and References',
              title: 'HVAC Calculations With Proof and References',
              subtitle: 'Research-backed defaults with auditable checks',
              gradient: 'bg-gradient-to-r from-emerald-500/30 via-teal-500/20 to-transparent'
            }
          ]}
        />
      </main>

      <footer className="mt-20 border-t border-border bg-card/30 backdrop-blur-sm py-8">
        <div className="max-w-3xl mx-auto px-6 text-center text-sm text-foreground/60">
          <p className="mb-2">MEP Engineering Training Series · CFD and HVAC Design</p>
          <p className="text-xs">Educational content. CFD should be used critically, with proper assumptions, verification, and engineering judgment.</p>
        </div>
      </footer>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-primary text-primary-foreground shadow-lg hover:opacity-90 transition-opacity"
          aria-label="Scroll to top"
          title="Scroll to top"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default HVACCFDRoleBlog;
