function Projects({ texts }) {
  return (
    <section id="projects">
      <h2>{texts.title}</h2>
      <div className="projects-grid">
        {texts.list.map((project, idx) => (
          <div className="project-card" key={idx}>
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <p>
              <strong>{texts.tech}</strong> {project.tech}
            </p>
            {project.repo && (
              <a href={project.repo} target="_blank" rel="noopener noreferrer">
                {texts.repo}
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
export default Projects;
