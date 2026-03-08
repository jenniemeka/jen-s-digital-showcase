import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Code2, Palette, Users, Rocket, ExternalLink } from "lucide-react";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

const projects = [
  { name: "Tymflow", desc: "Digital workflow platform for productivity", url: "https://tymflow.vercel.app", image: "/images/tymflow.png" },
  { name: "Programmify Academy", desc: "Learn programming through mentorship", url: "https://academy.programmify.org", image: "/images/programmify.png" },
  { name: "Tendly", desc: "Privacy-first file sharing platform", url: "https://tendly.xyz", image: "/images/tendly.png" },
];

const skills = [
  { icon: Palette, label: "Product Design", desc: "UI/UX, Figma, Design Systems" },
  { icon: Code2, label: "Development", desc: "React, TypeScript, Next.js" },
  { icon: Users, label: "Mentorship", desc: "Teaching coding to beginners" },
  { icon: Rocket, label: "Startups", desc: "Building & shipping products" },
];

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Google-style animated gradient blobs */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
        <div className="blob blob-4" />
      </div>

      {/* Hero */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              style={{ y: heroY, opacity: heroOpacity }}
              className="max-w-2xl flex-1"
            >
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-primary font-medium mb-4 tracking-wide uppercase text-sm"
              >
                Developer · Mentor · Founder
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.7 }}
                className="text-5xl md:text-7xl font-bold font-display leading-tight mb-6"
              >
                Jennifer{" "}
                <span className="text-gradient">Oluomachi</span>{" "}
                Omojo
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
              >
                I build digital products, teach people how to code, and create tools that empower individuals and communities.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-full px-8 shadow-[0_0_30px_-5px_hsl(25_95%_60%/0.4)] hover:shadow-[0_0_40px_-5px_hsl(25_95%_60%/0.6)] transition-shadow">
                  <Link to="/projects">
                    View Projects <ArrowRight className="ml-2" size={18} />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-8 border-border hover:bg-secondary">
                  <Link to="/contact">Get In Touch</Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Profile Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
              className="flex-shrink-0"
            >
              <div className="relative">
                <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-primary/30 shadow-[0_0_60px_-10px_hsl(25_95%_60%/0.35)]">
                  <img
                    src="/images/profile.png"
                    alt="Jennifer Oluomachi Omojo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -inset-3 rounded-full border border-primary/10 animate-[spin_20s_linear_infinite]" />
                <div className="absolute -inset-6 rounded-full border border-primary/5 animate-[spin_30s_linear_infinite_reverse]" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <Section>
        <SectionHeading title="What I Do" subtitle="Combining design, code, and mentorship to build impactful solutions." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="glass rounded-xl p-6 hover:border-primary/30 transition-all group hover:shadow-[0_15px_40px_-10px_hsl(270_70%_60%/0.2)]"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <skill.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{skill.label}</h3>
              <p className="text-sm text-muted-foreground">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Featured Projects with parallax */}
      <Section className="bg-card/30">
        <SectionHeading title="Featured Projects" subtitle="A selection of products I've built and co-founded." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="glass rounded-xl overflow-hidden hover:border-primary/30 transition-all group cursor-pointer hover:shadow-[0_20px_50px_-15px_hsl(270_70%_60%/0.2)]"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={`${project.name} preview`}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display font-semibold text-lg">{project.name}</h3>
                  <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <p className="text-sm text-muted-foreground">{project.desc}</p>
              </div>
            </motion.a>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button asChild variant="outline" className="rounded-full border-border hover:bg-secondary">
            <Link to="/projects">See All Projects <ArrowRight className="ml-2" size={16} /></Link>
          </Button>
        </div>
      </Section>

      {/* Mentorship */}
      <Section>
        <motion.div
          whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
          className="glass rounded-2xl p-8 md:p-12 glow-box relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
          <div className="max-w-2xl relative z-10">
            <p className="text-primary font-medium text-sm uppercase tracking-wide mb-3">Mentorship</p>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              Nurturing the Next Generation
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I mentor aspiring developers and teach young students how to code from scratch. Through Programmify, I'm helping build confidence in the next generation of African tech talent.
            </p>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </motion.div>
      </Section>

      {/* Contact CTA */}
      <Section className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Let's Build Something <span className="text-gradient">Together</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Have an idea, project, or collaboration in mind? I'd love to hear from you.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 shadow-[0_0_30px_-5px_hsl(270_70%_60%/0.4)]">
            <Link to="/contact">Get In Touch</Link>
          </Button>
        </motion.div>
      </Section>
    </div>
  );
};

export default Index;
