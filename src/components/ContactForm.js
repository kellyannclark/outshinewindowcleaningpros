
// components/ContactForm.js
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 🚀 You can plug in your email logic or external form service here
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" }); // reset form
  };

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto" }}>
      {submitted && (
        <p style={{ color: "green", textAlign: "center", marginBottom: "20px" }}>
          Thanks! We'll be in touch shortly.
        </p>
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="form-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="form-input"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="form-textarea"
        />
        <button type="submit" className="hero-button">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
