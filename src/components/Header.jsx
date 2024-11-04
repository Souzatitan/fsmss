import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import '../styles/Header.css';

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="logo">
                    <img className="logo-img" src="/images/Logo_FSMSSS__2_-removebg-preview.png" alt="Logo" />
                </div>
                <nav className="nav" id="navbar">
                    <ul className="nav-list">
                        <li><Link to="/">Pagina Inicial</Link></li>
                        <li className='dropdown'>
                        <li><Link to="/sobre">Sobre</Link></li>
                            <ul className="dropdown-menu"> 
                                <li><Link to="/somos">Quem somos</Link></li>
                                <li><Link to="/historia">Nossa história</Link></li>
                                <li><Link to="/equipe">Equipe</Link></li>
                            </ul>
                        </li>        
                        <li><Link to="/servicos">Produção</Link></li>
                        {/*<li><Link to="/portfolio">Portfólio</Link></li>*/}
                        <li className='dropdown'>
                        {/*<li><Link to="/comunicacao">Comunicação</Link></li>*/}
                            <ul className="dropdown-menu"> 
                                <li><Link to="/todos">Todos os posts</Link></li>
                                <li><Link to="/curadoria">Curadoria</Link></li>
                                <li><Link to="/opniao">Coluna de Opnião</Link></li>
                                <li><Link to="/observa">ObservActiva</Link></li>
                                <li><Link to="/conversando">Conversando com Seguridade</Link></li>
                                <li><Link to="/nota">Nota</Link></li>
                            </ul>
                        </li>    
                        <li className='dropdown'>
                        <li><Link to="/observa">Observatório</Link></li>
                        
                            <ul className="dropdown-menu">
                            <li><Link to="/laboratorio">Laboratórios Político</Link></li>
                            </ul>     
                        </li>
                        <li className='dropdown'>
                        <li><Link to="/observa">Plataforma de Ensino</Link></li>
                        
                            <ul className="dropdown-menu">
                            <li><Link to="/laboratorio">Sobre</Link></li>
                            <li><Link to="/laboratorio">Sobre</Link></li>
                            </ul>     
                        </li>             
                        <li className='dropdown'>
                        <li><Link to="/rbce">RBCE</Link></li>
                            <ul className="dropdown-menu"> 
                                <li><Link to="/todos">Campanha 4 x 4</Link></li>
                            </ul>
                            </li>    
                        
                        <li><Link to="/calendario">Calendário</Link></li>
                        <li><Link to="/calendario">Contato</Link></li>
                    </ul>
                    
                </nav>
                <div className="menu-hamburguer" id="menu-hamburguer">
                    <img src="/images/icon-hamburguer.png" alt="Menu Hamburguer" />
                </div>
            </div>
            <div className="overlay" id="overlay"></div>
        </header>
    );
};

export default Header;
