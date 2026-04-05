"use client";

export default function HomeSection() {
  return (
    <section className="home section" id="home">
      <div className="home__bg"></div>

      <div className="home__container container grid">
        <div className="home__content grid">
          <div className="home__data">
            <h3 className="home__subtitle">The best light bulbs</h3>
            <h1 className="home__title">
              Unique Light <br />
              For You Home
            </h1>

            <div className="home__buttons">
              <a href="/products" className="button">Discover Products</a>
            </div>
          </div>

          <div className="home__info">
            <div>
              <h3 className="home__info-title">9K<span>+</span></h3>
              <span className="home__info-subtitle">Premium <br /> Product</span>
            </div>
            <div>
              <h3 className="home__info-title">50<span>+</span></h3>
              <span className="home__info-subtitle">Unique <br /> Designs</span>
            </div>
            <div>
              <h3 className="home__info-title">12<span>+</span></h3>
              <span className="home__info-subtitle">Years of <br /> Craft</span>
            </div>
          </div>
        </div>

        <div className="home__image">
          <div className="home__blob">
            <img src="/home-lamp.png" alt="home image" className="home__img" />
            <h1 className="home__blob-title">LIGHT</h1>
          </div>
          <div className="home__shadow"></div>
        </div>
      </div>
    </section>
  );
}
