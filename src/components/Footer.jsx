import { profile } from "../data/profile";

export default function Footer() {

  return (
    <footer className="footer">

      <div className="container footer__inner">

        <div className="footer__top">

          <h3 className="footer__logo">
            Aditya<span>Bhardwaj</span>
          </h3>

          <p className="footer__text">
            Frontend & React Native Developer creating
            modern responsive websites and applications.
          </p>

        </div>

        <div className="footer__social">

          <a
            href={profile.social.linkedin}
            className="footer__socialLink"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href={profile.social.github}
            className="footer__socialLink"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href={profile.social.facebook}
            className="footer__socialLink"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>

          <a
            href={profile.social.twitter}
            className="footer__socialLink"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>

          <a
            href={profile.social.instagram}
            className="footer__socialLink"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>

        </div>

        <div className="footer__bottom">

          <p className="footer__copy">
            Copyright © 2026 {profile.name}. All Rights Reserved
          </p>

        </div>

      </div>

    </footer>
  );
}