import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      },
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="cta-heading"
      className="
        relative py-24 px-6 bg-white text-black overflow-hidden
        bg-[repeating-linear-gradient(to_right,#00000008,#00000008_1px,transparent_1px,transparent_60px)]
      "
    >
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <header>
          <h2 id="cta-heading" className="text-3xl md:text-5xl font-bold">
            Let’s Work Together
          </h2>
        </header>

        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          I have experience building responsive frontend applications using
          React and Webflow, and I’m currently seeking opportunities as a
          fresher in the AI/ML domain where I can learn, contribute, and grow.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <button
            className="border border-black px-8 py-3 rounded-md
              hover:bg-black hover:text-white
              transition duration-300 font-medium"
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            Contact Me
          </button>

          {/* <a
            href="/resume.pdf"
            className="
              border border-black px-8 py-3 rounded-md
              hover:bg-black hover:text-white
              transition duration-300 font-medium
            "
          >
            View Resume
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default CTA;
