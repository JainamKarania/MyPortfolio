import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (formRef.current) {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: formRef.current,
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
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Get in Touch</h2>
        <p className="text-gray-300 mb-12">
          Have a question or want to work together? Let’s connect.
        </p>

        <form
          ref={formRef}
          className="space-y-6 bg-[#1a1a1a]/70 p-8 rounded-2xl backdrop-blur-lg shadow-xl"
        >
          <div>
            <label className="block mb-2 text-left text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 bg-[#111] border border-gray-700 rounded-xl focus:outline-none focus:border-white"
            />
          </div>

          <div>
            <label className="block mb-2 text-left text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 bg-[#111] border border-gray-700 rounded-xl focus:outline-none focus:border-white"
            />
          </div>

          <div>
            <label className="block mb-2 text-left text-sm font-medium">
              Message
            </label>
            <textarea
              placeholder="Tell me what’s on your mind..."
              rows={5}
              className="w-full px-4 py-3 bg-[#111] border border-gray-700 rounded-xl focus:outline-none focus:border-white resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-white text-black rounded-xl font-semibold hover:bg-gray-200 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
