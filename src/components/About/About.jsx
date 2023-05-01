import { SlSocialLinkedin } from 'react-icons/sl'
import { FiGithub } from 'react-icons/fi'
import { ImWhatsapp } from 'react-icons/im'

import "../../styles/About.css";
import perfil from '../../assets/perfil.png'


export default function About( props ){
    return (
        <div className="sectionContainer">
            <h1 className="sectionTitle">About Me</h1>
            <div className = 'perfilImg'>
                <img src = {perfil} alt='perfil'/>
            </div>
            <div className="dataDiv">
                <h1>Hi, I'm Alan Romero</h1>
                <h2>Web Developer</h2>
                <p>High level experience in web design.</p>
            </div>
            <div className="contactDiv">
                <h3>Contact Me</h3> 
                <div className = 'icons-social'>
                    <a href="https://www.linkedin.com/in/alan-romero-3a088166/" target="_blank" rel="noreferrer" style={{marginLeft: '10px'}}><SlSocialLinkedin className="contactIcon" size={30} color='white'/></a>
                    <a href="https://github.com/Hogarth16352" target="_blank" rel="noreferrer" style={{marginLeft: '10px'}}><FiGithub className="contactIcon" size={30} color='white'/></a>
                    <a href="https://wa.me/5212441008893/?text=Hola,%20¿Cómo%20estas?%20Quisiera%20saber%20más%20sobre%20ti%20y%20saber%20si%20tienes%20disponibilidad%20de%20tiempo%20para%20una%20entrevista." target="_blank" rel="noreferrer" style={{marginLeft: '10px'}}><ImWhatsapp className="contactIcon" size={30} color='white'/></a>
                </div>
            </div>
        </div>
    )
}