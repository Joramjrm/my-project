import React from 'react';
import './ContactUs.css'; 

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" required />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required />

      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message" rows="4" required />

      <button type="submit">Submit</button>
    </form>
  );
};

const ContactDetails = () => {
  return (
    <div className="contact-details">
      <h2>Contact Details</h2>
      <p>Address: 123 Main St, City, Country</p>
      <p>Phone: +1234567890</p>
      <p>Email: info@example.com</p>
    </div>
  );
};

const Map = () => {
  return (
    <div className="map">
      {}
      <p>Map Here</p>
    </div>
  );
};

const ContactUsPage = () => {
  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <ContactForm />
      <ContactDetails />
      <Map />
    </div>
  );
};

export default ContactUsPage;
