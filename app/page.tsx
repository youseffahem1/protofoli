"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const NAV_LINKS = [
  { label: "Work", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const PROJECTS: {
  tag: string;
  title: string;
  description: string;
  stack: string[];
  accent: string;
  border: string;
  glow: string;
  github?: string;
  demo?: string;
}[] = [
  {
    tag: "FRONT-END UI PROJECT",
    title: "Apple Liquid Login",
    description:
      "A premium Apple-inspired liquid glass login interface built with Next.js, TypeScript, Tailwind CSS, and modern UI animations. Focused on smooth interactions, glassmorphism design, and high-end user experience.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP", "Glassmorphism"],
    accent: "from-cyan-500/20 to-purple-500/10",
    border: "border-cyan-500/20",
    glow: "group-hover:shadow-cyan-500/20",
    github: "https://github.com/youseffahem1/apple-liquid-login",
    demo: "https://apple-liquid-login-fa6q.vercel.app/",
  },
  {
    tag: "FRONT-END UI PROJECT",
    title: "Modern Glass Login",
    description:
      "A sleek, modern glassmorphism login interface. Designed with beautiful gradients, smooth transitions, and a clean user experience.",
    stack: ["React", "Glassmorphism", "UI/UX"],
    accent: "from-purple-500/20 to-pink-500/10",
    border: "border-purple-500/20",
    glow: "group-hover:shadow-purple-500/20",
    github: "https://github.com/youseffahem1/Glass-Login-Vibe-Aplle-Spotfy",
    demo: "https://glass-login-vibe-aplle-spotfy.vercel.app/",
  },
  {
    tag: "FRONT-END UI PROJECT",
    title: "sony-wh1000xm-experience",
    description:
      "A sleek, modern glassmorphism login interface. Designed with beautiful gradients, smooth transitions, and a clean user experience.",
    stack: [
      "React",
      "Glassmorphism",
      "UI/UX",
      "Tailwind CSS",
      "next.js",
      "TypeScript",
      "GSAP",
    ],
    accent: "from-purple-100/20 to-pink-900/10",
    border: "border-purple-500/20",
    glow: "group-hover:shadow-purple-500/20",
    github: "https://github.com/youseffahem1/sony-wh1000xm-experience",
    demo: "https://sony-wh1000xm-experience.vercel.app/",
  },
];

const STACK_ITEMS = [
  {
    category: "Front-End",
    items: [
      "Next.js 14",
      "React 18",
      "TypeScript",
      "Tailwind CSS",
      "GSAP / ScrollTrigger",
    ],
  },
  {
    category: "Back-End",
    items: ["FastAPI", "Python 3.12", "SQLAlchemy", "Tortoise-ORM", "Alembic"],
  },
  {
    category: "Data Layer",
    items: ["PostgreSQL 16", "pgvector", "Redis", "Celery", "AsyncPG"],
  },
  {
    category: "Infrastructure",
    items: ["Docker", "Nginx", "GitHub Actions", "Linux", "AWS / VPS"],
  },
];

function Nav() {
  const navRef = useRef<HTMLElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const links = navRef.current?.querySelectorAll("a.nav-link");
    if (!links) return;

    links.forEach((link) => {
      const el = link as HTMLElement;

      const onEnter = () => {
        gsap.to(el, {
          color: "#a78bfa",
          textShadow: "0 0 16px rgba(167,139,250,0.7)",
          duration: 0.25,
          ease: "power2.out",
        });
      };
      const onLeave = () => {
        gsap.to(el, {
          color: "rgba(255,255,255,0.6)",
          textShadow: "none",
          duration: 0.3,
          ease: "power2.in",
        });
      };

      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-purple-500/10"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-purple-500/30">
            <span className="text-white font-black text-sm tracking-tight">
              YF
            </span>
          </div>
          <span className="text-white/80 font-light tracking-[0.2em] text-xs uppercase hidden sm:block">
            Yousef<span className="text-purple-400">.</span>dev
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="nav-link text-white/60 text-xs tracking-[0.15em] uppercase font-medium transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 px-4 py-1.5 rounded-full border border-purple-500/40 text-purple-300 text-xs tracking-widest uppercase font-semibold hover:bg-purple-500/10 hover:border-purple-400/60 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
          >
            Hire Me
          </a>
        </div>

        <button
          className="md:hidden text-white/80 hover:text-white transition-colors p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-[#0b0813]/95 backdrop-blur-xl border-b border-purple-500/10 p-6 flex flex-col gap-6 shadow-2xl">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white/70 hover:text-purple-400 text-sm tracking-[0.2em] uppercase font-medium transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-2 text-center px-4 py-3 rounded-full border border-purple-500/40 text-purple-300 text-xs tracking-widest uppercase font-semibold hover:bg-purple-500/10 transition-all duration-300"
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.4 });

    tl.fromTo(
      badgeRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
    );

    tl.fromTo(
      lineRef.current,
      { scaleX: 0, opacity: 0 },
      { scaleX: 1, opacity: 1, duration: 0.6, ease: "power4.out" },
      "-=0.3",
    );

    const words = headlineRef.current?.querySelectorAll(".word");
    if (words) {
      tl.fromTo(
        words,
        { opacity: 0, y: 60, rotateX: -15 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 1,
          stagger: 0.06,
          ease: "expo.out",
        },
        "-=0.2",
      );
    }

    tl.fromTo(
      subRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      "-=0.4",
    );

    tl.fromTo(
      ctaRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
      "-=0.3",
    );
  }, []);

  const headline = "ARCHITECTING NEXT-GEN DIGITAL ECOSYSTEMS";
  const words = headline.split(" ");

  return (
    <section
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center pt-16 md:pt-0"
    >
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/portal.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-[#0b0813] z-10 pointer-events-none" />

      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full bg-purple-600/10 blur-[90px] md:blur-[120px]" />
      </div>

      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
        <div
          ref={badgeRef}
          className="opacity-0 inline-flex items-center gap-2 mb-6 md:mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/80 animate-pulse" />
          <span className="text-emerald-400/80 text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] uppercase font-medium">
            Available for Elite Projects
          </span>
        </div>

        <div
          ref={lineRef}
          className="opacity-0 origin-left w-16 md:w-24 h-px bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-6 md:mb-8 shadow-sm shadow-purple-500/50"
        />

        <h1
          ref={headlineRef}
          className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-[1.1] md:leading-[0.9] mb-6 perspective-[1200px]"
          style={{ perspective: "1200px" }}
        >
          {words.map((word, i) => (
            <span
              key={i}
              className="word inline-block opacity-0 mr-[0.18em] last:mr-0"
              style={{
                background:
                  i % 3 === 0
                    ? "linear-gradient(135deg, #fff 0%, #e2d9f3 100%)"
                    : i % 3 === 1
                      ? "linear-gradient(135deg, #a78bfa 0%, #67e8f9 100%)"
                      : "linear-gradient(135deg, #c4b5fd 0%, #fff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {word}
            </span>
          ))}
        </h1>

        <p
          ref={subRef}
          className="opacity-0 text-white/50 text-sm md:text-lg font-light tracking-wide max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed"
        >
          Full-Stack Engineer & Web Architect — crafting performant, scalable
          systems with <span className="text-purple-400/90">Next.js</span>,{" "}
          <span className="text-cyan-400/90">FastAPI</span>, and{" "}
          <span className="text-violet-400/90">PostgreSQL</span>.
          <br className="hidden md:block" />
          <span className="block mt-2 md:mt-0 md:inline">
            22 years old. Building the future, one architecture at a time.
          </span>
        </p>

        <div
          ref={ctaRef}
          className="opacity-0 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto group relative px-8 py-3.5 md:py-3 rounded-full bg-gradient-to-r from-purple-600 to-violet-600 text-white text-sm font-semibold tracking-widest uppercase shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-[1.03] transition-all duration-300"
          >
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3.5 md:py-3 rounded-full border border-white/10 text-white/60 text-sm font-medium tracking-widest uppercase hover:border-purple-500/40 hover:text-white/90 hover:bg-white/5 transition-all duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>

      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-40 hidden sm:flex">
        <span className="text-white/50 text-[10px] tracking-[0.3em] uppercase">
          Scroll
        </span>
        <div className="w-px h-8 md:h-12 bg-gradient-to-b from-purple-500/60 to-transparent animate-pulse" />
      </div>
    </section>
  );
}

function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
        },
      },
    );

    const cards = cardsRef.current?.querySelectorAll(".project-card");
    if (cards) {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 60, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "expo.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
          },
        },
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative py-20 md:py-32 bg-[#0b0813]"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-96 h-96 bg-purple-600/8 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-cyan-600/8 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div ref={headingRef} className="opacity-0 mb-12 md:mb-20">
          <p className="text-purple-400/70 text-[10px] md:text-xs tracking-[0.35em] uppercase font-medium mb-3 md:mb-4">
            Selected Work
          </p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white mb-4">
            Engineered{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #a78bfa, #67e8f9)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              with Precision
            </span>
          </h2>
          <p className="text-white/40 text-sm md:text-base max-w-xl font-light leading-relaxed">
            Each build is a deliberate system — purpose-architected,
            performance-obsessed, and built to endure.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {PROJECTS.map((p) => (
            <div
              key={p.title}
              className={`project-card opacity-0 group relative rounded-2xl border ${p.border} bg-white/[0.03] backdrop-blur-sm p-6 cursor-pointer hover:scale-[1.02] hover:-translate-y-1 hover:shadow-2xl ${p.glow} transition-all duration-400`}
            >
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${p.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none`}
              />

              <div className="relative z-10">
                <span className="inline-block text-[10px] tracking-[0.3em] uppercase font-semibold text-white/30 mb-4">
                  {p.tag}
                </span>
                <h3 className="text-lg font-bold text-white/90 mb-3 tracking-tight">
                  {p.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed mb-6 font-light">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="text-[10px] tracking-wider px-2.5 py-1 rounded-full bg-white/5 border border-white/8 text-white/50 font-medium"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      className="flex-1 text-center px-4 py-2 rounded-full text-xs border border-white/10 text-white/60 hover:text-white hover:border-purple-400/50 transition"
                    >
                      GitHub
                    </a>
                  )}

                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      className="flex-1 text-center px-4 py-2 rounded-full text-xs bg-gradient-to-r from-purple-600 to-cyan-500 text-white hover:scale-105 transition"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stack() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = contentRef.current?.querySelectorAll(".stack-col");
    if (items) {
      gsap.fromTo(
        items,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
          },
        },
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      id="stack"
      className="relative py-20 md:py-32 bg-[#080610]"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 md:h-32 bg-gradient-to-b from-transparent via-purple-500/30 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 md:mb-16">
          <p className="text-cyan-400/60 text-[10px] md:text-xs tracking-[0.35em] uppercase font-medium mb-3">
            Technical Arsenal
          </p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-white">
            The{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #67e8f9, #a78bfa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Full Stack
            </span>
          </h2>
        </div>

        <div
          ref={contentRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-8"
        >
          {STACK_ITEMS.map((col) => (
            <div key={col.category} className="stack-col opacity-0">
              <h4 className="text-white/30 text-[10px] tracking-[0.3em] uppercase font-semibold mb-5 pb-3 border-b border-white/5">
                {col.category}
              </h4>
              <ul className="space-y-3">
                {col.items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <span className="w-1 h-1 rounded-full bg-purple-400/60 flex-shrink-0" />
                    <span className="text-white/60 text-sm font-light">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
        },
      },
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-20 md:py-32 bg-[#0b0813]"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-violet-600/10 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={contentRef}
          className="opacity-0 grid md:grid-cols-2 gap-12 md:gap-20 items-center"
        >
          <div>
            <p className="text-violet-400/70 text-[10px] md:text-xs tracking-[0.35em] uppercase font-medium mb-4">
              About
            </p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white mb-6 md:mb-8 leading-tight">
              22 Years Old.
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #a78bfa 0%, #67e8f9 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Infinite Ambition.
              </span>
            </h2>
            <div className="space-y-4 md:space-y-5 text-white/50 text-sm md:text-base font-light leading-relaxed">
              <p>
                I'm{" "}
                <strong className="text-white/80 font-medium">
                  Yousef Fahem Al-Hayafi
                </strong>{" "}
                — a Full-Stack Software Engineer and Web Architect obsessed with
                building systems that scale. At 22, I've already shipped
                production platforms handling real-world traffic, led end-to-end
                architecture decisions, and developed a fluency in both
                front-end elegance and back-end precision that most engineers
                take years to acquire.
              </p>
              <p>
                My front-end philosophy is rooted in{" "}
                <span className="text-purple-400/90">Next.js App Router</span>,
                expressive{" "}
                <span className="text-cyan-400/90">GSAP motion design</span>,
                and <span className="text-violet-400/90">Tailwind CSS</span>. My
                back-end runs on{" "}
                <span className="text-emerald-400/90">FastAPI</span>,{" "}
                <span className="text-blue-400/90">PostgreSQL</span>, and async
                ORM layers that I engineer for correctness, speed, and
                maintainability.
              </p>
              <p>
                I don't just build features. I architect foundations — the kind
                that teams trust and businesses grow on.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-5">
            {[
              { value: "22", label: "Years Old" },
              { value: "10+", label: "Live Projects Shipped" },
              { value: "2", label: "Core Stacks Mastered" },
              { value: "∞", label: "Curiosity Remaining" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/8 bg-white/[0.03] p-5 md:p-6 text-center hover:border-purple-500/20 hover:bg-white/[0.05] transition-all duration-300"
              >
                <div
                  className="text-3xl md:text-4xl font-black mb-2"
                  style={{
                    background: "linear-gradient(135deg, #a78bfa, #67e8f9)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {stat.value}
                </div>
                <div className="text-white/40 text-[10px] md:text-xs tracking-wider uppercase font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [copied, setCopied] = useState(false);

  const handleContactClick = () => {
    navigator.clipboard.writeText("youseffahem80@gmail.com");
    setCopied(true);

    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="contact" className="relative py-20 md:py-32 bg-[#080610]">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-purple-600/8 blur-[90px] md:blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <p className="text-purple-400/70 text-[10px] md:text-xs tracking-[0.35em] uppercase font-medium mb-4">
          Let's Build Together
        </p>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-6">
          Have a{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #a78bfa, #67e8f9)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Vision?
          </span>
        </h2>

        <p className="text-white/40 text-sm md:text-base font-light leading-relaxed mb-8 md:mb-10 max-w-xl mx-auto">
          I'm selectively available for high-impact projects, technical
          consulting, and long-term engineering partnerships. If you're building
          something that matters — let's talk at
          <br />
          <span className="text-white/90 font-medium tracking-wide mt-2 inline-block">
            youseffahem80@gmail.com
          </span>
        </p>

        <a
          href="mailto:youseffahem80@gmail.com"
          onClick={handleContactClick}
          className="group inline-flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-4 rounded-full bg-gradient-to-r from-purple-600 to-violet-600 text-white font-semibold tracking-widest uppercase text-xs md:text-sm shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-[1.03] transition-all duration-300"
        >
          <span>{copied ? "Email Copied! ✅" : "Initiate Contact"}</span>

          {!copied && (
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          )}
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative bg-[#06040f] border-t border-white/5 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-80 h-40 bg-purple-600/12 rounded-full blur-[80px]" />
        <div className="absolute bottom-0 right-1/4 w-72 h-40 bg-cyan-600/10 rounded-full blur-[80px]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-12 md:pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-12 md:mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-purple-500/30">
                <span className="text-white font-black text-sm">YF</span>
              </div>
              <span className="text-white/70 font-light tracking-[0.2em] text-xs uppercase">
                Yousef<span className="text-purple-400">.</span>dev
              </span>
            </div>
            <p className="text-white/30 text-sm font-light leading-relaxed max-w-xs">
              Full-Stack Engineer & Web Architect — building scalable digital
              systems with precision and purpose.
            </p>
          </div>

          <div>
            <h5 className="text-white/30 text-[10px] tracking-[0.3em] uppercase font-semibold mb-5">
              Core Technologies
            </h5>
            <div className="space-y-2.5">
              {[
                { name: "Next.js App Router", color: "text-purple-400/70" },
                { name: "FastAPI (Python)", color: "text-cyan-400/70" },
                {
                  name: "PostgreSQL + SQLAlchemy",
                  color: "text-violet-400/70",
                },
                { name: "Tailwind CSS + GSAP", color: "text-pink-400/70" },
              ].map((tech) => (
                <div key={tech.name} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-white/20" />
                  <span className={`text-sm font-light ${tech.color}`}>
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h5 className="text-white/30 text-[10px] tracking-[0.3em] uppercase font-semibold mb-5">
              Find Me
            </h5>
            <div className="space-y-2.5">
              {[
                {
                  label: "GitHub",
                  href: "https://github.com/youseffahem1/protofoli",
                },
                {
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/yousef-fahem-448528421/",
                },
                {
                  label: "Email",
                  href: "mailto:youseffahem80@gmail.com",
                },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/30 hover:text-white/70 text-sm font-light transition-colors duration-200 group"
                >
                  <span className="w-3 h-px bg-white/20 group-hover:w-5 group-hover:bg-purple-400/60 transition-all duration-300" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent mb-8" />

        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-white/20 text-[10px] md:text-xs font-light tracking-wide">
            © {new Date().getFullYear()} Yousef Fahem Al-Hayafi — All Rights
            Reserved
          </p>
          <p className="text-white/15 text-[10px] md:text-xs font-light tracking-wider">
            Architected with <span className="text-purple-400/50">Next.js</span>{" "}
            · <span className="text-cyan-400/50">FastAPI</span> ·{" "}
            <span className="text-violet-400/50">PostgreSQL</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Portfolio() {
  return (
    <main className="bg-[#0b0813] min-h-screen">
      <Nav />
      <Hero />
      <Projects />
      <Stack />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
