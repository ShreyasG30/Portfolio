import { useState } from 'react';
import { Link } from 'react-router-dom';

const BlogRelatedPosts = ({ title, posts, subtitle = 'Continuously scrolling blogs' }) => {
  const [isHovering, setIsHovering] = useState(false);

  // Duplicate posts for seamless infinite loop
  const duplicatedPosts = [...posts, ...posts];

  const animationDuration = `${posts.length * 4}s`;

  return (
    <section className="mt-16 pt-8 border-t border-border">
      <style>{`
        @keyframes scroll-ticker {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .ticker-container {
          animation: scroll-ticker ${animationDuration} linear infinite;
          animation-play-state: ${isHovering ? 'paused' : 'running'};
        }
        .ticker-container:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="flex justify-center mb-6">
        <h3 className="text-2xl font-bold">{title}</h3>
      </div>

      <div 
        className="overflow-hidden pb-2"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="ticker-container flex gap-4">
          {duplicatedPosts.map((post, idx) => (
            <Link
              key={`${post.link}-${idx}`}
              to={post.link}
              className="group shrink-0 basis-full sm:basis-[calc(50%-0.5rem)] border border-border rounded-lg overflow-hidden bg-card hover:border-primary transition-colors"
            >
              <div className={`h-24 border-b border-border px-4 py-3 ${post.gradient}`}>
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">{post.part}</span>
                <p className="text-sm text-foreground/80 mt-1">{post.banner}</p>
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {post.title}
                </h4>
                <p className="text-xs text-foreground/60 mt-1">{post.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogRelatedPosts;