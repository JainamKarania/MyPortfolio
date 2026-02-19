import { useEffect, useRef, useState } from "react";
import profile from "../assets/profile.jpeg";
import gsap from "gsap";
import pure from "../assets/pure.png";
import css from "../assets/company_logo.png";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaLocationDot, FaGraduationCap, FaWebflow } from "react-icons/fa6";
import { FaCode, FaReact, FaRobot } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const avatarRef = useRef(null);
  const bgRef = useRef(null);
  const experienceRef = useRef(null);
  const [activeTab, setActiveTab] = useState("summary");

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
          scrollTrigger: { trigger: avatarRef.current, start: "top 80%" },
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
  }, []);

  const introRef = useRef<HTMLHeadingElement>(null);
  const aboutRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.fromTo(
      introRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: introRef.current,
          start: "top 85%",
        },
      }
    );

    gsap.fromTo(
      aboutRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <section id="about" className="relative py-12 overflow-hidden" aria-labelledby="about-heading">
      <div
        ref={bgRef}
        className="absolute inset-0 bg-black bg-[radial-gradient(#ffffff22_1px,transparent_1px)] [background-size:20px_20px] z-0"
      />

      <div className="relative z-10 container mx-auto max-w-7xl px-4 md:px-0">
        <header className="flex flex-col items-start gap-4">
          <h4
        ref={introRef}
        className="
          relative inline-block 
          text-white font-semibold text-sm md:text-base tracking-widest
          border border-white/30 rounded-md px-5 py-2
          cursor-pointer overflow-hidden
          transition-all duration-300
          hover:border-white
          group
        "
      >
        <span className="relative z-10 group-hover:text-black transition">
          INTRO
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

      {/* ABOUT ME main heading */}
      <h2
        ref={aboutRef}
        id="about-heading"
        className="
          relative inline-block
          text-3xl md:text-7xl font-bold text-white
          border border-white/20 rounded-lg px-6 py-3
          overflow-hidden cursor-default group
        "
      >
        <span className="relative z-10 group-hover:text-black transition">
          ABOUT ME
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

        <div className="flex flex-col md:flex-row gap-10 mt-10">
          {/* ASIDE — Profile Identity Card */}
          <aside
            className="w-full h-full md:max-w-md shadow-xl shadow-sky-800/30 border border-sky-700/30 backdrop-blur-sm rounded-2xl font-sans p-6 space-y-6"
            aria-label="Profile Card"
          >
            <figure className="flex justify-center">
              <img
                ref={avatarRef}
                src={profile}
                alt="Profile avatar of Jainam Karania"
                className="w-32 h-32 rounded-lg object-cover border-4 border-blue-500 shadow-md"
              />
            </figure>

            <div className="flex flex-col items-center text-center gap-2 text-white">
              <h2 className="text-2xl font-bold text-cyan-300">Jainam Karania</h2>
              <p className="text-sm text-gray-300">Frontend Developer | Webflow Developer | AI enthusiast</p>

              <div className="flex items-center justify-center gap-2 mt-1 text-sm text-gray-200">
                <FaLocationDot className="text-cyan-400 text-lg" />
                <span>Bangalore, Karnataka, India</span>
              </div>
            </div>

            {/* EDUCATION */}
            <section className="border-t border-cyan-400/20 pt-4 text-sm text-white space-y-4" aria-label="Education">
              <h3 className="text-base font-semibold text-cyan-300">Education</h3>

              <article className="flex items-start gap-3">
                <FaGraduationCap className="text-cyan-400 text-xl" />
                <div className="flex items-center justify-between w-full">
                  <p className="font-medium">MCA – Jain University</p>
                  <time className="text-xs text-gray-300">Bangalore, 2021 - 2023</time>
                </div>
              </article>

              <article className="flex items-start gap-3">
                <FaGraduationCap className="text-cyan-400 text-xl" />
                <div className="flex items-center justify-between w-full">
                  <p className="font-medium">BCA – SMK College</p>
                  <time className="text-xs text-gray-300">Ankleshwar, 2018 - 2021</time>
                </div>
              </article>
            </section>

            {/* LOCATION PREFERENCES */}
            <section className="border-t border-cyan-400/20 pt-4 text-sm text-white space-y-3" aria-label="Location Preferences">
              <h3 className="text-base font-semibold text-cyan-300">Location Preferences</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {["Flexible", "Bangalore", "Mumbai", "Surat", "Ahmedabad", "Hyderabad"].map((city, i) => (
                  <span
                    key={i}
                    className="bg-white/5 border border-cyan-400/10 rounded-md px-3 py-2 text-center text-gray-200 shadow-sm hover:bg-white/10 transition"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </section>
          </aside>

          {/* MAIN CONTENT — Tabs */}
          <main className="w-full p-6 shadow-xl shadow-sky-800/30 border border-sky-700/30 backdrop-blur-sm rounded-2xl text-white space-y-6">
            <nav className="flex gap-4" aria-label="About Tabs Navigation">
              <button
                onClick={() => setActiveTab("summary")}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all border backdrop-blur-md ${
                  activeTab === "summary"
                    ? "bg-cyan-400/20 text-cyan-300 border-cyan-500/30"
                    : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"
                }`}
              >
                Profile Summary
              </button>

              <button
                onClick={() => setActiveTab("experience")}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all border backdrop-blur-md ${
                  activeTab === "experience"
                    ? "bg-cyan-400/20 text-cyan-300 border-cyan-500/30"
                    : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"
                }`}
              >
                My Experience
              </button>
            </nav>

            {/* SUMMARY TAB */}
            {activeTab === "summary" && (
              <section aria-label="Profile Summary" className="space-y-4">
                <h3 className="text-2xl font-bold">Introduction</h3>
                <p className="text-gray-200 text-lg leading-relaxed">
                  I'm a curious mind actively looking for an opportunity in the AI/ML domain.
                  I have immersed myself in Generative AI, building tools like AI-powered web
                  applications and AI Agents using LLMs & GenAI SDKs.
                </p>

                <div className="mt-10 space-y-4">
                  <h3 className="text-xl font-bold text-cyan-300 tracking-wide">
                    Looking Opportunities In
                  </h3>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { role: "Frontend Engineer (FE)", icon: <FaCode className="text-cyan-400" /> },
                      { role: "React Developer", icon: <FaReact className="text-blue-500" /> },
                      { role: "AI / ML Engineer (Fresher / Intern)", icon: <FaRobot className="text-red-500" /> },
                      { role: "Webflow Developer", icon: <FaWebflow className="text-blue-800" /> },
                    ].map((job, i) => (
                      <article
                        key={i}
                        className="flex flex-col items-center gap-3 bg-transparent border-2 border-cyan-400/10 rounded-lg p-3 shadow-lg hover:bg-white/10 transition"
                      >
                        <span className="text-2xl">{job.icon}</span>
                        <p className="text-gray-200 text-sm text-center">{job.role}</p>
                      </article>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* EXPERIENCE TAB */}
            {activeTab === "experience" && (
              <section aria-label="Professional Experience" ref={experienceRef} className="space-y-8">
                <h3 className="text-3xl font-bold text-white">Professional Experience</h3>

                {/* Experience Card 1 */}
                <article className="bg-slate-800/60 border border-cyan-600/20 rounded-2xl p-6 shadow-lg backdrop-blur-md text-white">
                  <header className="flex items-center gap-4 mb-4">
                    <img
                      src={pure}
                      alt="PureConnectt Technologies Logo"
                      className="w-14 h-14 rounded-xl object-contain border border-cyan-400 p-1 bg-black"
                    />
                    <div>
                      <h4 className="text-xl font-semibold">Frontend Developer | PureConnectt Technologies</h4>
                      <p className="text-sm text-gray-300">Ankleshwar | On-site | Oct 2024 – Feb 2025</p>
                    </div>
                  </header>

                  <ul className="list-disc list-inside space-y-3 text-gray-200 text-base ml-2">
                    <li>Led frontend architecture and performance improvements for PureConnectt’s job portal using ReactJS & Tailwind.</li>
                    <li>Collaborated with designers and backend engineers to deliver a seamless experience.</li>
                    <li>Engineered a scoring system improving recruiter decision-making speed by 40%.</li>
                    <li>Conducted code reviews and mentored junior developers.</li>
                  </ul>
                </article>

                {/* Experience Card 2 */}
                <article className="bg-slate-800/60 border border-cyan-600/20 rounded-2xl p-6 shadow-lg backdrop-blur-md text-white">
                  <header className="flex items-center gap-4 mb-4">
                    <img
                      src={css}
                      alt="The CSS Agency Logo"
                      className="w-14 h-14 rounded-xl object-contain border border-cyan-400 p-1 bg-white"
                    />
                    <div>
                      <h4 className="text-xl font-semibold">Webflow & Frontend Developer | TheCSSAgency</h4>
                      <p className="text-sm text-gray-300">Surat | On-site | Oct 2023 – Feb 2024</p>
                    </div>
                  </header>

                  <ul className="list-disc list-inside space-y-3 text-gray-200 text-base ml-2">
                    <li>Built responsive Webflow websites, reducing bounce rates by 30%.</li>
                    <li>Added smooth animations & interactivity to improve engagement.</li>
                    <li>Delivered pixel-perfect UI using agile development practices.</li>
                  </ul>
                </article>
              </section>
            )}
          </main>
        </div>
      </div>
    </section>
  );
};

export default About;
