import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/Contact.css';

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const NOT_TEMPLATE_ID = process.env.REACT_APP_NOT_EMAIL_TEMPLATE_ID;
const CONF_TEMPLATE_ID = process.env.REACT_APP_CONF_EMAIL_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    await emailjs
      .send(
        SERVICE_ID, // Replace with your EmailJS service ID
        NOT_TEMPLATE_ID, // Replace with your EmailJS template ID
        {
          to_name: 'Rekha', // your name
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        PUBLIC_KEY // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          setStatus('success');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          setStatus('error');
        }
      );

    await emailjs
      .send(
        SERVICE_ID, // Replace with your EmailJS service ID
        CONF_TEMPLATE_ID, // Replace with your EmailJS template ID
        {
          to_name: 'Rekha',
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        PUBLIC_KEY // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          setStatus('success');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          setStatus('error');
        }
      );
  };

  return (
    <div className="section-container" id="contact">
      <h1 className="section-title">Contact</h1>
      <div className="title-underline"></div>

      <div className="contact-container glass-card fade-in-up">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="form-control"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              className="form-control"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
            />
          </div>

          <button
            type="submit"
            className="submit-btn"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && (
            <div className="message success">Message sent successfully!</div>
          )}
          {status === 'error' && (
            <div className="message error">
              Failed to send message. Please try again.
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
