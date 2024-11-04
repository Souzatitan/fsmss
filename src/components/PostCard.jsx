import React from 'react';
import '../styles/PostCard.css';

function PostCard({ author, date, readTime, title, description, views, comments, image }) {
  return (
    <div className="post-card">
      <div className="post-image">
        <img src={image} alt="Post cover" />
      </div>
      <div className="post-content">
        <div className="post-header">
          <img src="https://via.placeholder.com/50" alt="Author" className="author-image" />
          <div>
            <span className="author-name">{author}</span>
            <span className="post-info">{date} • {readTime}</span>
          </div>
        </div>
        <h2 className="post-title">{title}</h2>
        <p className="post-description">{description}</p>
        <div className="post-footer">
          <span>{views} visualizações</span>
          <span>{comments} comentário{comments !== 1 && 's'}</span>
          <button className="like-button">❤</button>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
