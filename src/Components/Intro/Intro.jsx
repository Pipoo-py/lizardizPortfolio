import { useThemeContext } from '../../contexts/ThemeContext/ThemeContext'
import "./Intro.css"

export const Intro = ()=>{
  const { theme, setTheme } = useThemeContext();

  const mainLogo = "/assets/firstLogoTransparent.webp";
  const mainLogoForDark = "/assets/logoFullWhite.webp";

  return(
    <main className="main">
      <div className="main__container">
          <div className="main__info-container">
            <div className="main__img-container">
              <img className="main__img" 
                src={ theme == "light" ? mainLogo : mainLogoForDark }
                alt="Logo principal de LizardizNexus"
              />
            </div>
            <p className="main__p">
              Hola, soy <span className="span-bold">Alejandro Salazar Lizardiz</span>. Transformo ideas complejas en experiencias digitales claras, rápidas y efectivas. Como Desarrollador Frontend, me especializo en construir interfaces modernas con React que no solo lucen bien, sino que resuelven problemas reales y conectan con los usuarios. ¿Te intriga ver cómo el código limpio y el diseño centrado en el usuario pueden impulsar tu proyecto? Explora mis trabajos a continuación o hablemos de tu visión.
            </p>
          </div>
      </div>
    </main>
  )
}
