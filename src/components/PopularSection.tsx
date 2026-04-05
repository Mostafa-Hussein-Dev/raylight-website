"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getPopularProducts } from "@/lib/api";
import { BlogCard } from "./BlogCard";

export default function PopularSection() {
  const router = useRouter();
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getPopularProducts();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch popular products:", error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <section className="popular section" id="popular">
      <div className="popular__container container">
        <div className="popular__data">
          <h2 className="section__title">Popular Product</h2>
          <p className="popular__description">
            Find our best products faster and get quality lights we have for you.
          </p>
        </div>

        <div className="popular__grid blogcard__grid">
          {products.map((p) => (
            <BlogCard
              key={p.id}
              badge={{ label: p.category, color: "success" }}
              image={{ src: p.image, alt: p.name }}
              title={p.name}
              excerpt={p.subtitle}
              href={`/products/${p.id}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
