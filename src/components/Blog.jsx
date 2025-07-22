function Blog({ texts }) {
  const sections = texts.sections || {};
  return (
    <section id="blog">
      <h2>{texts.title}</h2>
      <article>
        <h3>{texts.postTitle}</h3>
        <p>{sections.intro}</p>

        <h4>{sections.projectOverview}</h4>
        <ul>
          <li>{sections.setup}</li>
        </ul>

        <h4>{sections.keyFeatures}</h4>
        <ul>
          {(sections.features || []).map((feat, idx) => (
            <li key={idx}>{feat}</li>
          ))}
        </ul>

        <h4>{sections.technologiesUsed}</h4>
        <ul>
          {(sections.technologies || []).map((tech, idx) => (
            <li key={idx}>{tech}</li>
          ))}
        </ul>

        <h4>{sections.whatILearned}</h4>
        <ul>
          {(sections.learnings || []).map((l, idx) => (
            <li key={idx}>{l}</li>
          ))}
        </ul>

        <p>
          <em>{sections.close}</em>
        </p>
      </article>
    </section>
  );
}

export default Blog;
