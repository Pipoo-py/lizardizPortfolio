import React, { useEffect } from 'react'; // Importa useEffect
import { Skill } from "../Skill/Skill";
import "./SkillsSection.css"; // Importa tu CSS modificado

export const SkillsSection = () => {

  const totalSkills = {
    base: ["HTML", "CSS"],
    languages: ["JavaScript", "Python"],
    frameworksAndLibraries: ["React"],
    utilities: ["Git", "Github"],
    next: ["Astro", "TypeScript"],
  };

  
  useEffect(() => {
    const supportsViewTimeline = typeof window.CSS !== 'undefined' &&
                                 window.CSS.supports('animation-timeline', 'view()');

    if (!supportsViewTimeline) {
      console.log("Fallback IntersectionObserver activado para .skill-div"); 

      const skillDivs = document.querySelectorAll('.skill-div'); 

      if (skillDivs.length === 0) return; 

      const observerOptions = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.1 
      };

      const observerCallback = (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          } else {
            entry.target.classList.remove('is-visible');
          }
        });
      };

      
      const observer = new IntersectionObserver(observerCallback, observerOptions);

      
      skillDivs.forEach(div => observer.observe(div));

      
      return () => {
        console.log("Desconectando IntersectionObserver"); 
        observer.disconnect(); 
      };
    } else {
       console.log("animation-timeline: view() soportado, usando animación CSS nativa."); 
       
       return undefined; 
    }
  }, []); 


  return (

    <section className="skills-section" id="skills">

      <h2 className="skills-section__title">
        Habilidades
      </h2>
      <div className="skills-section__container">

        <div className="skills-section__base-container skill-div">
          <h4> Esenciales </h4>
          {totalSkills.base.map(skill => (
            <Skill key={skill} infoSkill={skill} /> 
          ))}
        </div>

        <div className="skills-section__lang-container skill-div">
          <h4> Lenguajes </h4>
          {totalSkills.languages.map(skill => (
            <Skill key={skill} infoSkill={skill} />
          ))}
        </div>

        <div className="skills-section__libs-container skill-div">
          <h4> Frameworks o librerias </h4>
          {totalSkills.frameworksAndLibraries.map(skill => (
            <Skill key={skill} infoSkill={skill} />
          ))}
        </div>

        <div className="skills-section__tools-container skill-div">
          <h4> Herramientas </h4>
          {totalSkills.utilities.map(skill => (
            <Skill key={skill} infoSkill={skill} />
          ))}
        </div>

        <div className="skills-section__next-container skill-div">
          <h4> En aprendizaje </h4>
          {totalSkills.next.map(skill => (
            <Skill key={skill} infoSkill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};
