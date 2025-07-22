import { useState, useRef, useEffect } from "react";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import "./App.css";

// Hook personalizado para fade-in on scroll
function useFadeInOnScroll() {
  const ref = useRef();
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    node.classList.add("fade-in-on-scroll");
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return ref;
}

// Wrapper para secciones animadas
function SectionFadeIn({ children, id }) {
  const ref = useFadeInOnScroll();
  return (
    <section id={id} ref={ref}>
      {children}
    </section>
  );
}

function App() {
  const [dark, setDark] = useState(false);
  const [loading, setLoading] = useState(true);
  const [lang, setLang] = useState("en");

  // Diccionario de textos multilíngüe con accesibilidad centralizada
  const texts = {
    en: {
      nav: [
        { href: "#about", label: "About Me" },
        { href: "#projects", label: "Projects" },
        { href: "#skills", label: "Skills" },
        { href: "#resume", label: "Resume" },
        { href: "#blog", label: "Blog" },
        { href: "#contact", label: "Contact" },
      ],
      about: {
        title: "About Me",
        desc: "I’m Maximiliano, a second-year software development student. I’m passionate about creating practical solutions through code and learning new technologies. My goal is to grow as a professional and contribute to real, challenging projects.",
      },
      projects: {
        title: "Projects",
        repo: "GitHub Repo",
        tech: "Tech stack:",
        list: [
          {
            title: "Weather App",
            desc: "A simple weather app built with React and OpenWeather API. It shows current weather and forecasts for any city.",
            tech: "React, JavaScript, CSS",
            repo: "https://github.com/usuario/weather-app",
          },
          {
            title: "Barber Shop Landing Page",
            desc: "A simple and responsive static website for a local barbershop. It includes information about services, opening hours, and contact details, fully developed with HTML and CSS.",
            tech: "HTML, CSS",
            repo: "https://github.com/usuario/barber-shop",
          },
          {
            title: "Glossary of Technical Terms",
            desc: "A web application to store, manage and search programming terms and definitions. Built with Express.js for the backend and SQL for data storage.",
            tech: "Express.js, Node.js, SQL",
            repo: "https://github.com/usuario/glossary-app",
          },
          {
            title: "Supermarket Point of Sale",
            desc: "A desktop point-of-sale software for supermarkets. Python and Tkinter for UI, SQL for data. Includes product management and sales reports.",
            tech: "Python, Tkinter, SQL",
            repo: "https://github.com/usuario/supermarket-pos",
          },
        ],
      },
      skills: {
        title: "Skills & Tools",
        hardTitle: "Hard Skills",
        softTitle: "Soft Skills",
        basic: "Basic",
        intermediate: "Intermediate",
        hard: {
          basic: [
            "React",
            "HTML",
            "CSS",
            "Git",
            "Express.js",
            "GitHub",
            "Navicat",
          ],
          intermediate: ["JavaScript", "Python", "SQL"],
        },
        soft: [
          "Teamwork",
          "Communication",
          "Problem solving",
          "Adaptability",
          "Critical thinking",
          "Time management",
        ],
      },

      resume: {
        title: "Resume",
        download: "Download my resume (PDF)",
      },
      blog: {
        title: "Blog",
        postTitle:
          "How I Built and Improved My Portfolio Project with React and Vite",
        sections: {
          intro:
            "Building this portfolio was an exciting journey in which I improved my React and design skills.",
          projectOverview: "Project Overview",
          setup:
            "Used Vite and React for a fast, modular development experience. Each section is a reusable component. All content lives in a single multilingual dictionary for instant translation.",
          keyFeatures: "Key Features",
          features: [
            "Dynamic multilingual support across all sections.",
            "Responsive design using CSS Grid and Flexbox.",
            "Dark/light mode toggle via CSS variables and React state.",
            "Animated section transitions and smooth navigation.",
            "Skills and projects fully managed and translated with language toggle.",
            "Accessibility with good color contrast and keyboard navigation.",
          ],
          technologiesUsed: "Technologies Used",
          technologies: [
            "Frontend: React, Vite, JavaScript, JSX, CSS",
            "Design: Google Fonts, React Icons",
            "Versioning/Hosting: GitHub",
          ],
          whatILearned: "What I Learned",
          learnings: [
            "How to structure a scalable, maintainable, and fully bilingual React site.",
            "Best practices for design and accessibility.",
            "Centralizing content makes updates and improvements easier.",
            "Importance of user experience in every detail.",
          ],
          close: "This article summarizes my process and growth.",
        },
      },
      contact: {
        title: "Contact",
        email: "Email",
        linkedin: "LinkedIn",
        github: "GitHub",
      },
      dark: "Toggle dark mode",
      lang: "ES",
      loading: "Loading...",
      accessibility: {
        profilePhotoAlt: "Portrait photo of Maximiliano smiling",
        githubAria: "Link to my GitHub profile",
        darkToggleAria: "Toggle dark mode",
        langToggleAria: "Switch site language to Spanish",
        navAria: "Main navigation",
      },
    },
    es: {
      nav: [
        { href: "#about", label: "Sobre mí" },
        { href: "#projects", label: "Proyectos" },
        { href: "#skills", label: "Habilidades" },
        { href: "#resume", label: "Currículum" },
        { href: "#blog", label: "Blog" },
        { href: "#contact", label: "Contacto" },
      ],
      about: {
        title: "Sobre mí",
        desc: "Soy Maximiliano, estudiante de segundo año de desarrollo de software. Me apasiona crear soluciones prácticas mediante código y aprender nuevas tecnologías. Mi objetivo es crecer como profesional y aportar en proyectos reales y desafiantes.",
      },
      projects: {
        title: "Proyectos",
        repo: "Repositorio GitHub",
        tech: "Tecnologías:",
        list: [
          {
            title: "App del Clima",
            desc: "Una app sencilla de clima hecha con React y la API de OpenWeather. Muestra el clima actual y pronósticos para cualquier ciudad.",
            tech: "React, JavaScript, CSS",
            repo: "https://github.com/usuario/weather-app",
          },
          {
            title: "Landing Page Barbería",
            desc: "Sitio web estático y responsive para una barbería. Incluye servicios, horarios y contacto. Desarrollado con HTML y CSS.",
            tech: "HTML, CSS",
            repo: "https://github.com/usuario/barber-shop",
          },
          {
            title: "Glosario de Términos Técnicos",
            desc: "Aplicación web para almacenar, gestionar y buscar términos de programación. Backend en Express.js y base de datos SQL.",
            tech: "Express.js, Node.js, SQL",
            repo: "https://github.com/usuario/glossary-app",
          },
          {
            title: "Punto de Venta para Supermercado",
            desc: "Software de escritorio para supermercados. UI con Python y Tkinter, base de datos SQL. Permite gestionar productos y reportes de ventas.",
            tech: "Python, Tkinter, SQL",
            repo: "https://github.com/usuario/supermarket-pos",
          },
        ],
      },
      skills: {
        title: "Habilidades y Herramientas",
        hardTitle: "Habilidades Duras",
        softTitle: "Habilidades Blandas",
        basic: "Básico",
        intermediate: "Intermedio",
        hard: {
          basic: [
            "React",
            "HTML",
            "CSS",
            "Git",
            "Express.js",
            "GitHub",
            "Navicat",
          ],
          intermediate: ["JavaScript", "Python", "SQL"],
        },
        soft: [
          "Trabajo en equipo",
          "Comunicación",
          "Resolución de problemas",
          "Adaptabilidad",
          "Pensamiento crítico",
          "Gestión del tiempo",
        ],
      },
      resume: {
        title: "Currículum",
        download: "Descargar mi currículum (PDF)",
      },
      blog: {
        title: "Blog",
        postTitle: "Cómo construí y mejoré mi portfolio con React y Vite",
        sections: {
          intro:
            "Construir este portfolio fue un proceso desafiante y enriquecedor donde mejoré mis habilidades en React y diseño.",
          projectOverview: "Descripción del Proyecto",
          setup:
            "Utilicé Vite y React para un desarrollo rápido y modular. Cada sección es un componente reutilizable. Todo el contenido se gestiona desde un solo diccionario multilingüe para traducción instantánea.",
          keyFeatures: "Características Principales",
          features: [
            "Soporte multilenguaje dinámico en todas las secciones.",
            "Diseño responsive usando CSS Grid y Flexbox.",
            "Botón de modo claro/oscuro con variables CSS y estado React.",
            "Animaciones de transición y navegación fluida.",
            "Habilidades y proyectos totalmente gestionados y traducidos.",
            "Accesibilidad: buen contraste de colores y navegación con teclado.",
          ],
          technologiesUsed: "Tecnologías Utilizadas",
          technologies: [
            "Frontend: React, Vite, JavaScript, JSX, CSS",
            "Diseño: Google Fonts, React Icons",
            "Versionado/Hosting: GitHub",
          ],
          whatILearned: "Lo que Aprendí",
          learnings: [
            "Cómo estructurar un sitio React escalable, mantenible y completamente bilingüe.",
            "Mejores prácticas de diseño y accesibilidad.",
            "Centralizar el contenido facilita cambios y mejoras.",
            "La importancia de la experiencia de usuario en cada detalle.",
          ],
          close: "Este artículo resume mi proceso y crecimiento.",
        },
      },
      contact: {
        title: "Contacto",
        email: "Correo electrónico",
        linkedin: "LinkedIn",
        github: "GitHub",
      },
      dark: "Cambiar modo oscuro",
      lang: "EN",
      loading: "Cargando...",
      accessibility: {
        profilePhotoAlt: "",
        githubAria: "Enlace a mi perfil de GitHub",
        darkToggleAria: "Cambiar modo oscuro",
        langToggleAria: "Cambiar el idioma del sitio a inglés",
        navAria: "Navegación principal",
      },
    },
  };

  //calcula la variable texts para el idioma elegido ANTES de renderizar
  const currentTexts = texts[lang];

  // Cambia el atributo lang del <html> cuando cambia el idioma
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    // Simula carga inicial (puedes ajustar el timeout o usar eventos reales)
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  function toggleDarkMode() {
    document.body.classList.toggle("dark");
    setDark((prev) => !prev);
  }

  function toggleLang() {
    setLang((prev) => (prev === "en" ? "es" : "en"));
  }

  return (
    <>
      <div className="top-buttons">
        {loading && (
          <div id="loader" className={loading ? "" : "hidden"}>
            <div className="loader-spinner" aria-label={texts[lang].loading} />
          </div>
        )}
        <button
          className="dark-toggle"
          onClick={toggleDarkMode}
          aria-label={texts[lang].accessibility.darkToggleAria}
        >
          {dark ? "☀️" : "🌙"}
        </button>
        <button
          className="lang-toggle"
          onClick={toggleLang}
          aria-label={texts[lang].accessibility.langToggleAria}
        >
          {texts[lang].lang}
        </button>
      </div>
      <div
        className="main-content"
        style={{ filter: loading ? "blur(2px)" : "none" }}
      >
        {/* NAVBAR SEMÁNTICO*/}
        <Navbar texts={currentTexts} />

        <main>
          <SectionFadeIn id="about">
            <AboutMe
              texts={currentTexts.about}
              accessibility={currentTexts.accessibility}
              lang={lang}
            />
          </SectionFadeIn>
          <SectionFadeIn id="projects">
            <Projects
              lang={lang}
              texts={currentTexts.projects}
              accessibility={currentTexts.accessibility}
            />
          </SectionFadeIn>
          <SectionFadeIn id="skills">
            <Skills
              lang={lang}
              texts={currentTexts.skills}
              accessibility={currentTexts.accessibility}
            />
          </SectionFadeIn>
          <SectionFadeIn id="resume">
            <Resume
              lang={lang}
              texts={currentTexts.resume}
              accessibility={currentTexts.accessibility}
            />
          </SectionFadeIn>
          <SectionFadeIn id="blog">
            <Blog
              lang={lang}
              texts={currentTexts.blog}
              accessibility={currentTexts.accessibility}
            />
          </SectionFadeIn>
          <SectionFadeIn id="contact">
            <Contact
              lang={lang}
              texts={currentTexts.contact}
              accessibility={currentTexts.accessibility}
            />
          </SectionFadeIn>
        </main>
      </div>
    </>
  );
}

export default App;
