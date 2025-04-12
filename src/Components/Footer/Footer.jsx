import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import "./Footer.css"

export const Footer = ()=>{

  return(
    <footer className="footer">
      <h5> Redes Sociales </h5>
      <div className="footer__container">
        

        <div className="footer__social-container">
          <div className="social-container">
            <FaInstagram className="social-icon"/>
            <a href="https://www.instagram.com/lizardiznexus/" target="blank">Instagram</a>
          </div>
          <div className="social-container">
            <FaGithub className="social-icon"/>
            <a href="https://github.com/Pipoo-py" target="blank">Github</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
