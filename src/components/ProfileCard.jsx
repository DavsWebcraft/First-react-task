import React from "react";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import "./ProfileCard.css";

const ProfileCard = ({ name, image, bio }) => {
  return (
    <div className="profile-card">
      <div className="profile-left">
        <img src={image} alt={name} className="profile-image" />
      </div>
      <div className="profile-right">
        <h2>{name}</h2>
        <p>{bio}</p>
        <button className="portfolio-button">Explore my portfolio</button>
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/davison-wonsurum-795347302?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.facebook.com/share/15gwNS6DQB/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/davison_wonsurum?igsh=MXBoY3FuYW4zZ2gyNA%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/2347034831603"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
