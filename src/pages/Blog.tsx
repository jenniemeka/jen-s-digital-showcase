import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    title: "Building Startups as a Solo Founder",
    excerpt: "Lessons learned from building multiple products from scratch — the wins, failures, and everything in between.",
    date: "Mar 2026",
    tags: ["Startups", "Founder Life"],
  },
  {
    title: "Why I Teach Kids to Code",
    excerpt: "How introducing young minds to programming can change their trajectory and build confidence early on.",
    date: "Feb 2026",
    tags: ["Mentorship", "Education"],
  },
  {
    title: "AI in Product Design: A Practical Guide",
    excerpt: "Exploring how AI tools are reshaping the design process and what designers should know right now.",
    date: "Jan 2026",
    tags: ["AI", "Design"],
  },
  {
    title: "From Economics to Engineering",
    excerpt: "My unconventional journey from studying economics to building tech products full-time.",
    date: "Dec 2025",
    tags: ["Career", "Personal"],
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen pt-24">
      <Section>
        <SectionHeading title="Blog" subtitle="Thoughts on startups, design, mentorship, and emerging tech." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-8 hover:border-primary/30 transition-all group cursor-pointer"
            >
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mb-2">{post.date}</p>
              <h3 className="font-display font-bold text-xl mb-3 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{post.excerpt}</p>
              <span className="text-primary text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Read More <ArrowRight size={14} />
              </span>
            </motion.article>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Blog;
