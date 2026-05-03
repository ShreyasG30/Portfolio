import { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BlogRelatedPosts from '../../components/BlogRelatedPosts';

const defaults = {
  occupancy: 1200,
  ventilationLpsPerPerson: 10,
  nonPermanentAreaM2: 900,
  areaRateLpsM2: 0.3,
  outdoorCO2ppm: 420,
  co2DeltaPpm: 580,
  fanAirflowM3s: 7.8,
  fanPowerKW: 11.9,
  sensibleLoadKW: 84,
  deltaT: 9,
  airDensity: 1.204,
  cpKJkgK: 1.006,
  trInput: 34
};

const fieldMeta = [
  { name: 'occupancy', label: 'Occupancy (people)', step: '1' },
  { name: 'ventilationLpsPerPerson', label: 'Ventilation rate (L/s per person)', step: '0.1' },
  { name: 'nonPermanentAreaM2', label: 'Non-permanent area (m2)', step: '1' },
  { name: 'areaRateLpsM2', label: 'Area rate for non-permanent zones (L/s.m2)', step: '0.01' },
  { name: 'outdoorCO2ppm', label: 'Outdoor CO2 (ppm)', step: '1' },
  { name: 'co2DeltaPpm', label: 'Allowed indoor rise above outdoor (ppm)', step: '1' },
  { name: 'fanAirflowM3s', label: 'Fan airflow (m3/s)', step: '0.01' },
  { name: 'fanPowerKW', label: 'Fan electric power (kW)', step: '0.01' },
  { name: 'sensibleLoadKW', label: 'Sensible load (kW)', step: '0.1' },
  { name: 'deltaT', label: 'Supply delta T (C)', step: '0.1' },
  { name: 'airDensity', label: 'Air density rho (kg/m3)', step: '0.001' },
  { name: 'cpKJkgK', label: 'Air cp (kJ/kg.K)', step: '0.001' },
  { name: 'trInput', label: 'Cooling capacity (TR)', step: '0.1' }
];

const fmt = (value, digits = 2) => Number.isFinite(value) ? value.toFixed(digits) : '0.00';

const toNum = (value) => {
  const parsed = Number.parseFloat(value);
  return Number.isFinite(parsed) ? parsed : 0;
};

const classifySfp = (wPerM3s) => {
  if (wPerM3s <= 300) return 'SFP 0';
  if (wPerM3s <= 500) return 'SFP 1';
  if (wPerM3s <= 750) return 'SFP 2';
  if (wPerM3s <= 1250) return 'SFP 3';
  if (wPerM3s <= 2000) return 'SFP 4';
  if (wPerM3s <= 3000) return 'SFP 5';
  if (wPerM3s <= 4500) return 'SFP 6';
  return 'SFP 7';
};

const HVACCitationCalculationsBlog = () => {
  const navigate = useNavigate();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [inputs, setInputs] = useState(defaults);
  const [showDerivation, setShowDerivation] = useState(false);

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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputs((prev) => ({ ...prev, [name]: toNum(value) }));
  };

  const resetDefaults = () => {
    setInputs(defaults);
  };

  const results = useMemo(() => {
    const ventilationPeopleLps = inputs.occupancy * inputs.ventilationLpsPerPerson;
    const ventilationAreaLps = inputs.nonPermanentAreaM2 * inputs.areaRateLpsM2;
    const totalVentilationLps = ventilationPeopleLps + ventilationAreaLps;
    const totalVentilationM3s = totalVentilationLps / 1000;

    const indoorCO2Target = inputs.outdoorCO2ppm + inputs.co2DeltaPpm;

    const sfpWPerM3s = inputs.fanAirflowM3s > 0
      ? (inputs.fanPowerKW * 1000) / inputs.fanAirflowM3s
      : 0;

    const airflowFromSensibleM3s = inputs.deltaT > 0 && inputs.airDensity > 0 && inputs.cpKJkgK > 0
      ? inputs.sensibleLoadKW / (inputs.airDensity * inputs.cpKJkgK * inputs.deltaT)
      : 0;

    const trToKw = inputs.trInput * 3.5168528421;

    return {
      ventilationPeopleLps,
      ventilationAreaLps,
      totalVentilationLps,
      totalVentilationM3s,
      indoorCO2Target,
      sfpWPerM3s,
      sfpClass: classifySfp(sfpWPerM3s),
      airflowFromSensibleM3s,
      trToKw
    };
  }, [inputs]);

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
            MEP Engineering · Citation-Backed HVAC
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            HVAC Calculations With <span className="text-primary">Proof and References</span>
          </h1>

          <p className="text-lg text-foreground/70 mb-6 max-w-2xl">
            A transparent follow-up to the previous blog: defaults are now aligned with peer-reviewed HVAC/IAQ research where applicable, and each equation is shown step by step.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-foreground/60">
            <span>Peer-Reviewed Inputs</span>
            <span className="opacity-50">◆</span>
            <span>Research-Driven Calculator</span>
            <span className="opacity-50">◆</span>
            <span>Calculation Proof Check</span>
          </div>
        </div>

        <div className="border-t border-border bg-background/50 backdrop-blur-sm">
          <div className="max-w-3xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-primary">10.0</div>
              <div className="text-xs uppercase tracking-widest text-foreground/60 mt-1">L/s per person (study baseline)</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-primary">580</div>
              <div className="text-xs uppercase tracking-widest text-foreground/60 mt-1">ppm rise to ~1000 ppm target</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-primary">1.204</div>
              <div className="text-xs uppercase tracking-widest text-foreground/60 mt-1">kg/m3 Air Density @ 20 C</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-primary">3.5169</div>
              <div className="text-xs uppercase tracking-widest text-foreground/60 mt-1">kW per TR</div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <section className="mb-12">
          <div className="border border-border rounded-lg p-4 bg-card">
            <p className="text-sm text-foreground/70">
              This article is the evidence-backed continuation of the previous post.
              {' '}
              <Link to="/blogs/hvac-load-calculations" className="text-primary hover:text-primary/80 font-semibold">
                Read the earlier HVAC Load Calculation Deep Dive
              </Link>
              {' '}
              and then use this citation-backed version when you need traceable assumptions.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm font-bold uppercase tracking-widest text-primary">01 — Why This Post Exists</span>
            <div className="flex-1 h-px bg-border"></div>
          </div>

          <h2 className="text-3xl font-bold mb-6">From Good Calculations to Defensible Calculations</h2>

          <p className="text-foreground/80 mb-4">
            A valid HVAC calculation should not only produce a number. It should also answer: where did each default come from? This post addresses that by mapping each key input to an external reference.
          </p>

          <div className="space-y-3 bg-card border border-border rounded-lg p-6">
            {[
              'Ventilation default is set to 10 L/s.person, a common evidence-based baseline in IAQ literature.',
              'Indoor CO2 target is anchored near 1000 ppm (outdoor + 580 ppm using 420 ppm outdoor).',
              'CO2 generation and exposure framing reference peer-reviewed occupant and cognitive studies.',
              'Thermophysical constants are left editable and used as transparent engineering assumptions.'
            ].map((item, idx) => (
              <div key={idx} className="flex gap-3">
                <span className="text-primary font-bold flex-shrink-0">✓</span>
                <p className="text-foreground/80 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm font-bold uppercase tracking-widest text-primary">02 — Citation-Based Equations</span>
            <div className="flex-1 h-px bg-border"></div>
          </div>

          <h2 className="text-3xl font-bold mb-6">Core HVAC Checks You Can Defend</h2>

          <div className="space-y-4 mb-6">
            {[
              {
                title: 'A. Outdoor air by people and area',
                formula: 'Q_oa = P x Rp + A x Ra',
                note: 'Default Rp = 10 L/s.person follows literature-backed office/school ventilation baseline values.'
              },
              {
                title: 'B. Indoor CO2 target',
                formula: 'CO2_indoor,target = CO2_outdoor + DeltaCO2',
                note: 'Default DeltaCO2 = 580 ppm maps 420 ppm outdoor to a 1000 ppm indoor control target used in many studies.'
              },
              {
                title: 'C. Sensible airflow from load',
                formula: 'Q_s = rho x cp x V x DeltaT',
                note: 'Uses first-principles heat balance for dry air; constants remain editable for project conditions.'
              },
              {
                title: 'D. Specific Fan Power',
                formula: 'SFP = P_fan / V',
                note: 'Used as an energy KPI in HVAC design iteration and CFD scenario comparisons.'
              },
              {
                title: 'E. Cooling unit conversion',
                formula: 'kW = TR x 3.5168528421',
                note: 'Useful to compare catalog data across SI and TR-based specs.'
              }
            ].map((item, idx) => (
              <div key={idx} className="border border-border rounded-lg p-4 bg-card">
                <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-foreground/80 mb-1">{item.formula}</p>
                <p className="text-sm text-foreground/70">{item.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm font-bold uppercase tracking-widest text-primary">03 — Interactive Calculator</span>
            <div className="flex-1 h-px bg-border"></div>
          </div>

          <h2 className="text-3xl font-bold mb-6">Editable Inputs, Citation-Backed Defaults</h2>

          <p className="text-foreground/80 mb-6">
            Defaults are preloaded from research-backed baseline values where available so the calculator starts from a defensible scenario. You can then change any input for your own project.
          </p>

          <div className="bg-card border border-border rounded-lg p-6 mb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {fieldMeta.map((field) => (
                <label key={field.name} className="flex flex-col gap-2">
                  <span className="text-sm text-foreground/70">{field.label}</span>
                  <input
                    name={field.name}
                    type="number"
                    step={field.step}
                    value={inputs[field.name]}
                    onChange={handleInputChange}
                    className="rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/40"
                  />
                </label>
              ))}
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              <button
                onClick={resetDefaults}
                className="inline-flex items-center px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Reset to Citation Defaults
              </button>
              <button
                onClick={() => setShowDerivation((prev) => !prev)}
                className="inline-flex items-center px-4 py-2 rounded-md border border-border text-sm font-medium hover:bg-card/70 transition-colors"
              >
                {showDerivation ? 'Hide Formula Derivation' : 'Show Formula Derivation'}
              </button>
            </div>
          </div>

          <div className="border border-border rounded-lg overflow-hidden mb-6">
            <div className="grid grid-cols-2 gap-0 bg-card border-b border-border">
              <div className="px-4 py-3 font-semibold text-sm uppercase text-foreground/70 border-r border-border">Calculated result</div>
              <div className="px-4 py-3 font-semibold text-sm uppercase text-foreground/70">Value</div>
            </div>
            {[
              ['Outdoor air from people', `${fmt(results.ventilationPeopleLps, 1)} L/s`],
              ['Outdoor air from area term', `${fmt(results.ventilationAreaLps, 1)} L/s`],
              ['Total outdoor air', `${fmt(results.totalVentilationLps, 1)} L/s (${fmt(results.totalVentilationM3s, 3)} m3/s)`],
              ['Indoor CO2 target', `${fmt(results.indoorCO2Target, 0)} ppm`],
              ['SFP', `${fmt(results.sfpWPerM3s, 0)} W/(m3/s) -> ${results.sfpClass}`],
              ['Airflow from sensible load', `${fmt(results.airflowFromSensibleM3s, 3)} m3/s`],
              ['TR to kW', `${fmt(inputs.trInput, 2)} TR -> ${fmt(results.trToKw, 3)} kW`]
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-2 gap-0 border-b border-border last:border-b-0">
                <div className="px-4 py-3 border-r border-border text-foreground/80 text-sm">{row[0]}</div>
                <div className="px-4 py-3 text-foreground/80 text-sm font-medium">{row[1]}</div>
              </div>
            ))}
          </div>

          <div className="border-l-4 border-amber-500 bg-amber-500/5 rounded-r-lg p-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-amber-500 mb-2">Important</h3>
            <p className="text-foreground/80 text-sm">
              This tool is for transparent preliminary checks. Final project sizing should include full psychrometric analysis, weather files, equipment curves, and code-specific documentation.
            </p>
          </div>

          {showDerivation && (
            <div className="mt-6 border border-border rounded-lg p-5 bg-card">
              <h3 className="text-lg font-semibold mb-4">Step-by-Step Derivation</h3>
              <div className="space-y-3 text-sm text-foreground/80">
                <p>
                  1) Outdoor air from people = occupancy x L/s per person = {fmt(inputs.occupancy, 0)} x {fmt(inputs.ventilationLpsPerPerson, 2)} = <strong>{fmt(results.ventilationPeopleLps, 1)} L/s</strong>
                </p>
                <p>
                  2) Outdoor air from area = area x L/s.m2 = {fmt(inputs.nonPermanentAreaM2, 0)} x {fmt(inputs.areaRateLpsM2, 2)} = <strong>{fmt(results.ventilationAreaLps, 1)} L/s</strong>
                </p>
                <p>
                  3) Total outdoor air = people + area = {fmt(results.ventilationPeopleLps, 1)} + {fmt(results.ventilationAreaLps, 1)} = <strong>{fmt(results.totalVentilationLps, 1)} L/s</strong> = <strong>{fmt(results.totalVentilationM3s, 3)} m3/s</strong>
                </p>
                <p>
                  4) Indoor CO2 target = outdoor + allowed rise = {fmt(inputs.outdoorCO2ppm, 0)} + {fmt(inputs.co2DeltaPpm, 0)} = <strong>{fmt(results.indoorCO2Target, 0)} ppm</strong>
                </p>
                <p>
                  5) SFP = fan power / airflow = ({fmt(inputs.fanPowerKW, 2)} x 1000) / {fmt(inputs.fanAirflowM3s, 2)} = <strong>{fmt(results.sfpWPerM3s, 0)} W/(m3/s)</strong> &rarr; <strong>{results.sfpClass}</strong>
                </p>
                <p>
                  6) Airflow from sensible load = Qs / (rho x cp x deltaT) = {fmt(inputs.sensibleLoadKW, 2)} / ({fmt(inputs.airDensity, 3)} x {fmt(inputs.cpKJkgK, 3)} x {fmt(inputs.deltaT, 2)}) = <strong>{fmt(results.airflowFromSensibleM3s, 3)} m3/s</strong>
                </p>
                <p>
                  7) TR to kW = TR x 3.5168528421 = {fmt(inputs.trInput, 2)} x 3.5168528421 = <strong>{fmt(results.trToKw, 3)} kW</strong>
                </p>
              </div>
            </div>
          )}

          <div className="mt-6 border border-emerald-500/40 bg-emerald-500/5 rounded-lg p-5">
            <h3 className="text-lg font-semibold mb-3">Research-Based Proof Check (CO2 Mass Balance)</h3>
            <p className="text-sm text-foreground/80 mb-3">
              To validate that the default ventilation assumption is physically reasonable, we compare it against the steady-state CO2 balance used in peer-reviewed IAQ studies:
              {' '}
              V_person = G / (C_indoor - C_outdoor).
            </p>
            <p className="text-sm text-foreground/80 mb-2">
              Using a representative sedentary-adult CO2 generation value G = 0.005 L/s.person (Persily &amp; de Jonge, 2017), and this calculator default concentration rise DeltaC = {fmt(inputs.co2DeltaPpm, 0)} ppm:
            </p>
            <p className="text-sm text-foreground/80 mb-2">
              V_person,required = 0.005 / ({fmt(inputs.co2DeltaPpm, 0)} x 10^-6) = <strong>{fmt(0.005 / Math.max(inputs.co2DeltaPpm * 1e-6, 1e-9), 2)} L/s.person</strong>
            </p>
            <p className="text-sm text-foreground/80">
              Calculator default is <strong>{fmt(inputs.ventilationLpsPerPerson, 2)} L/s.person</strong>, which is {inputs.ventilationLpsPerPerson >= (0.005 / Math.max(inputs.co2DeltaPpm * 1e-6, 1e-9)) ? 'at or above' : 'below'} this literature-based requirement for the selected CO2 target.
            </p>
          </div>
        </section>

        <section className="mt-16 pt-8 border-t border-border">
          <h3 className="text-2xl font-bold mb-6">Research References and Source Values</h3>

          <div className="space-y-4 text-sm">
            <div className="border-l-4 border-primary bg-primary/5 p-4 rounded-r-lg">
              <h4 className="font-bold text-foreground mb-2">Peer-reviewed ventilation and CO2 literature</h4>
              <p className="text-foreground/80 mb-2">
                Seppanen, Fisk, Mendell (1999), Indoor Air: ventilation and CO2 associations in buildings.
                {' '}
                <a href="https://doi.org/10.1111/j.1600-0668.1999.00003.x" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
                  doi.org/10.1111/j.1600-0668.1999.00003.x
                </a>
              </p>
              <p className="text-foreground/80 mb-2">
                Satish et al. (2012), Environmental Health Perspectives: cognitive effects under controlled CO2 levels.
                {' '}
                <a href="https://doi.org/10.1289/ehp.1104789" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
                  doi.org/10.1289/ehp.1104789
                </a>
              </p>
              <p className="text-foreground/80 mb-2">
                Persily and de Jonge (2017), Indoor Air: occupant CO2 generation rates.
                {' '}
                <a href="https://doi.org/10.1111/ina.12383" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
                  doi.org/10.1111/ina.12383
                </a>
              </p>
              <ul className="space-y-1 text-foreground/80">
                <li>Default ventilation baseline in this calculator is set to 10 L/s.person as a literature-aligned starting point.</li>
                <li>Default indoor target is set near 1000 ppm CO2 (outdoor + 580 ppm for the default 420 ppm outdoor case).</li>
                <li>Steady-state proof check uses V_person = G / DeltaC with representative G from peer-reviewed occupant CO2 generation research.</li>
                <li>These defaults are scenario baselines, not universal legal limits; adjust for your occupancy and jurisdiction.</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-500 bg-blue-500/5 p-4 rounded-r-lg">
              <h4 className="font-bold text-foreground mb-2">Engineering constants used in equations</h4>
              <p className="text-foreground/80 mb-1">
                Air density and specific heat are physical-property inputs in the sensible heat equation and remain editable for local conditions.
              </p>
              <p className="text-foreground/80 mb-1">
                TR-to-kW uses the thermodynamic conversion 1 TR = 3.5168528421 kW.
              </p>
              <p className="text-foreground/80">
                Fan-power and airflow equations are first-principles performance checks and can be used directly as CFD boundary inputs.
              </p>
            </div>
          </div>
        </section>

        <BlogRelatedPosts
          title="Related Posts"
          posts={[
            {
              link: '/blogs/hvac-systems',
              part: 'Part 1',
              banner: 'HVAC Fundamentals',
              title: 'HVAC Systems in Large Buildings',
              subtitle: 'Conceptual foundation before calculations',
              gradient: 'bg-gradient-to-r from-indigo-500/30 via-blue-500/20 to-transparent'
            },
            {
              link: '/blogs/hvac-load-calculations',
              part: 'Part 2',
              banner: 'Load Calculation Walkthrough',
              title: 'HVAC Load Calculation Deep Dive',
              subtitle: 'Worked load, airflow, and fan-power equations',
              gradient: 'bg-gradient-to-r from-sky-500/30 via-cyan-500/20 to-transparent'
            }
          ]}
        />
      </main>

      <footer className="mt-20 border-t border-border bg-card/30 backdrop-blur-sm py-8">
        <div className="max-w-3xl mx-auto px-6 text-center text-sm text-foreground/60">
          <p className="mb-2">MEP Engineering Training Series · Citation-Backed HVAC Calculations</p>
          <p className="text-xs">Educational content. Always validate against project scope, local authority requirements, and the latest legally applicable standards.</p>
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

export default HVACCitationCalculationsBlog;
