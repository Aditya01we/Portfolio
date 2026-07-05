import Section from "./Section";
import { experience } from "../data/content";

export default function ExperienceBlock() {
  return (
    <Section id="experience" title="Experience" variant="default">
      <div className="experience-section">
        <header className="experience-section__header">
          <p className="experience-section__subtitle">My Professional Journey</p>
        </header>

        <div className="experience-timeline">
          {experience.map((item, index) => (
            <article 
              key={`${item.role}-${item.years}`} 
              className="timeline-item"
            >
              <div className="timeline-spine">
                <div className="timeline-dot" aria-hidden="true" />
                {index !== experience.length - 1 && (
                  <div className="timeline-line" aria-hidden="true" />
                )}
              </div>

      
              <div className="timeline-card">
                <div className="timeline-card-header">
                  <div className="timeline-meta">
                    <h3 className="timeline-role">{item.role}</h3>
                    <span className="timeline-company">{item.company}</span>
                    
                    {item.location && (
                      <span className="timeline-location">
                        <span className="geo-icon"></span> {item.location}
                      </span>
                    )}
                  </div>
                  
                  <span className="timeline-badge">{item.years}</span>
                </div>

                {Array.isArray(item.description) ? (
                  <ul className="timeline-bullet-list">
                    {item.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="timeline-fallback-desc">{item.description}</p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}