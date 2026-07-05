import Section from "./Section";
import { skills } from "../data/content";

export default function Skills() {
  const groups = {
    "📱 Mobile App Development": [],
    "🌐 Frontend": [],
    "☁️ Backend & Services": [],
    "🗄️ Database & Backend": [],
    "🛠 Development Tools": [],
    "🚀 Development Concepts": [],
  };

  for (const s of skills) {
    const label = s.label.toLowerCase();

    // 📱 Mobile Development
    if (
      label.includes("react native") ||
      label.includes("react navigation") ||
      label.includes("redux") ||
      label.includes("responsive ui")
    ) {
      groups["📱 Mobile App Development"].push(s);
    }

    // 🌐 Frontend
    else if (
      label.includes("html") ||
      label.includes("css") ||
      label.includes("bootstrap") ||
      (label.includes("react") && !label.includes("native")) ||
      label.includes("javascript")
    ) {
      groups["🌐 Frontend"].push(s);
    }

    // ☁️ Backend & Services
    else if (
      label.includes("firebase") ||
      label.includes("firestore") ||
      label.includes("authentication") ||
      label.includes("axios") ||
      label.includes("rest api") ||
      label.includes("asyncstorage")
    ) {
      groups["☁️ Backend & Services"].push(s);
    }

    // 🗄️ Database & Backend
    else if (
      label.includes("mongodb") ||
      label.includes("node") ||
      label.includes("express") ||
      label.includes("json")
    ) {
      groups["🗄️ Database & Backend"].push(s);
    }

    // 🛠 Development Tools
    else if (
      label.includes("git") ||
      label.includes("github") ||
      label.includes("android studio") ||
      label.includes("vs code") ||
      label.includes("postman") ||
      label.includes("figma")
    ) {
      groups["🛠 Development Tools"].push(s);
    }

    // 🚀 Development Concepts
    else {
      groups["🚀 Development Concepts"].push(s);
    }
  }

  const activeGroups = Object.entries(groups).filter(
    ([, items]) => items.length > 0
  );

  return (
    <Section id="skills" title="Technical Skills" variant="default">
      <div className="skillsSection">
        <div className="skillsSection__top">
          <p className="skillsSection__smallTitle">
            Technologies & Tools I Work With
          </p>
        </div>

        <div className="skills">
          {activeGroups.map(([groupName, groupSkills]) => (
            <div key={groupName} className="skillsGroup">
              <h4 className="skillsGroup__title">{groupName}</h4>

              <div className="skillsGroup__grid">
                {groupSkills.map((skill) => (
                  <div
                    key={skill.label}
                    className="skillPill"
                    title={skill.label}
                  >
                    <span className="skillPill__label">
                      {skill.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}