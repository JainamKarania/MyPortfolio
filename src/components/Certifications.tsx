import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { FaMicrosoft, FaLinkedin } from "react-icons/fa";
// import { DiGoogleCloudPlatform } from "react-icons/di";
import Genai from "../assets/GenAI.png";
import intogenai from "../assets/intogenai.png"; // Placeholder for the second badge
import { SiGooglecloud } from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

interface Achievement {
  name: string;
  image: string;
  date: string;
  link: string;
  provider: {
    name: string;
    Icon: React.ElementType;
  };
}

const certifications: Achievement[] = [
  {
    name: "GenAI Academy - Google Cloud Certificate",
    image: Genai,
    date: "28th May 2025",
    link: "https://certificate.hack2skill.com/user/GenAI5-28M/2025H2S04GENAI-A01934",
    provider: {
      name: "Google Cloud & Hack2Skill",
      Icon: SiGooglecloud,
    },
  },
  {
    name: "Introduction to Generative AI - Google Cloud & Simplilearn Certificate",
    image: intogenai,
    date: "15th April 2025",
    link: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIzODA3IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvODE5Mjg2Nl84NTU1MDIzMTc0NDcwMzM5Mzg5OC5wbmciLCJ1c2VybmFtZSI6IkphaW5hbSBLYXJhbmlhIn0%3D&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F6750%2FIntroduction-to-Generative-AI%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1303947469586642281&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FV9w5MDs1KsjCrCk6yrytKTUstKsrMS49PKsovL04tsvUBqkpN8cwDAGwWYUFBAAAA",
    provider: {
      name: "Google Cloud & Simplilearn",
      Icon: SiGooglecloud,
    },
  },
  {
    name: "Introduction to Large Language Models - Google Cloud",
    image: "https://cdn.qwiklabs.com/A7K3LJijKihsoqFVb1y5ud07C8zClZG%2BMLTiCcYzpcw%3D",
    date: "16th April 2025",
    link: "https://www.cloudskillsboost.google/public_profiles/b61436a3-89ab-4080-ab83-9372a7ecf586/badges/14919498",
    provider: {
      name: "Google Cloud",
      Icon: SiGooglecloud,
    },
  },
];

const skillBadges: Achievement[] = [
  {
    name: "Prompt Design in Vertex AI",
    image: "https://cdn.qwiklabs.com/q48Ha5zDHeG%2F5vYgH5OmkLgRYeLlHtbLgOawB7wJgo8%3D",
    date: "27th April 2025",
    link: "https://www.cloudskillsboost.google/public_profiles/b61436a3-89ab-4080-ab83-9372a7ecf586/badges/15303553",
    provider: {
      name: "Google Cloud",
      Icon: SiGooglecloud,
    },
  },
  {
    name: "Build Real World AI Applications with Gemini and Imagen",
    image: "https://cdn.qwiklabs.com/RQhZyhu6J%2FB6MoY2p4wAb4HWxjAuBOsmG71ZtUW9hUQ%3D",
    date: "1st May 2025",
    link: "https://www.cloudskillsboost.google/public_profiles/b61436a3-89ab-4080-ab83-9372a7ecf586/badges/15444999",
    provider: {
      name: "Google Cloud",
      Icon: SiGooglecloud,
    },
  },
  {
    name: "Develop GenAI Apps with Gemini and Streamlit",
    image: "https://cdn.qwiklabs.com/Vs5lwoywGjpdqDAwpa0BZsp9Rdokv2NiozwkXyf3YlY%3D",
    date: "4th May 2025",
    link: "https://www.cloudskillsboost.google/public_profiles/b61436a3-89ab-4080-ab83-9372a7ecf586/badges/15531102",
    provider: {
      name: "Google Cloud",
      Icon: SiGooglecloud,
    },
  },
  {
    name: "Inspect Rich Documents with Gemini Multimodality and Multimodal RAG",
    image: "https://cdn.qwiklabs.com/VRjYdOVTtkQh6sftId60ruWjlsjNrsyZlBpRQyJBmSE%3D",
    date: "8th May 2025",
    link: "https://www.cloudskillsboost.google/public_profiles/b61436a3-89ab-4080-ab83-9372a7ecf586/badges/15603838",
    provider: {
      name: "Google Cloud",
      Icon: SiGooglecloud,
    },
  },
  {
    name: "Explore Generative AI with the Gemini API in Vertex AI",
    image: "https://cdn.qwiklabs.com/%2FvVFFMnVihhZgpNuRQ4JAtETKDxJ8JE63AicSxDJMmM%3D",
    date: "12th May 2025",
    link: "https://www.cloudskillsboost.google/public_profiles/b61436a3-89ab-4080-ab83-9372a7ecf586/badges/15677763",
    provider: {
      name: "Google Cloud",
      Icon: SiGooglecloud,
    },
  },

];

const Certifications = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [activeTab, setActiveTab] = useState<"certifications" | "badges">("certifications");

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
  }, []);

  const renderCard = (item: Achievement, index: number) => {
    const ProviderIcon = item.provider.Icon;
    return (
      <div
        key={index}
        className="bg-white/5 border border-white/10 backdrop-blur rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-500/30 transition"
      >
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-40 object-cover"
        />
        <div className="p-4 space-y-3 text-white">
          <h3 className="text-lg font-semibold">{item.name}</h3>
          <p className="text-sm text-gray-300">Earned: {item.date}</p>

          <div className="text-sm flex gap-4 flex-col">
            
            <p className="md:text-lg text-sm font-medium">Provided By:</p>
            <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm">
              <ProviderIcon className="w-8 h-8" />
              <span className="text-lg">{item.provider.name}</span>
            </div>
          </div>

          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 px-4 py-1 text-sm border border-cyan-400 text-cyan-300 rounded-full hover:bg-cyan-500 hover:text-white transition"
          >
            View {activeTab === "certifications" ? "Certificate" : "Badge"}
          </a>
        </div>
      </div>
    );
  };

  const data = activeTab === "certifications" ? certifications : skillBadges;

  return (
    <section ref={sectionRef} id="certificate" className="py-20 relative z-10">
      <div className="absolute inset-0 bg-black bg-[radial-gradient(#ffffff22_1px,transparent_1px)] [background-size:20px_20px] z-0" />
      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <h2
          ref={headingRef}
          className="text-xl md:text-4xl font-bold text-white mb-10 text-center"
        >
          Certifications & Skill Badges
        </h2>

        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab("certifications")}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
              activeTab === "certifications"
                ? "bg-cyan-500 text-white"
                : "bg-white/10 text-white hover:bg-cyan-600/30"
            }`}
          >
            Certifications
          </button>
          <button
            onClick={() => setActiveTab("badges")}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
              activeTab === "badges"
                ? "bg-cyan-500 text-white"
                : "bg-white/10 text-white hover:bg-cyan-600/30"
            }`}
          >
            Skill Badges
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item, index) => renderCard(item, index))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
