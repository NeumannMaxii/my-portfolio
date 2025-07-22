import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaDatabase,
  FaPython,
  FaGithub,
} from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";

function Skills({ lang, texts }) {
  // hard.básico, hard.intermedio y soft deben venir en texts.skills
  const hard = texts.hard;
  const soft = texts.soft;

  // Relaciona nombre con ícono para que quede ordenado
  const iconMap = {
    JavaScript: <FaJs color="#f7df1e" size={32} />,
    React: <FaReact color="#61dafb" size={32} />,
    HTML: <FaHtml5 color="#e34c26" size={32} />,
    CSS: <FaCss3Alt color="#2965f1" size={32} />,
    Git: <FaGitAlt color="#f34f29" size={32} />,
    SQL: <FaDatabase color="#007bff" size={32} />,
    Python: <FaPython color="#3776AB" size={32} />,
    GitHub: (
      <FaGithub
        color="#fff"
        size={32}
        style={{ background: "#24292e", borderRadius: "50%" }}
      />
    ),
    "Express.js": <FaNodeJs color="#8cc84b" size={32} />,
    Navicat: <FaDatabase color="#8bcc4c" size={32} />,
  };

  return (
    <section id="skills">
      <h2>{texts.title}</h2>
      <div className="skills-groups">
        {/* Hard Skills */}
        <div className="skills-hard">
          <h3>{texts.hardTitle}</h3>
          <div className="skills-hard-levels">
            <div>
              <b>{texts.basic}:</b>
              <ul className="skills-inline-list">
                {hard.basic.map((skill) => (
                  <li key={skill}>
                    {iconMap[skill]}
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <b>{texts.intermediate}:</b>
              <ul className="skills-inline-list">
                {hard.intermediate.map((skill) => (
                  <li key={skill}>
                    {iconMap[skill]}
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* Soft Skills en 2 columnas */}
        <div className="skills-soft">
          <h3>{texts.softTitle}</h3>
          <ul className="skills-soft-columns">
            {soft.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
