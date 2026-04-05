"use client";

import { useRef, useCallback } from "react";

const faqs = [
  { title: "Frequently New Design", description: "We make new designs every year, fashion designs, trending and of the best quality." },
  { title: "Original Production", description: "We are the industrial chain of quality lighting products and offer the most advantageous price." },
  { title: "Production With Large Stock", description: "You will not be left without the lamp you chose, we have a large stock possible in all models." },
  { title: "Professional Quality Control", description: "Our quality control does everything possible to send you the best possible product for your home." },
];

export default function ChooseSection() {
  const faqRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggle = useCallback((index: number) => {
    faqRefs.current.forEach((item, i) => {
      if (!item) return;
      const content = item.querySelector(".choose__faq-content") as HTMLElement;
      if (i === index && !item.classList.contains("faq-open")) {
        content.style.height = content.scrollHeight + "px";
        item.classList.add("faq-open");
      } else {
        content.style.height = "0";
        item.classList.remove("faq-open");
      }
    });
  }, []);

  return (
    <section className="choose section" id="choose">
      <div className="choose__container container grid">
        <div className="choose__content">
          <div className="choose__data">
            <h2 className="section__title">Why Choose Us</h2>
            <p className="choose__description">
              Our products have won numerous awards and we can guarantee the unlimited quality of our products.
            </p>
          </div>

          <div className="choose__faq">
            {faqs.map((faq, i) => (
              <div
                className="choose__faq-item"
                key={i}
                ref={(el) => { faqRefs.current[i] = el; }}
              >
                <div className="choose__faq-header" onClick={() => toggle(i)}>
                  <div className="choose__faq-icon">
                    <i className="ri-add-line"></i>
                  </div>
                  <h3 className="choose__faq-title">{faq.title}</h3>
                </div>
                <div className="choose__faq-content">
                  <p className="choose__faq-description">{faq.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="choose__image">
          <div className="choose__blob">
            <img src="/choose-lamp.png" alt="choose image" className="choose__img" />
            <h1 className="choose__blob-title">LIGHT</h1>
          </div>
        </div>
      </div>
    </section>
  );
}
