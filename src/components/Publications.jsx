import React from 'react';
import '../styles/Publications.css';

const Publications = () => {
    return (
        <section className="publications">
            <h2>FIQUE POR DENTRO DAS NOSSAS <br /><span>ÚLTIMAS PUBLICAÇÕES</span></h2>
            <div className="posts">
                <a className="post" href="pages/noticia1.html">
                    <div className="post-image">
                        <img src="/images/post.webp" alt="Publicação 1" />
                    </div>
                    <h3>O REGIME BUKELE EM EL SALVADOR – UMA CONTINUAÇÃO</h3>
                    <p>A cinco meses das eleições presidenciais em El Salvador, previstas para fevereiro de 2024, o país vive um momento de intensa tensão.</p>
                </a>
                <a className="post" href="pages/noticia1.html">
                    <div className="post-image">
                        <img src="/images/post.webp" alt="Publicação 1" />
                    </div>
                    <h3>O REGIME BUKELE EM EL SALVADOR – UMA CONTINUAÇÃO</h3>
                    <p>A cinco meses das eleições presidenciais em El Salvador, previstas para fevereiro de 2024, o país vive um momento de intensa tensão.</p>
                </a>
                <a className="post" href="pages/noticia1.html">
                    <div className="post-image">
                        <img src="/images/post.webp" alt="Publicação 1" />
                    </div>
                    <h3>O REGIME BUKELE EM EL SALVADOR – UMA CONTINUAÇÃO</h3>
                    <p>A cinco meses das eleições presidenciais em El Salvador, previstas para fevereiro de 2024, o país vive um momento de intensa tensão.</p>
                </a>
            </div>
        </section>
    );
};

export default Publications;
