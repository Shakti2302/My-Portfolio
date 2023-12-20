import React from "react";
import "./contact.css"


const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Get in touch</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Contact Me :</h3>
          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>

              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">
                <a href="shaktiswarup2302@gmail.com" target="_blank">
                  shaktiswarup2302@gmail.com
                </a>
              </span>
            </div>

            <div className="contact__card">
              <i class="bx bxl-whatsapp-square contact__card-icon"></i>

              <h3 className="contact__card-title">Whatsapp</h3>
              <span className="contact__card-data">+91-7978953250</span>
            </div>

            <div className="contact__card">
              <i class="bx bxl-linkedin contact__card-icon"></i>
              <h3 className="contact__card-title">Linkedin</h3>
              <span className="contact__card-data">
                <a
                  href="www.linkedin.com/in/shakti-swarup-dash-12090b187"
                  target="_blank"
                >
                  www.linkedin.com/in/shakti-swarup-dash-12090b187
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
