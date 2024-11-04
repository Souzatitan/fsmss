
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PostCard from '../components/PostCard';
import dinheiro from '/images/dinheiro.webp';
import postagem from '/images/post2.webp';

const posts = [
  {
    id: 1,
    author: "Anneliese Regina",
    date: "2 de out.",
    readTime: "7 min de leitura",
    title: "Tributação e justiça social: como a política fiscal impacta os direitos humanos",
    description: "A política fiscal é uma das principais ferramentas do Estado para a promoção dos direitos humanos.",
    views: 5,
    comments: 0,
    image: dinheiro
  },
  {
    id: 2,
    author: "Carlos Oliveira",
    date: "5 de out.",
    readTime: "5 min de leitura",
    title: "Como a tecnologia está transformando a educação no Brasil",
    description: "Uma análise das principais inovações tecnológicas no setor educacional brasileiro.",
    views: 15,
    comments: 3,
    image: postagem
  },

  {
    id: 2,
    author: "Carlos Oliveira",
    date: "5 de out.",
    readTime: "5 min de leitura",
    title: "Como a tecnologia está transformando a educação no Brasil",
    description: "Uma análise das principais inovações tecnológicas no setor educacional brasileiro.",
    views: 15,
    comments: 3,
    image: "https://via.placeholder.com/400x200"
  },

  {
    id: 2,
    author: "Carlos Oliveira",
    date: "5 de out.",
    readTime: "5 min de leitura",
    title: "Como a tecnologia está transformando a educação no Brasil",
    description: "Uma análise das principais inovações tecnológicas no setor educacional brasileiro.",
    views: 15,
    comments: 3,
    image: "https://via.placeholder.com/400x200"
  },
  // Adicione mais posts conforme necessário
];


function Todos(){

    return (
        <div>
            <Header />
            <main>
                <div className="post-list">
                  {posts.map(post => (
                    <PostCard
                      key={post.id}
                      author={post.author}
                      date={post.date}
                      readTime={post.readTime}
                      title={post.title}
                      description={post.description}
                      views={post.views}
                      comments={post.comments}
                      image={post.image}
                    />
                  ))}
                  </div>
            </main>
            <Footer />
        </div>
    );
};

export default Todos;