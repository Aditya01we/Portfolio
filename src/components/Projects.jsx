import { useState, useEffect, useRef } from "react";
import Section from "./Section";
import Modal from "./Modal";
import { projects } from "../data/content";

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [screenshotIndex, setScreenshotIndex] = useState(-1);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (screenshotIndex === -1 || !activeProject) return;
      if (e.key === "ArrowRight") handleNextScreenshot();
      if (e.key === "ArrowLeft") handlePrevScreenshot();
      if (e.key === "Escape") setScreenshotIndex(-1);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [screenshotIndex, activeProject]);

  const handleNextScreenshot = () => {
    if (!activeProject) return;
    setScreenshotIndex((prev) => 
      prev === activeProject.screenshots.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrevScreenshot = () => {
    if (!activeProject) return;
    setScreenshotIndex((prev) => 
      prev === 0 ? activeProject.screenshots.length - 1 : prev - 1
    );
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipeGesture();
  };

  const handleSwipeGesture = () => {
    const swipeThreshold = 50;
    const difference = touchStartX.current - touchEndX.current;

    if (Math.abs(difference) > swipeThreshold) {
      if (difference > 0) {
        handleNextScreenshot();
      } else {
        handlePrevScreenshot();
      }
    }
  };

  return (
    <Section id="projects" title="Featured Projects" variant="default">
      <div className="projects-section">
        <header className="projects-section__header">
          <p className="projects-section__subtitle">Some of my recent work</p>
        </header>

        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <div className="project-card__glow-overlay" aria-hidden="true" />
              
              {project.bannerImage ? (
                <div className="project-card__banner-wrapper">
                  <img
                    className="project-card__banner"
                    src={project.bannerImage}
                    alt={`${project.title} Banner`}
                    loading="lazy"
                  />
                </div>
              ) : (
                <div className="project-card__banner-wrapper project-card__banner-wrapper--empty" />
              )}

              <div className="project-card__content">
                <div className="project-card__header">
                  <header>
                    <span className="project-card__label">Project</span>
                    <h3 className="project-card__title">{project.title}</h3>
                  </header>

                  <div className="project-card__tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="project-card__desc">{project.description}</p>

                <div className="project-card__actions">
                  <button
                    className="btn btn--primary"
                    onClick={() => setActiveProject(project)}
                  >
                    Watch Demo
                  </button>
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
            </article>
          ))}
        </div>
      </div>

      <Modal 
        isOpen={!!activeProject} 
        onClose={() => setActiveProject(null)}
        title={activeProject ? `${activeProject.title} — Demo` : ""}
      >
        {activeProject && (
          <div className="demo-modal">
            {activeProject.bannerImage && (
              <div className="demo-modal__banner-wrapper">
                <img 
                  src={activeProject.bannerImage} 
                  alt={`${activeProject.title} Preview`}
                  className="demo-modal__banner"
                />
              </div>
            )}

            {activeProject.screenshots && activeProject.screenshots.length > 0 && (
              <div className="demo-modal__gallery">
                <h4 className="demo-modal__gallery-title">App Screenshots</h4>
                <div className="demo-modal__screenshot-row">
                  {activeProject.screenshots.map((src, index) => (
                    <div 
                      key={index} 
                      className="demo-modal__screenshot-thumb"
                      onClick={() => setScreenshotIndex(index)}
                    >
                      <img 
                        src={src} 
                        alt={`${activeProject.title} thumbnail ${index + 1}`} 
                        className="demo-modal__thumb-img"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </Modal>

      {screenshotIndex !== -1 && activeProject && (
        <div 
          className="lightbox-overlay" 
          onClick={() => setScreenshotIndex(-1)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button className="lightbox-close" onClick={() => setScreenshotIndex(-1)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <button 
            className="lightbox-nav lightbox-nav--left" 
            onClick={(e) => { e.stopPropagation(); handlePrevScreenshot(); }}
            aria-label="Previous image"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div className="lightbox-container">
            <img 
              src={activeProject.screenshots[screenshotIndex]} 
              alt="Fullscreen expanded snapshot view" 
              className="lightbox-image" 
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          <button 
            className="lightbox-nav lightbox-nav--right" 
            onClick={(e) => { e.stopPropagation(); handleNextScreenshot(); }}
            aria-label="Next image"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
          
          <div className="lightbox-counter">
            {screenshotIndex + 1} / {activeProject.screenshots.length}
          </div>
        </div>
      )}
    </Section>
  );
}