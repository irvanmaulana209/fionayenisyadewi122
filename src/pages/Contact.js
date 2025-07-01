import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-page plants-theme">
      <h1>CONTACT ME</h1>
      <div className="contact-icon-line">
        <div className="line" />
        <i className="fas fa-address-book contact-icon" />
        <div className="line" />
      </div>

      <p className="contact-desc">
        Jl KarangJmbe Rt03 Rw 02,<br />
        Provinsi JawaTengah, Indonesia<br />
        email : fyenisya@gmail.com
      </p>

      {/* Form Kontak */}
      <form className="contact-form">
        <div className="form-field">
          <input type="text" required />
          <label>Name</label>
        </div>
        <div className="form-field">
          <textarea required />
          <label>Message</label>
        </div>
        <button type="submit">
          <i className="fas fa-paper-plane"></i>
        </button>
      </form>

      {/* Footer */}
      <footer className="contact-footer">
        <div className="footer-section">
          <h3>LOCATION</h3>
          <p>Jl KarangJmbe Rt03 Rw 02.<br />Provinsi Jawa Tengah, Indonesia.</p>
        </div>
        <div className="footer-section">
          <h3>SOCIAL MEDIA</h3>
          <div className="social-icons">
            <a href="https://www.instagram.com/fynzlx_?igsh=NDdhbTM1dnJlMjh5"><i className="fab fa-instagram"></i></a>
            <a href="http://www.youtube.com/@fionayenisya-gu8ns"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
        <div className="footer-section">
          <h3>ABOUT</h3>
          <p>Website ini bertujuan untuk<br />menampilkan hasil projek yang<br />pernah dikerjakan.</p>
        </div>
      </footer>
    </div>
  );
}
