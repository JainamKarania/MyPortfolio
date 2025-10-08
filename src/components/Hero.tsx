import { useEffect, useRef } from "react";
import { FaGithub, FaLinkedin, FaReact } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const iconsRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animateIn = (element: Element | null, delay = 0) => {
      if (!element) return;
      gsap.fromTo(
        element,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
          },
        }
      );
    };

    animateIn(headingRef.current, 0);
    animateIn(paragraphRef.current, 0.2);
    animateIn(iconsRef.current, 0.4);
    animateIn(buttonsRef.current, 0.6);

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

  // Smooth scroll helper
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Star Background */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-black bg-[radial-gradient(#ffffff22_1px,transparent_1px)] [background-size:20px_20px] z-0"
      />

      {/* Foreground Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <div className="flex items-center justify-center mb-4">
          <FaReact
            style={{ animation: "spin 4s linear infinite" }}
            className="w-12 h-12 p-2 bg-white text-blue-700 rounded-full shadow-lg"
          />
        </div>

        <h1
          ref={headingRef}
          className="text-white text-4xl md:text-6xl font-bold max-w-xl mx-auto"
        >
          Welcome to my Portfolio
        </h1>

        <p
          ref={paragraphRef}
          className="text-gray-300 text-lg md:text-xl max-w-xl mx-auto mt-6 mb-8"
        >
          Passionate Engineer focused on solving real-world problems through
          code.
        </p>

        <div
          ref={iconsRef}
          className="flex justify-center gap-6 text-white text-2xl mb-8"
        >
          <a
            href="https://www.linkedin.com/in/jainam-karania/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/JainamKarania"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-300"
          >
            <FaGithub />
          </a>
        </div>

        {/* Buttons */}
        <div ref={buttonsRef} className="flex justify-center gap-6">
          <button
            onClick={() => scrollToSection("contact")}
            className="px-6 py-3 bg-gradient-to-r from-sky-500 to-cyan-700  rounded-xl font-semibold shadow-lg transition duration-300 transform hover:scale-105"
          >
            Let's Connect
          </button>
          <a
            href="/Jainamkarania_Resume.pdf"
            download="Jainamkarania_Resume.pdf"
            className="px-6 py-3 border-2 border-cyan-400 hover:border-cyan-500 hover:text-cyan-700 rounded-xl font-semibold shadow-lg transition duration-300 transform hover:scale-105"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
