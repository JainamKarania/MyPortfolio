import { useEffect, useRef, useState, type JSX } from "react";
import gsap from "gsap";
import g_thumb from "../assets/g_thumb.png";
import pc from "../assets/pure.png";
import z_thumb from "../assets/z_thumb.png";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaReact, FaNodeJs, FaJs, FaExternalLinkAlt } from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import { FaWebflow } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  name: string;
  image: string;
  techStack: { name: string; icon: JSX.Element }[];
  description: string[];
  liveLink: string;
}

const projects: Project[] = [
  {
    name: "Gemini Clone (AI Agent)",
    image: g_thumb,
    description: [
      "Built a responsive AI chatbot interface inspired by Google Gemini.",
      "Integrated dynamic prompts and streamed responses.",
      "Backend connected using Node.js & Express for OpenAI API handling.",
      "Styled with Tailwind and TypeScript for scalable development.",
    ],
    techStack: [
      { name: "React", icon: <FaReact /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "Node.js", icon: <FaNodeJs /> },
    ],
    liveLink: "https://g-force-rose.vercel.app/",
  },
  {
    name: "PureConnectt Portal",
    image: pc,
    description: [
      "Job portal with integrated PureConnect Score for trust-building.",
      "Designed for consultancies and job seekers with dashboards.",
      "Used React with state-driven UI updates.",
      "Mobile-friendly, clean layout styled with Tailwind CSS.",
    ],
    techStack: [
      { name: "React", icon: <FaReact /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
    ],
    liveLink: "https://www.pureconnectt.com/",
  },
  {
    name: "Zebra Learn",
    image: z_thumb,
    description: [
      "Dive into an immersive digital experience with our single-page website, meticulously crafted on the Webflow platform.",
      "Seamlessly designed and optimized, every scroll and click guides you through a captivating journey.",
      "Utilizing Webflow's intuitive tools, we've brought dynamic animations to life, ensuring an engaging user interaction.",
      "With Webflow's robust features, we've created a website that not only captivates but also inspires action, inviting you to explore and engage with unparalleled ease.",
    ],
    techStack: [
      { name: "Webflow", icon: <FaWebflow /> },
      { name: "TypeScript", icon: <SiTypescript /> },
    ],
    liveLink: "https://learning-site-66c1f3.webflow.io/",
  },
];

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project>(projects[0]);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.to(sectionRef.current, {
        y: -100,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
          },
        }
      );
    }
  }, [selectedProject]);

  return (
    <section id="projects" ref={sectionRef} className="py-20 relative z-10">
      <div className="absolute inset-0 bg-black bg-[radial-gradient(#ffffff22_1px,transparent_1px)] [background-size:20px_20px] z-0" />

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <h2
          ref={headingRef}
          className="text-xl md:text-4xl font-bold text-white mb-12"
        >
          My Projects
        </h2>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Left Side */}
          <div className="flex-1 space-y-6">
            <div className="relative rounded-xl overflow-hidden shadow-lg group border-t-2 border-r-2 border-l-2 p-1 border-cyan-600">
              <img
                src={selectedProject.image}
                alt={selectedProject.name}
                className="w-full object-cover h-60 transition-transform duration-300 group-hover:scale-105"
              />

              {/* Overlay at Bottom */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute bottom-0 left-0 w-full px-4 py-3 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-between items-center">
                <h3 className="text-white text-sm font-semibold truncate">
                  {selectedProject.name}
                </h3>
                <a
                  href={selectedProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-xs flex items-center gap-1 hover:underline"
                >
                  <FaExternalLinkAlt className="text-xs" />
                  Live
                </a>
              </div>
            </div>

            
            <div className="border border-cyan-600"></div>
            <h4 className="text-xl font-bold">All Projects</h4>
            <div className="flex gap-8 p-3 overflow-x-auto pb-2">
              {projects.map((project, index) => (
                <img
                  key={index}
                  src={project.image}
                  alt={project.name}
                  className={`w-40 h-24 object-cover rounded-md border cursor-pointer transition duration-300 transform ${
                    selectedProject.name === project.name
                      ? "border-cyan-400 scale-110"
                      : "border-gray-600 scale-100"
                  }`}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="flex-1 space-y-6 p-6 bg-transparent shadow-xl shadow-sky-800/30 border border-sky-700/30 backdrop-blur-sm rounded-2xl">
            <button className="px-3 py-1 bg-cyan-400/20 text-cyan-300 text-sm font-semibold rounded-full uppercase tracking-wide hover:bg-cyan-400 hover:text-white transition">
              My Work
            </button>

            <h3 className="text-2xl font-bold text-white">
              {selectedProject.name}
            </h3>

            <ul className="list-disc pl-5 text-gray-300 space-y-2 text-base md:text-lg">
              {selectedProject.description.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
            <h3 className="text-2xl font-bold">Tech Stack</h3>
            <div className="flex flex-wrap gap-4">
              {/* <h3 className="text-2xl">Tech Stack</h3> */}
              {selectedProject.techStack.map((tech, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm"
                >
                  <span className="text-xl">{tech.icon}</span>
                  {tech.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
