import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Clock, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const posts = [
  {
    title: "How to Become an AI-Forward Engineer in 2026",
    excerpt: "A practical roadmap for engineers who want to stay relevant, and thrive, as AI reshapes how software gets built.",
    date: "Jun 2026",
    readTime: "9 min read",
    tags: ["AI", "Career", "Engineering"],
    content: `The phrase "AI-forward engineer" gets thrown around a lot, but it actually means something specific: an engineer who treats AI as a first-class tool in their workflow, designs systems that integrate language models thoughtfully, and continuously adapts as the tooling evolves. It's not about replacing your craft, it's about extending it.

Here's how to get there, based on what I've seen working with developers across the African tech ecosystem and from building AI-integrated products myself.

**1. Master the fundamentals first.** This sounds counterintuitive, but AI-forward engineering is built on top of strong software engineering. You still need to understand data structures, system design, API contracts, version control, testing, and deployment. AI tools amplify your output, if your foundation is weak, they amplify the weaknesses too.

**2. Learn how LLMs actually work, at least conceptually.** You don't need to train a model from scratch. But you should understand tokens, context windows, temperature, embeddings, vector databases, and the difference between fine-tuning, RAG (Retrieval Augmented Generation), and prompting. Resources like Andrej Karpathy's "Intro to LLMs" talk and Anthropic's prompting documentation are excellent starting points.

**3. Get fluent with the modern AI toolchain.** As of 2026, the practical stack includes:
- **Coding assistants** like Cursor, GitHub Copilot, Claude Code, and Lovable for building applications
- **Model APIs** from OpenAI, Anthropic, Google, and open-weight options like Llama and Mistral
- **Orchestration frameworks** like LangChain, LlamaIndex, and Vercel AI SDK
- **Vector databases** like Pinecone, Weaviate, and pgvector
- **Evaluation tools** like LangSmith, Braintrust, and Helicone for tracking model performance

You don't need all of them. Pick one in each category and ship something real.

**4. Build evaluation into your workflow.** This is what separates hobbyists from serious AI engineers. Models are non-deterministic, the same prompt can return different outputs. Without evals, you're flying blind. Learn to write test cases for prompts, measure quality with rubrics, and track regressions across model versions.

**5. Learn prompt engineering as a real skill.** Good prompts are structured, specific, and tested. Study techniques like chain-of-thought, few-shot examples, system prompts, and structured outputs (JSON mode, function calling). Treat prompts like code, version them, review them, refactor them.

**6. Understand the cost and latency trade-offs.** Every AI call costs money and time. AI-forward engineers design systems that route to the right model for the right task, a small fast model for classification, a large powerful model for reasoning. Caching, streaming, and smart batching are no longer optional.

**7. Stay critical.** AI hype is loud. Not every problem needs a model. Sometimes a regex, a SQL query, or a simple rule beats an LLM in cost, latency, and reliability. The best AI engineers know when not to use AI.

**8. Build in public.** Share what you're learning. Post your projects, write about what worked and what didn't, contribute to open source AI tools. The AI engineering community is small, fast-moving, and incredibly welcoming to people who show up consistently.

**The mindset shift:** Stop thinking of yourself as "a developer who uses AI." Start thinking of yourself as someone who designs intelligent systems, where some logic lives in code, some in models, and some in the interplay between them. That mental model will carry you for the next decade.

The engineers who thrive in this era won't be the ones with the deepest ML PhDs. They'll be the ones who can take a vague problem, decompose it, choose the right blend of deterministic code and AI, and ship something that actually works in production.`,
  },
  {
    title: "Transitioning Into Tech From Any Field",
    excerpt: "A grounded guide for career changers, from teachers and accountants to artists and lawyers, moving into tech in the AI era.",
    date: "May 2026",
    readTime: "8 min read",
    tags: ["Career", "Transition", "Tech"],
    content: `I transitioned into tech from Economics. I've mentored people who came from nursing, law, fashion design, banking, theology, and teaching. The path is real, but it looks different in 2026 than it did even three years ago. Here's an honest guide.

**Your background is an asset, not a liability.** The tech industry is over-indexed on people who think the same way. A teacher understands learning psychology better than most developers. An accountant understands risk and compliance. A nurse understands high-stakes decision making under pressure. A designer understands taste. These perspectives are valuable, own them.

**Step 1: Pick a direction based on what you already love.**

Tech is not one career. It's dozens. Some paths that match common backgrounds:

- **Teachers → Developer Education, Technical Writing, Curriculum Design, Developer Relations**
- **Accountants/Finance → FinTech Product, Data Analytics, Revenue Operations, Compliance Engineering**
- **Designers/Artists → Product Design, UX Research, Brand Engineering, Creative Technology**
- **Lawyers → Legal Tech, Policy, Trust & Safety, Privacy Engineering**
- **Healthcare → Health Tech Product, Clinical AI, Medical Data Science**
- **Writers → Content Design, Technical Writing, Prompt Engineering, Developer Advocacy**

Don't try to become a generic "developer." Pick the intersection of tech and your existing expertise, that's where you'll move fastest and stand out most.

**Step 2: Build foundational literacy.**

Even if you're not going to be a full-time coder, you need basic tech literacy in 2026:
- How the web works (HTTP, browsers, servers, databases)
- How to use Git and GitHub
- Basic HTML, CSS, and JavaScript or Python
- How AI tools work and how to use them effectively
- How to read documentation

You can get this through free resources: freeCodeCamp, The Odin Project, CS50 from Harvard, and YouTube. You don't need a bootcamp for the basics.

**Step 3: Use AI as your unfair advantage.**

This is the biggest shift from older "switch to tech" advice. Tools like Lovable, Cursor, and ChatGPT let you build real products faster than ever. A career changer in 2026 can ship a working app in their first month, something that took six months in 2020.

Use AI to:
- Explain concepts you don't understand
- Debug your code
- Generate starter projects you can then modify and learn from
- Review your work and suggest improvements

But, don't skip the understanding. AI is a tutor and accelerator, not a replacement for learning. If you copy code you don't understand, you'll hit a wall fast.

**Step 4: Build a portfolio of real things.**

Forget tutorials after the first month. Build things that solve problems you actually have. A teacher could build a quiz generator. An accountant could build an invoice tracker. A fitness coach could build a workout logger. Real problems make for real portfolios and real conversations in interviews.

**Step 5: Get into community.**

This is where most career changers fail. They learn in isolation, get discouraged, and quit. Find your people:
- Twitter/X tech community
- Local meetups and tech hubs (in Africa: Andela Learning Community, Programmify, ALX, Lagos Tech Fest)
- Discord servers for specific tools (Lovable, Cursor, Next.js)
- Open source contributions

Community gives you accountability, feedback, and eventually job referrals.

**Step 6: Bridge, don't leap.**

If possible, transition gradually. Take on side projects in your current role that use tech. A teacher might digitize their school's reporting system. A lawyer might automate document review. This builds your portfolio while you still have income, and it makes the eventual leap feel natural rather than terrifying.

**A note on timelines:** Most successful transitions I've seen take 9 to 18 months from "I want to do this" to "I have a tech role." Anyone promising you a 3-month transition is selling you something. Anyone telling you it takes 5 years is gatekeeping. Pace yourself.

**The truth nobody says:** Transitioning into tech is hard. There will be days you feel stupid. There will be applications that go nowhere. There will be moments you want to quit. That's normal. The people who make it through aren't the smartest, they're the most consistent. Show up daily, even when it's hard. That's the whole secret.

You're not behind. You're early. The AI era is rewriting the rules, and that means there's room for people who think differently. That includes you.`,
  },
  {
    title: "New Roles Emerging in the AI Era",
    excerpt: "The job titles that didn't exist five years ago, and what they actually do. A guide to where tech careers are heading.",
    date: "Apr 2026",
    readTime: "7 min read",
    tags: ["AI", "Future of Work", "Careers"],
    content: `Every technological shift creates new job categories. The internet gave us web developers, social media managers, and SEO specialists. Mobile gave us iOS engineers and mobile product managers. AI is doing the same, but faster. Here are the roles that have emerged or matured in the last two years, what they actually do, and how to position yourself for them.

**1. AI Engineer**

Not to be confused with ML engineers (who train models), AI engineers build applications on top of existing models. They design prompts, orchestrate model calls, integrate vector databases, set up evaluation pipelines, and ship AI features to production. This is one of the fastest-growing roles in tech, and the bar is more about systems thinking than deep math.

**Skills needed:** Strong software engineering, API design, prompt engineering, basic LLM intuition, eval frameworks.

**2. Prompt Engineer / Prompt Architect**

A few years ago people debated whether this was a real role. It is, but it has evolved. Pure prompt engineers are rare; the role has merged into AI engineering and product work. However, "Prompt Architects" exist at larger companies, designing the prompt systems that power customer-facing AI products. Think of them as the API designers of the LLM age.

**3. AI Product Manager**

Traditional PMs ship features. AI PMs ship probabilistic systems. They have to think about model selection, evaluation, hallucination risk, user trust, latency budgets, and the unique UX patterns AI products demand. Companies are paying premiums for PMs who deeply understand both product and AI capabilities.

**4. AI Solutions Architect**

The enterprise-facing role. They work with companies to figure out where AI can actually help (and where it can't), design the integration architecture, and lead implementation. Heavy on consulting skills, light on coding. Great fit for ex-consultants and senior engineers who like working with humans.

**5. Evaluation Engineer**

A specialized role focused entirely on measuring AI quality. They build datasets, design rubrics, run experiments, and create the feedback loops that let teams ship AI features with confidence. As AI moves into regulated industries, this role is exploding.

**6. AI Safety & Trust Engineer**

Focused on making AI systems reliable, fair, and safe. They red-team models, design guardrails, build content moderation pipelines, and ensure compliance with emerging AI regulations like the EU AI Act. The role spans engineering, ethics, and policy.

**7. Data Curator / Data Annotator Lead**

Models are only as good as their data. As companies fine-tune models or build evaluation sets, they need people who can design data collection strategies, manage annotation teams, and ensure data quality. This role often grows out of operations or research backgrounds.

**8. AI-Augmented Developer**

Not a new title, but the job has fundamentally changed. Modern developers ship 3 to 5 times more code than they did in 2022, primarily because they're using AI coding assistants effectively. The skill isn't just writing code anymore; it's directing, reviewing, and verifying AI-generated code.

**9. Agent Engineer**

A newer specialty focused on building autonomous AI agents, systems that take actions, use tools, and complete multi-step tasks. Requires understanding of agent frameworks (LangGraph, AutoGen, Claude Agent SDK), tool design, and failure-mode handling.

**10. AI Ops / LLMOps Engineer**

The DevOps of AI. They manage model deployment, monitor inference costs, handle scaling, set up observability for LLM apps, and manage the infrastructure that keeps AI systems running. As AI moves into production at scale, this role becomes critical.

**11. Conversational Designer**

Designers who specialize in voice and chat interfaces. They craft how AI products talk, tone, personality, error handling, recovery flows. Increasingly important as voice agents and chat-first products multiply.

**12. AI Educator / Developer Advocate (AI)**

Companies building AI tools need people who can teach developers how to use them well. This role blends teaching, content creation, community building, and technical depth. Great fit for people coming from teaching or content backgrounds.

**13. AI Ethicist / Policy Specialist**

As governments regulate AI, companies need people who understand both the technology and the policy landscape. Roles range from internal ethics review to external regulatory affairs. Background in law, philosophy, or social science is often a strength here.

**14. Synthetic Media Specialist**

Designers and creatives who work with generative image, video, and audio tools. They produce marketing assets, product visuals, and creative work at a scale previously impossible. The good ones combine craft, taste, and tool fluency.

**15. Founder / Solo Operator**

Maybe the most underrated "new role." AI has dropped the cost of building software so dramatically that solo founders can now build products that used to require teams of ten. The number of profitable one-person companies is growing fast.

**What this means for you:**

If you're early in your career, don't chase titles, chase skills. The titles will change again in two years. The underlying capabilities (systems thinking, prompt design, evaluation, product sense, AI literacy) will compound.

If you're mid-career, find the intersection of your existing expertise and AI. A marketer who understands AI is more valuable than a generic AI engineer. Same for lawyers, teachers, designers, and operators.

If you're a leader, start hiring for these roles now. The companies that build AI capability into their teams in 2026 will outpace everyone else by 2028.

The AI era isn't coming. It's here. The good news? It's still early enough to be part of shaping what comes next.`,
  },
  {
    title: "Building Startups as a Solo Founder",
    excerpt: "Lessons learned from building multiple products from scratch, the wins, failures, and everything in between.",
    date: "Mar 2026",
    readTime: "6 min read",
    tags: ["Startups", "Founder Life"],
    content: `Starting a company alone is one of the most challenging, and rewarding, things I've ever done. Over the past few years, I've launched multiple products including Tymflow, Tendly, and Phalkn, each from a simple idea to a shipped product used by real people.

**The hardest part isn't coding, it's deciding what to build.** When you're a solo founder, every decision falls on your shoulders. You're the designer, the developer, the marketer, and the support team. That means learning to prioritize ruthlessly.

Here are a few things I've learned:

**1. Ship fast, iterate faster.** Your first version won't be perfect, and that's okay. I launched Tymflow with a minimal feature set, just task management and a clean interface. User feedback shaped everything that came after.

**2. Talk to your users early.** Before writing a single line of code for Tendly, I talked to people about how they share files. Their frustrations with existing tools gave me the roadmap.

**3. Burnout is real.** There were weeks where I worked 14-hour days and felt like I was going backward. I learned to take breaks, set boundaries, and remember that the product will still be there tomorrow.

**4. Community matters.** Being part of the African tech ecosystem means I'm never truly alone. Other founders, mentors, and developers have been invaluable, offering advice, testing products, and sometimes just listening.

Building solo doesn't mean building in isolation. It means owning your vision while being open to learning from everyone around you.`,
  },
  {
    title: "Why I Teach Kids to Code",
    excerpt: "How introducing young minds to programming can change their trajectory and build confidence early on.",
    date: "Feb 2026",
    readTime: "5 min read",
    tags: ["Mentorship", "Education"],
    content: `I still remember the first time a student I mentored built their first website. Her name was Amina, she was 13, and when she saw her "About Me" page live in the browser, her eyes lit up. "I made that?" she asked. That moment is why I teach.

**Coding isn't just a technical skill, it's a thinking skill.** When kids learn to code, they learn to break problems into smaller pieces, think logically, and create something from nothing. These are life skills that go far beyond programming.

**Starting early matters.** In many African communities, access to tech education comes late, sometimes not until university. By then, students have already formed beliefs about what they can and can't do. Teaching kids early breaks those mental barriers.

**At Programmify, we meet learners where they are.** Some students come with laptops, others share a single computer. Some have never used the internet. We adapt. We start with the basics, what is a computer, what is the web, and build from there.

**My teaching philosophy is simple:**
- Make it fun. If a lesson feels like homework, I've failed.
- Celebrate every win. Your first "Hello World" deserves applause.
- Connect coding to their interests. Love music? Let's build a playlist app. Love art? Let's animate something.
- Be patient. Everyone learns at their own pace.

**The impact goes beyond code.** Parents tell me their kids are more curious, more confident, and more willing to try new things. One parent said her son now helps her troubleshoot her phone. That's the ripple effect.

The tech industry talks a lot about "the next generation." I'd rather invest in them than talk about them.`,
  },
  {
    title: "AI in Product Design: A Practical Guide",
    excerpt: "Exploring how AI tools are reshaping the design process and what designers should know right now.",
    date: "Jan 2026",
    readTime: "7 min read",
    tags: ["AI", "Design"],
    content: `AI is not replacing designers. But designers who use AI are starting to outpace those who don't. Here's what I've learned from integrating AI into my design workflow.

**Where AI actually helps in design:**

**1. Rapid prototyping.** Tools like AI-powered design assistants can generate layout variations in seconds. Instead of sketching 10 wireframes, I generate 20 and pick the best elements from each. It's not about replacing creativity, it's about accelerating exploration.

**2. Content generation for mockups.** No more "Lorem ipsum." I use AI to generate realistic copy for mockups, which helps stakeholders understand the design in context. This alone has reduced feedback cycles significantly.

**3. User research analysis.** When you have hundreds of survey responses or interview transcripts, AI can surface patterns and themes faster than manual analysis. I still read the raw data, but AI gives me a head start.

**4. Accessibility checking.** AI tools can flag contrast issues, missing alt text, and navigation problems before they reach production. This isn't glamorous, but it's essential.

**Where AI falls short:**

- **Empathy.** AI can analyze user data but can't truly understand the frustration of a first-time user struggling with your onboarding flow.
- **Brand intuition.** Design systems need a human touch, understanding why a brand feels a certain way is still deeply human.
- **Edge cases.** AI tends to optimize for the average case. Great design considers the edges.

**My recommendation:** Use AI as a collaborator, not a replacement. Let it handle the repetitive and analytical tasks so you can focus on what humans do best, understanding people and crafting experiences that resonate.

The designers who thrive in the AI era won't be the ones who resist it. They'll be the ones who learn to dance with it.`,
  },
  {
    title: "From Economics to Engineering",
    excerpt: "My unconventional journey from studying economics to building tech products full-time.",
    date: "Dec 2025",
    readTime: "5 min read",
    tags: ["Career", "Personal"],
    content: `People often ask me how an Economics graduate ended up building tech products. The truth is, the path was anything but straight, and that's exactly what made it valuable.

**Economics taught me to think in systems.** Supply and demand, market behavior, incentive structures, these concepts map surprisingly well to product design. When I'm building a feature, I think about user incentives. When I'm pricing a product, I think about value perception. My degree didn't go to waste; it just found a different application.

**The switch wasn't sudden.** During university, I started designing social media graphics for friends and small businesses. That led to learning Figma. Figma led to wondering "what if I could build this?" That curiosity led to HTML, CSS, JavaScript, and eventually React.

**There was no "aha" moment, just consistent curiosity.** I spent nights watching YouTube tutorials, building terrible projects, and breaking things. My first website was a single-page portfolio that looked like it was from 2005. But I shipped it, and that felt incredible.

**What helped me transition:**
- **Online communities.** Twitter (now X) connected me with developers who shared resources and encouragement.
- **Building in public.** Sharing my progress, even the messy parts, attracted mentors and collaborators.
- **Solving real problems.** Instead of tutorial projects, I built tools I actually needed. That's how Tymflow started.

**To anyone considering a non-traditional path into tech:** Your background is not a disadvantage. It's a perspective that most engineers don't have. The tech industry needs economists, artists, teachers, and storytellers just as much as it needs computer science graduates.

Your unique path is your superpower. Own it.`,
  },
  {
    title: "The Developer Mentorship Gap in Africa",
    excerpt: "Why mentorship matters more than bootcamps, and what we're doing about it at Programmify.",
    date: "Nov 2025",
    readTime: "6 min read",
    tags: ["Mentorship", "Africa Tech"],
    content: `Africa's tech ecosystem is booming. Every week, a new startup launches, a new developer graduates from a bootcamp, and a new tech hub opens its doors. But there's a quiet crisis underneath the growth: most new developers don't have mentors.

**Bootcamps teach skills. Mentors build careers.** A bootcamp can teach you React in 12 weeks. But who teaches you how to navigate your first job? How to handle imposter syndrome? How to negotiate your salary? How to choose between two job offers? That's where mentorship comes in.

**The numbers are stark.** In many African countries, the ratio of senior developers to juniors is heavily skewed. Senior developers are often too busy, or too burned out, to mentor. And formal mentorship programs are rare.

**What we're doing at Programmify:**

We created the Founders Fellowship, a program where young tech enthusiasts don't just learn to code, but learn to build and ship products. Each fellow is paired with a mentor who guides them through the entire process.

**Our approach:**
- **Project-based learning.** No abstract exercises. Fellows build real products that solve real problems.
- **Weekly check-ins.** Consistent touchpoints prevent people from falling through the cracks.
- **Community cohorts.** Learning alongside peers creates accountability and camaraderie.
- **Career guidance.** We help fellows with portfolios, interview prep, and professional networking.

**The results speak for themselves.** Fellows have launched products, landed jobs, and started their own ventures. More importantly, they've gained confidence, the belief that they belong in tech.

If you're a senior developer reading this, consider mentoring someone. Even one hour a week can change a life. And if you're a beginner looking for guidance, reach out. The tech community is more welcoming than you think.`,
  },
  {
    title: "Designing Privacy-First Products",
    excerpt: "Lessons from building Tendly, why privacy should be a feature, not an afterthought.",
    date: "Oct 2025",
    readTime: "5 min read",
    tags: ["Product Design", "Privacy"],
    content: `When I started building Tendly, the idea was simple: let people share files without worrying about who else might access them. But designing for privacy turned out to be one of the most intellectually challenging things I've done.

**Privacy is invisible when done right.** Users shouldn't have to think about encryption algorithms or data retention policies. They should just feel safe. That means the UX has to do the heavy lifting, making secure choices the default, not the exception.

**Key design decisions we made:**

**1. Temporary by default.** Every shared file has an expiration. Users can extend it, but the default is ephemeral. This shifts the paradigm from "everything lives forever" to "sharing is intentional."

**2. No accounts required.** For basic file sharing, we don't ask for an email. Less data collected means less data at risk. This was a business trade-off, we can't retarget these users, but it was the right call.

**3. Clear visual feedback.** When a file expires, users see it happen. When a link is accessed, the sender knows. Transparency builds trust.

**4. Simple language.** No jargon. Instead of "end-to-end encryption enabled," we say "Only you and your recipient can see this file." Same meaning, more accessible.

**The business case for privacy:**

Some people think privacy-first means anti-growth. I disagree. In a world of data breaches and surveillance capitalism, privacy is becoming a competitive advantage. Users are actively seeking tools that respect their data.

Tendly isn't the biggest file-sharing platform. But the users who choose it are loyal, because they trust it. And in the long run, trust beats scale.

**If you're building a product, ask yourself:** What data do I actually need? Can I give users more control? Can I make the secure option the easy option? Start there, and you're already ahead of most.`,
  },
];

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  return (
    <div className="min-h-screen pt-24 relative overflow-hidden">

      <AnimatePresence mode="wait">
        {selectedPost !== null ? (
          <motion.div
            key="article"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Section>
              <Button
                variant="ghost"
                onClick={() => setSelectedPost(null)}
                className="mb-8 text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft size={16} className="mr-2" />
                Back to all articles
              </Button>

              <article className="glass rounded-2xl p-8 md:p-12 max-w-3xl mx-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                  {posts[selectedPost].tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full bg-primary/15 text-primary font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground mb-6">
                  <span>{posts[selectedPost].date}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1"><Clock size={14} /> {posts[selectedPost].readTime}</span>
                </div>
                <h1 className="font-display font-bold text-3xl md:text-4xl mb-8 leading-tight">
                  {posts[selectedPost].title}
                </h1>
                <div className="prose prose-invert max-w-none">
                  {posts[selectedPost].content.split('\n\n').map((paragraph, i) => (
                    <p key={i} className="text-muted-foreground leading-relaxed mb-4 text-[15px]">
                      {paragraph.split('**').map((part, j) =>
                        j % 2 === 1 ? (
                          <strong key={j} className="text-foreground font-semibold">{part}</strong>
                        ) : (
                          <span key={j}>{part}</span>
                        )
                      )}
                    </p>
                  ))}
                </div>
              </article>
            </Section>
          </motion.div>
        ) : (
          <motion.div
            key="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Section>
              <SectionHeading title="Blog" subtitle="Thoughts on startups, design, mentorship, and emerging tech." />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {posts.map((post, i) => (
                  <motion.article
                    key={post.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    onClick={() => setSelectedPost(i)}
                    className="glass rounded-2xl p-8 hover:border-primary/30 transition-all group cursor-pointer hover:shadow-[0_15px_40px_-10px_hsl(25_95%_60%/0.15)]"
                  >
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span key={tag} className="text-xs px-3 py-1 rounded-full bg-primary/15 text-primary font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                      <span>{post.date}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                    </div>
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Blog;
