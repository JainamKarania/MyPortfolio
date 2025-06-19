import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub, FaLinkedin, FaExternalLinkAlt } from "react-icons/fa";
import { SiLeetcode, SiGooglecloud } from "react-icons/si";
import { GoMail } from "react-icons/go";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (linksRef.current) {
      gsap.fromTo(
        linksRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: linksRef.current,
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative px-6 py-20 bg-[#0f0f0f] text-white overflow-hidden z-10"
    >
      <div className="absolute inset-0 bg-black bg-[radial-gradient(#ffffff22_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Let’s Connect</h2>
        <p className="text-gray-300 mb-12">
          Feel free to reach out or follow me on the platforms below.
        </p>

        <div
          ref={linksRef}
          className="flex flex-wrap justify-center gap-6 items-center mb-12"
        >
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/jainam-karania/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-white/20 rounded-lg hover:bg-white/10 transition"
          >
            <FaLinkedin className="text-blue-400 text-xl" />
            LinkedIn
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/JainamKarania"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-white/20 rounded-lg hover:bg-white/10 transition"
          >
            <FaGithub className="text-gray-300 text-xl" />
            GitHub
          </a>

          {/* Google Cloud */}
          <a
            href="https://www.cloudskillsboost.google/public_profiles/b61436a3-89ab-4080-ab83-9372a7ecf586"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-white/20 rounded-lg hover:bg-white/10 transition"
          >
            <SiGooglecloud className="text-yellow-300 text-xl" />
            Google Cloud Skills Boost
          </a>

          {/* Leetcode */}
          <a
            href="https://leetcode.com/u/JainamKarania/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-white/20 rounded-lg hover:bg-white/10 transition"
          >
            <SiLeetcode className="text-orange-400 text-xl" />
            LeetCode
          </a>

          {/* Email */}
          <a
            href="mailto:your.jainamkarania05@gmail.com"
            className="flex items-center gap-2 px-4 py-2 border border-white/20 rounded-lg hover:bg-white/10 transition"
          >
            <GoMail className="text-xl" />
            jainamkarania05@gmail.com
          </a>
        </div>

        {/* Hire Me Button */}
        <a
          href="mailto:your.email@example.com"
          className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold rounded-xl transition"
        >
          <FaExternalLinkAlt />
          Hire Me
        </a>
      </div>
    </section>
  );
};

export default Contact;
