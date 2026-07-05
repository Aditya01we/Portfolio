import Section from "./Section";
import { certifications } from "../data/content";

export default function Certifications() {
  return (
    <Section id="certifications" title="Certifications" variant="alt">
      <div className="certificationsSection">
        <div className="certificationsSection__top">
          <p className="certificationsSection__smallTitle">Certifications & Courses</p>

        </div>

        <div className="certGrid">
          {certifications.map((certificate) => (
            <div key={certificate.title} className="certCard">
              <div className="certCard__glow" />
              
              <div className="certCard__top">
                <div className="certCard__icon">
                  <span>✓</span>
                </div>
                <div className="certCard__badge">Certified</div>
              </div>

              <h3 className="certCard__title">{certificate.title}</h3>
              <p className="certCard__org">{certificate.org}</p>
              <p className="certCard__desc">{certificate.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}