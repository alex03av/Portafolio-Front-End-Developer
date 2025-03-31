"use client";

import { useState } from "react";
import PropTypes from "prop-types";

// Componente interno para las tarjetas de proyectos
function ProjectCard({ project }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
    >
      <div className="project-image-container">
        <img
          src={project.img || "/placeholder.svg"}
          alt={project.title}
          className="project-image"
        />
        <div className="project-overlay">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
        </div>
      </div>
    </a>
  );
}

// Validación de props para ProjectCard
ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default function ProjectsComponent({
  title = "My Projects",
  subtitle = "Check out some of my recent work",
  projects = [],
}) {
  const [visibleProjects, setVisibleProjects] = useState(4);

  const showMoreProjects = () => {
    setVisibleProjects((prev) => prev + 4);
  };

  return (
    <section className="projects-section">
      <div className="container">
        <div className="section-header heading">
          <h2 className="section-title white">
            {title} <span>Destacados</span>
          </h2>
          <span className="section-subtitle white">{subtitle}</span>
        </div>

        <div className="projects-grid">
          {projects.slice(0, visibleProjects).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {visibleProjects < projects.length && (
          <div className="load-more-container">
            <button onClick={showMoreProjects} className="load-more-button">
              Ver más proyectos
              <span className="arrow-icon">→</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

// Validación de props para ProjectsComponent
ProjectsComponent.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
};

// Valores por defecto para ProjectsComponent
ProjectsComponent.defaultProps = {
  title: "My Projects",
  subtitle: "Check out some of my recent work",
  projects: [],
};
