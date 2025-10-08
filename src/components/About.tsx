import { useEffect, useRef, useState } from "react";
import profile from "../assets/profile_avatar.avif";
import gsap from "gsap";
import pure from "../assets/pure.png";
import css from "../assets/company_logo.png";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaLocationDot, FaGraduationCap, FaWebflow } from "react-icons/fa6";
import { FaCode, FaReact, FaRobot } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const avatarRef = useRef<HTMLImageElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<"summary" | "experience">(
    "summary"
  );

  useEffect(() => {
    if (avatarRef.current) {
      gsap.fromTo(
        avatarRef.current,
        { opacity: 0, y: -30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: avatarRef.current,
            start: "top 80%",
          },
        }
      );
    }

    if (experienceRef.current) {
      gsap.fromTo(
        experienceRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: experienceRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    if (bgRef.current) {
      gsap.to(bgRef.current, {
        y: -100,
        ease: "none",
        scrollTrigger: {
          trigger: bgRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    const titleEl = document.querySelector("#opportunity-heading");
    if (titleEl) {
      gsap.fromTo(
        titleEl,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          delay: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleEl,
            start: "top 90%",
          },
        }
      );
    }
  }, []);

  return (
    <section id="about" className="relative pb-20 overflow-hidden">
      <div
        ref={bgRef}
        className="absolute inset-0 bg-black bg-[radial-gradient(#ffffff22_1px,transparent_1px)] [background-size:20px_20px] z-0"
      />
      <div className="relative z-10 container mx-auto max-w-7xl px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">About Me</h2>
        <div className="flex flex-col md:flex-row gap-10 mt-10">
          {/* Identity Card */}
          <div className="w-full h-1/2 md:max-w-md shadow-xl shadow-sky-800/30 border border-sky-700/30 backdrop-blur-sm rounded-2xl font-sans p-6 space-y-6">
            <div className="flex justify-center">
              <img
                ref={avatarRef}
                src={profile}
                alt="Profile"
                className="w-32 h-32 rounded-lg object-cover border-4 border-blue-500 shadow-md"
              />
            </div>

            <div className="flex flex-col items-center text-center gap-2 text-white">
              <h2 className="text-2xl font-bold text-cyan-300">
                Jainam Karania
              </h2>
              <p className="text-sm text-gray-300">AI Enthusiast</p>
              <div className="flex items-center justify-center gap-2 mt-1 text-sm text-gray-200">
                <FaLocationDot className="text-cyan-400 text-lg" />
                <span>Surat, Gujarat, India</span>
              </div>
            </div>

            <div className="border-t border-cyan-400/20 pt-4 text-sm text-white space-y-4">
              <h3 className="text-base font-semibold text-cyan-300">
                Education
              </h3>

              <div className="flex items-start gap-3">
                <FaGraduationCap className="text-cyan-400 text-xl" />
                <div className="flex gap-4 items-center justify-between w-full">
                  <p className="font-medium">MCA – Jain University</p>
                  <p className="text-xs text-gray-300">
                    Bangalore, 2021 - 2023
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FaGraduationCap className="text-cyan-400 text-xl" />
                <div className="flex gap-4 items-center justify-between w-full">
                  <p className="font-medium">BCA – SMK College</p>
                  <p className="text-xs text-gray-300">
                    Ankleshwar, 2018 - 2021
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-cyan-400/20 pt-4 text-sm text-white space-y-3">
              <h3 className="text-base font-semibold text-cyan-300">
                Location Preferences
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-3">
                {[
                  "Flexible",
                  "Bangalore",
                  "Mumbai",
                  "Surat",
                  "Ahmedabad",
                  "Hyderabad",
                ].map((city, index) => (
                  <div
                    key={index}
                    className="bg-white/5 border border-cyan-400/10 rounded-md px-3 py-2 text-center text-gray-200 shadow-sm hover:bg-white/10 transition duration-200"
                  >
                    {city}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tabs and Content */}
          <div className="w-full p-6 shadow-xl shadow-sky-800/30 border border-sky-700/30 backdrop-blur-sm rounded-2xl text-white space-y-6">
            <div className="flex gap-4">
              <button
                onClick={() => setActiveTab("summary")}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all backdrop-blur-md border ${
                  activeTab === "summary"
                    ? "bg-cyan-400/20 text-cyan-300 border-cyan-500/30"
                    : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"
                }`}
              >
                Profile Summary
              </button>
              <button
                onClick={() => setActiveTab("experience")}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all backdrop-blur-md border ${
                  activeTab === "experience"
                    ? "bg-cyan-400/20 text-cyan-300 border-cyan-500/30"
                    : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"
                }`}
              >
                My Experience
              </button>
            </div>

            {activeTab === "summary" && (
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Introduction</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-200 text-lg">
                  I'm a curious mind actively looking for an opportunity into Software Development as well as in AI/ML domain. I've immersed myself in Generative AI, building tools like
                  AI powered web applications and AI Agents using LLM’s & GenAI SDKs.
                </ul>
                <div className="mt-10 space-y-4">
                  <h3
                    id="opportunity-heading"
                    className="text-xl font-bold text-cyan-300 tracking-wide"
                  >
                    Looking Opportunities In
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4">
                    {[
                      {
                        role: "Frontend Engineer (FE)",
                        icon: <FaCode className="text-cyan-400" />,
                      },
                      {
                        role: "React Developer",
                        icon: <FaReact className="text-blue-500" />,
                      },
                      {
                        role: "AI / ML Engineer (Fresher / Intern)",
                        icon: <FaRobot className="text-red-500" />,
                      },
                      {
                        role: "Webflow Developer",
                        icon: <FaWebflow className="text-blue-800" />,
                      },
                    ].map((job, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center gap-3 bg-transparent border-2 border-cyan-400/10 rounded-lg p-3 shadow-lg hover:bg-white/10 transition duration-200"
                      >
                        <span className="text-2xl">{job.icon}</span>
                        <p className="text-gray-200 text-sm">{job.role}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "experience" && (
              <div className="space-y-8" ref={experienceRef}>
                <h3 className="text-3xl font-bold text-white">
                  Professional Experience
                </h3>

                {/* Experience Card */}
                <div className="bg-slate-800/60 border border-cyan-600/20 rounded-2xl p-6 shadow-lg backdrop-blur-md text-white max-w-3xl mx-auto">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={pure} // Replace with actual logo path
                      alt="Company Logo"
                      className="w-14 h-14 rounded-xl object-contain border border-cyan-400 p-1 bg-black"
                    />
                    <div className="flex flex-col gap-1">
                      <h4 className="text-xl font-semibold">
                        Frontend Developer | PureConnectt Technologies
                      </h4>
                      <p className="text-sm text-gray-300">
                        Ankleshwar | On-site | Oct 2024 – Feb 2025
                      </p>
                    </div>
                  </div>

                  <ul className="list-disc list-inside space-y-3 text-gray-200 text-base ml-2">
                    <li>
                      Led frontend architecture and performance initiatives for
                      PureConnectt’s scalable job portal using ReactJS and
                      Tailwind CSS.
                    </li>
                    <li>
                      Collaborated cross-functionally with designers and backend
                      teams to build a seamless user experience.
                    </li>
                    <li>
                      Engineered and maintained a scoring system for candidate
                      evaluation, improving recruiter decision speed by 40%.
                    </li>
                    <li>
                      Conducted code reviews and mentored junior developers on
                      frontend best practices.
                    </li>
                  </ul>
                </div>
                <div className="bg-slate-800/60 border border-cyan-600/20 rounded-2xl p-6 shadow-lg backdrop-blur-md text-white max-w-3xl mx-auto">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={css}
                      alt="TheCSSAgency Logo"
                      className="w-14 h-14 rounded-xl object-contain border border-cyan-400 p-1 bg-white"
                    />
                    <div className="flex flex-col gap-1">
                      <h4 className="text-xl font-semibold">
                        Webflow & Frontend Developer | TheCSSAgency
                      </h4>
                      {/* <h4 className="text-xl font-semibold"></h4> */}
                      <p className="text-sm text-gray-300">
                        Surat | On-site | Oct 2023 – Feb 2024
                      </p>
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-3 text-gray-200 text-base ml-2">
                    <li>
                      Developed responsive websites using Webflow and no-code
                      tools, reducing bounce rates by 30%.
                    </li>
                    <li>
                      Integrated smooth animations and interactivity, enhancing
                      session durations and user engagement.
                    </li>
                    <li>
                      Delivered pixel-perfect UI/UX for multiple client-facing
                      sites using agile methodology.
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {/* <div className="mt-10 space-y-4">
              <h3 id="opportunity-heading" className="text-xl font-bold text-cyan-300 tracking-wide">
                Looking Opportunities In
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4">
                {[
                  { role: "Frontend Engineer (FE)", icon: <FaCode className="text-cyan-400" /> },
                  { role: "React Developer", icon: <FaReact className="text-blue-500" /> },
                  { role: "AI / ML Engineer (Fresher / Intern)", icon: <FaRobot className="text-red-500" /> },
                  { role: "Webflow Developer", icon: <FaWebflow className="text-blue-800" /> },
                ].map((job, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-3 bg-transparent border-2 border-cyan-400/10 rounded-lg p-3 shadow-lg hover:bg-white/10 transition duration-200"
                  >
                    <span className="text-2xl">{job.icon}</span>
                    <p className="text-gray-200 text-sm">{job.role}</p>
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
