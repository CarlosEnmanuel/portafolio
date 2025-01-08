import "react";
import { MdOutlineEmail, MdOutlinePhoneAndroid } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex justify-around bg-[#465697] text-white p-5 md:p-5 items-center"
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
          <a href="mailto:manuelrivas75147825@gmail.com">
            manuelrivas75147825@gmail.com
          </a>
        </li>
        <li className="flex gap-1 items-center mt-2">
          <CiLinkedin />
          <a
            href="https://www.linkedin.com/in/carlos-rivas-aa2875265"
            target="blank"
          >
            Carlos Rivas
          </a>
        </li>
        <li className="flex gap-1 items-center mt-2">
          <FaGithub />
          <a href="https://github.com/CarlosEnmanuel" target="blank">
            Carlos Enmanuel
          </a>
        </li>
        <li className="flex gap-1 items-center mt-2">
          <MdOutlinePhoneAndroid />
          <a href="https://github.com/CarlosEnmanuel" target="blank">
            +503(7296-2092)
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
