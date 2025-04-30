import { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./App.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./assets/css/theme.css";
import "./assets/css/button.css";
import "./assets/css/inner.css";
import "./assets/css/responsive.css";
import Hamburger from "./assets/img/svg/hamburger.svg";
import Service from "./assets/img/svg/service-bg.svg";
import AJVCODE from "./assets/img/AJVCODE.png";
import OwlCarousel from "react-owl-carousel";
import img12 from "./assets/img/escritorio.webp";
import User from "./assets/img/user.png";
import Quote from "./assets/img/quote.svg";
import Web1 from "./assets/img/web/2.png";
import Chollo from "./assets/img/web/chollitos.png";
import Web2 from "./assets/img/web/4.webp";
import Web3 from "./assets/img/web/7.webp";
import Web4 from "./assets/img/web/5.webp";
import Web5 from "./assets/img/web/9.webp";
import Web6 from "./assets/img/web/3.webp";
import Web7 from "./assets/img/web/8.webp";
import Web8 from "./assets/img/web/6.webp";
import ProjectsComponent from "./components/project/ProjectsComponent";
import Fronted from "./assets/img/algo.svg";
import ALEX from "./assets/img/img-20211112-204253.webp";
import ALEXyo from "./assets/img/yo.png";
import WPImg from "./assets/img/wordpress-svgrepo-com.svg";
import Speed from "./assets/img/speed.svg";
import InnerBg from "./assets/img/inner-bg1.svg";
import MSJ from "./assets/img/mensaje.gif";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import { demoProjects } from "./data/lading/landing";
import "./assets/css/typography.css";
import "./assets/css/button.css";
import "./assets/css/stellarnav.css";

import {
  FaAngleUp,
  FaTimes,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaAngleRight,
  FaRegEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaOutdent,
} from "react-icons/fa";
function ContactForm() {
  const [state, handleSubmit] = useForm("mdorjeqg");
  if (state.succeeded) {
    return (
      <>
        <img src={MSJ} alt="Mensaje enviado" />
        <h3>Mensaje enviado!</h3>
      </>
    );
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input id="name" type="text" name="name" placeholder="Nombre" />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <input type="email" name="email" placeholder="Correo Electronico" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <textarea
          name="mensaje"
          id="messege"
          cols={30}
          rows={3}
          placeholder="Mensaje"
          defaultValue={""}
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <div className="space-20" />

        <button
          className="subscribe-btn"
          type="submit"
          disabled={state.submitting}
        >
          Enviar Ahora {"      "} <FaRegEnvelope />
        </button>
      </form>
    </>
  );
}
function App() {
  useEffect(() => {
    document.querySelector(".preloader").style.display = "none";
  }, []);

  const [activeLink, setActiveLink] = useState("inicio");
  const handleClickWs = () => {
    window.open("https://api.whatsapp.com/send?phone=584124894488", "_blank");
  };
  const [sticky, setSticky] = useState(false);

  const checkScroll = () => {
    if (window.pageYOffset > 900) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };
  useEffect(() => {
    window.addEventListener("scroll", checkScroll);

    // Limpiar el evento al desmontar el componente
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth <= 768);
    });
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const handleClickMoble = (e) => {
    setIsOpen(!isOpen);
    e.preventDefault();
  };
  const dominio = "https://img.shields.io/badge";
  const tecnologias = {
    html: "-HTML-333333?style=flat&logo=html5",
    css: "-CSS-333333?style=flat&logo=css3",
    javascript: "-JavaScript-333333?style=flat&logo=javascript",
    react: "-React-333333?style=flat&logo=react",
    nextjs: "-Next.js-333333?style=flat&logo=next.js",
    astro: "-Astro-333333?style=flat&logo=astro",
    wordpress: "-WordPress-333333?style=flat&logo=wordpress",
    php: "-PHP-333333?style=flat&logo=php",
    sql: "MySQL-333333?logo=mysql&logoColor=fff&logo=sql",
    bootstrap: "-Bootstrap-333333?style=flat&logo=bootstrap",
    sass: "-SASS-333333?style=flat&logo=sass",
    typescript: "-TypeScript-333333?style=flat&logo=typescript",
    redux: "-Redux-333333?style=flat&logo=redux",
    jquery: "-jQuery-333333?style=flat&logo=jquery",
    node: "-Node.js-333333?style=flat&logo=node.js",
    express: "-Express-333333?style=flat&logo=express",
    mongodb: "-MongoDB-333333?style=flat&logo=mongodb",
    docker: "-Docker-333333?logo=docker&logoColor=fff&=docker",
    udemy: "-Udemy-131617?style=flat&logo=udemy",
    freecodecamp: "-FreeCodeCamp-131617?style=flat&logo=freecodecamp",
    git: "-Git-333333?logo=git&logoColor=fff=git",
    gitHub: "-GitHub-333333?logo=github&logoColor=fff",
  };

  const TecnologiaCarousel = () => {
    return (
      <OwlCarousel
        className="owl-theme"
        loop
        nav
        autoplay
        dots={false}
        items={10}
        responsive={{
          0: {
            items: 3,
          },
          600: {
            items: 6,
          },
          1000: {
            items: 9,
          },
        }}
      >
        {Object.keys(tecnologias).map((key) => (
          <div className="item" key={key}>
            <img src={`${dominio}/${tecnologias[key]}`} alt={key} />
          </div>
        ))}
      </OwlCarousel>
    );
  };
  return (
    <>
      {/** <div className="preloader">
        <div className="lds-dual-ring" />
      </div>*/}
      {/*PLACEHOLDER AREA END*/}
      <div className="preloader" style={{ display: "block" }}>
        <img
          src={AJVCODE}
          className="lds-dual-ring animate__zoomInDown animate__animated"
          alt=""
        />
      </div>
      <div className="site site-black">
        {" "}
        {/*::::: SITE AREA START :::::::*/}
        {/*::::: BANNER AREA START :::::::*/}
        {/*::::: BANNER AREA END :::::::*/}
        {/*::::: HEADER AREA START :::::::*/}
        <div
          className={`header-main header-area ${sticky ? "sticky" : ""}`}
          id="header"
        >
          {/*scroll to up btn*/}
          <a href="#" className="up-btn">
            <FaAngleUp />
          </a>
          <div className="container">
            <div className="row">
              <div className="col-6 col-lg-3 align-self-center">
                <a href="/" aria-label="LOGO AJVCODE" className="logo">
                  <img src={AJVCODE} alt="" height={0.4} />
                </a>
              </div>
              <div className="col-xxl-6 col-lg-8 col text-center align-self-center">
                <div className="main-menu">
                  <div
                    className={`stellarnav light right ${
                      isMobile ? "mobile" : "desktop"
                    }`}
                  >
                    <a
                      href="#"
                      className="menu-toggle"
                      onClick={handleClickMoble}
                      aria-label="boton"
                    >
                      <span className="bars">
                        <span />
                        <span />
                        <span />
                      </span>{" "}
                    </a>
                    <ul
                      className="navbarmneuclass"
                      style={{
                        display: isOpen || !isMobile ? "block" : "none",
                      }}
                    >
                      <li
                        className="cerrar"
                        onClick={handleClickMoble}
                        style={{
                          display: !isMobile ? "none" : "block",
                        }}
                      >
                        <FaOutdent />
                      </li>
                      <li className={activeLink === "inicio" ? "current" : ""}>
                        <a
                          href="#inicio"
                          onClick={() => setActiveLink("inicio")}
                        >
                          Inicio
                        </a>
                      </li>
                      <li className={activeLink === "about" ? "current" : ""}>
                        <a href="#about" onClick={() => setActiveLink("about")}>
                          Acerca De
                        </a>
                      </li>
                      <li
                        className={activeLink === "portfolio" ? "current" : ""}
                      >
                        <a
                          href="#portfolio"
                          onClick={() => setActiveLink("portfolio")}
                        >
                          Experiencia
                        </a>
                      </li>
                      <li
                        className={activeLink === "Proyectos" ? "current" : ""}
                      >
                        <a
                          href="#Proyectos"
                          onClick={() => setActiveLink("Proyectos")}
                        >
                          Portafolio
                        </a>
                      </li>
                      <li
                        className={activeLink === "Contactar" ? "current" : ""}
                      >
                        <a
                          href="#Contactar"
                          onClick={() => setActiveLink("Contactar")}
                        >
                          Contacto
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="d-none d-lg-block col-xxl-3 col-lg-auto col-auto align-self-center text-right">
                <div className="search-area">
                  <div className="grid-menu" id="grid-side">
                    <img
                      src={Hamburger}
                      onClick={handleClick}
                      alt="Redes Sociales"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`slide-widgest-wrap ${isActive ? "active" : ""}`}
            id="slide-widgest"
          >
            <div
              className={`side-widgest ${isActive ? "active" : ""}`}
              id="side-content"
            >
              <div className="side-close" id="close-btn" onClick={handleClick}>
                <FaTimes />
              </div>
              <div className="logo">
                <a href="#" aria-label="AJVCODE">
                  <img src={AJVCODE} alt="" />
                </a>
              </div>
              <div className="side-content">
                <p>
                  ¡Hola! Soy un desarrollador web dedicado a transformar
                  conceptos en realidad digital. Aunque no suelo publicar
                  contenido regularmente, te invito a seguirme en mis redes
                  sociales para verificar mi identidad y estar al tanto de
                  cualquier actualización importante. ¡No dudes en conectarte
                  conmigo! #DesarrolloWeb #Conectemos
                </p>
              </div>
              <div className="side-social">
                <ul>
                  <li>
                    <a
                      href="https://www.facebook.com/alexander.araujo.796"
                      aria-label="Facebook"
                      rel="nofollow"
                    >
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/Aalexanderjo"
                      aria-label="Twitter"
                      rel="nofollow"
                    >
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/alexander-araujo-03840a258/"
                      aria-label="LinkedinIn"
                      rel="nofollow"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/alexanderaraujo00/?hl=es-la"
                      aria-label="Instagram"
                    >
                      <FaInstagram />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/*::::: HEADER AREA END :::::::*/}
        {/*:::::WELCOME ATRA START :::::::*/}
        <div className="welcome-area-wrap welcome__wrap1" id="inicio">
          <OwlCarousel
            className="welcome-carousel owl-theme"
            dots={false}
            margin={10}
            items={1}
            loop
            autoplayTimeout={1000}
          >
            <div className="single-welcome-area home_1">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="wlc-title white text-center">
                      <h1 className="animate__fadeInDown animate__animated ">
                        <span>La programación</span>
                        <br /> es el arte de resolver problemas
                      </h1>
                      <p className="animate__fadeInDown animate__animated ">
                        Con cada desafío superado, no solo mejoramos nuestras
                        habilidades, sino que también dejamos nuestra huella en
                        el mundo digital.
                      </p>
                      <a
                        href="https://api.whatsapp.com/send?phone=584124894488"
                        className="cbtn cbnt1 animate__fadeInDown animate__animated "
                      >
                        Comienza Tu Proyecto Hoy <FaAngleRight />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wlc-author-1">
                <h1 className="wlc-filltext">Desarollo web</h1>
              </div>
            </div>
            <div className="single-welcome-area home_1">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="wlc-title white text-center">
                      <h1 className="animate__fadeInDown animate__animated ">
                        <span>En cada línea de código</span> se esconde una
                        historia por contar
                      </h1>
                      <p className="animate__fadeInDown animate__animated ">
                        Nuestros sueños y aspiraciones se traducen en funciones
                        y algoritmos, dando vida a lo que antes solo existía en
                        nuestra imaginación.
                      </p>
                      <a
                        href="https://api.whatsapp.com/send?phone=584124894488"
                        className="cbtn cbnt1 animate__fadeInDown animate__animated text-center mx-auto"
                      >
                        Hablemos de Tus Ideas <FaAngleRight />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wlc-author-1">
                <h1 className="wlc-filltext">Programacion</h1>
              </div>
            </div>
          </OwlCarousel>
        </div>
        {/*:::::WELCOME AREA END :::::::*/}
        {/*:::::ABOUT AREA START :::::::*/}
        <div className="about-area about-area1 section-padding" id="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 align-self-center">
                <div className="about-shape">
                  <div className="about-img-section about-img-section1 text-center"></div>
                </div>
              </div>
              <div className="col-lg-6 offset-lg-1 align-self-center">
                <div className="heading white">
                  <strong className="filltext">Acerca de</strong>
                  <h2>
                    TRANSFORMANDO DESAFÍOS EN <span>TRIUNFOS</span>
                  </h2>
                  <p>
                    Hola, Soy Alexander Araujo, aunque la mayoría de las
                    personas me conocen como Alex. Me dedico profesionalmente al
                    desarrollo web frontend, transformando ideas en soluciones
                    digitales efectivas. ¡Bienvenido a mi mundo! 😊
                  </p>
                  <p>
                    Como desarrollador web independiente, cada día es una nueva
                    aventura. Me enfrento a desafíos con entusiasmo, viéndolos
                    como oportunidades para aprender y crecer. Cada línea de
                    código que escribo es un paso hacia la transformación de una
                    idea abstracta en una solución digital tangible.
                  </p>
                  <p>
                    Como freelancer, tengo la libertad de elegir los proyectos
                    que me apasionan y la flexibilidad para adaptarme a las
                    necesidades cambiantes del mundo digital. Soy más que un
                    desarrollador; soy un innovador, un solucionador de
                    problemas y un creador.
                  </p>
                  <p>
                    Y lo más importante es que entiendo que el error es
                    simplemente una oportunidad para aprender y mejorar. Cada
                    bug es un misterio esperando ser resuelto, cada problema es
                    un rompecabezas esperando ser armado. En cada desafío, veo
                    la oportunidad de crecer y perfeccionar mis habilidades. Así
                    que aquí estoy, listo para enfrentar los desafíos del día y
                    transformarlos en triunfos. Porque soy un freelancer en el
                    desarrollo web frontend, y estoy listo para hacer realidad
                    tus ideas digitales.
                  </p>
                  <a
                    href="https://api.whatsapp.com/send?phone=584124894488"
                    className="cbtn cbnt1 animate__fadeInDown animate__animated "
                  >
                    Contactar <FaAngleRight />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*:::::SKILL AREA START :::::::*/}
        <div className="skill-area" id="portfolio">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 align-self-center">
                <div className="heading white">
                  <strong className="filltext">Mi carrera</strong>
                  <small>MIS ESTUDIOS</small>
                  <h2>ESTUDIOS ALCANZADOS</h2>
                </div>
              </div>
              <div className="col-lg-6 align-self-center">
                <div className="info-content">
                  <p>
                    Mi trayectoria profesional es un recorrido de desafíos
                    superados y habilidades fortalecidas.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-60" />
            <div className="row">
              {/* Técnico Superior Universitario */}
              <div className="col-sm-12 col-lg-6 mb-4">
                <div className="skill-box">
                  <h3 className="smalle">
                    2021 - 2024 (Colegio Universitario de Administración y
                    Mercadeo)
                  </h3>
                  <h4>Técnico Superior Universitario en Informática</h4>
                  <p>
                    Profesional capacitado en el análisis, diseño, desarrollo y
                    mantenimiento de sistemas y aplicaciones informáticas.
                    Experiencia en manejo de software, hardware, redes y
                    sistemas de información para resolver problemas tecnológicos
                    complejos.
                  </p>
                </div>
              </div>

              {/* Diseño web adaptable */}
              <div className="col-sm-12 col-lg-6 mb-4">
                <div className="skill-box">
                  <div className="d-flex justify-content-between align-items-center">
                    <h3 className="smalle">2021 - 2022</h3>
                    <img
                      src={`${dominio}/${tecnologias.freecodecamp}`}
                      alt="FreeCodeCamp"
                    />
                  </div>
                  <h3>Diseño web adaptable</h3>
                  <p>
                    Formación en los fundamentos de diseño web responsivo,
                    incluyendo HTML, CSS y Flexbox, con enfoque en la creación
                    de sitios optimizados para diferentes dispositivos y tamaños
                    de pantalla.
                  </p>
                  <div
                    className="mt-2"
                    style={{ display: "flex", flexWrap: "wrap", gap: 10 }}
                  >
                    <img src={`${dominio}/${tecnologias.html}`} alt="HTML" />
                    <img src={`${dominio}/${tecnologias.css}`} alt="CSS" />
                  </div>
                </div>
              </div>

              {/* Algoritmos y estructuras de datos */}
              <div className="col-sm-12 col-lg-6 mb-4">
                <div className="skill-box">
                  <div className="d-flex justify-content-between align-items-center">
                    <h3 className="smalle">2021 - 2022</h3>
                    <img
                      src={`${dominio}/${tecnologias.freecodecamp}`}
                      alt="FreeCodeCamp"
                    />
                  </div>
                  <h4>Algoritmos de JavaScript y estructuras de datos</h4>
                  <p>
                    Capacitación avanzada en algoritmos y estructuras de datos
                    usando JavaScript, con prácticas en resolución de problemas
                    y optimización de código para mejorar la lógica de
                    programación.
                  </p>
                  <div
                    className="mt-2"
                    style={{ display: "flex", flexWrap: "wrap", gap: 10 }}
                  >
                    <img src={`${dominio}/${tecnologias.html}`} alt="HTML" />
                    <img src={`${dominio}/${tecnologias.css}`} alt="CSS" />
                    <img
                      src={`${dominio}/${tecnologias.javascript}`}
                      alt="JavaScript"
                    />
                  </div>
                </div>
              </div>

              {/* Bibliotecas de desarrollo front-end */}
              <div className="col-sm-12 col-lg-6 mb-4">
                <div className="skill-box">
                  <div className="d-flex justify-content-between align-items-center">
                    <h3 className="smalle">2021 - 2022</h3>
                    <img
                      src={`${dominio}/${tecnologias.freecodecamp}`}
                      alt="FreeCodeCamp"
                    />
                  </div>
                  <h5>Bibliotecas de desarrollo front-end</h5>
                  <p>
                    Especialización en bibliotecas populares como React y
                    Bootstrap para el desarrollo de interfaces de usuario
                    interactivas y dinámicas, con un enfoque en la creación de
                    componentes reutilizables y eficientes.
                  </p>
                  <div
                    className="mt-2"
                    style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}
                  >
                    <img src={`${dominio}/${tecnologias.html}`} alt="HTML" />
                    <img src={`${dominio}/${tecnologias.css}`} alt="CSS" />
                    <img
                      src={`${dominio}/${tecnologias.javascript}`}
                      alt="JavaScript"
                    />
                    <img src={`${dominio}/${tecnologias.react}`} alt="React" />
                    <img src={`${dominio}/${tecnologias.sass}`} alt="SASS" />
                    <img
                      src={`${dominio}/${tecnologias.bootstrap}`}
                      alt="Bootstrap"
                    />
                    <img src={`${dominio}/${tecnologias.redux}`} alt="Redux" />
                    <img
                      src={`${dominio}/${tecnologias.jquery}`}
                      alt="jQuery"
                    />
                  </div>
                </div>
              </div>

              {/* Master en APIs RESTful */}
              <div className="col-sm-12 col-lg-6 mb-4">
                <div className="skill-box">
                  <div className="d-flex justify-content-between align-items-center">
                    <h3 className="smalle">2024</h3>
                    <img src={`${dominio}/${tecnologias.udemy}`} alt="Udemy" />
                  </div>
                  <h4>Master en APIs RESTful con NodeJS</h4>
                  <p>
                    Formación avanzada en el desarrollo de APIs RESTful
                    utilizando Node.js, Express y bases de datos como MongoDB.
                    Incluye la implementación de buenas prácticas en seguridad y
                    manejo eficiente de datos.
                  </p>
                  <div
                    className="mt-2"
                    style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}
                  >
                    <img
                      src={`${dominio}/${tecnologias.javascript}`}
                      alt="JavaScript"
                    />
                    <img src={`${dominio}/${tecnologias.node}`} alt="Node.js" />
                    <img
                      src={`${dominio}/${tecnologias.express}`}
                      alt="Express"
                    />
                    <img
                      src={`${dominio}/${tecnologias.mongodb}`}
                      alt="MongoDB"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*:::::SKILL AREA END :::::::*/}
        {/*:::::ABOUT AREA END :::::::*/}
        {/*:::::SKILL AREA START :::::::*/}
        <div className="space-50" />
        <div className="skill-area " id="portfolio">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 align-self-center">
                <div className="heading white">
                  <strong className="filltext">Mi carrera</strong>
                  <small>MI EXPERIENCIA</small> <h2>EXPERIENCIA LABORAL</h2>
                </div>
              </div>
              <div className="col-lg-6 align-self-center">
                <div className="info-content">
                  <p>
                    Mi trayectoria profesional es un recorrido de desafíos
                    superados y habilidades fortalecidas.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-60" />

            <div className="row ">
              <div className="col-sm-12 col-lg-6 mb-4">
                <div className="skill-box ">
                  <h3 className="smalle filltext">2022 - 2024</h3>{" "}
                  <h4>Frontend Developer - Freelancer</h4>
                  <p>
                    Desarrollador Front-End independiente, ofreciendo soluciones
                    personalizadas a través de plataformas freelance. He
                    trabajado con una amplia variedad de clientes, encargándome
                    del mantenimiento de sitios web y del desarrollo de
                    interfaces modernas, funcionales y adaptadas a sus
                    necesidades específicas.
                  </p>
                  <div
                    style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}
                  >
                    <img src={`${dominio}/${tecnologias.html}`} alt="HTML" />
                    <img src={`${dominio}/${tecnologias.css}`} alt="CSS" />
                    <img
                      src={`${dominio}/${tecnologias.javascript}`}
                      alt="JavaScript"
                    />
                    <img src={`${dominio}/${tecnologias.react}`} alt="React" />
                    <img
                      src={`${dominio}/${tecnologias.nextjs}`}
                      alt="Next.js"
                    />
                    <img src={`${dominio}/${tecnologias.astro}`} alt="Astro" />

                    <img src={`${dominio}/${tecnologias.sass}`} alt="SASS" />
                    <img
                      src={`${dominio}/${tecnologias.bootstrap}`}
                      alt="Bootstrap"
                    />
                    <img
                      src={`${dominio}/${tecnologias.typescript}`}
                      alt="TypeScript"
                    />
                    <img src={`${dominio}/${tecnologias.redux}`} alt="Redux" />
                    <img
                      src={`${dominio}/${tecnologias.jquery}`}
                      alt="jQuery"
                    />
                    <img src={`${dominio}/${tecnologias.git}`} alt="Git" />
                    <img
                      src={`${dominio}/${tecnologias.gitHub}`}
                      alt="GitHub"
                    />
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-lg-6 mb-4">
                <div className="skill-box">
                  <h3 className="smalle">2023 - 2024</h3>
                  <h4>WordPress Developer - Freelancer</h4>{" "}
                  <p>
                    Especialista en desarrollo a medida para WordPress. Diseño y
                    programo funcionalidades personalizadas tanto en Front-End
                    como en Back-End, asegurando una experiencia optimizada para
                    los usuarios y cumpliendo con los objetivos de los proyectos
                    solicitados por los clientes
                  </p>
                  <div
                    style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}
                  >
                    <img src={`${dominio}/${tecnologias.html}`} alt="HTML" />
                    <img src={`${dominio}/${tecnologias.css}`} alt="CSS" />
                    <img
                      src={`${dominio}/${tecnologias.javascript}`}
                      alt="JavaScript"
                    />
                    <img src={`${dominio}/${tecnologias.react}`} alt="React" />

                    <img
                      src={`${dominio}/${tecnologias.wordpress}`}
                      alt="WordPress"
                    />
                    <img src={`${dominio}/${tecnologias.php}`} alt="PHP" />
                    <img src={`${dominio}/${tecnologias.sql}`} alt="SQL" />

                    <img
                      src={`${dominio}/${tecnologias.bootstrap}`}
                      alt="Bootstrap"
                    />

                    <img
                      src={`${dominio}/${tecnologias.jquery}`}
                      alt="jQuery"
                    />
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-lg-6 mb-4">
                <div className="skill-box">
                  <h3 className="smalle">06/02/2023 - 05/05/2024 </h3>{" "}
                  <h4>WordPress and Front-End Developer - Gotta Be Public</h4>
                  <p>
                    Desarrollador WordPress y Front-End para esta agencia
                    digital. Participé en la creación y mantenimiento de sitios
                    web, resolviendo problemas relacionados con WordPress y
                    desarrollo Front-End, con un enfoque en soluciones
                    eficientes y creativas.
                  </p>
                  <div
                    style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}
                  >
                    <img src={`${dominio}/${tecnologias.html}`} alt="HTML" />
                    <img src={`${dominio}/${tecnologias.css}`} alt="CSS" />
                    <img
                      src={`${dominio}/${tecnologias.javascript}`}
                      alt="JavaScript"
                    />
                    <img src={`${dominio}/${tecnologias.react}`} alt="React" />
                    <img
                      src={`${dominio}/${tecnologias.nextjs}`}
                      alt="Next.js"
                    />
                    <img
                      src={`${dominio}/${tecnologias.wordpress}`}
                      alt="WordPress"
                    />
                    <img src={`${dominio}/${tecnologias.php}`} alt="PHP" />
                    <img src={`${dominio}/${tecnologias.sql}`} alt="SQL" />
                    <img
                      src={`${dominio}/${tecnologias.bootstrap}`}
                      alt="Bootstrap"
                    />
                    <img
                      src={`${dominio}/${tecnologias.jquery}`}
                      alt="jQuery"
                    />{" "}
                    <img src={`${dominio}/${tecnologias.git}`} alt="Git" />
                    <img
                      src={`${dominio}/${tecnologias.gitHub}`}
                      alt="GitHub"
                    />
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-lg-6 mb-4">
                <div className="skill-box">
                  <h3 className="smalle">01-07-24 | Actualidad</h3>
                  <h4>Frontend Developer - Getalink.com</h4>{" "}
                  <p>
                    Desarrollador Front-End especializado en UI/UX Linkbuilding
                    Platform. Trabajo en el desarrollo Front-End con React y
                    Next.js, utilizando SASS y Bootstrap, implementando buenas
                    prácticas bajo la arquitectura hexagonal.
                  </p>
                  <div
                    style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}
                  >
                    <img src={`${dominio}/${tecnologias.html}`} alt="HTML" />
                    <img src={`${dominio}/${tecnologias.css}`} alt="CSS" />
                    <img
                      src={`${dominio}/${tecnologias.javascript}`}
                      alt="JavaScript"
                    />
                    <img src={`${dominio}/${tecnologias.react}`} alt="React" />
                    <img
                      src={`${dominio}/${tecnologias.nextjs}`}
                      alt="Next.js"
                    />
                    <img src={`${dominio}/${tecnologias.sass}`} alt="SASS" />
                    <img
                      src={`${dominio}/${tecnologias.bootstrap}`}
                      alt="Bootstrap"
                    />
                    <img
                      src={`${dominio}/${tecnologias.typescript}`}
                      alt="TypeScript"
                    />
                    <img
                      src={`${dominio}/${tecnologias.docker}`}
                      alt="Docker"
                    />{" "}
                    <img src={`${dominio}/${tecnologias.git}`} alt="Git" />
                    <img
                      src={`${dominio}/${tecnologias.gitHub}`}
                      alt="GitHub"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-100" />
          {/* Start Technical Skills Section */}
          {/*   <div className="skill__circles">
            <div className="container">
              <div className="row">
                <OwlCarousel
                  className="owl-theme"
                  dots={false}
                  loop
                  margin={10}
                  autoplay={true}
                  items={4}
                  responsive={{
                    0: {
                      items: 1,
                    },
                    600: {
                      items: 2,
                    },
                    1000: {
                      items: 4,
                    },
                  }}
                >
                  <div className="colsm6 col-lg-3 text-center">
                    <div className="circle1 circle" id="circle1">
                      <strong>
                        <img src={HTML} alt="" />
                      </strong>
                      <span>HTML5</span>
                    </div>
                  </div>
                  <div className="colsm6 col-lg-3 text-center">
                    <div className="circle2 circle" id="circle2">
                      <strong>
                        <img src={CSS} alt="" />
                      </strong>
                      <span>CSS</span>
                    </div>
                  </div>
                  <div className="colsm6 col-lg-3 text-center">
                    <div className="circle2 circle" id="circle2">
                      <strong>
                        <img src={JS} alt="" />
                      </strong>
                      <span>JavaScript</span>
                    </div>
                  </div>
                  <div className="colsm6 col-lg-3 text-center">
                    <div className="circle2 circle" id="circle2">
                      <strong>
                        <img src={REACT} alt="" />
                      </strong>
                      <span>React</span>
                    </div>
                  </div>
                  <div className="colsm6 col-lg-3 text-center">
                    <div className="circle2 circle" id="circle2">
                      <strong>
                        <img src={GIT} alt="" />
                      </strong>
                      <span>GIT</span>
                    </div>
                  </div>
                  <div className="colsm6 col-lg-3 text-center">
                    <div className="circle3 circle" id="circle3">
                      <strong>
                        <img src={Bootstrap} alt="" />
                      </strong>
                      <span>Bootstrap</span>
                    </div>
                  </div>
                  <div className="colsm6 col-lg-3 text-center">
                    <div className="circle4 circle" id="circle4">
                      <strong>
                        <img src={PHP} alt="" />
                      </strong>
                      <span>PHP</span>
                    </div>
                  </div>{" "}
                  <div className="colsm6 col-lg-3 text-center">
                    <div className="circle4 circle" id="circle4">
                      <strong>
                        <img src={WP} alt="" />
                      </strong>
                      <span>WordPress</span>
                    </div>
                  </div>
                  <div className="colsm6 col-lg-3 text-center">
                    <div className="circle4 circle" id="circle4">
                      <strong>
                        <img src={NEXTJS} alt="" />
                      </strong>
                      <span>NextJS</span>
                    </div>
                  </div>{" "}
                  <div className="colsm6 col-lg-3 text-center">
                    <div className="circle4 circle" id="circle4">
                      <strong>
                        <img src={SQL} alt="" />
                      </strong>
                      <span>SQL</span>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div> */}
        </div>
        {/*:::::SKILL AREA END :::::::*/}
        {/*:::::SERVICE AREA START :::::::*/}
        <div className="service-area padding-bottom" id="service">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 align-self-center">
                <div className="heading white">
                  <strong className="filltext">Mis Servicios</strong>
                  <small>¿QUÉ PUEDO HACER?</small>
                  <h2>
                    SERVICIOS Y <span>SOLUCIONES</span>
                  </h2>
                </div>
              </div>
              <div className="col-lg-7 align-self-center">
                <div className="info-content">
                  <p>
                    Como desarrollador frontend con experiencia, me especializo
                    en crear soluciones digitales eficientes y escalables. Mi
                    enfoque se centra en la excelencia, asegurando interfaces
                    optimizadas, funcionales y atractivas que ofrecen
                    experiencias de usuario de alto nivel.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-60" />
            <div className="row">
              <div className="col-lg-4">
                <div className="single-service">
                  <div className="service-icon">
                    <img src={Fronted} alt="" />
                  </div>
                  <div className="service-text">
                    <h4>Desarrollo Front-End</h4>
                    <p>
                      Diseño y desarrollo interfaces modernas y eficientes con
                      tecnologías como React y Next.js. Desde la maquetación
                      inicial hasta la implementación de patrones avanzados,
                      garantizo experiencias interactivas, accesibles y
                      visualmente atractivas.
                    </p>
                  </div>
                  <div className="circles-wrap">
                    <div className="circles">
                      <span className="circle circle-1" />
                      <span className="circle circle-2" />
                      <span className="circle circle-3" />
                      <span className="circle circle-4" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-service">
                  <div className="service-icon">
                    <img src={Speed} alt="" />
                  </div>
                  <div className="service-text">
                    <h4>Optimización de Rendimiento</h4>
                    <p>
                      Mejoro la velocidad y el rendimiento de sitios web
                      aplicando estrategias avanzadas como minificación de
                      archivos, optimización de imágenes, carga diferida y
                      caching inteligente, asegurando tiempos de respuesta
                      rápidos y experiencias fluidas.
                    </p>
                  </div>
                  <div className="circles-wrap">
                    <div className="circles">
                      <span className="circle circle-1" />
                      <span className="circle circle-2" />
                      <span className="circle circle-3" />
                      <span className="circle circle-4" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-service">
                  <div className="service-icon">
                    <img src={WPImg} alt="" />
                  </div>
                  <div className="service-text">
                    <h4>Desarrollo en WordPress</h4>
                    <p>
                      Desarrollo soluciones personalizadas en WordPress,
                      incluyendo plugins, shortcodes y bloques de Gutenberg en
                      React. Además, optimizo y gestiono sitios mediante
                      configuraciones avanzadas de temas, plugins y
                      personalización con Bootstrap y CSS.
                    </p>
                  </div>
                  <div className="circles-wrap">
                    <div className="circles">
                      <span className="circle circle-1" />
                      <span className="circle circle-2" />
                      <span className="circle circle-3" />
                      <span className="circle circle-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*:::::SERVICE AREA END :::::::*/}
        {/*:::::PROJECT AREA START :::::::*/}
        <div className="project-area " id="Proyectos">
          <div>
            <ProjectsComponent
              title="Proyectos"
              subtitle="Explora una selección de trabajos y colaboraciones en las que he tenido el placer de participar o liderar."
              projects={demoProjects}
            />
          </div>
        </div>
        {/*:::::PROJECT AREA END :::::::*/}
        {/*:::::TESTIMONIALS AREA START :::::::*/}
        <div className="testimonials-area testimonials-area1 section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 align-self-center">
                <div className="heading white">
                  <strong className="filltext">Testimonios</strong>
                  <small>Testimonios</small>
                  <h2>
                    comentarios de <span>clientes</span>
                  </h2>
                </div>
              </div>
              <div className="col-lg-5 align-self-center">
                <div className="info-content">
                  <p>
                    Aquí puedes leer algunos de sus testimonios que reflejan la
                    calidad de mi trabajo y dedicación.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-60" />
            <div className="row">
              <div className="col-lg-10 m-auto">
                <OwlCarousel
                  dots={false}
                  className="testimonials owl-theme"
                  loop
                  margin={10}
                  items={1}
                >
                  <div className="testimonial">
                    <div className="testimonial-img">
                      <img src={User} alt="" />
                    </div>
                    <div className="testimonial-text">
                      <img src={Quote} alt="" />
                      <h4>
                        Mi experiencia con este servicio fue excepcionalmente
                        buena. Desde el principio, me impresionó la paciencia y
                        la dedicación que mostraron para atender todas mis
                        necesidades. No solo se tomaron el tiempo para entender
                        mis requerimientos, sino que también prestaron atención
                        a cada detalle, asegurándose de que todo se realizara a
                        la perfección.
                      </h4>
                      <p>Jose Luis Agudo, España.</p>
                    </div>
                  </div>
                  <div className="testimonial">
                    <div className="testimonial-img">
                      <img src={User} alt="" />
                    </div>
                    <div className="testimonial-text">
                      <img src={Quote} alt="" />
                      <h4>
                        El servicio que recibí fue positivo, y le daría una
                        calificación de 10 de 10. Me impresionó el
                        profesionalismo y su eficiencia en su trabajo. También
                        aprecié su capacidad para adaptarse a las demandas que
                        surgieron durante el proceso.
                      </h4>
                      <p>Daniel Manzanares Galera, España.</p>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
        <div className="space-60" />
        {/*:::::TESTIMONIALS AREA END :::::::*/}
        {/*:::::PRICING AREA START :::::::*/}
        {/*:::::PRICING AREA END :::::::*/}
        {/*:::::BLOG AREA START :::::::*/}
        <div className="blog-area" id="Contactar">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 align-self-center">
                <div className="heading white">
                  <strong className="filltext"> CONTACTO</strong>
                  <small>No dudes en enviarme un mensaje.</small>
                  <h2>
                    ESTOY DISPONIBLE PARA ATENDER TUS <span>CONSULTAS.</span>
                  </h2>
                </div>
              </div>
              <div className="col-lg-6 align-self-center">
                <div className="info-content">
                  <p>
                    Si tienes alguna pregunta, comentario o simplemente quieres
                    charlar, no dudes en enviarme un mensaje. Estoy aquí para
                    ayudarte y siempre estoy dispuesto a escuchar.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-60" />
          </div>
        </div>
        {/*:::::BLOG AREA END :::::::*/}
        {/*:::::CALL TO ACTION AREA START :::::::*/}
        {/*:::::CALL TO ACTION AREA END :::::::*/}
        <div className="contact-page-area inner-bg-shpes ">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 text-center">
                <div className="contact__card">
                  <div className="contact__card__icon">
                    <FaMapMarkerAlt />
                  </div>
                  <h4>ubicación</h4>
                  <ul>
                    <li>
                      <a href="#">Valencia, Carabobo, Venezuela</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 text-center">
                <div className="contact__card">
                  <div className="contact__card__icon">
                    <FaPhone />
                  </div>
                  <h4>TELÉFONO</h4>
                  <ul>
                    <li>
                      <a href=" https://api.whatsapp.com/send?phone=584124500727">
                        +58 4124500727
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 text-center">
                <div className="contact__card">
                  <div className="contact__card__icon">
                    <FaEnvelope />
                  </div>
                  <h4>Email</h4>
                  <ul>
                    <li>
                      <a
                        href="mailto:araujoalexander343@gmail.com
"
                      >
                        araujoalexander343@gmail.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="space-100" />
            <div className="row">
              <div className="col-lg-6 align-self-center">
                <div className="map mr-lg-4">
                  <img src={img12} alt="" />
                </div>
              </div>
              <div className="col-lg-6 align-self-center">
                <div className="primery-heading">
                  <strong className="filltext">Contacto</strong>
                  <small>Contacto</small>
                  <h2>Hablemos Para tus Próximos Proyectos</h2>
                </div>
                <div className="space-20" />
                <div className="contact-form">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
          <img src={Service} alt="" className="inner-shape1" />
          <img src={InnerBg} alt="" className="inner-shape2" />
        </div>
        {/*:::::FOOTER AREA START :::::::*/}
        <div className="footer-area footer-area1 section-padding">
          {/*:::::LOGO AREA START :::::::*/}

          {/*:::::LOGO AREA END :::::::*/}
          <div className="container">
            <div className="row">
              <div className="col-lg-6 m-auto text-center">
                <div className="space-40" />
                <div className="copyright">
                  <p>
                    Copyright © {new Date().getFullYear()} by{" "}
                    <span>CODE.JSX Dev: Alex-Araujo </span> all right reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="joinchat joinchat--right joinchat--dark joinchat--show joinchat--noanim joinchat--btn joinchat--tooltip"
          onClick={handleClickWs}
        >
          <div className="joinchat__button">
            <div className="joinchat__button__open" />
          </div>
        </div>{" "}
        <div className="container">
          <TecnologiaCarousel />
        </div>
        {/*:::::FOOTER AREA END :::::::*/}
      </div>{" "}
    </>
  );
}

export default App;
