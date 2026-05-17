import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Toaster } from "react-hot-toast";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {

  useEffect(() => {

    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: "ease-in-out",
    });

  }, []);

  return (
    <div className="appRoot">

      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style: {
            background: "#ffffff",
            color: "#1E293B",
            border: "1px solid #d1fae5",
            borderRadius: "16px",
            padding: "14px 18px",
            fontSize: "14px",
            fontWeight: "600",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          },

          success: {
            iconTheme: {
              primary: "#059669",
              secondary: "#ffffff",
            },
          },

          error: {
            iconTheme: {
              primary: "#dc2626",
              secondary: "#ffffff",
            },
          },
        }}
      />

      <Header />

      <main>

        <div data-aos="fade-up">
          <Hero />
        </div>

        <div data-aos="fade-right">
          <About />
        </div>

        <div data-aos="zoom-in">
          <Skills />
        </div>

        <div data-aos="fade-up">
          <Projects />
        </div>

        <div data-aos="fade-left">
          <Education />
        </div>

        <div data-aos="zoom-in-up">
          <Experience />
        </div>

        <div data-aos="flip-left">
          <Certifications />
        </div>

        <div data-aos="fade-up">
          <Contact />
        </div>

      </main>

      <Footer />

    </div>
  );
}