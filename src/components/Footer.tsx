export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <a href="#" className="footer__logo">
          RAY<span>LIGHT</span>
        </a>

        <span className="footer__copy">
          &copy; 2026 Raylight. All rights reserved
        </span>

        <div className="footer__social">
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="footer__social-link">
            <i className="ri-facebook-circle-line"></i>
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="footer__social-link">
            <i className="ri-instagram-line"></i>
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="footer__social-link">
            <i className="ri-twitter-line"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
