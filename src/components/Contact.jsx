import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
    return (
        <section className="contact-section">
            <div className="contact-info">
                <p><img src="/images/o-email.png" alt="Ícone Email" className="contact-icon" /> forumsocialmundialsss@gmail.com</p>
            </div>
            <div className="contact-form" id="contato">
                <form action="#" method="post">
                    <div className="input-group">
                        <input type="text" name="name" placeholder="Seu Nome" className="rounded-input half-input" />
                        <input type="email" name="email" placeholder="Seu Email" className="rounded-input half-input" />
                    </div>
                    <input type="text" name="subject" placeholder="Assunto" className="rounded-input full-input" />
                    <button type="submit" className="submit-btn">Enviar</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
