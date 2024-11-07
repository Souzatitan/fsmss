// Card.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import '../styles/EquipeCard.css';

function EquipeCard({ profilePhoto, name, jobTitle, description, instagram, linkedin, twitter }) {
  return (
    <div className="card">
      <div className="image-container">
        <a href="#">
        <img src={profilePhoto} alt="Profile" />
        </a>
      </div>
      <div className="content">
        <h2 className="profile-name">{name}</h2>
        <p className="job-title">{jobTitle}</p>
        <p className="description">{description}</p>
      </div>
      <div className="social-links">
        
        <a className="linkedin" href={linkedin}>
        <FontAwesomeIcon icon={faLinkedin} />
        </a>
        
      </div>
    </div>
  );
}

export default EquipeCard;
