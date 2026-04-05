"use client";

import { useState, useEffect } from "react";

export default function ScrollUp() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY >= 350);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a href="#home" className={`scrollup${show ? " show-scroll" : ""}`}>
      <i className="ri-arrow-up-line"></i>
    </a>
  );
}
