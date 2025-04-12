import { DiReact } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiJsBadge } from "react-icons/di";

import { SiAstro } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import "./Skill.css"

export const Skill = ({ infoSkill })=>{

  return(
    <div className="skill__container">
      <div className="skill">
      { infoSkill.toLowerCase() == "html" ? <DiHtml5 /> 
        : infoSkill.toLowerCase() == "css" ? <DiCss3 /> 
        : infoSkill.toLowerCase() == "javascript" ? <DiJsBadge /> 
        : infoSkill.toLowerCase() == "astro" ? <SiAstro /> 
        : infoSkill.toLowerCase() == "python" ? <FaPython /> 
        : infoSkill.toLowerCase() == "typescript" ? <BiLogoTypescript /> 
        : infoSkill.toLowerCase() == "git" ? <FaGitAlt /> 
        : infoSkill.toLowerCase() == "github" ? <FaGithub /> 
        : infoSkill.toLowerCase() == "react" ? <DiReact /> : null}
      </div>
      <span>
        { infoSkill }
      </span>
    </div>
  )
}
