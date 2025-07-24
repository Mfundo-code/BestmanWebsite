// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaHome, FaBriefcase, FaInfoCircle, FaUserFriends, FaEnvelope } from 'react-icons/fa';
import Logo from '../assets/logo.png';

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const navigate = useNavigate();


    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    // Check screen size to determine mobile view
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

    const styles = {
        header: {
            background: 'linear-gradient(to right, #93c5fd, #ffffff)',
            color: 'linear-gradient(to right, #1a3a8f, #2563eb)',
            padding: '15px 20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
            position: 'sticky',
            top: 0,
            zIndex: 100,
            height: '70px',
        },
        logoContainer: {
            flex: 1,
            display: 'flex',
            alignItems: 'center',
        },
        logoImage: {
            height: '50px',
            cursor: 'pointer',
            maxWidth: '100%',
        },
        nav: {
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
        },
        navButton: {
            backgroundColor: 'transparent',
            color: 'linear-gradient(to right, #1a3a8f, #2563eb)',
            textDecoration: 'none',
            borderRadius: '30px',
            padding: '8px 18px',
            fontWeight: '500',
            transition: 'all 0.3s ease',
            border: '1px solid rgba(255,255,255,0.3)',
            ':hover': {
                backgroundColor: 'rgba(255,255,255,0.1)',
                transform: 'translateY(-2px)',
            }
        },
        iconButton: {
            background: 'none',
            border: 'none',
            color: 'linear-gradient(to right, #1a3a8f, #2563eb)',
            padding: '8px',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            transition: 'all 0.3s ease',
            fontSize: '24px',
            width: '40px',
            height: '40px',
            ':hover': {
                backgroundColor: 'rgba(255,255,255,0.1)',
                transform: 'scale(1.1)',
            }
        },
        largeIcon: {
            fontSize: '24px',
        },
        // Mobile styles
        mobileNav: {
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
        },
        mobileMenuButton: {
            background: 'none',
            border: 'none',
            color: 'linear-gradient(to right, #1a3a8f, #2563eb)',
            cursor: 'pointer',
            padding: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            transition: 'all 0.3s ease',
            ':hover': {
                backgroundColor: 'rgba(255,255,255,0.1)',
            }
        },
        mobileMenuOverlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 99,
            display: 'flex',
            justifyContent: 'flex-end',
        },
        mobileMenu: {
            width: '280px',
            height: '100%',
            background: 'linear-gradient(to bottom, #1a3a8f, #2563eb)',
            boxShadow: '-2px 0 15px rgba(0,0,0,0.1)',
            padding: '20px',
            position: 'relative',
            overflowY: 'auto',
        },
        mobileMenuItems: {
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            marginTop: '15px',
        },
        mobileMenuItem: {
            padding: '15px 20px',
            textDecoration: 'none',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            borderRadius: '8px',
            transition: 'all 0.3s',
            fontWeight: '500',
            backgroundColor: 'rgba(255,255,255,0.1)',
            ':hover': {
                backgroundColor: 'rgba(255,255,255,0.2)',
                transform: 'translateX(5px)',
            }
        },
        mobileIcon: {
            marginRight: '15px',
            fontSize: '20px',
            color: '#fff',
            width: '24px',
            textAlign: 'center',
        },
    };

    return (
        <header style={styles.header}>
            <div style={styles.logoContainer}>
                <img
                    src={Logo}
                    alt="Bestman Business Management Consultant Logo"
                    style={styles.logoImage}
                    onClick={() => navigate('/')}
                />
            </div>

            {/* Desktop Navigation */}
            {!isMobile && (
                <nav style={styles.nav}>
                    <Link to="/" style={styles.navButton}>
                        <FaHome style={{ marginRight: '8px' }} /> Home
                    </Link>
                    <Link to="/services" style={styles.navButton}>
                        <FaBriefcase style={{ marginRight: '8px' }} /> Our Services
                    </Link>
                    <Link to="/about" style={styles.navButton}>
                        <FaInfoCircle style={{ marginRight: '8px' }} /> About Us
                    </Link>
                    <Link to="/contact" style={styles.navButton}>
                        <FaEnvelope style={{ marginRight: '8px' }} /> Contact Us
                    </Link>
                </nav>
            )}

            {/* Mobile Navigation */}
            {isMobile && (
                <div style={styles.mobileNav}>
                    <button
                        style={styles.mobileMenuButton}
                        onClick={toggleMobileMenu}
                        aria-label="Menu"
                    >
                        {mobileMenuOpen ? <FaTimes style={styles.largeIcon} /> : <FaBars style={styles.largeIcon} />}
                    </button>
                </div>
            )}

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && isMobile && (
                <div style={styles.mobileMenuOverlay} onClick={toggleMobileMenu}>
                    <div style={styles.mobileMenu} onClick={(e) => e.stopPropagation()}>
                        {/* REMOVED THE PURPLE CLOSE BUTTON HERE */}

                        <div style={styles.mobileMenuItems}>
                            <Link to="/" style={styles.mobileMenuItem} onClick={toggleMobileMenu}>
                                <FaHome style={styles.mobileIcon} /> Home
                            </Link>
                            <Link to="/services" style={styles.mobileMenuItem} onClick={toggleMobileMenu}>
                                <FaBriefcase style={styles.mobileIcon} /> Our Services
                            </Link>
                            <Link to="/about" style={styles.mobileMenuItem} onClick={toggleMobileMenu}>
                                <FaInfoCircle style={styles.mobileIcon} /> About Us
                            </Link>
                            <Link to="/portfolio" style={styles.mobileMenuItem} onClick={toggleMobileMenu}>
                                <FaUserFriends style={styles.mobileIcon} /> Portfolio
                            </Link>
                            <Link to="/contact" style={styles.mobileMenuItem} onClick={toggleMobileMenu}>
                                <FaEnvelope style={styles.mobileIcon} /> Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;