import "react";
import AboutImg from "../../assets/perfil.png";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">Sobre mí</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80" src={AboutImg} alt="About img" />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Desarrollador Frontend
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Soy desarrollador apasionado por la creación de aplicaciones
                  web modernas y funcionales. Tengo experiencia en JavaScript,
                  React, y TailwindCSS, busco oportunidades para trabajar en
                  equipo aportando mis conocimientos como frontend,
                  permitiendome crecer profesionalmente.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Desarrollador de Bases de Datos
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Habilidad en el diseño, gestión y optimización de bases de
                  datos con tecnologías como MongoDB, MySQL, PostgreSQL y SQL
                  Server, asegurando un rendimiento eficiente y datos bien
                  estructurados.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Computo en la Nube
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Experiencia con plataformas como Google Cloud y AWS para
                  implementar, escalar y mantener aplicaciones y servicios en
                  entornos cloud de alta disponibilidad.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
