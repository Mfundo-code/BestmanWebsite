// src/components/Footer.jsx
import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const styles = {
        footer: {
            backgroundColor: '#1a3a8f',
            color: 'white',
            padding: '40px 20px',
        },
        container: {
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px',
        },
        section: {
            marginBottom: '20px',
        },
        heading: {
            fontSize: '1.2rem',
            fontWeight: 'bold',
            marginBottom: '15px',
            color: '#fff',
        },
        link: {
            display: 'block',
            color: '#cbd5e1',
            textDecoration: 'none',
            marginBottom: '10px',
            ':hover': {
                color: 'white',
            }
        },
        contactItem: {
            display: 'flex',
            alignItems: 'center',
            marginBottom: '10px',
            color: '#cbd5e1',
        },
        icon: {
            marginRight: '10px',
            color: 'white',
        },
        socialIcons: {
            display: 'flex',
            gap: '15px',
            marginTop: '15px',
        },
        socialIcon: {
            color: 'white',
            fontSize: '1.5rem',
            ':hover': {
                color: '#a5b4fc',
            }
        },
        bottom: {
            textAlign: 'center',
            paddingTop: '20px',
            marginTop: '20px',
            borderTop: '1px solid #334155',
            color: '#cbd5e1',
        }
    };

    return (
        <footer style={styles.footer}>
            <div style={styles.container}>
                <div style={styles.section}>
                    <h3 style={styles.heading}>Bestman Business Management Consultant</h3>
                    <p style={{ color: '#cbd5e1', lineHeight: '1.6' }}>
                        Empowering businesses with innovative solutions that drive success and sustainability.
                    </p>
                    <div style={styles.socialIcons}>
                        <a
                            href="https://www.facebook.com/profile.php?id=100064179006573&mibextid=rS40aB7S9Ucbxw6v"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={styles.socialIcon}
                        >
                            <FaFacebook />
                        </a>
                        <a
                            href="https://wa.me/26876229856"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={styles.socialIcon}
                        >
                            <FaWhatsapp />
                        </a>
                        <a
                            href="mailto:bestmanbmconsultancy@gmail.com"
                            style={styles.socialIcon}
                        >
                            <FaEnvelope />
                        </a>
                    </div>
                </div>

                <div style={styles.section}>
                    <h3 style={styles.heading}>Quick Links</h3>
                    <a href="/" style={styles.link}>Home</a>
                    <a href="/services" style={styles.link}>Our Services</a>
                    <a href="/about" style={styles.link}>About Us</a>
                    <a href="/portfolio" style={styles.link}>Portfolio</a>
                    <a href="/contact" style={styles.link}>Contact Us</a>
                </div>

                <div style={styles.section}>
                    <h3 style={styles.heading}>Services</h3>
                    <a href="#" style={styles.link}>Training & Mentorship</a>
                    <a href="#" style={styles.link}>Business Advisory</a>
                    <a href="#" style={styles.link}>Business Plans</a>
                    <a href="#" style={styles.link}>Digital Marketing</a>
                    <a href="#" style={styles.link}>Company Registration</a>
                </div>

                <div style={styles.section}>
                    <h3 style={styles.heading}>Contact Us</h3>
                    <div style={styles.contactItem}>
                        <FaMapMarkerAlt style={styles.icon} />
                        <span>Malindza, Eswatini</span>
                    </div>
                    <a href="tel:+26876229856" style={{ ...styles.contactItem, textDecoration: 'none' }}>
                        <FaPhone style={styles.icon} />
                        <span>(+268) 76229856</span>
                    </a>
                    <a href="tel:+26879592798" style={{ ...styles.contactItem, textDecoration: 'none' }}>
                        <FaPhone style={styles.icon} />
                        <span>(+268) 79592798</span>
                    </a>
                    <a href="mailto:bestmanbmconsultancy@gmail.com" style={{ ...styles.contactItem, textDecoration: 'none' }}>
                        <FaEnvelope style={styles.icon} />
                        <span>bestmanbmconsultancy@gmail.com</span>
                    </a>
                </div>
            </div>

            <div style={styles.bottom}>
                &copy; {currentYear} Bestman Business Management Consultant. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;