import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * BlogTemplate - A reusable component for blog post pages
 * 
 * Usage:
 * <BlogTemplate 
 *   title="Post Title"
 *   subtitle="Post subtitle"
 *   tag="Category"
 *   meta={["Author", "Project", "Series"]}
 *   stats={[{val: "123", label: "Stat"}]}
 *   children={<> content </>}
 * />
 */

export const BlogTemplate = ({
  title,
  subtitle,
  tag = "Blog Post",
  meta = [],
  stats = [],
  children
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Back Button */}
      <div className="max-w-3xl mx-auto px-6 py-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
        >
          ← Back
        </button>
      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━ HERO ━━━━━━━━━━━━━━━━━━━━ */}
      <header className="relative border-b border-border bg-card/30 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto px-6 py-12">
          {/* Tag */}
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            {tag}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="text-lg text-foreground/70 mb-6 max-w-2xl">
              {subtitle}
            </p>
          )}

          {/* Meta */}
          {meta.length > 0 && (
            <div className="flex flex-wrap gap-4 text-sm text-foreground/60">
              {meta.map((item, idx) => (
                <span key={idx}>
                  {idx > 0 && <span className="mr-4 opacity-50">◆</span>}
                  {item}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Stats Bar */}
        {stats.length > 0 && (
          <div className="border-t border-border bg-background/50 backdrop-blur-sm">
            <div className="max-w-3xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, idx) => (
                <div key={idx}>
                  <div className="text-2xl md:text-3xl font-bold text-primary">{stat.val}</div>
                  <div className="text-xs uppercase tracking-widest text-foreground/60 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* ━━━━━━━━━━━━━━━━━━━━ CONTENT ━━━━━━━━━━━━━━━━━━━━ */}
      <main className="max-w-3xl mx-auto px-6 py-12">
        {children}
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-border bg-card/30 backdrop-blur-sm py-8">
        <div className="max-w-3xl mx-auto px-6 text-center text-sm text-foreground/60">
          <p>Blog post from portfolio</p>
        </div>
      </footer>
    </div>
  );
};

/* ━━━━━━━━━━━━━━━━━━━━ REUSABLE BLOG COMPONENTS ━━━━━━━━━━━━━━━━━━━━ */

/**
 * BlogSection - Main content section with label
 */
export const BlogSection = ({ num, label, title, children }) => (
  <section className="mb-16">
    <div className="flex items-center gap-3 mb-6">
      <span className="text-sm font-bold uppercase tracking-widest text-primary">
        {String(num).padStart(2, '0')} — {label}
      </span>
      <div className="flex-1 h-px bg-border"></div>
    </div>
    <h2 className="text-3xl font-bold mb-6">{title}</h2>
    {children}
  </section>
);

/**
 * BlogParagraph - Standard paragraph text
 */
export const BlogParagraph = ({ children, className = "" }) => (
  <p className={`text-foreground/80 mb-6 ${className}`}>{children}</p>
);

/**
 * BlogCallout - Highlighted callout box
 */
export const BlogCallout = ({ title, children, type = "info" }) => {
  const colors = {
    info: "border-primary bg-primary/5 text-primary",
    warning: "border-red-500 bg-red-500/5 text-red-500",
    tech: "border-blue-500 bg-blue-500/5 text-blue-500"
  };

  return (
    <div className={`border-l-4 ${colors[type]} rounded-r-lg p-4 mb-6`}>
      <h3 className="text-sm font-bold uppercase tracking-widest mb-2">
        {title}
      </h3>
      <div className="text-foreground/80">{children}</div>
    </div>
  );
};

/**
 * BlogSteps - Numbered steps list
 */
export const BlogSteps = ({ steps }) => (
  <div className="space-y-4 mb-6">
    {steps.map((step) => (
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
);

/**
 * BlogCards - Grid of cards
 */
export const BlogCards = ({ items, columns = 2 }) => (
  <div className={`grid md:grid-cols-${columns} gap-4 mb-6`}>
    {items.map((item, idx) => (
      <div key={idx} className="border border-border rounded-lg p-4 bg-card">
        <h4 className="font-bold text-lg mb-3">{item.title}</h4>
        {item.icon && <div className="text-3xl mb-2">{item.icon}</div>}
        {item.points ? (
          <ul className="space-y-2">
            {item.points.map((point, i) => (
              <li key={i} className="text-sm text-foreground/80 flex gap-2">
                <span className="text-primary flex-shrink-0">→</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-foreground/70">{item.desc}</p>
        )}
      </div>
    ))}
  </div>
);

/**
 * BlogTable - Comparison table
 */
export const BlogTable = ({ headers, rows }) => (
  <div className="border border-border rounded-lg overflow-hidden mb-6">
    <div className={`grid gap-0 bg-card border-b border-border`}
         style={{ gridTemplateColumns: `repeat(${headers.length}, 1fr)` }}>
      {headers.map((header, idx) => (
        <div
          key={idx}
          className={`px-4 py-3 font-semibold text-sm uppercase text-foreground/70 ${
            idx < headers.length - 1 ? 'border-r border-border' : ''
          }`}
        >
          {header}
        </div>
      ))}
    </div>
    {rows.map((row, rowIdx) => (
      <div
        key={rowIdx}
        className={`grid gap-0 ${rowIdx % 2 === 0 ? 'bg-background' : 'bg-background/50'}`}
        style={{ gridTemplateColumns: `repeat(${headers.length}, 1fr)` }}
      >
        {row.map((cell, cellIdx) => (
          <div
            key={cellIdx}
            className={`px-4 py-3 text-foreground/80 text-sm border-b border-border ${
              cellIdx < headers.length - 1 ? 'border-r border-border' : ''
            } ${cellIdx === 0 ? 'font-medium' : ''}`}
          >
            {cell}
          </div>
        ))}
      </div>
    ))}
  </div>
);

/**
 * BlogStats - Statistics box
 */
export const BlogStats = ({ stats }) => (
  <div className="bg-card border border-border rounded-lg p-6 mb-6 grid grid-cols-2 md:grid-cols-4 gap-6">
    {stats.map((stat, idx) => (
      <div key={idx}>
        <div className="text-3xl font-bold text-primary">{stat.val}</div>
        <div className="text-xs uppercase tracking-widest text-foreground/60 mt-2">
          {stat.label}
        </div>
      </div>
    ))}
  </div>
);

/**
 * BlogQuote - Pull quote
 */
export const BlogQuote = ({ quote, cite }) => (
  <div className="border-y border-border py-8 my-12 text-center">
    <blockquote className="text-xl md:text-2xl font-semibold italic text-foreground mb-4">
      "{quote}"
    </blockquote>
    <cite className="text-xs uppercase tracking-widest text-foreground/60">
      {cite}
    </cite>
  </div>
);

/**
 * BlogTakeaways - Key takeaways section
 */
export const BlogTakeaways = ({ items, title = "Key Takeaways" }) => (
  <section className="mt-16 pt-8 border-t border-border">
    <h3 className="text-2xl font-bold mb-6">{title}</h3>
    <p className="text-sm text-foreground/60 uppercase tracking-widest mb-4">
      Everything you need to remember from this post:
    </p>
    <div className="space-y-3 bg-card border border-border rounded-lg p-6">
      {items.map((item, idx) => (
        <div key={idx} className="flex gap-3">
          <span className="text-primary font-bold flex-shrink-0">✓</span>
          <p className="text-foreground/80 text-sm">{item}</p>
        </div>
      ))}
    </div>
  </section>
);
