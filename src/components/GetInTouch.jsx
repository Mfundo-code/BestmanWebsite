// src/components/GetInTouch.jsx
import React, { useState, useEffect } from 'react';
import fieldImage from '../assets/field.png'; // Import the field image

const GetInTouch = () => {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        phoneNumber: '',
        requestType: '',
        message: ''
    });

    const [isMobile, setIsMobile] = useState(false);

    // Check if screen is mobile size
    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);

        return () => {
            window.removeEventListener('resize', checkIfMobile);
        };
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch('http://207.180.201.93:5006/api/Contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (!response.ok) {
      const text = await response.text();
      console.error('Bad response status:', response.status, text);
      throw new Error(`HTTP ${response.status}: ${text}`);
    }

    const result = await response.json();
    console.log('Success:', result);

    setFormData({
      name: '',
      surname: '',
      email: '',
      phoneNumber: '',
      requestType: '',
      message: ''
    });

    alert('Thank you for your message! We will contact you soon.');
  } catch (error) {
    console.error('Error submitting form:', error);
    alert(error.message);
  }
};


    const styles = {
        container: {
            backgroundColor: '#f0f4ff',
            padding: '20px 15px',
        },
        content: {
            maxWidth: '900px', // Increased to accommodate two columns
            margin: '0 auto',
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
            display: 'flex', // Use flex for two-column layout
            flexDirection: isMobile ? 'column' : 'row', // Column on mobile, row on desktop
        },
        imageContainer: {
            flex: 1,
            backgroundImage: `url(${fieldImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: isMobile ? '0' : '400px', // Set height same as form
            display: isMobile ? 'none' : 'block', // Hide image on mobile
            borderTopLeftRadius: '8px',
            borderBottomLeftRadius: '8px',
        },
        formContainer: {
            flex: 1,
            padding: '20px',
        },
        title: {
            textAlign: 'center',
            color: '#1a3a8f',
            marginBottom: '15px',
            fontSize: '1.5rem',
        },
        form: {
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '10px',
        },
        inputGroup: {
            display: 'flex',
            flexDirection: 'column',
        },
        label: {
            marginBottom: '4px',
            fontWeight: '500',
            color: '#334155',
            fontSize: '0.85rem',
        },
        input: {
            padding: '8px',
            borderRadius: '4px',
            border: '1px solid #cbd5e1',
            fontSize: '0.9rem',
        },
        textarea: {
            padding: '8px',
            borderRadius: '4px',
            border: '1px solid #cbd5e1',
            minHeight: '70px', // Reduced height further
            fontSize: '0.9rem',
            resize: 'vertical',
        },
        button: {
            backgroundColor: '#1a3a8f',
            color: 'white',
            border: 'none',
            padding: '10px',
            borderRadius: '4px',
            fontSize: '0.9rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
            marginTop: '5px',
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.content}>
                {/* Image container - hidden on mobile */}
                <div style={styles.imageContainer}></div>

                {/* Form container */}
                <div style={styles.formContainer}>
                    <h2 style={styles.title}>Get In Touch</h2>
                    <form onSubmit={handleSubmit} style={styles.form}>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <div style={{ ...styles.inputGroup, flex: 1 }}>
                                <label style={styles.label} htmlFor="name">First Name</label>
                                <input
                                    style={styles.input}
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div style={{ ...styles.inputGroup, flex: 1 }}>
                                <label style={styles.label} htmlFor="surname">Last Name</label>
                                <input
                                    style={styles.input}
                                    type="text"
                                    id="surname"
                                    name="surname"
                                    value={formData.surname}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div style={styles.inputGroup}>
                            <label style={styles.label} htmlFor="email">Email</label>
                            <input
                                style={styles.input}
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div style={styles.inputGroup}>
                            <label style={styles.label} htmlFor="phone">Phone</label>
                            <input
                                style={styles.input}
                                type="tel"
                                id="phone"
                                name="phoneNumber"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div style={styles.inputGroup}>
                            <label style={styles.label} htmlFor="requestType">Request Type</label>
                            <select
                                style={styles.input}
                                id="requestType"
                                name="requestType"
                                value={formData.requestType}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select request type</option>
                                <option value="Business Consultation">Consultation</option>
                                <option value="Training and Mentorship">Training</option>
                                <option value="Business Plan">Business Plan</option>
                                <option value="Financial Services">Finance</option>
                                <option value="Digital Marketing">Marketing</option>
                                <option value="Website Development">Web Dev</option>
                                <option value="Company Registration">Registration</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div style={styles.inputGroup}>
                            <label style={styles.label} htmlFor="message">Message</label>
                            <textarea
                                style={styles.textarea}
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>

                        <button type="submit" style={styles.button}>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default GetInTouch;