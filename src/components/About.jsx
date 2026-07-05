import Section from "./Section";
import { profile } from "../data/profile";
import { Button } from "./Button";

import resume from "../assets/AdityasUpdated.pdf";

export default function About() {
  function scrollToContact(event) {
    event.preventDefault();

    const section = document.getElementById("contact");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  }

  return (
    <Section id="about" title="About Me" variant="alt">
      <div className="about">
        <div className="about__media">

<img src={profileImage} alt="Aditya Bhardwaj" className="about__image" />
          <div className="about__actions">
            <Button href="#contact" onClick={scrollToContact}>
              Hire Me
            </Button>

            <a href={resume} download className="btn btn--primary">
              Download CV
            </a>
          </div>
        </div>

        <div className="about__content">
          <p className="about__smallTitle">Get to know me better</p>

          <h3 className="about__headline">
           Mobile App Developer
          </h3>

          <p className="about__text">{profile.about}</p>

          <div className="about__grid">
            <div className="about__card">

              <div className="kv">
                <span className="kv__k">Birthday</span>

                <span className="kv__v">{profile.birthday}</span>
              </div>


            </div>

            <div className="about__card">


              <div className="kv">
                <span className="kv__k">Location</span>

                <span className="kv__v">{profile.location}</span>
              </div>
              </div>
<div className="about__card">
              <div className="kv">
                <span className="kv__k">Degree</span>

                <span className="kv__v">{profile.degree}</span>
              </div>
              </div>
              <div className="about__card">

              <div className="kv">
                <span className="kv__k">Languages</span>

                <span className="kv__v">English, Hindi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
