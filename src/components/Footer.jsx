import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        
        <div className="footer__brand">
          <h3 className="footer__logo">
            Aditya Bhardwaj
          </h3>
          <p className="footer__text">
            Frontend & React Native Developer creating modern, high-performance,
            and responsive applications.
          </p>

        </div>

        <nav className="footer__nav">
          <ul className="footer__links">
            <li><a href="#home" className="footer__link">Home</a></li>
            <li><a href="#about" className="footer__link">About</a></li>
            <li><a href="#projects" className="footer__link">Projects</a></li>
            <li><a href="#contact" className="footer__link">Contact</a></li>
          </ul>
        </nav>

        <div className="footer__bottom">
          <p className="footer__copy">
            Copyright © 2026 {profile.name}. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}