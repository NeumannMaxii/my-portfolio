function Resume({ lang, texts }) {
  return (
    <section id="resume">
      <h2>{texts.title}</h2>
      <a
        href="/cv-maximiliano.pdf"
        download
        target="_blank"
        rel="noopener noreferrer"
      >
        {texts.download}
      </a>
    </section>
  );
}
export default Resume;
