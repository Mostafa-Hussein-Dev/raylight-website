const products = [
  { name: "Modern Light", subtitle: "Hanging Light", price: 14, img: "/modern-lamp.png" },
  { name: "Industrial Light", subtitle: "Hanging Light", price: 20, img: "/industrial-lamp.png" },
  { name: "Superbolw Light", subtitle: "Hanging Light", price: 18, img: "/superbolw-lamp.png" },
  { name: "Ultrawide Light", subtitle: "Hanging Light", price: 16, img: "/ultrawide-lamp.png" },
  { name: "Roundness Light", subtitle: "Hanging Light", price: 17, img: "/roundness-light.png" },
  { name: "Stickness Light", subtitle: "Hanging Light", price: 28, img: "/stickness-light.png" },
  { name: "Superjet Light", subtitle: "Hanging Light", price: 15, img: "/superjet-light.png" },
  { name: "Nakedness Light", subtitle: "Hanging Light", price: 10, img: "/nakedness-lamp.png" },
];

export default function ProductsSection() {
  return (
    <section className="products section" id="products">
      <div className="products__container container grid">
        <div className="products__data">
          <h2 className="section__title">Our Products</h2>
          <p className="products__description">
            Discover all our unique products that are suitable for your home.
          </p>
        </div>

        <div className="products__content grid">
          {products.map((p) => (
            <article className="products__card" key={p.name}>
              <div className="products__blob">
                <img src={p.img} alt="products image" className="products__img" />
              </div>
              <h3 className="products__name">{p.name}</h3>
              <span className="products__subtitle">{p.subtitle}</span>
              <button className="products__button">
                <i className="ri-eye-line"></i>
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
