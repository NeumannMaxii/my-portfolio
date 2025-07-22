function AboutMe({ lang, texts }) {
  return (
    <section id="about">
      <h2>{texts.title}</h2>
      <p>{texts.desc}</p>
    </section>
  );
}
export default AboutMe;
