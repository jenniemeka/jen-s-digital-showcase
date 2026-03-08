import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    name: "Tymflow",
    url: "https://tymflow.vercel.app",
    image: "/images/tymflow.png",
    desc: "A digital workflow platform designed to help individuals and teams organize tasks and improve productivity.",
    role: "Founder",
    tags: ["Productivity", "Workflow", "SaaS"],
  },
  {
    name: "Programmify Academy",
    url: "https://academy.programmify.org",
    image: "/images/programmify.png",
    desc: "An online platform designed to teach programming and digital skills to beginners through structured lessons and mentorship.",
    role: "Co-Founder, Mentor",
    tags: ["EdTech", "Mentorship", "Learning"],
  },
  {
    name: "Tendly",
    url: "https://tendly.xyz",
    image: "/images/tendly.png",
    desc: "A privacy-first file sharing platform that allows users to send files securely with temporary and controlled access.",
    role: "Co-Founder",
    tags: ["Privacy", "File Sharing", "Security"],
  },
  {
    name: "Phalkn",
    url: "https://phalkn.com",
    image: "/images/phalkn.png",
    desc: "A digital platform focused on building modern web gaming experiences.",
    role: "Co-Founder & Developer",
    tags: ["Gaming", "Web", "Entertainment"],
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen pt-24 relative overflow-hidden">
      {/* Google-style animated gradient blobs */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
        <div className="blob blob-4" />
      </div>

      <Section>
        <SectionHeading title="Projects" subtitle="Products I've built and co-founded to solve real problems." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5, ease: "easeOut" }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="glass rounded-2xl overflow-hidden hover:border-primary/40 transition-all group hover:shadow-[0_20px_60px_-15px_hsl(270_70%_60%/0.25)]"
            >
              {/* Preview Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={`${project.name} preview`}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent" />
                <div className="absolute top-4 right-4">
                  <ExternalLink size={18} className="text-foreground/70 group-hover:text-primary transition-colors drop-shadow-lg" />
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-display font-bold text-xl mb-1 group-hover:text-primary transition-colors">
                      {project.name}
                    </h3>
                    <span className="text-xs text-primary font-medium uppercase tracking-wide">
                      {project.role}
                    </span>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Projects;
