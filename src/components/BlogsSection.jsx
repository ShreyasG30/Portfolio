import React from "react";
import { Link } from "react-router-dom";

const blogs = [
  // {
  //   id: "smoke-control",
  //   title: "How Do You Stop Smoke in a 105,000-Seat Stadium?",
  //   date: "March 2026",
  //   category: "MEP Engineering",
  //   summary: "A plain-language guide to smoke control engineering — told through the real systems being installed at the Spotify Camp Nou renovation in Barcelona.",
  //   link: "/blogs/smoke-control"
  // },
  {
    id: "hvac-cfd-role",
    title: "The Role of CFD in HVAC Design",
    date: "3 May 2026",
    category: "MEP Engineering",
    summary: "A critical look at where CFD genuinely helps HVAC design, where it misleads, and why polished simulations can still hide bad assumptions.",
    link: "/blogs/hvac-cfd-role"
  },
  {
    id: "hvac-citation-calculations",
    title: "HVAC Calculations With Proof and References",
    date: "26 April 2026",
    category: "MEP Engineering",
    summary: "A citation-backed HVAC calculation guide with auditable defaults, additional core checks (ventilation, CO2, SFP, TR conversion), and an editable calculator.",
    link: "/blogs/hvac-citation-calculations"
  },
  {
    id: "hvac-load-calculations",
    title: "HVAC Load Calculation Deep Dive: From Basics to Numbers",
    date: "18 April 2026",
    category: "MEP Engineering",
    summary: "A calculation-focused continuation of the HVAC basics post with a full worked example: sensible/latent load, airflow, fan power, and zone equipment sizing.",
    link: "/blogs/hvac-load-calculations"
  },
  {
    id: "hvac-systems",
    title: "HVAC Systems in Large Buildings: How They Work and Why They Matter",
    date: "11 April 2026",
    category: "MEP Engineering",
    summary: "A technical-but-readable guide to HVAC fundamentals, practical building applications, and how systems scale for large venues like Camp Nou.",
    link: "/blogs/hvac-systems"
  }
];

const BlogsSection = () => (
  <section id="BlogsSection" className="py-24 px-4 relative">
    <div className="w-full max-w-[95rem] px-6 mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
					My <span className="text-primary">Blogs</span>
			</h2>
      {blogs.length > 0 ? (
        <div className="grid gap-8 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
          {blogs.map((blog, idx) => (
            <Link
              key={idx}
              to={blog.link}
              className="bg-card rounded-lg shadow-xs p-6 border border-border hover:border-primary transition-all duration-300 hover:shadow-md hover:scale-105"
            >
              <div className="inline-block px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
                {blog.category}
              </div>
              <h3 className="text-xl font-semibold mb-2 line-clamp-2">{blog.title}</h3>
              <p className="text-xs text-foreground/60 mb-3">{blog.date}</p>
              <p className="text-sm text-foreground/70">{blog.summary}</p>
              <div className="mt-4 inline-flex items-center gap-2 text-primary text-sm font-medium">
                Read More →
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-foreground/60">
          <p>No blogs published yet. Check back soon!</p>
        </div>
      )}
    </div>
  </section>
);

export default BlogsSection;