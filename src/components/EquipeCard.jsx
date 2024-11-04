// Card.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import '../styles/EquipeCard.css';

function EquipeCard({ profilePhoto, name, jobTitle, description, instagram, linkedin, twitter }) {
  return (
    <div className="card">
      <div className="image-container">
        <img src={profilePhoto} alt="Profile" />
      </div>
      <div className="content">
        <h2 className="profile-name">{name}</h2>
        <p className="job-title">{jobTitle}</p>
        <p className="description">{description}</p>
      </div>
      <div className="social-links">
        <a className="instagram" href={instagram}>
        <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a className="linkedin" href={linkedin}>
        <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a className="twitter" href={twitter}>
        <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
    </div>
  );
}

export default EquipeCard;
