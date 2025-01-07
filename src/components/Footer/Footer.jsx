import "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contacto</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Puedes comunicarte conmigo
        </h3>
      </div>

      <ul className="text-sm md:text-xl">
        <li className="flex gap-1 items-center">
          <MdOutlineEmail size={20} />
          <a href="https://carlos-portafolio.com/">
            manuelrivas75147825@gmail.com
          </a>
        </li>
        <li className="flex gap-1 items-center">
          <CiLinkedin />
          linkdlin.com/username
        </li>
        <li className="flex gap-1 items-center">
          <FaGithub />
          <a href="https://github.com/CarlosEnmanuel">Carlos Enmanuel</a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
