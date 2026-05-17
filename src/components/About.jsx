import Section from "./Section";
import { profile } from "../data/profile";
import { Button } from "./Button";
import aboutImg from "../assets/hero-about.jpeg";
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
    <Section
      id="about"
      title="About Me"
      variant="alt"
    >

      <div className="about">

        <div className="about__media">

          <div className="about__imageBox">

            <img
              src={aboutImg}
              alt="About"
              className="about__img"
            />

      

          </div>

          <div className="about__actions">

            <Button
              href="#contact"
              onClick={scrollToContact}
            >
              Hire Me
            </Button>

          <a
  href={resume}
  download
  className="btn btn--primary"
>
  Download CV
</a>

          </div>

        </div>

        <div className="about__content">

          <p className="about__smallTitle">
            About Me
          </p>

          <h3 className="about__headline">
            I Build Modern Websites & Mobile Apps
          </h3>

          <p className="about__text">
            {profile.about}
          </p>

          <div className="about__grid">

            <div className="about__card">

              <div className="kv">
                <span className="kv__k">
                  Name
                </span>

                <span className="kv__v">
                  {profile.name}
                </span>
              </div>

              <div className="kv">
                <span className="kv__k">
                  Email
                </span>

                <span className="kv__v">
                  {profile.email}
                </span>
              </div>

              <div className="kv">
                <span className="kv__k">
                  Birthday
                </span>

                <span className="kv__v">
                  {profile.birthday}
                </span>
              </div>

              <div className="kv">
                <span className="kv__k">
                  Education
                </span>

                <span className="kv__v">
                  {profile.study}
                </span>
              </div>

            </div>

            <div className="about__card">

              <div className="kv">
                <span className="kv__k">
                  Phone
                </span>

                <span className="kv__v">
                  {profile.phone}
                </span>
              </div>

              <div className="kv">
                <span className="kv__k">
                  Location
                </span>

                <span className="kv__v">
                  {profile.location}
                </span>
              </div>

              <div className="kv">
                <span className="kv__k">
                  Experience
                </span>

                <span className="kv__v">
                  {profile.experience}
                </span>
              </div>

              <div className="kv">
                <span className="kv__k">
                  Freelance
                </span>

                <span className="kv__v">
                  Available
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </Section>
  );
}