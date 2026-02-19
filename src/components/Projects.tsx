import { useState, useRef, useEffect, type JSX } from "react";
import { FaReact, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { FaPython, FaWebflow } from "react-icons/fa6";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import hand from "../assets/hand.jpg";
import electric from "../assets/electric.jfif";
import g_thumb from "../assets/g_thumb.png";
import z_thumb from "../assets/z_thumb.png";
import wonder from "../assets/wonder.jpg";
import finance from "../assets/finance.avif";

type Category = "personal" | "webflow" | "ai";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: string;
  name: string;
  image: string;
  category: Category;
  techStack: { name: string; icon: JSX.Element }[];
  short: string;
  liveLink?: string;
  githubLink?: string;
}

const projects: Project[] = [
  {
    id: "woi",
    name: "Wonders of India",
    image: wonder,
    category: "personal",
    short:
      "Travel blog built using React and Tailwind showcasing India’s destinations.",
    techStack: [{ name: "React", icon: <FaReact /> }],
    githubLink: "https://github.com/JainamKarania/Wonders-of-India",
    liveLink: "https://wonders-of-india.vercel.app/",
  },
  {
    id: "harrison",
    name: "Harrison's Webflow Site",
    image: electric,
    category: "webflow",
    short: "Elegant Webflow website with clean UI.",
    techStack: [{ name: "Webflow", icon: <FaWebflow /> }],
    liveLink: "https://www.harrisonforbeselectrical.com/",
  },
  {
    id: "finance",
    name: "Financial Report Summarization",
    image: finance,
    category: "ai",
    short:
      "NLP model summarizing financial reports and extracting KPIs using Python, Pandas, and NumPy.",
    techStack: [{ name: "Python", icon: <FaPython /> }],
  },
  {
    id: "zebra",
    name: "Zebra Learn",
    image: z_thumb,
    category: "webflow",
    short: "Modern Webflow site with smooth animations.",
    techStack: [{ name: "Webflow", icon: <FaWebflow /> }],
    liveLink: "https://learning-site-66c1f3.webflow.io/",
  },
  {
    id: "gemini",
    name: "GForce AI",
    image: g_thumb,
    category: "ai",
    short: "AI chatbot built with React, Tailwind CSS, and FastAPI backend.",
    techStack: [{ name: "React", icon: <FaReact /> }],
    liveLink: "https://gemini-clone-six-red.vercel.app/",
    githubLink: "https://github.com/JainamKarania/gemini-clone",
  },
  {
    id: "personality",
    name: "Personality Prediction System",
    image: hand,
    category: "ai",
    short:
      "ML model predicting personality traits from handwriting using Python.",
    techStack: [{ name: "Python", icon: <FaPython /> }],
  },
];

const Projects = () => {
  const [expanded, setExpanded] = useState(false);

  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
        },
      },
    );
  }, []);

  const visibleProjects = expanded ? projects : projects.slice(0, 4);

  return (
    <section
      id="projects"
      className="bg-black bg-[radial-gradient(#ffffff22_1px,transparent_1px)] [background-size:20px_20px] text-white py-12 sm:py-24"
      aria-labelledby="projects-heading"
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <header className="flex flex-col items-start gap-1 mb-12">
          <h4
            ref={headingRef}
            className="
    relative inline-block group
    text-white font-semibold text-xs sm:text-sm tracking-[0.35em] uppercase
    border border-white/30 rounded-md px-5 py-2
    cursor-pointer overflow-hidden
    transition-all duration-300
    hover:border-white mb-4
  "
          >
            <span className="relative z-10 group-hover:text-black transition">
              MY WORK
            </span>

            <span
              className="
      absolute inset-0 bg-white
      translate-y-full
      transition-transform duration-300 ease-out
      group-hover:translate-y-0
    "
            />
          </h4>

          <h2
            id="projects-heading"
            className="
    relative inline-block group
    text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-white
    border border-white/20 rounded-lg px-6 py-3
    overflow-hidden
  "
          >
            <span className="md:text-6xl text-3xl relative z-10 group-hover:text-black transition">
              PROJECTS
            </span>

            <span
              className="
      absolute inset-0 bg-white
      translate-y-full
      transition-transform duration-500 ease-out
      group-hover:translate-y-0
    "
            />
          </h2>
        </header>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {visibleProjects.map((project) => (
            <article
              key={project.id}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition hover:border-white/20 hover:bg-white/10"
            >
              {/* Image */}
              <figure className="relative">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-64 sm:h-72 md:h-80 object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Title overlay */}
                <figcaption className="pointer-events-none absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/90 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-0">
                  <h3 className="text-lg sm:text-xl font-semibold">
                    {project.name}
                  </h3>
                </figcaption>
              </figure>

              {/* Reveal Panel */}
              <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out bg-black/95 p-5 sm:p-6 flex flex-col gap-4">
                <h3 className="text-base sm:text-lg font-semibold">
                  {project.name}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.short}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mt-1">
                  {project.techStack.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full border border-white/20 bg-white/10 text-xs flex items-center gap-1 transition transform hover:-translate-y-0.5 hover:bg-white hover:text-black"
                    >
                      {skill.icon}
                      {skill.name}
                    </span>
                  ))}
                </div>

                {/* Links */}
                {(project.githubLink || project.liveLink) && (
                  <nav className="flex flex-wrap gap-3 mt-2">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 flex items-center gap-2 text-sm font-medium"
                      >
                        <FaGithub />
                        GitHub
                      </a>
                    )}

                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 flex items-center gap-2 text-sm font-medium"
                      >
                        <FaExternalLinkAlt />
                        Live
                      </a>
                    )}
                  </nav>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* View More / Less */}
        {projects.length > 4 && (
          <div className="flex justify-center mt-12 sm:mt-14">
            <button
              onClick={() => setExpanded(!expanded)}
              className="px-7 py-3 border border-white/20 rounded-full bg-white/5 hover:bg-white/10 transition text-sm font-semibold tracking-wide focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              {expanded ? "View Less" : "View More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
