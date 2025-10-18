import React from "react";
import { useEffect } from "react";
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "./components/Header.jsx";
import HeroSection from "./components/HeroSection.jsx";
import CustomCursor from "./components/CustomCursor.jsx";
import AboutSection from "./components/AboutSection.jsx";
import ProjectsSection from "./components/ProjectsSection.jsx";
import ContactSection from "./components/ContactSection.jsx";


export default function App() {

  useEffect(() => {
    // register scrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger)

    // Refresh scrollTrigger when the page is fully loaded
    ScrollTrigger.refresh()

    // clean up ScrollTrigger on component unmount
    return() => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill ())
    }
    
  },[])

  return (
    <>
      <CustomCursor />
      <Header />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      

    </>
  );
}
