import "react";
import ProjectCard from "./ProjectCard";
import rickMortyImg from "../../assets/rickMorty.png";
import crudImg from "../../assets/crud.png";
import ListaImg from "../../assets/lista.png";
import palindromoImg from "../../assets/palindromo.png"

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Proyectos</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5s">
        <ProjectCard
          title="Rick & Morty"
          main="Proyecto consumiendo api de Rick & Morty con las tecnologías HTML, CSS y JavaScript, mostrando el resultado en cards con un diseño único."
          image={rickMortyImg}
          demoLink="https://carlosenmanuel.github.io/RickMorty.github.io/"
          sourceLink="https://github.com/CarlosEnmanuel/RickMorty.github.io.git"
        />
        <ProjectCard
          title="CRUD con LocalStorage"
          main="Este proyecto es un CRUD básico que registra datos de una empresa o entidad, guarda los datos en LocalStorage prácticando su uso y comportamiento."
          image={crudImg}
          demoLink="https://carlosenmanuel.github.io/crud_LocalStorage.github.io/"
          sourceLink="https://github.com/CarlosEnmanuel/crud_LocalStorage.github.io.git"
        />
        <ProjectCard
          title="Palindromo"
          main="Puedes averiguar cuáles palabras son palindromas( son aquellas que se leen igual de izquierda a derecha que de derecha a izquierda)."
          image={palindromoImg}
          demoLink="https://carlosenmanuel.github.io/Palindromo.github.io/"
          sourceLink="https://github.com/CarlosEnmanuel/Palindromo.github.io.git"
        />
        <ProjectCard
          title="Lista de Tareas"
          main="Este proyecto permite gestionar tareas de forma sencilla, puedes agregar nuevas tareas, marcarlas como completadas o eliminarlas cuando ya no sean necesarias. Ideal para organizar pendientes rápidamente."
          image={ListaImg}
          demoLink="https://carlosenmanuel.github.io/Lista_LocalStorage.github.io/"
          sourceLink="https://github.com/CarlosEnmanuel/Lista_LocalStorage.github.io.git"
        />
      </div>
    </div>
  );
};

export default Projects;
