import { useEffect, useRef, useState, type JSX } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaReact, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { SiJavascript, SiModal, SiNumpy, SiPandas, SiTailwindcss, SiTypescript } from "react-icons/si";
import { FaPython, FaWebflow } from "react-icons/fa6";
import { MdAnimation, MdSpeed } from "react-icons/md";
import hand from "../assets/hand.jpg";
import electric from "../assets/electric.jfif";
import g_thumb from "../assets/g_thumb.png";
import z_thumb from "../assets/z_thumb.png";
import task from "../assets/task.jpg";
import wonder from "../assets/wonder.jpg";
import finance from "../assets/finance.avif";
import img_g from "../assets/img_g.jpeg";

gsap.registerPlugin(ScrollTrigger);

type Category = "personal" | "webflow" | "ai";

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
    id: "finance",
    name: "Financial Report Summarization & KPI Extraction using NLP.",
    image: finance,
    category: "ai",
    short: "NLP model to summarize financial reports and extract key KPIs.",
    techStack: [
      { name: "Python", icon: <FaPython /> },
      { name: "NLP", icon: <MdSpeed /> },
      { name: "Machine Learning", icon: <MdSpeed /> },
      { name: "Pandas", icon: <SiPandas /> },
      { name: "NumPy", icon: <SiNumpy /> },
      { name: "Model Evaluation", icon: <SiModal /> },
    ]
  },
  {
    id:"image-generator",
    name: "Imagify",
    image: img_g,
    category: "ai",
    short: "AI-powered image generator use to create 2D and 3D images.",
    techStack: [
      { name: "React", icon: <FaReact /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },  
      { name: "Python", icon: <FaPython /> },
      { name: "FastAPI", icon: <MdSpeed /> },
    ],
  },
  {
    id: "gemini",
    name: "GForce AI",
    image: g_thumb,
    category: "ai",
    short: "Responsive AI chatbot with streamed responses & FastAPI backend.",
    techStack: [
      { name: "React", icon: <FaReact /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "Python", icon: <FaPython /> },
      { name: "FastAPI", icon: <MdSpeed /> },
    ],
    liveLink: "https://gemini-clone-six-red.vercel.app/",
    githubLink: "https://github.com/JainamKarania/gemini-clone",
  },
  {
    id: "taskai",
    name: "Task Assistant",
    image: task,
    category: "personal",
    short:
      "Full-stack Task manager with reminders, history, and optimized UX (50% faster).",
    techStack: [
      { name: "React", icon: <FaReact /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
    ],
    liveLink: "https://github.com/JainamKarania/TaskAI_Assitant",
    githubLink: "https://github.com/JainamKarania/TaskAI_Assitant",
  },
  {
    id: "zebra",
    name: "Zebra Learn",
    image: z_thumb,
    category: "webflow",
    short: "Single-page Webflow site with polished animations and UX.",
    techStack: [
      { name: "Webflow", icon: <FaWebflow /> },
      { name: "TypeScript", icon: <SiTypescript /> },
    ],
    liveLink: "https://learning-site-66c1f3.webflow.io/",
  },
  {
    id: "harrison",
    name: "Harrison's Webflow Site",
    image: electric,
    category: "webflow",
    short: "Elegant Webflow site with smooth animations and responsive design.",
    techStack: [
      { name: "Webflow", icon: <FaWebflow /> },
      { name: "TypeScript", icon: <SiTypescript /> },
    ],
    liveLink: "https://www.harrisonforbeselectrical.com/",
  },
  {
      id: "woi",
      name: "Wonders of India",
      image: wonder,
      category: "personal",
      short: "A travel blog website showcasing India's top destinations.",
      techStack: [
        { name: "React", icon: <FaReact /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "Tailwind", icon: <SiTailwindcss /> },
        {name: "GSAP", icon: <MdAnimation />},
      ],
      liveLink: "https://wonders-of-india.vercel.app/",
      githubLink: "https://github.com/JainamKarania/Wonders-of-India"
  },
  {
      id: "personality-prediction",
      name: "Personality Prediction System based on Graphology Using ML",
      image: hand,
      category: "ai",
      short: "ML-based personality prediction from handwritten text with 90% accuracy.",
      techStack: [
        { name: "Python", icon: <FaPython /> },
        { name: "Machine Learning", icon: <MdSpeed /> },
      ],
      githubLink: "",
    },
];

const TAB_LIST: { key: "all" | Category; label: string }[] = [
  { key: "all", label: "All Projects" },
  { key: "personal", label: "Personal Projects" },
  { key: "webflow", label: "Webflow Projects" },
  { key: "ai", label: "AI/ML Projects" },
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState<"all" | Category>("all");
  const gridRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  const filtered =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  useEffect(() => {
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
          },
        }
      );
    }

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".project-card");
      gsap.fromTo(
        cards,
        { opacity: 0, y: 30, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
        }
      );
    }, gridRef);

    return () => ctx.revert();
  }, [activeTab]);

  return (
    <section id="projects" className="py-20 relative z-10">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-black bg-[radial-gradient(#00fff022_1px,transparent_1px)] [background-size:24px_24px] z-0" />

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <h2
          ref={headingRef}
          className="text-xl md:text-4xl font-bold text-white mb-10"
        >
          My Projects
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 mb-8">
          {TAB_LIST.map((t) => {
            const active = activeTab === t.key;
            return (
              <button
                key={t.key}
                onClick={() => setActiveTab(t.key as any)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all backdrop-blur-md border
                  ${
                    active
                      ? "bg-cyan-400/20 text-cyan-300 border-cyan-500/30"
                      : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"
                  }`}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        {/* Project Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filtered.map((project) => (
            <div
              key={project.id}
              className="project-card relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_0_20px_rgba(0,255,255,0.15)] hover:shadow-[0_0_25px_rgba(0,255,255,0.3)] hover:scale-[1.02] transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute top-3 right-3 flex gap-2">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 bg-black/40 backdrop-blur-sm rounded-lg text-white text-sm hover:bg-black/70 transition"
                      title="GitHub"
                    >
                      <FaGithub />
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 bg-black/40 backdrop-blur-sm rounded-lg text-white text-sm hover:bg-black/70 transition"
                      title="Live"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white">
                  {project.name}
                </h3>
                <p className="text-gray-300 text-sm mt-2">{project.short}</p>

                {/* Tech Stack - shows fully, fades slightly on hover */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.map((t, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-1 text-xs bg-white/10 border border-white/10 rounded-md px-2 py-1 text-cyan-200 hover:bg-white/20 transition"
                      title={t.name}
                    >
                      <span className="text-sm">{t.icon}</span>
                      <span className="hidden sm:inline">{t.name}</span>
                    </div>
                  ))}
                </div>

                {/* Category tag */}
                <div className="mt-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-300 text-xs font-semibold border border-cyan-500/30">
                    {project.category.toUpperCase()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
