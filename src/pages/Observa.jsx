import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Observa.module.css'


const Observa = () => {
    return (
        <div>
            <Header />
            <main>
                <div className={styles.obscontainer}>

                    <div className={styles.imageCenter}>
                        <img className="observaimg" src="/images/observatorio.webp" alt="Logo" />
                    </div>
                
                    <div className={styles.textSection}>

                        <p>O Observatório de Conflitualidades em Políticas Sociais e Ambientais na América Latina e Caribe (ObservActiva) tem como escopo captar, observar e analisar sistematicamente conflitos políticos socioambientais que ocorram entre a sociedade civil e o Estado ou outro setor, focalizando em litígios que tenham como objeto direitos sociais, aqui entendidos de forma ampla, tendo como marco referencial a Declaração sobre o Direito ao Desenvolvimento de 1986.
                        Acesse aqui a gravação de nosso lançamento em 15 de dezembro de 2021 para melhor compreensão do escopo do Observatório, assim como verificar todo o apoio de movimentos sociais, organizações e instituições que temos até o momento.</p>

                    </div>

                    <div className={styles.imagesSideBySide}>
                        <img className="observaimg" src="/images/relatorio.webp" alt="Logo" />
                        <img className="observaimg" src="/images/formulario.webp" alt="Logo" />
                    </div>

                    <div className={styles.textSection}>

                    <p>O Observatório de Conflitualidades em Políticas Sociais e Ambientais na América Latina e Caribe (ObservActiva) tem como escopo captar, observar e analisar sistematicamente conflitos políticos socioambientais que ocorram entre a sociedade civil e o Estado ou outro setor, focalizando em litígios que tenham como objeto direitos sociais, aqui entendidos de forma ampla, tendo como marco referencial a Declaração sobre o Direito ao Desenvolvimento de 1986.
                    Acesse aqui a gravação de nosso lançamento em 15 de dezembro de 2021 para melhor compreensão do escopo do Observatório, assim como verificar todo o apoio de movimentos sociais, organizações e instituições que temos até o momento.
                    Caso tenha interesse em participar como pesquisador (a) ou curador (a) voluntário (a), entre em contato. Caso sua organização queira se tornar um núcleo-parceiro da ObservActiva, entre em contato.</p>
                    </div>
                </div>    
            </main>
            <Footer />
        </div>
    );
};

export default Observa;