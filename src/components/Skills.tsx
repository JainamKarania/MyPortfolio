import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import {
  FaReact,
  // FaNodeJs,
  FaPython,
  // FaHtml5,
  // FaCss3Alt,
  FaJs,
  FaDatabase,
} from "react-icons/fa";
import { SiGooglegemini, SiMysql, SiPandas, SiScikitlearn, SiStreamlit, SiTensorflow, SiTypescript } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { MdAnimation } from "react-icons/md";
import { FaWebflow } from "react-icons/fa6";
import { FiFramer } from "react-icons/fi";

const Skills = () => {
  const rowRef = useRef<HTMLDivElement>(null);
  const marqueeTween = useRef<gsap.core.Tween | null>(null);
  const [reverse, setReverse] = useState(false);

  const skills = [
    { name: "React", icon: <FaReact /> },
    { name: "Next", icon: <RiNextjsFill className="text-cyan-400" /> },
    { name: "Tailwind CSS", icon: <RiTailwindCssFill className="text-cyan-400" /> },
    { name: "Webflow", icon: <FaWebflow className="text-cyan-400" /> },
    { name: "Framer", icon: <FiFramer className="text-cyan-400" /> },
    { name: "JavaScript", icon: <FaJs className="text-cyan-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-cyan-400" /> },
    { name: "SQL", icon: <SiMysql className="text-cyan-400" /> },
    { name: "Python", icon: <FaPython className="text-cyan-400" /> },
    { name: "Pandas", icon: <SiPandas className="text-cyan-400" /> },
    { name: "Tensorflow", icon: <SiTensorflow className="text-cyan-400" /> },
    { name: "Scikit-learn", icon: <SiScikitlearn className="text-cyan-400" /> },
    { name: "Streamlit", icon: <SiStreamlit className="text-cyan-400" /> },
    { name: "LLM'S", icon: <SiGooglegemini className="text-cyan-400" /> },
    { name: "GSAP", icon: <MdAnimation className="text-cyan-400" /> },
    { name: "SQL", icon: <FaDatabase className="text-cyan-400" /> },
  ];

  const extendedSkills = [...skills, ...skills]; // Prevent space in flow

  useEffect(() => {
    marqueeTween.current = gsap.to(rowRef.current, {
      xPercent: -50,
      ease: "none",
      repeat: -1,
      duration: 20,
    });

    return () => {
      marqueeTween.current?.kill();
    };
  }, []);

  const handleHover = () => {
    marqueeTween.current?.pause();
  };

  const handleLeave = () => {
    setReverse((prev) => !prev);

    marqueeTween.current?.kill();

    marqueeTween.current = gsap.to(rowRef.current, {
      xPercent: reverse ? -50 : 0,
      ease: "none",
      repeat: -1,
      duration: 20,
    });
  };

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-900 via-slate-900 to-black">
      <div
        className="absolute inset-0 bg-black"
        style={{
          backgroundImage: "radial-gradient(#ffffff22 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-6 text-white">
          Skills & Technologies
        </h2>
        <p className="text-lg md:text-xl text-center mb-12 text-gray-300">
          Here are some of the skills and technologies I work with, showcasing my
          expertise in both web development and data science.
        </p>

        <div
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
          className="overflow-hidden"
        >
          <div
            ref={rowRef}
            className="flex w-max space-x-6"
          >
            {extendedSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-slate-800/50 p-6 rounded-xl shadow-lg backdrop-blur-sm border border-sky-600/30 flex flex-col items-center space-y-3 min-w-[160px] transition hover:scale-105"
              >
                <div className="text-[2.75rem] text-cyan-400 drop-shadow-[0_0_6px_currentColor] animate-glowRotate">
                  {skill.icon}
                </div>
                <h3 className="text-white text-center text-lg font-semibold">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
