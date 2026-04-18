import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const HVACLoadCalculationsBlog = () => {
  const navigate = useNavigate();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [calcInputs, setCalcInputs] = useState({
    area: 900,
    occupancy: 1200,
    peopleSensibleW: 75,
    peopleLatentW: 55,
    lightingWm2: 12,
    equipmentWm2: 8,
    ventSensibleKW: 8.5,
    ventLatentKW: 2.5,
    diversity: 0.64,
    sensibleForAirKW: 84,
    deltaT: 9,
    espPa: 950,
    fanEff: 0.62
  });

  const toNum = (value) => {
    const parsed = Number.parseFloat(value);
    return Number.isFinite(parsed) ? parsed : 0;
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCalcInputs((prev) => ({ ...prev, [name]: toNum(value) }));
  };

  const peopleSensibleKW = (calcInputs.occupancy * calcInputs.peopleSensibleW) / 1000;
  const peopleLatentKW = (calcInputs.occupancy * calcInputs.peopleLatentW) / 1000;
  const lightingKW = (calcInputs.area * calcInputs.lightingWm2) / 1000;
  const equipmentKW = (calcInputs.area * calcInputs.equipmentWm2) / 1000;

  const internalSensibleKW = peopleSensibleKW + lightingKW + equipmentKW;
  const grossCoolingKW = internalSensibleKW + peopleLatentKW + calcInputs.ventSensibleKW + calcInputs.ventLatentKW;
  const designBlockKW = grossCoolingKW * calcInputs.diversity;
  const tonOfRefrigeration = designBlockKW / 3.517;
  const airflowM3s = calcInputs.deltaT > 0 ? calcInputs.sensibleForAirKW / (1.2 * calcInputs.deltaT) : 0;
  const fanPowerKW = calcInputs.fanEff > 0 ? (airflowM3s * calcInputs.espPa) / (calcInputs.fanEff * 1000) : 0;

  const fmt = (value) => value.toFixed(2);

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
            MEP Engineering · HVAC Calculations
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            HVAC Load Calculation Deep Dive: <span className="text-primary">From Basics to Numbers</span>
          </h1>

          <p className="text-lg text-foreground/70 mb-6 max-w-2xl">
            A step-by-step continuation of the HVAC basics article, showing how to estimate sensible load, latent load, airflow, and equipment sizing for a high-occupancy stadium zone.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-foreground/60">
            <span>HVAC Fundamentals</span>
            <span className="opacity-50">◆</span>
            <span>Camp Nou-Style Use Case</span>
            <span className="opacity-50">◆</span>
            <span>Engineering Calculation Walkthrough</span>
          </div>
        </div>

        <div className="border-t border-border bg-background/50 backdrop-blur-sm">
          <div className="max-w-3xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-primary">1,200</div>
              <div className="text-xs uppercase tracking-widest text-foreground/60 mt-1">Example Occupancy</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-primary">119 kW</div>
              <div className="text-xs uppercase tracking-widest text-foreground/60 mt-1">Peak Cooling (Estimated)</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-primary">7.8 m3/s</div>
              <div className="text-xs uppercase tracking-widest text-foreground/60 mt-1">Supply Airflow (Estimated)</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-primary">34 TR</div>
              <div className="text-xs uppercase tracking-widest text-foreground/60 mt-1">Cooling Capacity</div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <section className="mb-12">
          <div className="border border-border rounded-lg p-4 bg-card">
            <p className="text-sm text-foreground/70">
              New here? Start with the fundamentals article first:
              {' '}
              <Link to="/blogs/hvac-systems" className="text-primary hover:text-primary/80 font-semibold">
                HVAC Systems in Large Buildings
              </Link>
              . This post extends that foundation with practical calculations.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm font-bold uppercase tracking-widest text-primary">01 — Design Scenario</span>
            <div className="flex-1 h-px bg-border"></div>
          </div>

          <h2 className="text-3xl font-bold mb-6">The Zone We Will Size</h2>

          <p className="text-foreground/80 mb-4">
            We will calculate the cooling duty for a hospitality lounge in a stadium complex. It is a realistic high-density zone with strong people load, lighting, and mixed outdoor air.
          </p>

          <div className="bg-card border border-border rounded-lg p-6 mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: 'Floor area', val: '900 m2' },
              { title: 'Occupancy', val: '1,200 people (event peak)' },
              { title: 'Indoor setpoint', val: '24 C, 50% RH' },
              { title: 'Outdoor summer', val: '35 C DB / 24 C WB' },
              { title: 'Lighting density', val: '12 W/m2' },
              { title: 'Equipment load', val: '8 W/m2' }
            ].map((item, idx) => (
              <div key={idx}>
                <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                <p className="text-sm text-foreground/70">{item.val}</p>
              </div>
            ))}
          </div>

          <div className="border-l-4 border-primary bg-primary/5 rounded-r-lg p-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-2">Assumption quality matters</h3>
            <p className="text-foreground/80">
              This is a conceptual engineering estimate for training. Final design should use a full load model, psychrometric checks, and local code constraints.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm font-bold uppercase tracking-widest text-primary">02 — Internal Sensible Loads</span>
            <div className="flex-1 h-px bg-border"></div>
          </div>

          <h2 className="text-3xl font-bold mb-6">People, Lights, and Equipment</h2>

          <p className="text-foreground/80 mb-4">
            For event occupancy, people are often the dominant load component. We split internal load into sensible and latent parts.
          </p>

          <div className="border border-border rounded-lg overflow-hidden mb-6">
            <div className="grid grid-cols-3 gap-0 bg-card border-b border-border">
              {['Source', 'Input', 'Sensible Load'].map((h) => (
                <div key={h} className="px-4 py-3 font-semibold text-sm uppercase text-foreground/70 border-r border-border last:border-r-0">
                  {h}
                </div>
              ))}
            </div>

            {[
              ['People', '1,200 x 75 W sensible/person', '90.0 kW'],
              ['Lighting', '900 m2 x 12 W/m2', '10.8 kW'],
              ['Equipment', '900 m2 x 8 W/m2', '7.2 kW']
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-3 gap-0 border-b border-border last:border-b-0">
                <div className="px-4 py-3 border-r border-border text-foreground/80 text-sm font-medium">{row[0]}</div>
                <div className="px-4 py-3 border-r border-border text-foreground/70 text-sm">{row[1]}</div>
                <div className="px-4 py-3 text-foreground/70 text-sm">{row[2]}</div>
              </div>
            ))}
          </div>

          <div className="bg-card border border-border rounded-lg p-5">
            <p className="text-foreground/80 mb-2">
              Total internal sensible load = 90.0 + 10.8 + 7.2 = <strong>108.0 kW</strong>
            </p>
            <p className="text-foreground/80">
              Total internal latent load from people (typical event activity) = 1,200 x 55 W = <strong>66.0 kW</strong>
            </p>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm font-bold uppercase tracking-widest text-primary">03 — Ventilation and Coil Duty</span>
            <div className="flex-1 h-px bg-border"></div>
          </div>

          <h2 className="text-3xl font-bold mb-6">Outdoor Air Impact on Cooling Capacity</h2>

          <p className="text-foreground/80 mb-4">
            We assume an outdoor air requirement of 10 L/s per person for crowd conditions.
          </p>

          <div className="bg-card border border-border rounded-lg p-6 mb-6">
            <p className="text-foreground/80 mb-2"><strong>Outdoor air flow:</strong></p>
            <p className="text-foreground/80 mb-2">1,200 x 10 L/s = 12,000 L/s = 12.0 m3/s</p>
            <p className="text-foreground/80 mb-2">Assume 30% of total supply is outdoor air.</p>
            <p className="text-foreground/80">Therefore total supply flow estimate = 12.0 / 0.30 = <strong>40.0 m3/s</strong> (system-level), with this zone receiving 7.8 m3/s.</p>
          </div>

          <p className="text-foreground/80 mb-6">
            To keep this article focused, we map psychrometric difference into equivalent coil loads for this one zone using simplified deltas:
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {[
              { title: 'Ventilation sensible', desc: 'Approx. 8.5 kW from dry-bulb delta and outdoor fraction for the zone airflow.' },
              { title: 'Ventilation latent', desc: 'Approx. 2.5 kW from humidity ratio delta across outdoor and supply condition.' }
            ].map((item, idx) => (
              <div key={idx} className="border border-border rounded-lg p-4 bg-card">
                <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                <p className="text-sm text-foreground/70">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-500/5 rounded-r-lg p-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-blue-500 mb-2">Engineering note</h3>
            <p className="text-foreground/80">
              Full project design should calculate air state points from a psychrometric chart or software and then validate dehumidification, reheat, and part-load control.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm font-bold uppercase tracking-widest text-primary">04 — Peak Cooling Result</span>
            <div className="flex-1 h-px bg-border"></div>
          </div>

          <h2 className="text-3xl font-bold mb-6">Combine Sensible and Latent Loads</h2>

          <div className="border border-border rounded-lg overflow-hidden mb-6">
            <div className="grid grid-cols-2 gap-0 bg-card border-b border-border">
              <div className="px-4 py-3 font-semibold text-sm uppercase text-foreground/70 border-r border-border">Load component</div>
              <div className="px-4 py-3 font-semibold text-sm uppercase text-foreground/70">Value</div>
            </div>
            {[
              ['Internal sensible', '108.0 kW'],
              ['Internal latent', '66.0 kW'],
              ['Ventilation sensible', '8.5 kW'],
              ['Ventilation latent', '2.5 kW']
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-2 gap-0 border-b border-border last:border-b-0">
                <div className="px-4 py-3 border-r border-border text-foreground/80 text-sm">{row[0]}</div>
                <div className="px-4 py-3 text-foreground/80 text-sm font-medium">{row[1]}</div>
              </div>
            ))}
          </div>

          <div className="bg-card border border-border rounded-lg p-5 mb-6">
            <p className="text-foreground/80 mb-2">Zone total peak cooling load = 108.0 + 66.0 + 8.5 + 2.5</p>
            <p className="text-foreground text-lg font-semibold">= 185.0 kW (gross).</p>
          </div>

          <p className="text-foreground/80 mb-4">
            In practical systems, diversity and operational strategy reduce coincident peak. Applying a 0.64 diversity factor for this zone operating profile:
          </p>

          <div className="border-l-4 border-primary bg-primary/5 rounded-r-lg p-4">
            <p className="text-foreground font-semibold">Design block load = 185.0 x 0.64 = 118.4 kW</p>
            <p className="text-foreground/80 text-sm mt-1">Rounded equipment selection: <strong>119 kW</strong> (about <strong>34 TR</strong>) for this zone.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm font-bold uppercase tracking-widest text-primary">05 — Airflow and Fan Check</span>
            <div className="flex-1 h-px bg-border"></div>
          </div>

          <h2 className="text-3xl font-bold mb-6">Estimate Supply Air and Fan Power</h2>

          <p className="text-foreground/80 mb-4">
            Use a standard sensible relation for airflow sizing:
          </p>

          <div className="bg-card border border-border rounded-lg p-5 mb-6">
            <p className="text-foreground/80 mb-2">Qs = 1.2 x V x deltaT</p>
            <p className="text-foreground/80 mb-2">Assume sensible portion served by air: Qs = 84 kW, and deltaT = 9 C</p>
            <p className="text-foreground font-semibold">V = 84 / (1.2 x 9) = 7.78 m3/s</p>
          </div>

          <p className="text-foreground/80 mb-4">
            Fan shaft power estimate:
          </p>

          <div className="bg-card border border-border rounded-lg p-5 mb-6">
            <p className="text-foreground/80 mb-2">P = (V x deltaP) / eta</p>
            <p className="text-foreground/80 mb-2">Take V = 7.78 m3/s, deltaP = 950 Pa, eta = 0.62</p>
            <p className="text-foreground font-semibold">P = (7.78 x 950) / 0.62 = 11.92 kW</p>
          </div>

          <div className="border-l-4 border-amber-500 bg-amber-500/5 rounded-r-lg p-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-amber-500 mb-2">Commissioning note</h3>
            <p className="text-foreground/80">
              Verify fan brake horsepower, VFD tuning, and actual ESP after balancing. Field pressure drop can deviate from early design assumptions.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm font-bold uppercase tracking-widest text-primary">06 — Interactive Calculator</span>
            <div className="flex-1 h-px bg-border"></div>
          </div>

          <h2 className="text-3xl font-bold mb-6">Try Your Own Input Values</h2>

          <p className="text-foreground/80 mb-6">
            Change the assumptions below to test your own scenario. Results update instantly and follow the same equations explained in this post.
          </p>

          <div className="bg-card border border-border rounded-lg p-6 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: 'area', label: 'Area (m2)', step: '1' },
                { name: 'occupancy', label: 'Occupancy (people)', step: '1' },
                { name: 'peopleSensibleW', label: 'People sensible (W/person)', step: '1' },
                { name: 'peopleLatentW', label: 'People latent (W/person)', step: '1' },
                { name: 'lightingWm2', label: 'Lighting density (W/m2)', step: '0.1' },
                { name: 'equipmentWm2', label: 'Equipment density (W/m2)', step: '0.1' },
                { name: 'ventSensibleKW', label: 'Ventilation sensible (kW)', step: '0.1' },
                { name: 'ventLatentKW', label: 'Ventilation latent (kW)', step: '0.1' },
                { name: 'diversity', label: 'Diversity factor (0-1)', step: '0.01' },
                { name: 'sensibleForAirKW', label: 'Sensible load for airflow calc (kW)', step: '0.1' },
                { name: 'deltaT', label: 'Supply deltaT (C)', step: '0.1' },
                { name: 'espPa', label: 'External static pressure (Pa)', step: '1' },
                { name: 'fanEff', label: 'Fan efficiency (0-1)', step: '0.01' }
              ].map((field) => (
                <label key={field.name} className="flex flex-col gap-2">
                  <span className="text-sm text-foreground/70">{field.label}</span>
                  <input
                    name={field.name}
                    type="number"
                    step={field.step}
                    value={calcInputs[field.name]}
                    onChange={handleInputChange}
                    className="rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/40"
                  />
                </label>
              ))}
            </div>
          </div>

          <div className="border border-border rounded-lg overflow-hidden mb-6">
            <div className="grid grid-cols-2 gap-0 bg-card border-b border-border">
              <div className="px-4 py-3 font-semibold text-sm uppercase text-foreground/70 border-r border-border">Calculated result</div>
              <div className="px-4 py-3 font-semibold text-sm uppercase text-foreground/70">Value</div>
            </div>
            {[
              ['People sensible load', `${fmt(peopleSensibleKW)} kW`],
              ['People latent load', `${fmt(peopleLatentKW)} kW`],
              ['Lighting load', `${fmt(lightingKW)} kW`],
              ['Equipment load', `${fmt(equipmentKW)} kW`],
              ['Internal sensible load', `${fmt(internalSensibleKW)} kW`],
              ['Gross cooling load', `${fmt(grossCoolingKW)} kW`],
              ['Design block load', `${fmt(designBlockKW)} kW`],
              ['Cooling capacity', `${fmt(tonOfRefrigeration)} TR`],
              ['Estimated airflow', `${fmt(airflowM3s)} m3/s`],
              ['Estimated fan shaft power', `${fmt(fanPowerKW)} kW`]
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-2 gap-0 border-b border-border last:border-b-0">
                <div className="px-4 py-3 border-r border-border text-foreground/80 text-sm">{row[0]}</div>
                <div className="px-4 py-3 text-foreground/80 text-sm font-medium">{row[1]}</div>
              </div>
            ))}
          </div>

          <div className="border-l-4 border-primary bg-primary/5 rounded-r-lg p-4">
            <p className="text-foreground/80 text-sm">
              Equations used: internal sensible = people sensible + lighting + equipment; gross cooling = internal sensible + people latent + ventilation sensible + ventilation latent; design block = gross x diversity; airflow = Qs / (1.2 x deltaT); fan power = (V x deltaP) / (eta x 1000).
            </p>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm font-bold uppercase tracking-widest text-primary">07 — What This Means in Practice</span>
            <div className="flex-1 h-px bg-border"></div>
          </div>

          <h2 className="text-3xl font-bold mb-6">From Fundamentals to Design Decisions</h2>

          <div className="space-y-3 bg-card border border-border rounded-lg p-6">
            {[
              'Basics tell you what HVAC does. Calculations tell you what size to install.',
              'People load dominates event zones, so occupancy assumptions must be realistic.',
              'Ventilation and humidity can materially change coil duty.',
              'Diversity is useful, but it must be justified by operating profile and controls.',
              'Final design should be validated by simulation, controls logic, and TAB results.'
            ].map((item, idx) => (
              <div key={idx} className="flex gap-3">
                <span className="text-primary font-bold flex-shrink-0">✓</span>
                <p className="text-foreground/80 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 pt-8 border-t border-border">
          <h3 className="text-2xl font-bold mb-4">Continue Learning</h3>
          <p className="text-foreground/80 mb-4">
            If you want the non-calculation version first, read the foundation post:
          </p>
          <Link
            to="/blogs/hvac-systems"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold"
          >
            ← HVAC Systems in Large Buildings: How They Work and Why They Matter
          </Link>
        </section>
      </main>

      <footer className="mt-20 border-t border-border bg-card/30 backdrop-blur-sm py-8">
        <div className="max-w-3xl mx-auto px-6 text-center text-sm text-foreground/60">
          <p className="mb-2">MEP Engineering Training Series · HVAC Load Calculations</p>
          <p className="text-xs">Educational estimate only. Final engineering design requires project-specific analysis and code compliance checks.</p>
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

export default HVACLoadCalculationsBlog;
