import React , {useState} from "react"
import SEO from "../components/seo"
import NavBar from "../components/NavBar"
import Intro from "../components/intro"
import MySkillSet from "../components/skillset"
import MyProjects from "../components/projects"
import MyExperience from "../components/experience"
import MyEducation from "../components/education"
import MyCertifications from "../components/certifications"
import ContactMe from "../components/contactme"
import Footer from '../components/footer';

const IndexPage = () =>{ 
  const [isScrolled ,setScrolled ] = useState(false);

  return (
  <div style={{ backgroundColor: "#F5F5F5",width:'100%',overflowX:'hidden',padding:0,margin:0,scrollBehavior:'smooth'}}>
    <SEO title="Portfolio" />
    <NavBar isScrolled={isScrolled} />
    <Intro id="intro" isScrolled={isScrolled} setScrolled={() => setScrolled(true)}/>
    <MySkillSet id="skills" />
    <MyProjects id="projects" />
    <MyExperience id="experience" />
    <MyEducation id="education" />
    <MyCertifications id="certification" />
    <ContactMe id="contactme" />
    
    <Footer/>
  </div>
)}

export default IndexPage

/**
 * font-family: 'Lora', serif;
 * font-family: 'Merriweather', serif;
 */
