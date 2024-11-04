import React from 'react';
import Header from '../components/Header';
import Card from '../components/EquipeCard'
import Footer from '../components/Footer';
import '../styles/EquipeCard.css';

const Equipe = () => {
    const cardsData = [
        {
            profilePhoto: './images/equipe/Anghel.webp',
            name: 'Anghel Valente',
            jobTitle: 'Pesquisador da ObservActiva',
            description: 'Bacharel em Relações Internacionais pela Universidade Cândido Mendes.',
            instagram: '#',
            linkedin: '#',
            twitter: '#',
        },
        {
            profilePhoto: './images/equipe/Anneliese.webp',
            name: 'Anneliese Regina Feiler',
            jobTitle: 'Curadora do FSMSSS',
            description: 'Advogada. Pesquisadora nas áreas de direito empresarial, direitos humanos e direito internacional.',
            instagram: '#',
            linkedin: '#',
            twitter: '#',
        },

        {
            profilePhoto: './images/equipe/Armando.webp',
            name: 'Armando De Negri Filho',
            jobTitle: 'Colaborador do FSMSSS',
            description: 'Médico de saúde pública. Especialista em Direito ao Desenvolvimento no Mecanismo de Especialistas em Direito ao Desenvolvimento das Nações Unidas.',
            instagram: '#',
            linkedin: '#',
            twitter: '#',
        },

        {
            profilePhoto: './images/equipe/Brenda.webp',
            name: 'Brenda Macedo',
            jobTitle: 'Curadora da ObservActiva',
            description: 'Urbanista, especialista em Gestão de Cidades e técnico em Geoprocessamento.  Busca pela ampliação do debate envolvendo as questões urbanas em cidades pequenas.',
            instagram: '#',
            linkedin: '#',
            twitter: '#',
        },

        {
            profilePhoto: './images/equipe/Carolina.webp',
            name: 'Carolina Marques',
            jobTitle: 'Curadora de Eventos do FSMSSS',
            description: 'Graduada em Fotografia pela Faculdade Paulus de Comunicação (FAPCOM) e estudante de Publicidade e Propaganda pela UNICID.',
            instagram: '#',
            linkedin: '#',
            twitter: '#',
        },

        {
            profilePhoto: './images/equipe/Dainara.webp',
            name: 'Dainara Bispo',
            jobTitle: 'Pesquisadora da ObservActiva',
            description: 'Analista de relações internacionais. Com foco de pesquisa em Paradiplomacia, Cooperação Internacional Descentralizada e Organizações Internacionais, Estudos Urbanos e o Sul Global.',
            instagram: '#',
            linkedin: '#',
            twitter: '#',
        },

        {
            profilePhoto: './images/equipe/Emily.png',
            name: 'Emily Ciccarelli',
            jobTitle: 'Tradutora do FSMSSS',
            description: 'Estudante de Bacharelado em Música com ênfase em Canto Popular na FMU | FIAM-FAAM.',
            instagram: '#',
            linkedin: '#',
            twitter: '#',
        },
        {
            profilePhoto: './images/equipe/Gisele.webp',
            name: 'Gisele Oliveira',
            jobTitle: 'Pesquisadora da ObservActiva',
            description: 'Licenciatura em História, com experiência em gerenciamento documental.',
            instagram: '#',
            linkedin: '#',
            twitter: '#',
        },
        {
            profilePhoto: './images/equipe/Gleice.png',
            name: 'Gleice Neves',
            jobTitle: 'Pesquisadora da ObservActiva',
            description: 'Graduada em Antropologia pela Universidade Federal Fluminense. Tem experiência em pesquisa sobre migrações e refúgio, saúde e políticas públicas.',
            instagram: '#',
            linkedin: '#',
            twitter: '#',
        },
        {
            profilePhoto: './images/equipe/Isabelle.png',
            name: 'Isabelle Alves',
            jobTitle: 'Pesquisadora da ObservActiva',
            description: 'Estudante de Engenharia Ambiental pela Universidade de Brasília (UnB) e Direito pelo Centro Universitário Euroamericano (UNIEURO).',
            instagram: '#',
            linkedin: '#',
            twitter: '#',
        },
        {
            profilePhoto: './images/equipe/Isadora.webp',
            name: 'Isadora Borba',
            jobTitle: 'Coordenadora da ObservActiva',
            description: 'Bacharel em Biomedicina e especialista em Direitos Humanos e Saúde pela Escola Nacional de Saúde Pública Sérgio Arouca (ENSP).',
            instagram: '#',
            linkedin: '#',
            twitter: '#',
        },
        {
            profilePhoto: './images/equipe/Joao.png',
            name: 'João Vitor de Matos',
            jobTitle: 'Curador da ObservActiva',
            description: 'Estudante de Ciência Política na Universidade Federal do Estado do Rio de Janeiro.',
            instagram: '#',
            linkedin: '#',
            twitter: '#',
        },
        {
            profilePhoto: './images/equipe/Luana.webp',
            name: 'Luana de Almeida',
            jobTitle: 'Curadora do FSMSSS',
            description: 'Profissional da área da Comunicação Social, com experiência em gestão de projetos e de pessoas. Pós-graduada em Direitos Humanos, Sustentabilidade Social e Cidadania Global, com uma pós-graduação em andamento em Sociologia, Filosofia e História. ',
            instagram: '#',
            linkedin: '#',
            twitter: '#',
        },
        {
            profilePhoto: './images/equipe/Luanas.png',
            name: 'Luana dos Santos',
            jobTitle: 'Curadora do FSMSSS',
            description: 'Estudante de Ciências Sociais na Universidade Federal de São Paulo (UNIFESP).',
            instagram: '#',
            linkedin: '#',
            twitter: '#',
        },
        {
            profilePhoto: './images/equipe/Marina.png',
            name: 'Marina Lagrasta Bozzetto',
            jobTitle: 'Curadora da ObservActiva',
            description: 'Bacharel em Ciências Sociais e Mestre em Ciência Política pela USP, com experiência no desenvolvimento de pesquisas na área de políticas públicas, socioambiental e pesquisas socieconômicas.',
            instagram: '#',
            linkedin: '#',
            twitter: '#',
        },
        {
            profilePhoto: './images/equipe/Mila.png',
            name: 'Mila Simões',
            jobTitle: 'Curadora da ObservActiva',
            description: 'Advogada de formação. Com um olhar atento para as necessidades alheias, uma escuta empática e uma forte indignação contra injustiças sociais, encontrou sua vocação através do impacto positivo.',
            instagram: '#',
            linkedin: '#',
            twitter: '#',
        },
        {
            profilePhoto: './images/equipe/Rafaela.png',
            name: 'Rafaela De Negri',
            jobTitle: 'Coordenadora Geral do FSMSSS e da ObservActiva',
            description: 'Jornalista. Mestra em International Security and Development com foco em violência estrutural pela Jagiellonian University. Especialista em  Estratégia e Relações Internacionais Contemporâneas. ',
            instagram: '#',
            linkedin: '#',
            twitter: '#',
        },
        {
            profilePhoto: './images/equipe/Raquel.webp',
            name: 'Raquel Marques',
            jobTitle: 'Curadora do FSMSSS',
            description: 'Acadêmica de medicina, com participação em ações de saúdes orientadas para a prevenção de câncer de mama, prevenção de câncer de próstata e ações de mapeamento da hipertensão arterial.',
            instagram: '#',
            linkedin: '#',
            twitter: '#',
        },
        {
            profilePhoto: './images/equipe/Stella.png',
            name: 'Stella Caroline Alves',
            jobTitle: 'Curadora da ObservActiva',
            description: 'Bacharel em Direito pela UFMG (2010/2014) e Pós graduada com especialização em Direito Penal e Processual Penal (2022).',
            instagram: '#',
            linkedin: '#',
            twitter: '#',
        },
        // Adicione mais objetos conforme necessário
    ];
    return (
        <div>
            <Header />
            <main>
                <br></br><br></br>
                <h1>Conheça nossa equipe</h1>

            <div className="card-container">
                    {cardsData.map((card, index) => (
                        <Card
                            key={index}
                            profilePhoto={card.profilePhoto}
                            name={card.name}
                            jobTitle={card.jobTitle}
                            description={card.description}
                            instagram={card.instagram}
                            linkedin={card.linkedin}
                            twitter={card.twitter}
                        />
                    ))}
                </div>
            
               
            </main>
            <Footer />
        </div>
    );
};

export default Equipe;