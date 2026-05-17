import Section from "./Section";
import { experience } from "../data/content";

export default function ExperienceBlock() {

  return (
    <Section
      id="experience"
      title="Experience"
      variant="default"
    >

      <div className="experienceSection">

        <div className="experienceSection__top">

          <p className="experienceSection__smallTitle">
            Work Experience
          </p>

          <h3 className="experienceSection__headline">
            My Experience & Training
          </h3>

        </div>

        <div className="expGrid">

          {experience.map((item) => (

            <div
              key={item.role + item.years}
              className="expCard"
            >

              <div className="expCard__top">

                <div className="expCard__icon">
                  💼
                </div>

                <span className="expCard__years">
                  {item.years}
                </span>

              </div>

              <div className="expCard__company">
                {item.company}
              </div>

              <h3 className="expCard__title">
                {item.role}
              </h3>

              <p className="expCard__desc">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </Section>
  );
}