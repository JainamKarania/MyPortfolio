import About from "../components/About"
import Certifications from "../components/Certifications"
import Contact from "../components/Contact"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Projects from "../components/Projects"
import Skills from "../components/Skills"

const Homepage = () => {
  return (
    <div className="bg-black bg-[radial-gradient(#ffffff22_1px,transparent_1px)] [background-size:20px_20px] w-full">
        <Navbar/>
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
        <Certifications/>
        <Contact/>
        {/* Add more sections as needed */}
    </div>
  )
}

export default Homepage