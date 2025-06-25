import React from "react";

const blogs = [
  // Add your blogs here
];

const BlogsSection = () => (
  <section id="BlogsSection" className="py-24 px-4 relative">
    <div className="w-full max-w-[95rem] px-6 mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        <span className="text-primary">Blog Posts</span>
      </h2>
      {/* Add your blog cards here */}
      <div className="grid gap-8 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
        {blogs.map((blog, idx) => (
          <div key={idx} className="bg-card rounded-lg shadow-xs p-6">
            <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
            <p className="text-xs mb-2">{blog.date}</p>
            <p className="text-sm">{blog.summary}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BlogsSection;