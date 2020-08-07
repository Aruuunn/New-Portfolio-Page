import React from "react"
import { Link } from "gatsby"
import Image from "../components/image"
import SEO from "../components/seo"
import NavBar from '../components/NavBar';
import Intro from '../components/intro';

const IndexPage = () => (
  <div style={{backgroundColor:'#F5F5F5'}}>
    <SEO title="Portfolio"  />
    <NavBar/>
    <Intro/>
  
</div>
)

export default IndexPage

/**
 * font-family: 'Lora', serif;
 * font-family: 'Merriweather', serif;
 */