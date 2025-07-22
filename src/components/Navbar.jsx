import { FaLinkedin, FaGithub } from "react-icons/fa";

function Navbar({ texts }) {
  return (
    <nav>
      {texts.nav.map((item) => (
        <a href={item.href} key={item.href}>
          {item.label}
        </a>
      ))}
      <a
        href="https://www.linkedin.com/in/neumann-maximiliano/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        style={{ marginLeft: "1.2rem", fontSize: "1.5rem" }}
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/NeumannMaxii"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        style={{ marginLeft: "0.5rem", fontSize: "1.5rem" }}
      >
        <FaGithub />
      </a>
    </nav>
  );
}
export default Navbar;
