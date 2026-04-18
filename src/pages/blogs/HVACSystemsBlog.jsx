import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const HVACSystemsBlog = () => {
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

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Back Button */}
      <div className="max-w-3xl mx-auto px-6 py-6">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
        >
          ← Back
        </button>
      </div>

      {/* HERO */}
      <header className="relative border-b border-border bg-card/30 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            MEP Engineering · HVAC
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            HVAC Systems in Large Buildings: <span className="text-primary">How They Work</span> and Why They Matter
          </h1>

          <p className="text-lg text-foreground/70 mb-6 max-w-2xl">
            A practical guide to heating, ventilation, and air conditioning systems, including how they keep complex venues like Camp Nou comfortable, safe, and energy-efficient.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-foreground/60">
            <span>Limak Construction</span>
            <span className="opacity-50">◆</span>
            <span>Building Services Engineering</span>
            <span className="opacity-50">◆</span>
            <span>MEP Engineering Training Series</span>
          </div>
        </div>

        <div className="border-t border-border bg-background/50 backdrop-blur-sm">
          <div className="max-w-3xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-primary">24/7</div>
              <div className="text-xs uppercase tracking-widest text-foreground/60 mt-1">Continuous Operation</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-primary">3 Goals</div>
              <div className="text-xs uppercase tracking-widest text-foreground/60 mt-1">Comfort, IAQ, Efficiency</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-primary">100k+</div>
              <div className="text-xs uppercase tracking-widest text-foreground/60 mt-1">Peak Occupants (Stadiums)</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-primary">1 System</div>
              <div className="text-xs uppercase tracking-widest text-foreground/60 mt-1">Many Interconnected Parts</div>
            </div>
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <main className="max-w-3xl mx-auto px-6 py-12">
        {/* INTRO */}
        <section className="mb-16">
          <p className="text-lg font-semibold text-foreground mb-4 pb-4 border-l-4 border-primary pl-4">
            HVAC is not just about cooling a room. In modern buildings, it is the system that shapes comfort, air quality, and operational reliability every minute of the day.
          </p>
          <p className="text-foreground/80 mb-4">
            Whether it is an office tower, hospital, airport, or stadium, HVAC systems are designed to manage temperature, humidity, fresh air, and indoor pollutants across multiple zones with very different demands.
          </p>
          <p className="text-foreground/80">
            This article explains how HVAC works in plain language, where it is used, why it is necessary, and what changes when you scale it up for large venues like Camp Nou.
          </p>

          <div className="mt-6 border border-border rounded-lg p-5 bg-card">
            <h4 className="font-semibold text-foreground mb-2">Want to go deeper with real calculations?</h4>
            <p className="text-sm text-foreground/70 mb-3">
              This is Part 1 (fundamentals). Continue to Part 2 for a worked HVAC load example with editable inputs and live calculated results.
            </p>
            <Link
              to="/blogs/hvac-load-calculations"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold text-sm"
            >
              Open Part 2: HVAC Load Calculation Deep Dive →
            </Link>
          </div>
        </section>

        {/* SECTION 1 */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm font-bold uppercase tracking-widest text-primary">01 — HVAC Fundamentals</span>
            <div className="flex-1 h-px bg-border"></div>
          </div>

          <h2 className="text-3xl font-bold mb-6">What Is an HVAC System?</h2>

          <p className="text-foreground/80 mb-6">
            HVAC stands for <strong>Heating, Ventilation, and Air Conditioning</strong>. Together, these three functions maintain indoor conditions so people can work, rest, and move through spaces safely and comfortably.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {[
              {
                title: 'Heating',
                desc: 'Raises indoor temperature during cold conditions using boilers, heat pumps, hot water coils, or electric systems.'
              },
              {
                title: 'Ventilation',
                desc: 'Brings in outdoor air and removes stale indoor air to control CO2, odors, and airborne contaminants.'
              },
              {
                title: 'Air Conditioning',
                desc: 'Cools and dehumidifies air so indoor temperature and moisture stay in a healthy, usable range.'
              }
            ].map((item, idx) => (
              <div key={idx} className="border border-border rounded-lg p-4 bg-card">
                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-sm text-foreground/70">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="border-l-4 border-primary bg-primary/5 rounded-r-lg p-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-2">Key idea</h3>
            <p className="text-foreground/80">
              A good HVAC design balances comfort and health first, then delivers it with the lowest practical energy use.
            </p>
          </div>
        </section>

        {/* SECTION 2 */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm font-bold uppercase tracking-widest text-primary">02 — How HVAC Is Used</span>
            <div className="flex-1 h-px bg-border"></div>
          </div>

          <h2 className="text-3xl font-bold mb-6">Where and How HVAC Is Applied in Real Buildings</h2>

          <p className="text-foreground/80 mb-6">
            HVAC applications change by building function. A data center prioritizes equipment cooling and redundancy. A hospital focuses on filtration and pressure relationships. A shopping mall handles high occupancy swings and large open zones.
          </p>

          <div className="space-y-4 mb-6">
            {[
              { area: 'Offices', use: 'Zoned comfort control for varying occupancy across meeting rooms, open-plan floors, and service spaces.' },
              { area: 'Hospitals', use: 'Strict ventilation, filtration, and pressure control to protect patients and clinical workflows.' },
              { area: 'Airports', use: 'Large-volume air distribution with demand control and strong operational resilience.' },
              { area: 'Hotels', use: 'Room-by-room comfort with centralized plant efficiency and guest-area air quality control.' },
              { area: 'Stadiums', use: 'Complex zoning across bowl seating, VIP lounges, media rooms, retail, and back-of-house zones.' }
            ].map((row, idx) => (
              <div key={idx} className="flex gap-4 pb-4 border-b border-border last:border-b-0">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center flex-shrink-0">
                  {idx + 1}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{row.area}</h4>
                  <p className="text-sm text-foreground/70">{row.use}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3 */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm font-bold uppercase tracking-widest text-primary">03 — Why HVAC Is Necessary</span>
            <div className="flex-1 h-px bg-border"></div>
          </div>

          <h2 className="text-3xl font-bold mb-6">Why Buildings Cannot Operate Reliably Without HVAC</h2>

          <p className="text-foreground/80 mb-4">
            Without HVAC, indoor spaces become uncomfortable, unhealthy, and inefficient. Occupants feel tired faster, equipment runs hotter, and indoor air quality declines.
          </p>

          <div className="bg-card border border-border rounded-lg p-6 mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: 'Thermal Comfort', desc: 'People perform better when temperature and humidity remain in stable comfort bands.' },
              { title: 'Indoor Air Quality', desc: 'Ventilation and filtration reduce CO2 buildup, odors, and particulate concentration.' },
              { title: 'Moisture Control', desc: 'Humidity management prevents condensation, mold risk, and material damage.' },
              { title: 'Asset Protection', desc: 'Proper conditioning protects IT rooms, electrical rooms, and sensitive equipment.' }
            ].map((item, idx) => (
              <div key={idx}>
                <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                <p className="text-sm text-foreground/70">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="border-l-4 border-amber-500 bg-amber-500/5 rounded-r-lg p-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-amber-500 mb-2">Important distinction</h3>
            <p className="text-foreground/80">
              HVAC is a comfort and IAQ system during normal operation. Smoke control is a dedicated life-safety system during fire events. Both are coordinated, but they are not the same function.
            </p>
          </div>
        </section>

        {/* PULL QUOTE */}
        <div className="border-y border-border py-8 my-12 text-center">
          <blockquote className="text-xl md:text-2xl font-semibold italic text-foreground mb-4">
            "In large buildings, HVAC is the invisible infrastructure that protects both human comfort and operational continuity."
          </blockquote>
          <cite className="text-xs uppercase tracking-widest text-foreground/60">MEP Engineering Training Series</cite>
        </div>

        {/* SECTION 4 */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm font-bold uppercase tracking-widest text-primary">04 — Camp Nou as a Big-Building Example</span>
            <div className="flex-1 h-px bg-border"></div>
          </div>

          <h2 className="text-3xl font-bold mb-6">How HVAC Principles Scale for Stadium Environments</h2>

          <p className="text-foreground/80 mb-6">
            A venue like Camp Nou illustrates why large-building HVAC design is different from a conventional office. Occupancy can shift dramatically before, during, and after events, and every zone has a different thermal profile.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {[
              {
                title: 'Large Occupancy Swings',
                points: ['Rapid people influx', 'Sharp CO2 rise in enclosed zones', 'Ventilation rates must respond in real time']
              },
              {
                title: 'Multiple Zone Types',
                points: ['Hospitality and VIP lounges', 'Media and broadcast rooms', 'Locker rooms and service corridors']
              },
              {
                title: 'Event-Day Operations',
                points: ['Pre-cooling and pre-ventilation windows', 'Demand-based setpoint strategies', 'Post-event purge and reset cycles']
              },
              {
                title: 'System Coordination',
                points: ['BMS-driven scheduling', 'Sensor-based control loops', 'Integration with power and life-safety logic']
              }
            ].map((card, idx) => (
              <div key={idx} className="border border-border rounded-lg p-4 bg-card">
                <h4 className="font-bold text-lg mb-3">{card.title}</h4>
                <ul className="space-y-2">
                  {card.points.map((point, i) => (
                    <li key={i} className="text-sm text-foreground/80 flex gap-2">
                      <span className="text-primary flex-shrink-0">→</span> {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-foreground/80">
            The engineering challenge is not only capacity. It is the ability to move between operating modes smoothly while maintaining comfort, air quality, and energy control.
          </p>
        </section>

        {/* SECTION 5 */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm font-bold uppercase tracking-widest text-primary">05 — Design and Operations</span>
            <div className="flex-1 h-px bg-border"></div>
          </div>

          <h2 className="text-3xl font-bold mb-6">What Makes Large-Building HVAC Design Difficult</h2>

          <div className="space-y-4 mb-6">
            {[
              {
                title: 'Load Diversity',
                desc: 'Different areas peak at different times, so central plant and distribution systems must be flexible instead of oversized everywhere.'
              },
              {
                title: 'Zoning Strategy',
                desc: 'You cannot run one setpoint for every zone. High-density spaces and low-density spaces need separate control sequences.'
              },
              {
                title: 'Controls and Monitoring',
                desc: 'A strong Building Management System (BMS) is essential for scheduling, alarms, trend analysis, and optimization.'
              },
              {
                title: 'Maintainability',
                desc: 'Filter access, fan service clearance, and predictable maintenance windows are critical to long-term reliability.'
              },
              {
                title: 'Redundancy',
                desc: 'Critical zones often need backup equipment so partial failures do not become operational shutdowns.'
              }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 pb-4 border-b border-border last:border-b-0">
                <div className="text-primary font-bold text-lg flex-shrink-0">•</div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                  <p className="text-sm text-foreground/70">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-l-4 border-primary bg-primary/5 rounded-r-lg p-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-2">Practical takeaway</h3>
            <p className="text-foreground/80">
              Successful HVAC projects are won in controls strategy and commissioning, not only in equipment selection.
            </p>
          </div>
        </section>

        {/* SECTION 6 */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm font-bold uppercase tracking-widest text-primary">06 — Energy and Sustainability</span>
            <div className="flex-1 h-px bg-border"></div>
          </div>

          <h2 className="text-3xl font-bold mb-6">How Modern HVAC Reduces Energy Demand</h2>

          <p className="text-foreground/80 mb-6">
            HVAC is typically one of the largest building energy consumers. Better design and controls can significantly reduce operating cost and carbon impact.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {[
              { title: 'Demand-Controlled Ventilation', desc: 'Adjust outdoor air based on occupancy and measured CO2 instead of fixed high rates.' },
              { title: 'Heat Recovery', desc: 'Transfer heat between exhaust and incoming air to reduce heating and cooling loads.' },
              { title: 'Variable Speed Drives', desc: 'Match fan and pump speed to actual demand rather than always running at full output.' },
              { title: 'Optimized Scheduling', desc: 'Use event schedules and weather forecasting to pre-condition spaces efficiently.' }
            ].map((item, idx) => (
              <div key={idx} className="border border-border rounded-lg p-4 bg-card">
                <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                <p className="text-sm text-foreground/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 7 */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm font-bold uppercase tracking-widest text-primary">07 — Spanish Regulations and Standards</span>
            <div className="flex-1 h-px bg-border"></div>
          </div>

          <h2 className="text-3xl font-bold mb-6">What Rules HVAC Projects in Spain Need to Follow?</h2>

          <p className="text-foreground/80 mb-6">
            In Spain, HVAC compliance is not based on one single document. Design teams typically coordinate national building code requirements, thermal installation regulation, and referenced technical standards for comfort, ventilation, and energy performance.
          </p>

          <div className="space-y-4 mb-6">
            {[
              {
                code: 'CTE (Código Técnico de la Edificación)',
                details: 'Core building code framework. HVAC-related design decisions often connect with DB-HE (energy performance) and DB-HS (health/hygiene requirements).',
                linkLabel: 'Official CTE portal',
                link: 'https://www.codigotecnico.org/'
              },
              {
                code: 'RITE (Real Decreto 1027/2007)',
                details: 'Primary regulation for thermal installations in buildings, covering design, execution, maintenance, inspections, and energy efficiency obligations.',
                linkLabel: 'BOE publication (RITE)',
                link: 'https://www.boe.es/buscar/act.php?id=BOE-A-2007-15820'
              },
              {
                code: 'RSIF (Real Decreto 552/2019)',
                details: 'Applies when the project includes refrigeration installations, safety requirements, and operating controls for refrigeration systems.',
                linkLabel: 'BOE publication (RSIF)',
                link: 'https://www.boe.es/buscar/act.php?id=BOE-A-2019-9730'
              },
              {
                code: 'Fluorinated gases (Real Decreto 115/2017)',
                details: 'Sets obligations for handling fluorinated refrigerants, leak controls, certification, and environmental responsibilities.',
                linkLabel: 'BOE publication (F-gases)',
                link: 'https://www.boe.es/buscar/act.php?id=BOE-A-2017-1679'
              }
            ].map((item, idx) => (
              <div key={idx} className="border border-border rounded-lg p-4 bg-card">
                <h4 className="font-bold text-foreground mb-2">{item.code}</h4>
                <p className="text-sm text-foreground/70 mb-2">{item.details}</p>
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:text-primary/80">
                  {item.linkLabel}
                </a>
              </div>
            ))}
          </div>

          <div className="border-l-4 border-primary bg-primary/5 rounded-r-lg p-4 mb-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-2">Frequently referenced standards in HVAC practice</h3>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li>
                <strong>UNE-EN 16798 series:</strong> Energy performance of buildings, ventilation design inputs, and indoor environmental criteria.
              </li>
              <li>
                <strong>UNE-EN ISO 7730:</strong> Ergonomics of thermal environments and thermal comfort assessment (PMV/PPD methods).
              </li>
              <li>
                <strong>UNE-EN 378 series:</strong> Safety and environmental requirements for refrigeration systems and heat pumps.
              </li>
            </ul>
          </div>

          <p className="text-sm text-foreground/60">
            Note: Final compliance always depends on project type, occupancy, local authority requirements, and the current legally consolidated version of each regulation.
          </p>
        </section>

        {/* REFERENCES */}
        <section className="mt-16 pt-8 border-t border-border">
          <h3 className="text-2xl font-bold mb-6">References</h3>

          <div className="space-y-4 text-sm">
            <div className="border-l-4 border-primary bg-primary/5 p-4 rounded-r-lg">
              <h4 className="font-bold text-foreground mb-2">Spanish regulatory sources</h4>
              <p className="text-foreground/80 mb-1">
                CTE official portal: <a href="https://www.codigotecnico.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">codigotecnico.org</a>
              </p>
              <p className="text-foreground/80 mb-1">
                RITE (Real Decreto 1027/2007): <a href="https://www.boe.es/buscar/act.php?id=BOE-A-2007-15820" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">boe.es/buscar/act.php?id=BOE-A-2007-15820</a>
              </p>
              <p className="text-foreground/80 mb-1">
                RSIF (Real Decreto 552/2019): <a href="https://www.boe.es/buscar/act.php?id=BOE-A-2019-9730" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">boe.es/buscar/act.php?id=BOE-A-2019-9730</a>
              </p>
              <p className="text-foreground/80">
                Fluorinated gases (Real Decreto 115/2017): <a href="https://www.boe.es/buscar/act.php?id=BOE-A-2017-1679" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">boe.es/buscar/act.php?id=BOE-A-2017-1679</a>
              </p>
            </div>

            <div className="border-l-4 border-blue-500 bg-blue-500/5 p-4 rounded-r-lg">
              <h4 className="font-bold text-foreground mb-2">Standards organizations</h4>
              <p className="text-foreground/80 mb-1">
                UNE (Asociación Española de Normalización): <a href="https://www.une.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">une.org</a>
              </p>
              <p className="text-foreground/80">
                ISO standard catalog: <a href="https://www.iso.org/standards.html" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">iso.org/standards.html</a>
              </p>
            </div>
          </div>
        </section>

        {/* TAKEAWAYS */}
        <section className="mt-16 pt-8 border-t border-border">
          <div className="border border-border rounded-lg p-5 bg-card mb-8">
            <h4 className="font-semibold text-foreground mb-2">Continue to the deep-calculation article</h4>
            <p className="text-sm text-foreground/70 mb-3">
              Ready for numbers? The next post walks through a full HVAC load estimate including sensible and latent loads, airflow sizing, and fan power checks.
            </p>
            <Link
              to="/blogs/hvac-load-calculations"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold text-sm"
            >
              Open HVAC Load Calculation Deep Dive →
            </Link>
          </div>

          <h3 className="text-2xl font-bold mb-6">Key Takeaways</h3>

          <div className="space-y-3 bg-card border border-border rounded-lg p-6">
            {[
              'HVAC combines heating, ventilation, and cooling into one integrated building service.',
              'Its role goes beyond comfort: it directly supports indoor air quality, health, and reliability.',
              'Large venues like Camp Nou require strong zoning and dynamic controls because occupancy changes rapidly.',
              'Design quality depends on coordination between architecture, MEP disciplines, controls, and operations.',
              'Sustainable HVAC is driven by smart control strategies, not only by high-efficiency equipment.'
            ].map((item, idx) => (
              <div key={idx} className="flex gap-3">
                <span className="text-primary font-bold flex-shrink-0">✓</span>
                <p className="text-foreground/80 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FINAL THOUGHT */}
        <section className="mt-16 pt-8 border-t border-border">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm font-bold uppercase tracking-widest text-primary">Final Thought</span>
            <div className="flex-1 h-px bg-border"></div>
          </div>

          <h2 className="text-3xl font-bold mb-6">The System You Feel but Rarely See</h2>

          <p className="text-foreground/80 mb-4">
            Most visitors never notice an HVAC system unless it fails. Yet in high-density buildings, it is one of the most important systems for comfort, safety, and performance.
          </p>

          <p className="text-foreground/80 mb-6">
            For engineers, the goal is simple to say but hard to deliver: keep conditions stable for people, protect operations, and do it efficiently at scale.
          </p>

          <p className="font-semibold text-foreground text-lg">That is the value of good HVAC engineering.</p>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-border bg-card/30 backdrop-blur-sm py-8">
        <div className="max-w-3xl mx-auto px-6 text-center text-sm text-foreground/60">
          <p className="mb-2">MEP Engineering Training Series · HVAC Systems in Large Buildings</p>
          <p className="text-xs">This post provides conceptual engineering guidance for educational purposes.</p>
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

export default HVACSystemsBlog;