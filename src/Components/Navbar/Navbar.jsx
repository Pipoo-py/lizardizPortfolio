import "./Navbar.css"
import { Menu } from "lucide-react"
import { useState } from "react"
import { X } from "lucide-react"
import { Moon } from "lucide-react"
import { Sun } from "lucide-react"
import { useThemeContext } from '../../contexts/ThemeContext/ThemeContext'

export const Navbar = ()=>{
  const [ mobileIsOpen, setMobileIsOpen ] = useState(false);
  const [ isClosing, setIsClosing ] = useState(false);
  const { theme, setTheme } = useThemeContext();

  const miniLogo = "assets/logoSmall.webp";
  const miniLogoDark = "assets/logoSmallDark.webp";

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };


  const openMobileNav = () => {
    const navSectionsContainer = document.querySelector(".nav__sections-container");
      if(mobileIsOpen){
        setMobileIsOpen(false);
        setIsClosing(true);
        setTimeout(()=>{
        if (navSectionsContainer) {
          navSectionsContainer.style.display = "none";
        }
      }, 300);
    }
    else{
    
    if (navSectionsContainer) {
        navSectionsContainer.style.display = "block";
      }
    setIsClosing(false);
    setMobileIsOpen(true);
  }
}

  
  return(
    <nav className="nav">
      <div className="nav__container">
        <div className="nav__logo-container">
          <img 
            src={ theme == "light" ? miniLogo : miniLogoDark }
            alt="Logo de Lizardiz Nexus en versión miniatura"
          />
        </div>

        <div className={`nav__sections-container ${ mobileIsOpen ? "isOpen" : " ".trim()} ${ isClosing ? "isClosing" : " ".trim()}`}>
          <ul className="nav__sections-ul">
          
            <li className="nav__ul-li">
              <a href="#projects"> Proyectos</a>
            </li>
            <li className="nav__ul-li">
              <a href="#about"> Sobre mi</a>
            </li>
            <li className="nav__ul-li">
              <a href="#skills"> Habilidades</a>
            </li>
            <li className="nav__ul-li">
              <a href="#form"> Contacto</a>
            </li>
            <li className="nav__ul-li li-theme" onClick={ toggleTheme }>
              {
                theme == "light" ? <Moon /> : <Sun />
              }
            </li>
          </ul>
        </div>

        <button className="nav__button-mobile" onClick={ openMobileNav }>
          {
            mobileIsOpen ? <X /> : <Menu />
          }
        </button>
        
      </div>
    </nav>
  )
}
