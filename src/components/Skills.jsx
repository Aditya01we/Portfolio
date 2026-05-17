import Section from "./Section";
import { skills } from "../data/content";

export default function Skills() {

  const barSkills = skills.filter((skill) => {
    return !skill.ring;
  });

  const ringSkills = skills.filter((skill) => {
    return skill.ring;
  });

  return (
    <Section
      id="skills"
      title="My Skills"
      variant="default"
    >

      <div className="skillsSection">

        <div className="skillsSection__top">

          <p className="skillsSection__smallTitle">
            Professional Skills
          </p>

          <h3 className="skillsSection__headline">
            Technologies & Tools I Work With
          </h3>

        </div>

        <div className="skills">

          <div className="skills__bars">

            {barSkills.map((skill) => (

              <div
                key={skill.label}
                className="skillRow"
              >

                <div className="skillRow__top">

                  <h4 className="skillRow__name">
                    {skill.label}
                  </h4>

                  <span className="skillRow__percent">
                    {skill.percent}%
                  </span>

                </div>

                <div className="skillRow__track">

                  <div
                    className="skillRow__fill"
                    style={{
                      width: `${skill.percent}%`,
                    }}
                  ></div>

                </div>

              </div>

            ))}

          </div>

          <div className="skills__rings">

            {ringSkills.map((skill) => (

              <div
                key={skill.label}
                className="ringWrap"
              >

                <div
                  className="ring"
                  style={{
                    "--value": skill.percent,
                  }}
                >

                  <div className="ring__inner">

                    <h4 className="ring__title">
                      {skill.label}
                    </h4>

                    <span className="ring__percent">
                      {skill.percent}%
                    </span>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </Section>
  );
}