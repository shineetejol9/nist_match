<<<<<<< HEAD
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
=======
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header.jsx";
import HeroSection from "./components/HeroSection.jsx";
import Aboutsection from "./components/Aboutsection.jsx";
import ProjectsSection from "./components/ProjectsSection.jsx";
import ContactSection from "./components/ContactSection.jsx";
import BlankPage from "./components/BlankPage.jsx";
import CustomCursor from "./components/CustomCursor.jsx";

export default function App() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.refresh();
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <Router>
      <CustomCursor />
      <Routes>
        {/* Main website route */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <HeroSection />
              <Aboutsection />
              <ProjectsSection />
              <ContactSection />
            </>
          }
        />

        {/* Blank page route */}
        <Route path="/blank" element={<BlankPage />} />
      </Routes>
    </Router>
>>>>>>> temp-backup
  );
}
