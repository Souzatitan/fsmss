import React from 'react';
import '../styles/Hero.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Hero = () => {
    return (
        <section className="hero">
            <div className="text-content">
                <h2>Convidamos você a se juntar a nós na construção de um mundo mais solidário!</h2>
                <p>O Fórum Social Mundial sobre Saúde e Seguridade Social tem como objetivo dialogar com a sociedade civil mundial comprometida com a luta pelo direito humano à saúde e à seguridade social.</p>
            </div>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/images/obseractiva banner.webp" className="d-block w-100" alt="Imagem 1" />
                    </div>
                    <div className="carousel-item">
                        <img src="/images/curadoria banner.webp" className="d-block w-100" alt="Imagem 2" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
