import { useEffect, useState } from "react";
import { profile } from "../data/profile";
import { Button } from "./Button";
import resume from "../assets/AdityasUpdated.pdf";

export default function Hero() {
  const roles = [
    "Web Developer",
    "JavaScript Developer",
    "React Native Developer",
  ];

  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prevRole) => (prevRole + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <div className="hero__badge">Available For Work</div>

          <h1 className="hero__title">
            Hi, I'm<span> Aditya Bhardwaj</span>
          </h1>

          <h2 className="hero__desc">
            Mobile App Developer specializing in
            <span className="typing"> React Native, Firebase, and Redux</span>
          </h2>

          <p className="hero__desc">
Dedicated to creating beautiful, performant, and scalable mobile applications that solve real-world problems and deliver exceptional user experiences.
          </p>
          <div className="hero__stats">
            <div className="hero__stat">
              <h3>10+</h3>
              <p>Projects</p>
            </div>

            <div className="hero__stat">
              <h3>5+</h3>
              <p>Skills</p>
            </div>

            <div className="hero__stat">
              <h3>5+</h3>
              <p>Years Learning</p>
            </div>
          </div>
          <div className="hero__cta">
            <Button
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const section = document.getElementById("contact");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Let's Talk
            </Button>

            <Button
              as="a"
              href={resume}
              download="Aditya_Bhardwaj_Resume.pdf"
              variant="ghost"
            >
              View Resume
            </Button>
          </div>
        </div>

        <div className="hero__media">
          <div className="hero__imageBox hero__codeBox">
            <div className="hero__circle"></div>

            <div className="codeEditor" aria-label="Code editor mockup">
              <div className="codeEditor__topbar">
                <div className="codeEditor__filename">
                  <span className="codeEditor__fileIcon">javascript</span>
                </div>
                <div className="codeEditor__controls">
                  <span className="codeEditor__winControl codeEditor__winControl--min">
                    <svg width="10" height="1" viewBox="0 0 10 1">
                      <line x1="0" y1="0.5" x2="10" y2="0.5" stroke="currentColor" strokeWidth="1" />
                    </svg>
                  </span>
                  <span className="codeEditor__winControl codeEditor__winControl--max">
                    <svg width="10" height="10" viewBox="0 0 10 10">
                      <rect x="0.5" y="0.5" width="9" height="9" fill="none" stroke="currentColor" strokeWidth="1" />
                    </svg>
                  </span>
                  <span className="codeEditor__winControl codeEditor__winControl--close">
                    <svg width="10" height="10" viewBox="0 0 10 10">
                      <path d="M1 1 L9 9 M9 1 L1 9" stroke="currentColor" strokeWidth="1" />
                    </svg>
                  </span>
                </div>
              </div>

              <pre
                className="codeEditor__code"
                aria-hidden="true"
                style={{ whiteSpace: "pre-wrap", overflowX: "visible" }}
              >
                <span className="codeEditor__line">
                  <span className="codeEditor__lineNumber">1</span>
                  <span className="tok-comment">// AdityaBhardwaj.js</span>
                </span>
                <span className="codeEditor__line">
                  <span className="codeEditor__lineNumber">2</span>
                </span>
                <span className="codeEditor__line">
                  <span className="codeEditor__lineNumber">3</span>
                  <span className="tok-keyword">const</span>{" "}
                  <span className="tok-class">AdityaBhardwaj</span> = {"{"}
                </span>
                <span className="codeEditor__line">
                  <span className="codeEditor__lineNumber">4</span>{" "}
                  <span className="tok-attr">role</span>{" "}
                  <span className="tok-symbol">:</span>{" "}
                  <span className="tok-string">"React Native Developer"</span>,
                </span>
                <span className="codeEditor__line">
                  <span className="codeEditor__lineNumber">5</span>{" "}
                  <span className="tok-attr">experience</span>{" "}
                  <span className="tok-symbol">:</span>{" "}
                  <span className="tok-string">"3-Month Internship"</span>,
                </span>
                <span className="codeEditor__line">
                  <span className="codeEditor__lineNumber">6</span>{" "}
                  <span className="tok-attr">education</span>{" "}
                  <span className="tok-symbol">:</span>{" "}
                  <span className="tok-string">"B.Tech Computer Science"</span>,
                </span>
                <span className="codeEditor__line">
                  <span className="codeEditor__lineNumber">7</span>{" "}
                  <span className="tok-attr">passion</span>{" "}
                  <span className="tok-symbol">:</span>{" "}
                  <span className="tok-string">"Building Fast & Scalable Mobile Apps"</span>,
                </span>
                <span className="codeEditor__line">
                  <span className="codeEditor__lineNumber">8</span>
                </span>
                <span className="codeEditor__line">
                  <span className="codeEditor__lineNumber">9</span>{" "}
                  <span className="tok-keyword">code</span>() {"{"}
                </span>
                <span className="codeEditor__line">
                  <span className="codeEditor__lineNumber">10</span>{" "}
                  <span className="tok-keyword">return</span>{" "}
                  <span className="tok-string">"Clean Architecture"</span>;
                </span>
                <span className="codeEditor__line">
                  <span className="codeEditor__lineNumber">11</span> {"}"},
                </span>
                <span className="codeEditor__line">
                  <span className="codeEditor__lineNumber">12</span>{" "}
                  <span className="tok-keyword">learn</span>() {"{"}
                </span>
                <span className="codeEditor__line">
                  <span className="codeEditor__lineNumber">13</span>{" "}
                  <span className="tok-keyword">return</span>{" "}
                  <span className="tok-string">"Every Day"</span>;
                </span>
                <span className="codeEditor__line">
                  <span className="codeEditor__lineNumber">14</span> {"}"},
                </span>
                <span className="codeEditor__line">
                  <span className="codeEditor__lineNumber">15</span>{" "}
                  <span className="tok-keyword">build</span>() {"{"}
                </span>
                <span className="codeEditor__line">
                  <span className="codeEditor__lineNumber">16</span>{" "}
                  <span className="tok-keyword">return</span>{" "}
                  <span className="tok-string">"Apps That Make an Impact "</span>;
                </span>
                <span className="codeEditor__line">
                  <span className="codeEditor__lineNumber">17</span> {"}"}
                </span>
                <span className="codeEditor__line">
                  <span className="codeEditor__lineNumber">18</span>
                  {"}"}
                </span>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}