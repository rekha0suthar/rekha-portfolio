import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await emailjs
      .send(
        'service_dz94g3i', // Replace with your EmailJS service ID
        'template_69pvoth', // Replace with your EmailJS template ID
        {
          to_name: 'Rekha',
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        'RE3kg8Nk5TQPwx6lj' // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          setLoading(false);
          alert('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          setLoading(false);
          alert('Failed to send message. Please try again.');
          console.error(error);
        }
      );
  };
  return (
    <section id="contact" className="contact-section">
      <h1>Contact Me</h1>
      <hr />

      <div className="contact-container">
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">
              {loading ? 'Sending .....' : 'Send Message'}
            </button>
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
