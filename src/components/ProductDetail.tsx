"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  slug: string;
  subtitle: string;
  description: string;
  category: string;
  style: string;
  color: string;
  material: string;
  wattage: number;
  voltage: string;
  dimmable: boolean;
  featured: boolean;
  image: string;
  images: string[];
  inStock: boolean;
}

export default function ProductDetail({ id }: { id: string }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then((r) => {
        if (!r.ok) throw new Error("Product not found");
        return r.json();
      })
      .then(setProduct)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <section className="detail section">
        <div className="catalog__loading">
          <div className="catalog__spinner"></div>
        </div>
      </section>
    );
  }

  if (error || !product) {
    return (
      <section className="detail section">
        <div className="detail__container container">
          <div className="catalog__empty">
            <i className="ri-error-warning-line catalog__empty-icon"></i>
            <h3>Product not found</h3>
            <Link href="/products" className="button">Back to Products</Link>
          </div>
        </div>
      </section>
    );
  }

  const specs = [
    { icon: "ri-flashlight-line", label: "Wattage", value: `${product.wattage}W` },
    { icon: "ri-plug-line", label: "Voltage", value: product.voltage },
    { icon: "ri-palette-line", label: "Color", value: product.color },
    { icon: "ri-tools-line", label: "Material", value: product.material },
    { icon: "ri-contrast-2-line", label: "Dimmable", value: product.dimmable ? "Yes" : "No" },
    { icon: "ri-price-tag-3-line", label: "Style", value: product.style },
  ];

  return (
    <section className="detail section">
      <div className="detail__container container">
        <Link href="/products" className="detail__back">
          <i className="ri-arrow-left-line"></i> Back to Products
        </Link>

        <div className="detail__content">
          <div className="detail__image-section">
            <div className="detail__blob">
              <img src={product.image} alt={product.name} className="detail__img" />
              <h1 className="detail__blob-title">LIGHT</h1>
            </div>
            <div className="detail__shadow"></div>
          </div>

          <div className="detail__info">
            <div className="detail__header">
              <span className="detail__category">{product.category}</span>
              {product.featured && <span className="detail__featured">Featured</span>}
            </div>

            <h1 className="detail__name">{product.name}</h1>
            <span className="detail__subtitle">{product.subtitle}</span>

            <p className="detail__description">{product.description}</p>

            <div className="detail__specs">
              <h3 className="detail__specs-title">Specifications</h3>
              <div className="detail__specs-grid">
                {specs.map((spec) => (
                  <div className="detail__spec" key={spec.label}>
                    <i className={`${spec.icon} detail__spec-icon`}></i>
                    <div>
                      <span className="detail__spec-label">{spec.label}</span>
                      <span className="detail__spec-value">{spec.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="detail__status">
              {product.inStock ? (
                <span className="detail__in-stock"><i className="ri-checkbox-circle-line"></i> In Stock</span>
              ) : (
                <span className="detail__out-stock"><i className="ri-close-circle-line"></i> Out of Stock</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
