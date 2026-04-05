export default function ContactSection() {
  return (
    <section className="join section" id="contact">
      <div className="join__container container grid">
        <div className="join__bg grid">
          <div className="join__image">
            <div className="join__blob">
              <img src="/join-lamp.png" alt="contact image" className="join__img" />
              <h1 className="join__blob-title">LIGHT</h1>
            </div>
            <div className="join__shadow"></div>
          </div>

          <div className="join__content grid">
            <div className="join__data">
              <h2 className="section__title">Contact Us</h2>
              <p className="join__description">
                Get in touch with us through <br />
                any of the channels below.
              </p>
            </div>

            <div className="contact__info">
              <div className="contact__item">
                <i className="ri-map-pin-line contact__icon"></i>
                <div>
                  <h3 className="contact__item-title">Location</h3>
                  <span className="contact__item-text">Ghazal Building, Hazmieh Street, Beirut Lebanon</span>
                </div>
              </div>

              <div className="contact__item">
                <i className="ri-mail-line contact__icon"></i>
                <div>
                  <h3 className="contact__item-title">Email</h3>
                  <a href="mailto:contact@raylight.com" className="contact__item-link">contact@raylight.com</a>
                </div>
              </div>

              <div className="contact__item">
                <i className="ri-phone-line contact__icon"></i>
                <div>
                  <h3 className="contact__item-title">Phone</h3>
                  <a href="tel:+8107910081079300" className="contact__item-link">+810 79100 810 79300</a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
