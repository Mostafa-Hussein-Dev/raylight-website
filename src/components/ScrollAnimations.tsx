"use client";

import { useEffect } from "react";

export default function ScrollAnimations() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/scrollreveal";
    script.onload = () => {
      // @ts-expect-error ScrollReveal loaded via CDN
      const sr = window.ScrollReveal({
        origin: "top",
        distance: "40px",
        duration: 800,
        delay: 100,
      });

      sr.reveal(`.home__content, .popular__container, .products__container, .join__bg, .footer__container`);
      sr.reveal(`.home__image`, { origin: "bottom" });
      sr.reveal(`.choose__image`, { origin: "left" });
      sr.reveal(`.choose__content`, { origin: "right" });
    };
    document.body.appendChild(script);
  }, []);

  return null;
}
