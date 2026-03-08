import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Send, Music, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

const socials = [
  { icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/jenniemeka" },
  { icon: Github, label: "GitHub", url: "https://github.com/Jenniemeka" },
  { icon: Twitter, label: "Twitter / X", url: "https://x.com/Jenniemeka" },
  { icon: Music, label: "TikTok", url: "https://www.tiktok.com/@jenni_emeka" },
];

const emails = [
  "jenniferemeka24@gmail.com",
  "jenniferoluomachiomojo@gmail.com",
];

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! Jennifer will get back to you soon.");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen pt-24 relative overflow-hidden">

      <Section>
        <SectionHeading title="Get In Touch" subtitle="Have a project idea or want to collaborate? Let's talk." />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Name</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg bg-secondary border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg bg-secondary border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
              <textarea
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-lg bg-secondary border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                placeholder="Tell me about your project or idea..."
              />
            </div>
            <Button type="submit" size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 w-full sm:w-auto">
              Send Message <Send className="ml-2" size={16} />
            </Button>
          </motion.form>

          {/* Social Links & Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {/* Email addresses */}
            <h3 className="font-display font-semibold text-xl mb-4">Email Me</h3>
            <div className="space-y-3 mb-8">
              {emails.map((addr) => (
                <a
                  key={addr}
                  href={`mailto:${addr}`}
                  className="glass rounded-xl p-4 flex items-center gap-4 hover:border-primary/30 transition-all group"
                >
                  <Mail className="text-primary flex-shrink-0" size={20} />
                  <span className="font-medium text-sm group-hover:text-primary transition-colors break-all">{addr}</span>
                </a>
              ))}
            </div>

            <h3 className="font-display font-semibold text-xl mb-4">Connect With Me</h3>
            <div className="space-y-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass rounded-xl p-4 flex items-center gap-4 hover:border-primary/30 transition-all group"
                >
                  <social.icon className="text-primary" size={22} />
                  <span className="font-medium group-hover:text-primary transition-colors">{social.label}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;
