import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Palette, Users, Rocket, ExternalLink } from "lucide-react";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";

const projects = [
  { name: "Tymflow", desc: "Digital workflow platform for productivity", url: "https://tymflow.vercel.app" },
  { name: "Programmify Academy", desc: "Learn programming through mentorship", url: "https://academy.programmify.org" },
  { name: "Tendly", desc: "Privacy-first file sharing platform", url: "https://tendly.xyz" },
];

const skills = [
  { icon: Palette, label: "Product Design", desc: "UI/UX, Figma, Design Systems" },
  { icon: Code2, label: "Development", desc: "React, TypeScript, Next.js" },
  { icon: Users, label: "Mentorship", desc: "Teaching coding to beginners" },
  { icon: Rocket, label: "Startups", desc: "Building & shipping products" },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-primary font-medium mb-4 tracking-wide uppercase text-sm"
            >
              Developer · Mentor · Founder
            </motion.p>
            <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight mb-6">
              Jennifer{" "}
              <span className="text-gradient">Oluomachi</span>{" "}
              Omojo
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
              I build digital products, teach people how to code, and create tools that empower individuals and communities.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-full px-8">
                <Link to="/projects">
                  View Projects <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 border-border hover:bg-secondary">
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>
          </motion.div>
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
              className="glass rounded-xl p-6 hover:border-primary/30 transition-all group"
            >
              <skill.icon className="text-primary mb-4" size={28} />
              <h3 className="font-display font-semibold text-lg mb-2">{skill.label}</h3>
              <p className="text-sm text-muted-foreground">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Featured Projects */}
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
              className="glass rounded-xl p-6 hover:border-primary/30 transition-all group cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display font-semibold text-lg">{project.name}</h3>
                <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="text-sm text-muted-foreground">{project.desc}</p>
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
        <div className="glass rounded-2xl p-8 md:p-12 glow-box">
          <div className="max-w-2xl">
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
        </div>
      </Section>

      {/* Contact CTA */}
      <Section className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
          Let's Build Something <span className="text-gradient">Together</span>
        </h2>
        <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
          Have an idea, project, or collaboration in mind? I'd love to hear from you.
        </p>
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10">
          <Link to="/contact">Get In Touch</Link>
        </Button>
      </Section>
    </div>
  );
};

export default Index;
