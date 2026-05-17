import Section from "./Section";
import { education } from "../data/content";

export default function Education() {

  return (
    <Section
      id="education"
      title="Education"
      variant="alt"
    >

      <div className="education">

        <div className="education__top">

          <p className="education__smallTitle">
            Academic Journey
          </p>

          <h3 className="education__headline">
            My Education & Qualifications
          </h3>

        </div>

        <div className="timeline">

          {education.map((item, index) => (

            <div
              key={item.school + item.years}
              className="timelineItem"
            >

              <div className="timelineItem__left">

                <div className="timelineItem__dot"></div>

                {index !== education.length - 1 && (
                  <div className="timelineItem__line"></div>
                )}

              </div>

              <div className="timelineItem__content">

                <div className="timelineItem__top">

                  <span className="timelineItem__years">
                    {item.years}
                  </span>

                  <div className="timelineItem__badge">
                    Education
                  </div>

                </div>

                <h3 className="timelineItem__title">
                  {item.school}
                </h3>

                <p className="timelineItem__desc">
                  {item.degree}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </Section>
  );
}