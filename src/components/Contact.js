import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h1>Contact Me</h1>
      <hr />

      <div className="contact-container">
        <div className="contact-form-container">
          <form className="contact-form">
            <input type="text" name="name" placeholder="Your Name" required />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
        <div className="contact-details">
          <h2>Get in Touch</h2>
          <ul>
            <li>
              <strong> Email: </strong>
              <a href="mailto:rekha0suthar@gmail.com">rekha0suthar@gmail.com</a>
            </li>
            <li>
              <strong>LinkedIn: </strong>
              <a
                href="https://linkedin.com/in/rekha0suthar"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/rekha0suthar
              </a>
            </li>
            <li>
              <strong>GitHub: </strong>
              <a
                href="https://github.com/rekha0suthar"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/rekha0suthar
              </a>
            </li>
            <li>
              <strong>Location: </strong>Bangalore, India
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
