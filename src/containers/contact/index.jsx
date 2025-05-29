import React, { useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { FaWhatsapp, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import "./styles.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mensaje enviado (simulado). ¡Gracias!");
    setFormData({ email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="Contact Me"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="contact__socials">
        <a
          href="https://wa.me/tu-numero"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="contact__icon"
          style={{ animationDelay: "0s" }}
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://linkedin.com/in/tu-perfil"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="contact__icon"
          style={{ animationDelay: "0.2s" }}
        >
          <FaLinkedin />
        </a>
        <a
          href="https://instagram.com/tu-usuario"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="contact__icon"
          style={{ animationDelay: "0.4s" }}
        >
          <FaInstagram />
        </a>
        <a
          href="https://facebook.com/tu-pagina"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="contact__icon"
          style={{ animationDelay: "0.6s" }}
        >
          <FaFacebook />
        </a>
      </div>

      <form className="contact__form" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Tu correo electrónico"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Asunto"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Escribe tu mensaje aquí..."
          value={formData.message}
          onChange={handleChange}
          rows={5}
          required
        />
        <button type="submit">Enviar Mensaje</button>
      </form>
    </section>
  );
};

export default Contact;
