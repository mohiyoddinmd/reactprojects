import React, { useState } from 'react';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission, e.g., sending data to an API
    console.log('Form submitted:', formData);
    // Reset form fields after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h3>Welcome to the Contact Us Page</h3>
      <p>If you have any questions, feel free to reach out to us using the form below.</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: '100%', marginBottom: '10px', padding: '8px' }}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: '100%', marginBottom: '10px', padding: '8px' }}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            style={{ width: '100%', marginBottom: '10px', padding: '8px' }}
          />
        </div>
        <button type="submit" style={{ padding: '10px 15px', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}>
          Submit
        </button>
      </form>
      <h4>Other Ways to Reach Us:</h4>
      <p>Email: mohiyoddinmd55@gmail.com<a href="mailto:contact@example.com">contact@example.com</a></p>
      <p>Phone:7995701458</p> 
    </div>
  );
}

export default ContactUs;
