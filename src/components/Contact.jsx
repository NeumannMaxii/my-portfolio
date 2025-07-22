function Contact({ lang, texts }) {
  return (
    <section id="contact">
      <h2>{texts.title}</h2>
      <ul>
        <li>
          {texts.email}:{" "}
          <a href="mailto:neumannmaximiliano@gmail.com">
            neumannmaximiliano@gmail.com
          </a>
        </li>
        <li>
          {texts.linkedin}:{" "}
          <a
            href="https://www.linkedin.com/in/neumann-maximiliano/"
            target="_blank"
            rel="noopener noreferrer"
          >
            neumann-maximiliano
          </a>
        </li>
        <li>
          {texts.github}:{" "}
          <a
            href="https://github.com/NeumannMaxii"
            target="_blank"
            rel="noopener noreferrer"
          >
            NeumannMaxii
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
