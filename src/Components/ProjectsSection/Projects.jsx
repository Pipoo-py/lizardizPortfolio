
import "./Projects.css"
import { ProjectCard } from "../ProjectCard/ProjectCard"

export const Projects = ()=>{

  const totalProjects = [
    {
      title: "Clon de Twitter",
      description: "Página con funcionalidades únicamente de frontend encargada de imitar lo mejor posible la interfaz (UI/UX) de Twitter (ahora X), usando React.",
      skills: ["HTML", "CSS", "JavaScript", "React"],
      link: "https://pipoo-py.github.io/twitter-clon/"
      
    },
    {
      title: "Clon de Instagram",
      description: "Al igual que el clon de Twitter, este busca imitar la interfaz de Instagram. Fué elaborado sin frameworks (solo HTML, CSS y JavaScript).",
      skills: ["HTML", "CSS", "JavaScript"],
      link: "https://pipoo-py.github.io/Instagram-copy-clon/"
      
    },
    {
      title: "Google Pixel 9 landing page",
      description: "Página encargada de publicitar el Google Pixel 9 y sus variaciones. Fué hecho únicamente con HTML, CSS y JavaScript.",
      skills: ["HTML", "CSS", "JavaScript"],
      link: "https://pipoo-py.github.io/LANDING-PAGE-PIXEL-9/"
      
    },
    {
      title: "Caracol C.A",
      description: "Sitio web desarrollado para la empresa Caracol en Venezuela, dedicada a vender múltiples productos y servicios de caracter industrial; por ejemplo: tráilers, saneamiento ambiental, tanques de almacentamiento, movilización de equipos y generadores eléctricos.",
      skills: ["HTML","CSS","JavaScript"],
      link: "https://www.caracol.com.ve"
    },
  ]

  return(
    <section className="projects__section" id="projects">
      <div className="projects__section-container">
        <h2 className="projects__title">
          Proyectos
        </h2>
          <div className="projects-grid__container">
          {
            totalProjects.map((project, index) => {
              const imageUrl = `assets/screenshots/sc-${index + 1}.webp`;

              return (
                <ProjectCard
                  key={project.title}
                  projectInfo={project}
                  url={imageUrl}
                />
              );
            })
          }
        </div>
      </div>
      
    </section>
  )
}
