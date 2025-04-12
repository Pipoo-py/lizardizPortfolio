
import "./ProjectCard.css"
import { Skill } from "../Skill/Skill"
import { useThemeContext } from '../../contexts/ThemeContext/ThemeContext'

export const ProjectCard = ({ projectInfo, url })=>{

  return(
    <div className="project-view__container">
      <div className="project-view__img-container">
        <img
          src={ url }
          loading="lazy"
          alt={ projectInfo.title }
        />
      </div>

      <div className="project-view__info-container">
        <h4 className="project-view__title">
          { projectInfo.title }
        </h4>
        <p className="project-view__description">
          { projectInfo.description }
        </p>
      </div>

      <div className="project-view__skills-container">
        {
          projectInfo.skills.map(skill=>(
            <Skill 
              infoSkill={ skill }
            />
          ))
        }
      </div>

      <div className="project-view__link-container">
        <button className="project-view__button">
          <a href={projectInfo.link} target="blank">Visitar</a>
        </button>
      </div>
    </div>
  )
}
