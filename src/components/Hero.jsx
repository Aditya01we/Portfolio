import { useEffect, useState } from "react";
import { profile } from "../data/profile";
import { Button } from "./Button";
import aboutImg from "../assets/Hero.jpeg";

export default function Hero() {

  const roles = [
    "Web Developer",
    "JavaScript Developer",
    "React Native Developer",
  ];

  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentRole((prevRole) => {
        return (prevRole + 1) % roles.length;
      });

    }, 2000);

    return () => {
      clearInterval(interval);
    };

  }, []);

  function scrollToProjects(event) {

    event.preventDefault();

    const section = document.getElementById("projects");

    if (section) {

      section.scrollIntoView({
        behavior: "smooth",
      });

    }
  }

  return (
    <section
      id="home"
      className="hero"
    >

      <div className="container hero__inner">

        <div className="hero__content">

          <div className="hero__badge">
            Available For Work
          </div>

          <p className="hero__kicker">
            Welcome To My Portfolio
          </p>

          <h1 className="hero__title">
            Hi, I'm
            <span>
              {" "}Aditya Bhardwaj
            </span>
          </h1>

          <h2 className="hero__subtitle">
            I'm a
            <span className="typing">
              {" "}{roles[currentRole]}
            </span>
          </h2>

          <p className="hero__desc">
            Passionate frontend developer creating
            modern, responsive and user friendly
            websites and mobile applications with
            clean UI and smooth user experience.
          </p>

          <div className="hero__stats">

            <div className="hero__stat">

              <h3>
                10+
              </h3>

              <p>
                Projects
              </p>

            </div>

            <div className="hero__stat">

              <h3>
                3+
              </h3>

              <p>
                Years Learning
              </p>

            </div>

            <div className="hero__stat">

              <h3>
                5+
              </h3>

              <p>
                Technologies
              </p>

            </div>

          </div>

          <div className="hero__cta">

            <Button
              href="#projects"
              onClick={scrollToProjects}
            >
              View Projects
            </Button>

            <Button
              href="#contact"
              variant="ghost"
            >
              Hire Me
            </Button>

          </div>

          <div className="hero__social">

            <a
              href={profile.social.linkedin}
              className="hero__socialLink"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a
              href={profile.social.github}
              className="hero__socialLink"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href={profile.social.instagram}
              className="hero__socialLink"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>

          </div>

        </div>

        <div className="hero__media">

          <div className="hero__imageBox">

            <div className="hero__circle"></div>

            <img
              src={aboutImg}
              alt="Profile"
              className="hero__img"
            />

          </div>

        </div>

      </div>

    </section>
  );
}