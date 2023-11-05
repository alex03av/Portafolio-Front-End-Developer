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
import HTML from "./assets/img/skill/html-5.webp";
import REACT from "./assets/img/skill/react.webp";
import NEXTJS from "./assets/img/skill/nextjs.svg";
import GIT from "./assets/img/skill/GIT.webp";
import SQL from "./assets/img/skill/sql.webp";
import JS from "./assets/img/skill/js.webp";
import CSS from "./assets/img/skill/css-3.webp";
import Bootstrap from "./assets/img/skill/bootstrap.webp";
import PHP from "./assets/img/skill/php.webp";
import WP from "./assets/img/skill/WP.webp";
import OwlCarousel from "react-owl-carousel";
import img12 from "./assets/img/escritorio.webp";
import User from "./assets/img/user.png";
import Quote from "./assets/img/quote.png";
import Web1 from "./assets/img/web/2.webp";
import Web2 from "./assets/img/web/4.webp";
import Web3 from "./assets/img/web/7.webp";
import Web4 from "./assets/img/web/5.webp";
import Web5 from "./assets/img/web/9.webp";
import Web6 from "./assets/img/web/3.webp";
import Web7 from "./assets/img/web/8.webp";
import Web8 from "./assets/img/web/6.webp";
import Fronted from "./assets/img/algo.svg";
import ALEX from "./assets/img/img-20211112-204253.webp";
import WPImg from "./assets/img/icons8-wordpress-144.png";
import Speed from "./assets/img/speed.svg";
import InnerBg from "./assets/img/inner-bg1.svg";
import MSJ from "./assets/img/mensaje.gif";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";

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
              <div className="col-6 text-center align-self-center">
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
              <div className="d-none d-lg-block col-lg-3 align-self-center text-right">
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
            autoplayTimeout={10000}
          >
            <div className="single-welcome-area home_1">
              <div className="container">
                <div className="row">
                  <div className="col-lg-7">
                    <div className="wlc-title white">
                      <h1 className="animate__fadeInDown animate__animated ">
                        <span>La programación</span>
                        <br /> es el arte de resolver problemas
                      </h1>
                      <p className="animate__fadeInDown animate__animated ">
                        Con cada desafío superado, no solo mejoramos nuestras
                        habilidades, <br />
                        sino que también dejamos nuestra huella en el mundo
                        digital.
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
                <img
                  className="  animate__animated  animate__pulse"
                  src={ALEX}
                  alt="Alexander Araujo"
                  title="Alexander Araujo"
                />
                <h1 className="wlc-filltext">Desarollo web</h1>
              </div>
            </div>
            <div className="single-welcome-area home_1">
              <div className="container">
                <div className="row">
                  <div className="col-lg-7">
                    <div className="wlc-title white">
                      <h1 className="animate__fadeInDown animate__animated ">
                        <span>En cada línea de código</span> se esconde una
                        historia por contar
                      </h1>
                      <p className="animate__fadeInDown animate__animated ">
                        Nuestros sueños y aspiraciones se traducen en funciones
                        y algoritmos, <br />
                        dando vida a lo que antes solo existía en nuestra
                        imaginación.
                      </p>
                      <a
                        href="https://api.whatsapp.com/send?phone=584124894488"
                        className="cbtn cbnt1 animate__fadeInDown animate__animated "
                      >
                        Hablemos de Tus Ideas <FaAngleRight />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wlc-author-1">
                <img
                  className="  animate__animated  animate__pulse"
                  src={ALEX}
                  alt="ALex Arauo"
                />
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
        {/*:::::ABOUT AREA END :::::::*/}
        {/*:::::SKILL AREA START :::::::*/}
        <div className="skill-area section-padding" id="portfolio">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 align-self-center">
                <div className="heading white">
                  <strong className="filltext">Mi carrera</strong>
                  <small>MI EXPERIENCIA</small>
                  <h2>
                    EXPERIENCIA, <br /> Estudios Y <span>HABILIDADES</span>
                  </h2>
                </div>
              </div>
              <div className="col-lg-6 align-self-center">
                <div className="info-content">
                  <p>
                    Mi trayectoria: un mosaico de desafíos. Educación y
                    experiencia entrelazadas, fortaleciendo habilidades. Pasión
                    y dedicación como motor de éxito. Siempre aprendiendo,
                    siempre creciendo.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="space-60" />
            <div className="row">
              <div className="col-sm-6 col-lg-3">
                <div className="skill-box">
                  <h3 className="smalle">Cursos Realizados</h3>
                  <h3 className="smalle">2021 - 2022 (FreeCodeCamp)</h3>
                  <h3>Diseño web adaptable</h3>
                  <h4>Algoritmos de JavaScript y estructuras de datos</h4>
                  <h5>Bibliotecas de desarrollo front-end</h5>
                  <p>
                    cada curso representa aproximadamente 300 horas de trabajo
                    lo que da un total de 900 horas de trabajo
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="skill-box">
                  <h3 className="smalle">
                    <b>Estudios Alcanzados</b>{" "}
                  </h3>

                  <h3 className="smalle">
                    2021 - 2024 (Colegio Universitario de Administración y
                    Mercadeo)
                  </h3>
                  <h4>Técnico Superior Universitario en Informatica</h4>
                  <p>
                    Profesional formado para analizar, diseñar, desarrollar,
                    implementar así como mantener sistemas y aplicaciones
                    informáticas. Esto incluye el manejo de software, hardware,
                    redes y sistemas de información.
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="skill-box">
                  <h3 className="smalle">EXPERIENCIA</h3>

                  <h3 className="smalle">2022 - Actualidad (Freelancer)</h3>
                  <h4>Programador Web Front-End</h4>
                  <p>
                    Como programador web front-end, desarrollo soluciones que
                    mejoran la eficiencia y productividad. Cada proyecto es una
                    oportunidad para superar las expectativas del cliente con un
                    producto único y personalizado.
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="skill-box">
                  <h3 className="smalle">EXPERIENCIA</h3>
                  <h3 className="smalle">2023 - Actualidad (Freelancer)</h3>
                  <h4>Desarrollador WordPress</h4>
                  <h5>Programador WordPress Orientado a Código</h5>
                  <h6>Administrador de WordPress</h6>
                  <p>
                    Me especialice en el desarrollo, programación y
                    administración de WordPress, creando soluciones eficientes y
                    personalizadas para cada cliente.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-100" />
          {/* Start Technical Skills Section */}
          <div className="skill__circles">
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
          </div>
          <div className="space-100" />
        </div>
        {/*:::::SKILL AREA END :::::::*/}
        {/*:::::SERVICE AREA START :::::::*/}
        <div className="service-area padding-bottom" id="service">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 align-self-center">
                <div className="heading white">
                  <strong className="filltext">Mi Servicios</strong>
                  <small>¿QUE PUEDO HACER?</small>
                  <h2>
                    SERVICIOS Y <span>SOLUCIONEs</span>
                  </h2>
                </div>
              </div>
              <div className="col-lg-7 align-self-center">
                <div className="info-content">
                  <p>
                    Como desarrollador frontend apasionado, me enorgullece
                    ofrecer soluciones innovadoras y eficientes en la era
                    digital actual. Superando obstáculos y errores con
                    diligencia y profesionalismo, mi objetivo es proporcionar un
                    servicio excepcional que exceda las expectativas.
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
                      Mi trabajo es dar vida a las ideas en el mundo digital.
                      Utilizo una combinación de creatividad y habilidades
                      técnicas para crear experiencias de usuario atractivas y
                      funcionales. Desde la maquetación inicial hasta el diseño
                      responsive, me esfuerzo por garantizar que cada elemento
                      del sitio web sea eficiente, estéticamente agradable y
                      accesible.
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
                <div className="single-service ">
                  <div className="service-icon">
                    <img src={Speed} alt="" />
                  </div>
                  <div className="service-text">
                    <h4>Optimización de Velocidad</h4>
                    <p>
                      Enfocándome en la optimización de la velocidad del sitio,
                      trabajo para mejorar los tiempos de carga y el rendimiento
                      general del sitio web. Este proceso implica una serie de
                      técnicas y estrategias, que van desde la minificación de
                      archivos y la optimización de imágenes hasta la
                      implementación de la carga diferida de contenido
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
                    <h4>Desarrollo de WordPress</h4>
                    <p>
                      Como Conocedor en WordPress, ofrezco una gama de servicios
                      que incluyen el desarrollo de plugins, la creación de
                      shortcodes, la construcción de bloques de Gutenberg en
                      React, y la creación y personalización de temas con CSS
                      Bootstrap. Además, proporciono servicios de administración
                      de WordPress que incluyen la instalación y configuración
                      de temas y plugins.
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
        <div className="project-area section-padding" id="Proyectos">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 align-self-center">
                <div className="heading white">
                  <strong className="filltext">Trabajos</strong>
                  <small>Últimos trabajos</small>
                  <h2>
                    Explora mis proyectos mas <span>recientes.</span>
                  </h2>
                </div>
              </div>
              <div className="col-lg-7 align-self-center">
                <div className="info-content">
                  <p>
                    En el dinámico mundo del desarrollo frontend, cada proyecto
                    es un nuevo desafío. Aquí puedes encontrar información sobre
                    mi último proyecto en proceso, una muestra de mi enfoque
                    práctico y orientado a resultados. Si estás interesado en
                    conocer más detalles o discutir posibilidades de
                    colaboración, no dudes en ponerte en contacto conmigo.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-60" />
            <div className="row">
              <OwlCarousel
                id="da-thumbs"
                dots={false}
                className="da-thumbs portfolio-carousel owl-theme"
                loop
                margin={10}
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
                items={3}
              >
                <div className="item">
                  <a
                    href="https://gottabepublic.com/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img src={Web1} alt="" />
                    <div>
                      <h5>Gotta Be Public</h5>
                      <h6>Landing Pages + Blog </h6>
                      <p>
                        Creé una página de Landin Pages y un blog para ‘Gotta Be
                        Public’, utilizando tecnologías modernas como React,
                        Next.js y WordPress.
                      </p>
                    </div>
                  </a>
                </div>
                <div className="item">
                  <a
                    href="https://infomigracion.com/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img
                      src={Web2}
                      alt="En InfoMigracion le ayudamos en su proceso migratorio a Estados Unidos, Chile, España y Canadá. No lo olvide: ¡Tú eres la razón por la que estamos aquí!"
                    />
                    <div>
                      <h5>InfoMigracion</h5>
                      <h6>
                        Desarrollo de Theme y <br /> Shortcodes, Mejora de
                        Rendimiento y Mantenimiento
                      </h6>
                      <p>
                        En InfoMigracion, desarrollé un tema personalizado y
                        shortcodes para WordPress, y mejoré el rendimiento del
                        sitio, utilizando tecnologías modernas como JavaScript,
                        PHP, Bootstrap, CSS.
                      </p>
                    </div>
                  </a>
                </div>
                <div className="item">
                  <a
                    href="https://angulo44.es/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img src={Web3} alt="Tienda De Muebles" />
                    <div>
                      <h5>
                        Angulo44: <br /> E-commerce
                      </h5>
                      <h6>
                        Personalización de la Plantilla Flatsome con UX Builder
                        y CSS
                      </h6>
                      <p>
                        Angulo44 es un proyecto de e-commerce en el que
                        personalicé la plantilla Flatsome utilizando UX Builder
                        y CSS, creando una experiencia de usuario única y
                        eficiente.
                      </p>
                    </div>
                  </a>
                </div>
                <div className="item">
                  <a
                    href="https://www.pegatinas-dgt.com/es/comprar-distintivo-ambiental/0000HLX"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img src={Web4} alt="" />
                    <div>
                      <h5>
                        Pegatinas DGT: Soluciones Ambientales y de Emergencia
                        para Vehículos
                      </h5>
                      <h6>Desarrollo de Plugin Shortcode con PHP, JS y CSS</h6>
                      <p>
                        <b> Pegatinas DGT </b> es un proyecto que ofrece
                        soluciones para vehículos. Desarrollé un plugin
                        shortcode y consumí una API utilizando PHP, JS y CSS.
                      </p>
                    </div>
                  </a>
                </div>
                <div className="item" rel="noreferrer" target="_blank">
                  <a href="#">
                    <img
                      src={Web5}
                      alt="ClimbingTrainingProgram: Personalización de
                        Entrenamiento para Clientes"
                    />
                    <div>
                      <h5>
                        ClimbingTrainingProgram: Personalización de
                        Entrenamiento para Clientes
                      </h5>
                      <h6>Desarrollo de Shortcode para Filtrado de Rangos</h6>
                      <p>
                        Proyecto que realicé para un cliente. Desarrollé un
                        shortcode que permite a los usuarios filtrar por rango
                        de bouldering (V0 a V17) y por rango de lead climb (5a a
                        9a). Esta funcionalidad proporciona una experiencia de
                        usuario personalizada y eficiente.
                      </p>
                    </div>
                  </a>
                </div>
                <div className="item" rel="noreferrer" target="_blank">
                  <a href="https://alex03av.github.io/react-marvel-api/characters">
                    <img
                      src={Web6}
                      alt="Proyecto Personal en React con Consumo de API"
                    />
                    <div>
                      <h5>React-Marvel-API: Explorando el Universo Marvel</h5>
                      <h6>Proyecto Personal en React con Consumo de API</h6>
                      <p>
                        React-Marvel-API es un proyecto personal de práctica en
                        React. Consumí la API oficial de Marvel para mostrar
                        personajes, cómics, series, creadores, eventos y
                        historias. Este proyecto está alojado en GitHub y
                        destaca por su interactividad y uso eficiente de la API.
                      </p>
                    </div>
                  </a>
                </div>
                <div className="item" rel="noreferrer" target="_blank">
                  <a href="#">
                    <img src={Web7} alt="" />
                    <div>
                      <h5>Clon de Agency-Aurora: Réplica con Precisión</h5>
                      <h6>Desarrollo Web con HTML, CSS y JS</h6>
                      <p>
                        Clon de Agency-Aurora es un proyecto en el que recreé la
                        web de Agency-Aurora utilizando HTML, CSS y JavaScript.
                        Este proyecto destaca por su precisión y la habilidad
                        técnica requerida para replicar el diseño y la
                        funcionalidad del sitio original.
                      </p>
                    </div>
                  </a>
                </div>
                <div className="item" rel="noreferrer" target="_blank">
                  <a href="https://alex03av.github.io/Unit-Converter-react/Long">
                    <img
                      src={Web8}
                      alt="Conversor Universal: Herramienta de Conversión en React"
                    />
                    <div>
                      <h5>
                        Conversor Universal: Herramienta de Conversión en React
                      </h5>
                      <h6>
                        Proyecto Personal de Aplicación Web de Conversiones
                      </h6>
                      <p>
                        Conversor Universal es un proyecto personal en el que
                        desarrollé una aplicación web de conversiones utilizando
                        React. Esta aplicación permite convertir unidades de
                        longitud, temperatura, área, peso y tiempo. Destaca por
                        su utilidad y la eficiencia de su interfaz de usuario.
                      </p>
                    </div>
                  </a>
                </div>
              </OwlCarousel>
            </div>
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
                      <a href=" https://api.whatsapp.com/send?phone=584124894488">
                        +58 4124894488
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
                    Copyright © 2024 by <span>AJAVCODE Dev: Alex-Araujo </span>{" "}
                    all right reserved
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
        </div>
        {/*:::::FOOTER AREA END :::::::*/}
      </div>{" "}
    </>
  );
}

export default App;
