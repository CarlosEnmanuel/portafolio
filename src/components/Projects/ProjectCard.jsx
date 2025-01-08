import "react";
// eslint-disable-next-line react/prop-types
const ProjectCard = ({ title, main, image, demoLink, sourceLink }) => {
  return (
    <div className="p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl mr-4 mt-4">
      <img
        className="p-4 w-full h-48 object-cover rounded-lg"
        src={image}
        alt={title}
      />
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal text-center">
        {title}
      </h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2 flex-1 text-justify">
        {main}
      </p>
      <div className="mt-auto p-2 md:p-4 flex gap-2 md:gap-4 justify-between">
        <button className="text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          <a href={demoLink} target="_blank" rel="noopener noreferrer">
            Demo
          </a>
        </button>
        <button className="text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          <a href={sourceLink} target="_blank" rel="noopener noreferrer">
            Source Code
          </a>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
