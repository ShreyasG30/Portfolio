import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SmokeControl = () => {
  const navigate = useNavigate();

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

  useEffect(() => {
    window.scrollTo(0, 0);
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
            MEP Engineering · Fire Safety
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            How Do You Stop Smoke in a <span className="text-primary">105,000-Seat</span> Stadium?
          </h1>

          <p className="text-lg text-foreground/70 mb-6 max-w-2xl">
            A plain-language guide to smoke control engineering — told through the real systems being installed at the Spotify Camp Nou renovation in Barcelona.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-foreground/60">
            <span>Limak Construction</span>
            <span className="opacity-50">◆</span>
            <span>Spotify Camp Nou Renovation</span>
            <span className="opacity-50">◆</span>
            <span>MEP Engineering Training Series</span>
          </div>
        </div>

        <div className="border-t border-border bg-background/50 backdrop-blur-sm">
          <div className="max-w-3xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-primary">105,000</div>
              <div className="text-xs uppercase tracking-widest text-foreground/60 mt-1">Stadium Capacity</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-primary">400°C</div>
              <div className="text-xs uppercase tracking-widest text-foreground/60 mt-1">Fan Operating Temp</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-primary">120 min</div>
              <div className="text-xs uppercase tracking-widest text-foreground/60 mt-1">System Endurance</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-primary">5</div>
              <div className="text-xs uppercase tracking-widest text-foreground/60 mt-1">Smoke Systems</div>
            </div>
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <main className="max-w-3xl mx-auto px-6 py-12">

        {/* DISCLAIMER */}
        <div className="bg-blue-500/5 border border-blue-500/20 rounded-lg p-4 mb-8 text-sm text-foreground/70">
          <strong>Note:</strong> This article is based on official Spanish fire safety regulations and European technical standards. All regulations cited are official standards as published by their respective governing bodies.
        </div>

        {/* INTRO */}
        <section className="mb-16">
          <p className="text-lg font-semibold text-foreground mb-4 pb-4 border-l-4 border-primary pl-4">
            You're at Camp Nou. 100,000 people around you. Suddenly, smoke starts rising from the parking garage below. What happens next — and who planned for it?
          </p>
          <p className="text-foreground/80 mb-4">
            Smoke control is one of those invisible engineering systems that nobody thinks about until the moment it matters most. In this post, we'll break down exactly what it is, how it works, and how it's being designed for one of the most complex renovation projects in the world — <strong>the Spotify Camp Nou</strong> in Barcelona.
          </p>
          <p className="text-foreground/80">
            No prior engineering knowledge needed. If you can understand a kitchen exhaust fan, you can understand this.
          </p>
        </section>

        {/* SECTION 1: BASICS */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm font-bold uppercase tracking-widest text-primary">01 — The Basics</span>
            <div className="flex-1 h-px bg-border"></div>
          </div>

          <h2 className="text-3xl font-bold mb-6">What Is Smoke Control, and Why Does It Matter?</h2>

          <p className="text-foreground/80 mb-6">
            In a fire, <strong>smoke kills more people than flames do.</strong> It's disorienting, toxic, and travels fast. A smoke control system is the engineered response — a carefully designed network of fans, ducts, vents, and sensors that manages where smoke goes, keeping escape routes clear and buying time for evacuation.
          </p>

          <div className="border-l-4 border-primary bg-primary/5 rounded-r-lg p-4 mb-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-2">💡 Think of it like this</h3>
            <p className="text-foreground/80">
              Imagine you're cooking and your kitchen fills with smoke. You open a window, and the smoke drifts out. Now scale that up to a 500,000 m² stadium — and make it happen automatically, in under 60 seconds, at temperatures that would melt plastic. That's smoke control engineering.
            </p>
          </div>

          <p className="text-foreground/80 mb-4">The primary goals of any smoke control system are:</p>

          <div className="space-y-4 mb-6">
            {[
              { num: 1, title: "Safe Evacuation", desc: "Keep corridors and staircases smoke-free long enough for everyone to escape." },
              { num: 2, title: "Firefighter Access", desc: "Firefighters need to be able to enter the building and see what they're doing." },
              { num: 3, title: "Contain the Smoke", desc: "Prevent smoke from spreading from the fire zone into safe zones." },
              { num: 4, title: "Structural Protection", desc: "Hot gases damage steel beams. Removing them faster protects the building's structure." },
              { num: 5, title: "Automated Coordination", desc: "Everything triggers automatically when the fire alarm goes off — no human needs to flip switches." },
            ].map((step) => (
              <div key={step.num} className="flex gap-4 pb-4 border-b border-border last:border-b-0">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center flex-shrink-0">
                  {step.num}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{step.title}</h4>
                  <p className="text-sm text-foreground/70">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2: TWO APPROACHES */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm font-bold uppercase tracking-widest text-primary">02 — The Two Approaches</span>
            <div className="flex-1 h-px bg-border"></div>
          </div>

          <h2 className="text-3xl font-bold mb-6">Natural vs. Mechanical: Two Ways to Move Smoke</h2>

          <p className="text-foreground/80 mb-6">
            Engineers have two main tools in their toolkit: let physics do the work (natural), or use powered equipment (mechanical). Governed by <strong>UNE 23585</strong> for natural systems and <strong>UNE-EN 12101 series</strong> for mechanical systems.
          </p>

          <div className="border border-border rounded-lg overflow-hidden mb-6">
            <div className="grid grid-cols-3 gap-0 bg-card border-b border-border">
              {["Approach", "How It Works", "Best Used For"].map((h) => (
                <div key={h} className="px-4 py-3 font-semibold text-sm uppercase text-foreground/70 border-r border-border last:border-r-0">
                  {h}
                </div>
              ))}
            </div>
            {[
              { a: "Natural Ventilation", w: "Hot smoke rises. Vents at the top open automatically.", u: "Open spaces, atria, surface areas" },
              { a: "Mechanical Extraction", w: "Powered fans forcibly pull smoke through ducts.", u: "Underground parking, enclosed spaces" }
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-3 gap-0 border-b border-border last:border-b-0">
                <div className="px-4 py-3 border-r border-border text-foreground/80 text-sm font-medium">{row.a}</div>
                <div className="px-4 py-3 border-r border-border text-foreground/70 text-sm">{row.w}</div>
                <div className="px-4 py-3 text-foreground/70 text-sm">{row.u}</div>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-bold mb-3">Natural Smoke Exhaust in Practice</h3>
          <p className="text-foreground/80 mb-6">
            Designed per <strong>UNE 23585:2004</strong>, these systems use intake openings at the bottom and exhaust vents at the top. Smoke curtains divide spaces into smaller reservoirs to prevent sideways smoke spread.
          </p>

          <div className="border-l-4 border-primary bg-primary/5 rounded-r-lg p-4 mb-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-2">💡 Analogy</h3>
            <p className="text-foreground/80">
              Smoke curtains are like dividers in an ice cube tray — keeping each compartment separate so smoke doesn't flood the entire space.
            </p>
          </div>

          <h3 className="text-2xl font-bold mb-3">Mechanical Extraction in Practice</h3>
          <p className="text-foreground/80">
            For underground spaces, natural ventilation isn't enough. Powered fans governed by <strong>UNE-EN 12101-3</strong> actively push and pull air through duct networks.
          </p>
        </section>

        {/* SECTION 3: FANS */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm font-bold uppercase tracking-widest text-primary">03 — The Equipment</span>
            <div className="flex-1 h-px bg-border"></div>
          </div>

          <h2 className="text-3xl font-bold mb-6">The Fans: Your Building's Fire-Ready Lungs</h2>

          <p className="text-foreground/80 mb-6">
            Smoke control fans are purpose-built to survive extreme conditions per <strong>UNE-EN 12101-3</strong>.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {[
              { title: "Axial Fan", points: ["Straight-through airflow", "High airflow, low pressure", "For large volume spaces", "Parking garages, open areas"] },
              { title: "Centrifugal Fan", points: ["Radial exit airflow", "High pressure, moderate airflow", "For long duct networks", "Complex geometries"] }
            ].map((fan, idx) => (
              <div key={idx} className="border border-border rounded-lg p-4 bg-card">
                <h4 className="font-bold text-lg mb-3">{fan.title}</h4>
                <ul className="space-y-2">
                  {fan.points.map((p, i) => (
                    <li key={i} className="text-sm text-foreground/80 flex gap-2">
                      <span className="text-primary flex-shrink-0">→</span> {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-foreground/80 mb-6">
            All smoke control fans must be certified <strong>F400 120</strong> per <strong>UNE-EN 12101-3</strong> — capable of operating at 400°C for 120 minutes.
          </p>

          <div className="bg-card border border-border rounded-lg p-6 mb-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { val: "400°C", label: "Operating Temp" },
              { val: "120 min", label: "Endurance" },
              { val: "AS+", label: "Cable Standard" },
              { val: "90 min", label: "Circuit Integrity" }
            ].map((s, i) => (
              <div key={i}>
                <div className="text-3xl font-bold text-primary">{s.val}</div>
                <div className="text-xs uppercase tracking-widest text-foreground/60 mt-2">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="border-l-4 border-red-500 bg-red-500/5 rounded-r-lg p-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-red-500 mb-2">⚠️ Critical Rule</h3>
            <p className="text-foreground/80">
              When fire alarm triggers, all regular HVAC systems shut off immediately per <strong>CTE DB SI</strong>. Smoke control takes over completely.
            </p>
          </div>
        </section>

        {/* SECTION 4: REGULATION */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm font-bold uppercase tracking-widest text-primary">04 — The Rules</span>
            <div className="flex-1 h-px bg-border"></div>
          </div>

          <h2 className="text-3xl font-bold mb-6">Spanish Regulation: What the Law Requires</h2>

          <p className="text-foreground/80 mb-6">
            Smoke control is mandated by layered regulations. All standards cited are official as of March 2026.
          </p>

          <div className="flex flex-wrap gap-3 mb-6">
            {[
              { code: "CTE DB SI", desc: "Building Code — Fire Safety (Real Decreto 314/2006)" },
              { code: "RIPCI", desc: "Fire Protection Installation Regulation" },
              { code: "UNE 23585", desc: "Natural smoke exhaust standard" },
              { code: "UNE-EN 12101-3", desc: "Powered smoke/heat fans" },
              { code: "UNE-EN 12101-6", desc: "Staircase pressurization systems" },
              { code: "UNE-EN 12101-7", desc: "Fire-rated ductwork specs" },
              { code: "OMCP/08", desc: "Barcelona local fire ordinance" }
            ].map((r, i) => (
              <div key={i} className="bg-card border border-border rounded-lg px-4 py-3 text-sm">
                <div className="font-semibold text-foreground">{r.code}</div>
                <div className="text-foreground/60 text-xs">{r.desc}</div>
              </div>
            ))}
          </div>

          <p className="text-foreground/80 mb-6">
            The <strong>CTE DB SI</strong> (published under Real Decreto 314/2006, updated by Real Decreto 732/2019) is Spain's national fire safety code. All other standards plug into it. See <a href="https://www.codigotecnico.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">codigotecnico.org</a>.
          </p>

          <div className="border-l-4 border-primary bg-primary/5 rounded-r-lg p-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-2">🏗️ Barcelona's Local Requirements</h3>
            <p className="text-foreground/80">
              Camp Nou falls under <strong>OMCP/08</strong> — Barcelona's fire protection ordinance. Design teams must satisfy both national code AND local requirements simultaneously.
            </p>
          </div>
        </section>

        {/* PULL QUOTE */}
        <div className="border-y border-border py-8 my-12 text-center">
          <blockquote className="text-xl md:text-2xl font-semibold italic text-foreground mb-4">
            "Smoke control isn't just about moving air — it's about buying time."
          </blockquote>
          <cite className="text-xs uppercase tracking-widest text-foreground/60">MEP Engineering Training — Spotify Camp Nou Project</cite>
        </div>

        {/* SECTION 5: PARKING */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm font-bold uppercase tracking-widest text-primary">05 — The Parking Garage</span>
            <div className="flex-1 h-px bg-border"></div>
          </div>

          <h2 className="text-3xl font-bold mb-6">Parking Smoke Control: The Underground Challenge</h2>

          <p className="text-foreground/80 mb-6">
            Underground parking uses dual-speed mechanical systems. Slow speed removes CO during normal operation; full speed activates on fire alarm per <strong>CTE DB SI</strong> requirements.
          </p>

          <h3 className="text-2xl font-bold mb-6">Fire Activation Sequence</h3>

          <div className="space-y-4">
            {[
              { num: 1, title: "Fire Alarm Triggers", desc: "Fire detectors send signal to Fire Alarm Control Panel." },
              { num: 2, title: "Normal HVAC Stops", desc: "All comfort ventilation shuts off instantly." },
              { num: 3, title: "Fans Ramp to Full Speed", desc: "Dual-speed fans switch to maximum for smoke extraction." },
              { num: 4, title: "Make-up Air Enters", desc: "Fresh air pushed in to maintain extraction pressure." },
              { num: 5, title: "Firefighter Override", desc: "Remote controls let firefighters adjust extraction zones." }
            ].map((s) => (
              <div key={s.num} className="flex gap-4 pb-4 border-b border-border last:border-b-0">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center flex-shrink-0">
                  {s.num}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{s.title}</h4>
                  <p className="text-sm text-foreground/70">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 6: VIP */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm font-bold uppercase tracking-widest text-primary">06 — VIP Areas</span>
            <div className="flex-1 h-px bg-border"></div>
          </div>

          <h2 className="text-3xl font-bold mb-6">VIP & Public Areas: Three Different Solutions</h2>

          <p className="text-foreground/80 mb-6">
            Each area requires different strategies per <strong>CTE DB SI</strong>.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {[
              { icon: "🏛️", title: "Museum", desc: "Reversible fans controlled by firefighters based on fire location." },
              { icon: "🥂", title: "VIP Levels", desc: "Facade-mounted fans + automatic terrace doors + wall dampers." },
              { icon: "🏟️", title: "High Occupancy", desc: "Atrium-based systems with smoke rising to high-volume reservoirs." }
            ].map((a, i) => (
              <div key={i} className="border border-border rounded-lg p-4 bg-card">
                <div className="text-3xl mb-2">{a.icon}</div>
                <h4 className="font-bold text-lg mb-2">{a.title}</h4>
                <p className="text-sm text-foreground/70">{a.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-foreground/80">
            <strong>Key principle:</strong> Every exhaust point needs a corresponding intake. Without makeup air, extraction slows dramatically.
          </p>
        </section>

        {/* SECTION 7: STAIRCASES */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm font-bold uppercase tracking-widest text-primary">07 — Staircases</span>
            <div className="flex-1 h-px bg-border"></div>
          </div>

          <h2 className="text-3xl font-bold mb-6">Stair Pressurization: Your Escape Route Shield</h2>

          <p className="text-foreground/80 mb-6">
            Stair pressurization per <strong>UNE-EN 12101-6</strong> pumps clean air into stairwells at higher pressure than surrounding floors, creating a protective barrier.
          </p>

          <div className="border-l-4 border-primary bg-primary/5 rounded-r-lg p-4 mb-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-2">💡 The Physics</h3>
            <p className="text-foreground/80">
              Air flows from high to low pressure. If the staircase is pressurized above the burning floor, air flows OUT of the staircase, preventing smoke entry.
            </p>
          </div>

          <p className="text-foreground/80 mb-6">Two complementary strategies:</p>

          <div className="space-y-4 mb-6">
            {[
              { arrow: "→", title: "Pressurization (Stair)", desc: "Fresh air pumped in, maintaining positive pressure per UNE-EN 12101-6." },
              { arrow: "→", title: "Depressurization (Fire Floor)", desc: "Hot gases actively removed, reinforcing the protective barrier." }
            ].map((i, idx) => (
              <div key={idx} className="flex gap-4 pb-4 border-b border-border last:border-b-0">
                <div className="text-primary font-bold text-lg flex-shrink-0">{i.arrow}</div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{i.title}</h4>
                  <p className="text-sm text-foreground/70">{i.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-foreground/80 mb-6">
            Camp Nou uses a <strong>Class C system</strong> per UNE-EN 12101-6 — designed for simultaneous evacuation of all floors.
          </p>

          <div className="border-l-4 border-primary bg-primary/5 rounded-r-lg p-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-2">🔧 Ductwork Rules</h3>
            <p className="text-foreground/80">
              Per <strong>UNE-EN 12101-7</strong>: Fire-rated ducts (EI 120), fire-rated hangers, and NO dampers inside smoke control ducts — they must stay permanently open per CTE DB SI.
            </p>
          </div>
        </section>

        {/* TAKEAWAYS */}
        <section className="mt-16 pt-8 border-t border-border">
          <h3 className="text-2xl font-bold mb-6">Key Takeaways</h3>

          <div className="space-y-3 bg-card border border-border rounded-lg p-6">
            {[
              "Smoke kills faster than fire — smoke control is life-safety.",
              "Natural (UNE 23585) uses physics; mechanical (UNE-EN 12101-3) uses fans.",
              "All fans must be F400 120 per UNE-EN 12101-3.",
              "All normal HVAC stops on fire activation per CTE DB SI.",
              "Every exhaust needs makeup air.",
              "Stair pressurization (UNE-EN 12101-6) keeps escape routes smoke-free.",
              "Spain layers national (CTE DB SI) + local codes (OMCP/08).",
              "No dampers in smoke ducts per UNE-EN 12101-7."
            ].map((t, i) => (
              <div key={i} className="flex gap-3">
                <span className="text-primary font-bold flex-shrink-0">✓</span>
                <p className="text-foreground/80 text-sm">{t}</p>
              </div>
            ))}
          </div>
        </section>

        {/* REFERENCES */}
        <section className="mt-16 pt-8 border-t border-border">
          <h3 className="text-2xl font-bold mb-6">References & Official Standards</h3>
          <p className="text-sm text-foreground/60 mb-6">
            All citations are accurate as of March 2026.
          </p>

          <div className="space-y-4 text-sm">
            <div className="border-l-4 border-primary bg-primary/5 p-4 rounded-r-lg">
              <h4 className="font-bold text-foreground mb-2">Spanish National Building Code (CTE)</h4>
              <p className="text-foreground/80 mb-2"><strong>Title:</strong> Código Técnico de la Edificación — DB-SI (Fire Safety)</p>
              <p className="text-foreground/80 mb-2"><strong>Legal Ref:</strong> Real Decreto 314/2006 (modified by Real Decreto 732/2019)</p>
              <p className="text-foreground/80"><strong>Publisher:</strong> Ministerio de Vivienda y Agenda Urbana | <a href="https://www.codigotecnico.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">www.codigotecnico.org</a></p>
            </div>

            <div className="border-l-4 border-blue-500 bg-blue-500/5 p-4 rounded-r-lg">
              <h4 className="font-bold text-foreground mb-2">European Standards (UNE-EN)</h4>
              <p className="text-foreground/80 mb-1"><strong>UNE 23585:</strong> Natural smoke exhaust systems (2004)</p>
              <p className="text-foreground/80 mb-1"><strong>UNE-EN 12101-3:</strong> Powered smoke/heat exhaust fans</p>
              <p className="text-foreground/80 mb-1"><strong>UNE-EN 12101-6:</strong> Staircase pressurization systems</p>
              <p className="text-foreground/80"><strong>UNE-EN 12101-7:</strong> Fire-rated smoke control ducts</p>
              <p className="text-foreground/80 mt-2"><strong>Publisher:</strong> Asociación Española de Normalización (UNE) | <a href="https://www.une.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">www.une.org</a></p>
            </div>

            <div className="border-l-4 border-purple-500 bg-purple-500/5 p-4 rounded-r-lg">
              <h4 className="font-bold text-foreground mb-2">Barcelona Local</h4>
              <p className="text-foreground/80"><strong>OMCP/08:</strong> Municipal Fire Protection Conditions | <strong>Publisher:</strong> Ajuntament de Barcelona</p>
            </div>
          </div>
        </section>

        {/* FINAL THOUGHT */}
        <section className="mt-16 pt-8 border-t border-border">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm font-bold uppercase tracking-widest text-primary">Final Thought</span>
            <div className="flex-1 h-px bg-border"></div>
          </div>

          <h2 className="text-3xl font-bold mb-6">The Engineering Behind the Experience</h2>

          <p className="text-foreground/80 mb-4">
            The next time you walk into Camp Nou — or any large stadium, airport, or shopping centre — there's an invisible system above your head, below your feet, and in the walls around you. Hundreds of hours of calculation, testing, and coordination ensure that if the worst happens, you have the best possible chance of walking out safely.
          </p>

          <p className="text-foreground/80 mb-6">
            Smoke control engineering is quiet, unglamorous work. It's never in the brochure. But it might be the most important system in the building.
          </p>

          <p className="font-semibold text-foreground text-lg">
            That's MEP engineering. That's what we do.
          </p>
        </section>

      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-border bg-card/30 backdrop-blur-sm py-8">
        <div className="max-w-3xl mx-auto px-6 text-center text-sm text-foreground/60">
          <p className="mb-2">MEP Engineering Training Series · Spotify Camp Nou Renovation · Limak Construction</p>
          <p className="text-xs">This blog post is part of an internal training series on fire safety systems. All regulations and standards cited are accurate as of March 2026.</p>
        </div>
      </footer>
    </div>
  );
};

export default SmokeControl;
