// src/pages/Contact.jsx
import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Contact = () => {
    const styles = {
        hero: {
            background: 'linear-gradient(rgba(26, 58, 143, 0.9), rgba(37, 99, 235, 0.8))',
            color: 'white',
            textAlign: 'center',
            padding: '100px 20px',
        },
        heroTitle: {
            fontSize: '3rem',
            fontWeight: 'bold',
            marginBottom: '20px',
        },
        heroSubtitle: {
            fontSize: '1.5rem',
            maxWidth: '800px',
            margin: '0 auto',
        },
        section: {
            padding: '80px 20px',
        },
        container: {
            maxWidth: '1200px',
            margin: '0 auto',
        },
        contactGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
            marginBottom: '50px',
        },
        contactCard: {
            background: 'linear-gradient(to right, #93c5fd, #ffffff)',
            borderRadius: '10px',
            padding: '30px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            textAlign: 'center',
        },
        contactIcon: {
            fontSize: '3rem',
            color: '#1a3a8f',
            marginBottom: '20px',
        },
        contactTitle: {
            fontSize: '1.5rem',
            fontWeight: 'bold',
            marginBottom: '15px',
            color: '#1e293b',
        },
        contactInfo: {
            color: '#64748b',
            lineHeight: '1.6',
        },
        hoursContainer: {
            backgroundColor: '#f0f4ff',
            borderRadius: '10px',
            padding: '30px',
            marginBottom: '50px',
        },
        hoursTitle: {
            fontSize: '1.8rem',
            fontWeight: 'bold',
            marginBottom: '20px',
            color: '#1a3a8f',
        },
        hoursItem: {
            display: 'flex',
            alignItems: 'center',
            marginBottom: '15px',
            paddingBottom: '15px',
            borderBottom: '1px solid #e2e8f0',
        },
        hoursIcon: {
            fontSize: '1.5rem',
            color: '#1a3a8f',
            marginRight: '15px',
        },
        hoursText: {
            flex: 1,
        },
        hoursDay: {
            fontWeight: '600',
            color: '#1e293b',
        },
        hoursTime: {
            color: '#64748b',
        },
        mapContainer: {
            backgroundColor: '#e2e8f0',
            height: '250px',
            borderRadius: '10px',
            overflow: 'hidden',
        },
        mapIframe: {
            width: '100%',
            height: '100%',
            border: 'none',
        }
    };

    return (
        <div>
            {/* Hero Section */}
            <section style={styles.hero}>
                <h1 style={styles.heroTitle}>Contact Us</h1>
                <p style={styles.heroSubtitle}>
                    Get in touch with our team for business inquiries and consultations.
                </p>
            </section>

            {/* Contact Information */}
            <section style={styles.section}>
                <div style={styles.container}>
                    <div style={styles.contactGrid}>
                        <div style={styles.contactCard}>
                            <div style={styles.contactIcon}><FaMapMarkerAlt /></div>
                            <h3 style={styles.contactTitle}>Our Location</h3>
                            <p style={styles.contactInfo}>
                                Malindza, Eswatini<br />
                                Along the road from Manzini to Siteki
                            </p>
                        </div>

                        <div style={styles.contactCard}>
                            <div style={styles.contactIcon}><FaPhone /></div>
                            <h3 style={styles.contactTitle}>Phone</h3>
                            <p style={styles.contactInfo}>
                                (+268) 76229856<br />
                                (+268) 79592798
                            </p>
                        </div>

                        <div style={styles.contactCard}>
                            <div style={styles.contactIcon}><FaEnvelope /></div>
                            <h3 style={styles.contactTitle}>Email</h3>
                            <p style={styles.contactInfo}>
                                bestmanbmconsultancy@gmail.com
                            </p>
                        </div>
                    </div>

                    <div style={styles.hoursContainer}>
                        <h2 style={styles.hoursTitle}>Office Hours</h2>
                        <div style={styles.hoursItem}>
                            <div style={styles.hoursIcon}><FaClock /></div>
                            <div style={styles.hoursText}>
                                <div style={styles.hoursDay}>Monday - Friday</div>
                                <div style={styles.hoursTime}>8:00 AM - 5:00 PM</div>
                            </div>
                        </div>
                        <div style={styles.hoursItem}>
                            <div style={styles.hoursIcon}><FaClock /></div>
                            <div style={styles.hoursText}>
                                <div style={styles.hoursDay}>Saturday</div>
                                <div style={styles.hoursTime}>9:00 AM - 1:00 PM</div>
                            </div>
                        </div>
                        <div style={styles.hoursItem}>
                            <div style={styles.hoursIcon}><FaClock /></div>
                            <div style={styles.hoursText}>
                                <div style={styles.hoursDay}>Sunday</div>
                                <div style={styles.hoursTime}>Closed</div>
                            </div>
                        </div>
                    </div>

                    <h2 style={{ ...styles.hoursTitle, marginBottom: '20px' }}>Find Us</h2>
                    <div style={styles.mapContainer}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2498.666278022029!2d31.723947955551658!3d-26.409574632525935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ee5fb057cbbcd59%3A0x81d665a1ed3201bf!2sMalindza%2C%20Eswatini!5e0!3m2!1sen!2sza!4v1753293724377!5m2!1sen!2sza"
                            style={styles.mapIframe}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Bestman Business Location"
                        ></iframe>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;