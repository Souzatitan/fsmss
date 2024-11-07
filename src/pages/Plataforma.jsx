import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import contato from'../styles/Contato.module.css'

const Plataforma = () => {
    return (
        <div>
            <Header />
            <main>
                <div lassName={contato.contato1}>

                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Plataforma;