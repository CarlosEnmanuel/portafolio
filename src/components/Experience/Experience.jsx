// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaCss3, FaFigma, FaHtml5, FaJs, FaAws, FaGitAlt} from "react-icons/fa";
// import { FaGoogle } from "react-icons/fa";
import { SiMongodb, SiMysql, SiGooglecloud, SiPhp } from "react-icons/si";
import { GoProjectSymlink } from "react-icons/go";
import { GrServerCluster } from "react-icons/gr";
import { FcLinux } from "react-icons/fc";
import { VscGithub } from "react-icons/vsc";

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experiencia</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FcLinux size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaFigma color="#F24E1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb color="#47A248" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMysql color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaAws color="#FF9900" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiGooglecloud color="#4285F4" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiPhp color="#7a7fb5" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaGitAlt color="#ef5032" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <VscGithub color="#dadada" size={50} />
          </span>
        </div>
        <div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <GoProjectSymlink color="#4285F4" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">Desarrollo Web, Proyecto</h2>
              <p className="text-sm leading-tight font-thin">
                Enero - Julio 2024
              </p>
              <ul className="text-sm p-2">
                <li>- Trabajé en el Login completo de una aplicación web</li>
                <li>- Trabajé en la lógica de agregar producto al carrito</li>
                <li>- Implementé el metodo de pago con Paypal Developer</li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
            <SiGooglecloud color="#4285F4" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">
                Cloud Computer(Google Cloud y AWS), Universidad Católica de El
                Salvador
              </h2>
              <p className="text-sm leading-tight font-thin">
                Agosto - Noviembre 2024
              </p>
              <ul className="text-sm p-2">
                <li>
                  - Interactué con IAM para configurar reglas de usuarios y
                  tener más control
                </li>
                <li>
                  - Trabajé con Compute Engine y configuré VPC e IP elásticas
                  para simular servidores web
                </li>
                <li>
                  - Trabajé con App Engine y Cloud Run para lanzar aplicaciones
                  web
                </li>
                <li>
                  - Utilicé Cloud Functions para implementar microservicios.
                </li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
            <GrServerCluster color="#4285F4" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">
                Servidores, Universidad Católica de El Salvador
              </h2>
              <p className="text-sm leading-tight font-thin">
                Agosto - Noviembre 2024
              </p>
              <ul className="text-sm p-2">
                <li>
                  - Configuré contenedores en Proxmox para la gestión y
                  despliegue de servidores
                </li>
                <li>
                  - Implementé y administré servidores web, de correo
                  electrónico y de VoIP
                </li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
