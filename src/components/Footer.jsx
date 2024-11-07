import React from 'react';
import '../styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedin, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (

        <footer className='footer'>

                <div className="social-icons">
                    <a href="https://www.facebook.com/fsmsss01/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a href="https://www.linkedin.com/company/f%C3%B3rum-social-mundial-da-sa%C3%BAde-e-da-seguridade-social/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://www.instagram.com/fsm_saudeeseguridadesocial/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://www.youtube.com/@fsmsss-fsmdasaudeedaseguri1459" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faYoutube} />
                    </a>
                </div>
    
                <p>©{currentYear} por Fórum Social Mundial da Saúde e Seguridade Social.</p>
        
        </footer>
    )    
        
};

export default Footer;