"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  slug: string;
  subtitle: string;
  category: string;
  style: string;
  color: string;
  material: string;
  wattage: number;
  dimmable: boolean;
  featured: boolean;
  image: string;
}

interface Filters {
  categories: string[];
  styles: string[];
  colors: string[];
  materials: string[];
}

interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export default function ProductsCatalog() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filters, setFilters] = useState<Filters>({ categories: [], styles: [], colors: [], materials: [] });
  const [pagination, setPagination] = useState<Pagination>({ page: 1, limit: 12, total: 0, totalPages: 0 });
  const [loading, setLoading] = useState(true);
  const [filtersOpen, setFiltersOpen] = useState(false);

  // Filter state
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [style, setStyle] = useState("");
  const [color, setColor] = useState("");
  const [material, setMaterial] = useState("");
  const [dimmable, setDimmable] = useState("");
  const [sortBy, setSortBy] = useState("createdAt");
  const [sortOrder, setSortOrder] = useState("desc");
  const [page, setPage] = useState(1);

  // Debounced search
  const [searchDebounced, setSearchDebounced] = useState("");
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchDebounced(search);
      setPage(1);
    }, 300);
    return () => clearTimeout(timer);
  }, [search]);

  // Fetch filters on mount
  useEffect(() => {
    fetch("/api/products/filters")
      .then((r) => r.json())
      .then(setFilters)
      .catch(console.error);
  }, []);

  // Fetch products
  const fetchProducts = useCallback(async () => {
    setLoading(true);
    const params = new URLSearchParams({
      page: String(page),
      limit: "12",
      sortBy,
      sortOrder,
      ...(searchDebounced && { search: searchDebounced }),
      ...(category && { category }),
      ...(style && { style }),
      ...(color && { color }),
      ...(material && { material }),
      ...(dimmable && { dimmable }),
    });

    try {
      const res = await fetch(`/api/products?${params}`);
      const data = await res.json();
      setProducts(data.products);
      setPagination(data.pagination);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [page, sortBy, sortOrder, searchDebounced, category, style, color, material, dimmable]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  function resetFilters() {
    setSearch("");
    setCategory("");
    setStyle("");
    setColor("");
    setMaterial("");
    setDimmable("");
    setSortBy("createdAt");
    setSortOrder("desc");
    setPage(1);
  }

  const hasActiveFilters = category || style || color || material || dimmable || searchDebounced;

  return (
    <section className="catalog section" id="products">
      <div className="catalog__container container">
        <div className="catalog__header">
          <div className="catalog__title-group">
            <h2 className="section__title">Our Products</h2>
            <p className="catalog__count">{pagination.total} products found</p>
          </div>
        </div>

        {/* Search & Controls Bar */}
        <div className="catalog__controls">
          <div className="catalog__search">
            <i className="ri-search-line catalog__search-icon"></i>
            <input
              type="text"
              placeholder="Search products..."
              className="catalog__search-input"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
              <button className="catalog__search-clear" onClick={() => setSearch("")}>
                <i className="ri-close-line"></i>
              </button>
            )}
          </div>

          <div className="catalog__control-buttons">
            <button
              className={`catalog__filter-toggle${filtersOpen ? " active" : ""}`}
              onClick={() => setFiltersOpen(!filtersOpen)}
            >
              <i className="ri-equalizer-line"></i>
              Filters
              {hasActiveFilters && <span className="catalog__filter-badge"></span>}
            </button>

            <select
              className="catalog__sort"
              value={`${sortBy}-${sortOrder}`}
              onChange={(e) => {
                const [field, order] = e.target.value.split("-");
                setSortBy(field);
                setSortOrder(order);
                setPage(1);
              }}
            >
              <option value="createdAt-desc">Newest First</option>
              <option value="createdAt-asc">Oldest First</option>
              <option value="name-asc">Name A-Z</option>
              <option value="name-desc">Name Z-A</option>
              <option value="wattage-desc">Highest Wattage</option>
              <option value="wattage-asc">Lowest Wattage</option>
            </select>
          </div>
        </div>

        {/* Filter Panel */}
        <div className={`catalog__filters${filtersOpen ? " open" : ""}`}>
          <div className="catalog__filter-grid">
            <div className="catalog__filter-group">
              <label className="catalog__filter-label">Category</label>
              <select className="catalog__filter-select" value={category} onChange={(e) => { setCategory(e.target.value); setPage(1); }}>
                <option value="">All Categories</option>
                {filters.categories.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            <div className="catalog__filter-group">
              <label className="catalog__filter-label">Style</label>
              <select className="catalog__filter-select" value={style} onChange={(e) => { setStyle(e.target.value); setPage(1); }}>
                <option value="">All Styles</option>
                {filters.styles.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>

            <div className="catalog__filter-group">
              <label className="catalog__filter-label">Color</label>
              <select className="catalog__filter-select" value={color} onChange={(e) => { setColor(e.target.value); setPage(1); }}>
                <option value="">All Colors</option>
                {filters.colors.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            <div className="catalog__filter-group">
              <label className="catalog__filter-label">Material</label>
              <select className="catalog__filter-select" value={material} onChange={(e) => { setMaterial(e.target.value); setPage(1); }}>
                <option value="">All Materials</option>
                {filters.materials.map((m) => <option key={m} value={m}>{m}</option>)}
              </select>
            </div>

            <div className="catalog__filter-group">
              <label className="catalog__filter-label">Dimmable</label>
              <select className="catalog__filter-select" value={dimmable} onChange={(e) => { setDimmable(e.target.value); setPage(1); }}>
                <option value="">All</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>
          </div>

          {hasActiveFilters && (
            <button className="catalog__clear-filters" onClick={resetFilters}>
              <i className="ri-close-circle-line"></i> Clear All Filters
            </button>
          )}
        </div>

        {/* Products Grid */}
        {loading ? (
          <div className="catalog__loading">
            <div className="catalog__spinner"></div>
          </div>
        ) : products.length === 0 ? (
          <div className="catalog__empty">
            <i className="ri-flashlight-line catalog__empty-icon"></i>
            <h3>No products found</h3>
            <p>Try adjusting your search or filters</p>
            <button className="button" onClick={resetFilters}>Reset Filters</button>
          </div>
        ) : (
          <div className="catalog__grid">
            {products.map((p) => (
              <Link href={`/products/${p.id}`} key={p.id} className="catalog__card">
                <div className="catalog__card-blob">
                  <img src={p.image} alt={p.name} className="catalog__card-img" />
                </div>
                <div className="catalog__card-body">
                  <span className="catalog__card-category">{p.category}</span>
                  <h3 className="catalog__card-name">{p.name}</h3>
                  <span className="catalog__card-subtitle">{p.subtitle}</span>
                  <div className="catalog__card-tags">
                    <span className="catalog__tag">{p.style}</span>
                    <span className="catalog__tag">{p.material}</span>
                    {p.dimmable && <span className="catalog__tag catalog__tag--gold">Dimmable</span>}
                  </div>
                </div>
                <div className="catalog__card-arrow">
                  <i className="ri-arrow-right-s-line"></i>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Pagination */}
        {pagination.totalPages > 1 && (
          <div className="catalog__pagination">
            <button
              className="catalog__page-btn"
              disabled={page <= 1}
              onClick={() => setPage(page - 1)}
            >
              <i className="ri-arrow-left-s-line"></i>
            </button>

            {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                className={`catalog__page-btn${p === page ? " active" : ""}`}
                onClick={() => setPage(p)}
              >
                {p}
              </button>
            ))}

            <button
              className="catalog__page-btn"
              disabled={page >= pagination.totalPages}
              onClick={() => setPage(page + 1)}
            >
              <i className="ri-arrow-right-s-line"></i>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
