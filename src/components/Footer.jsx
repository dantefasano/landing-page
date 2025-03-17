// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="text-center py-3">
      <p>
        &copy; {new Date().getFullYear()} Tu Nombre. Todos los derechos
        reservados.
      </p>
    </footer>
  );
};

export default Footer;
