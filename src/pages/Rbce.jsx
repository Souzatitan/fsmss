import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import style from '../styles/Rbce.module.css';

const Rbce = () => {
    return (
        <div>
            <Header />
            <main>
            <div className={style.rbce}>
                <h1>Rede Brasileira de Cooperação em Emergências (RBCE)</h1>
                <br></br>
                <p>
                A Rede Brasileira de Cooperação em Emergências - RBCE surgiu da necessidade de integralizar e desfragmentar as políticas de saúde no Brasil, com ênfase no tema da atenção às urgências e dar possibilidade de continuidade de elaboração e implementação de propostas transformadoras mesmo quando há descontinuidade administrativa ou política das gestões de saúde nos Municípios, nos Estados ou na União, através da manutenção de um espaço de intercâmbio de experiências e desenvolvimento de capacidades entre os membros da RBCE.
                <br></br>Podemos dividir as atividades e produtos da RBCE, até o presente momento, em quatro períodos com diferentes características de atividades e ênfases programáticas:
                <br></br><br></br>I Período: Formulação das Bases da Política Nacional de Urgências e a Luta por sua Institucionalização Normativa (1995 - 2003) - O trabalho da RBCE foi estruturado através da elaboração coletiva de novos conceitos e da sua operação, por meio de apoio a projetos e à implantação de experiências estruturantes da atenção às urgências no País, entendendo as urgências como um tema abrangente e de forte impacto na organização e viabilidade do SUS, na medida em que os serviços de urgência se constituem em porta de entrada do Sistema e necessitam portas de saídas articuladas em relação a todos os outros componentes do mesmo.
                <br></br>II Período: Apoio a Implementação da Política Nacional de Atenção Integral às Urgências e o Questionamento dos Limites de seu Avanço (2003 - 2007) - Durante os anos de 2003 e 2004, muitos de nós, técnicos vinculados a RBCE estivemos engajados nas atividades da CGUE e logramos implantar um grande número de SAMUs em todo o país, o que se constitui num avanço inquestionável.
                <br></br>III Período: Mobilização em Defesa da Politica Nacional de Atenção Integral às Urgências (2007 - 2011)
                <br></br>IV Período: Fortalecimento do Enfoque dos Direitos Humanos e Sociais (2012 - 2017)
                <br></br>V Período: (2018 - até o momento) - Com esta perspectiva em mente, começamos a buscar os espaços para realizá-la. Buscamos três dimensões conectadas:
                <br></br><br></br>
                A- Mobilizar a sociedade em sua capacidade de reivindicação a partir da premissa dos direitos humanos na atenção às urgências e no acesso hospitalar. Para tanto apostamos em:
​​                <br></br><br></br>
                1. Uma nova etapa da Campanha Nacional pelos Direitos Humanos na atenção às urgências e no acesso hospitalar, a partir das conferências livres sobre esses temas realizadas em 2019 (ver documento síntese sobre as mesmas, apresentado na XVI Conferencia Nacional de Saúde em 2019);
                <br></br>2. Na instalação de uma nova etapa de nosso Observatório Nacional desses direitos, em convenio com a PUC – SP e seu observatório de violência policial.
                <br></br>3. Formar atores sociais e políticos no âmbito da sociedade civil e politica e nos poderes do Estado para levar adiante estas perspectivas baseadas nos Direitos.
                <br></br><br></br>
                Com isso, nasceu a Campanha 4x4
                <br></br><br></br>
                Caso queira saber um pouco mais sobre o histórico da RBCE, seus períodos de atuação e campanhas, acesse o documento
                </p>
            </div>    
            </main>
            <Footer />
        </div>
    );
};

export default Rbce;