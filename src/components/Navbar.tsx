"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkTheme, setDarkTheme] = useState(true);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY >= 50);
    window.addEventListener("scroll", onScroll);

    // Restore theme (dark mode is the default)
    const saved = localStorage.getItem("selected-theme");
    if (saved !== "light") {
      document.body.classList.add("dark-theme");
      setDarkTheme(true);
    }

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track active section on home page via scroll
  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection(pathname);
      return;
    }

    const sections = ["home", "choose", "popular", "contact"];
    const onScroll = () => {
      const scrollY = window.scrollY + 100;
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(`/#${id}`);
          return;
        }
      }
      setActiveSection("/#home");
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  function toggleTheme() {
    document.body.classList.toggle("dark-theme");
    const isDark = document.body.classList.contains("dark-theme");
    setDarkTheme(isDark);
    localStorage.setItem("selected-theme", isDark ? "dark" : "light");
  }

  const links = [
    { href: "/#home", label: "Home" },
    { href: "/#choose", label: "Choose" },
    { href: "/#popular", label: "Popular" },
    { href: "/#contact", label: "Contact" },
    { href: "/products", label: "Products" },
  ];

  return (
    <header className={`header${scrolled ? " bg-header" : ""}`} id="header">
      <nav className="nav container">
        <a href="/" className="nav__logo">
          RAY<span>LIGHT</span>
        </a>

        <div className={`nav__menu${menuOpen ? " show-menu" : ""}`} id="nav-menu">
          <ul className="nav__list">
            {links.map((link) => (
              <li className="nav__item" key={link.href}>
                <a
                  href={link.href}
                  className={`nav__link${activeSection === link.href ? " active-link" : ""}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="nav__item nav__theme-item">
              <button className="nav__link nav__theme-button" onClick={toggleTheme}>
                <i className={`${darkTheme ? "ri-sun-line" : "ri-moon-line"}`}></i>
                <span>{darkTheme ? "Light Mode" : "Dark Mode"}</span>
              </button>
            </li>
          </ul>

          <button type="button" className="nav__close" onClick={() => setMenuOpen(false)}>
            <i className="ri-close-line"></i>
          </button>
        </div>

        <div className="nav__buttons">
          <i
            className={`${darkTheme ? "ri-sun-line" : "ri-moon-line"} change-theme`}
            onClick={toggleTheme}
          ></i>
          {!menuOpen && (
            <button type="button" className="nav__toggle" onClick={() => setMenuOpen(true)}>
              <i className="ri-menu-line"></i>
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}
