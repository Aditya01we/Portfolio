import Section from "./Section";
import { projects } from "../data/content";

export default function Projects() {

  return (
    <Section
      id="projects"
      title="Projects"
      variant="default"
    >

      <div className="projectsSection">

        <div className="projectsSection__top">

          <p className="projectsSection__smallTitle">
            My Recent Work
          </p>

          <h3 className="projectsSection__headline">
            Featured Projects
          </h3>

        </div>

        <div className="projects">

          {projects.map((project) => (

            <div
              key={project.title}
              className="projectCard"
            >

              <div className="projectCard__overlay"></div>

              <div className="projectCard__content">

                <div className="projectCard__top">

                  <div>

                    <p className="projectCard__label">
                      Project
                    </p>

                    <h3 className="projectCard__title">
                      {project.title}
                    </h3>

                  </div>

                  <div className="projectCard__tags">

                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="tag"
                      >
                        {tag}
                      </span>
                    ))}

                  </div>

                </div>

                <p className="projectCard__desc">
                  {project.description}
                </p>

                <div className="projectCard__actions">

                  <a
                    href={project.liveLink}
                    className="btn btn--primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.githubLink}
                    className="btn btn--ghost"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </Section>
  );
}