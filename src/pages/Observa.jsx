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

                        <p>O Observatório de Conflitualidades em Políticas Sociais e Ambientais na América Latina e Caribe (ObservActiva) tem como escopo captar, observar e analisar sistematicamente conflitos políticos socioambientais que ocorram entre a sociedade civil e o Estado ou outro setor, focalizando em litígios que tenham como objeto direitos sociais, aqui entendidos de forma ampla, tendo como marco referencial a Declaração sobre o Direito ao Desenvolvimento de 1986.
                        <br></br><br></br>
                        <a href="https://www.youtube.com/watch?v=qafKbSN4Wms&t=7554s " target="_blank"><u>Acesse aqui a gravação</u></a> de nosso lançamento em 15 de dezembro de 2021 para melhor compreensão do escopo do Observatório, assim como verificar todo o apoio de movimentos sociais, organizações e instituições que temos. 
                        <br></br>
                        Caso tenha interesse em participar como pesquisador np(a) ou curador (a) voluntário (a), entre em <a href="/contato"><u>contato.</u></a>. 
                        <br></br>
                        Caso sua organização queira se tornar um núcleo-parceiro da ObservActiva, entre em <a href="/contato"><u>contato.</u></a></p>

                    </div>

                    <div className={styles.imagesSideBySide}>
                        <a href="./observativa" >
                            <img className={styles.observaimg} src="/images/relatorio.webp" alt="Logo" /></a>
                        <a href="https://ee-eu.kobotoolbox.org/x/wvGcywe2" target="_blank"> <img className={styles.observaimg} src="/images/formulario.webp" alt="Logo" /></a>
                    </div>

                    
                    
                </div>    
            </main>
            <Footer />
        </div>
    );
};

export default Observa;