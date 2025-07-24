// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGraduationCap, FaChartLine, FaClipboardList, FaLaptopCode, FaFileAlt, FaUsers } from 'react-icons/fa';
import officeImage from '../assets/office.png';

const Home = () => {
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(false);

    // Check if window is mobile size on mount and resize
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    const services = [
        {
            icon: <FaGraduationCap />,
            title: "Training & Mentorship",
            description: "Comprehensive training programs for entrepreneurs and SME owners."
        },
        {
            icon: <FaChartLine />,
            title: "Business Advisory",
            description: "Expert guidance on business operations and strategic planning."
        },
        {
            icon: <FaClipboardList />,
            title: "Monitoring & Evaluation",
            description: "Effective assessment of projects and programs."
        },
        {
            icon: <FaLaptopCode />,
            title: "Digital Solutions",
            description: "Website development and social media marketing."
        },
        {
            icon: <FaFileAlt />,
            title: "Business Plans",
            description: "Professional business plans to secure funding."
        },
        {
            icon: <FaUsers />,
            title: "Company Registration",
            description: "Assistance with company registration."
        }
    ];

    const styles = {
        hero: {
            background: 'linear-gradient(to right, #1a3a8f, #2563eb)',
            color: 'white',
            textAlign: 'center',
            padding: '60px 20px',
        },
        heroTitle: {
            fontSize: '3rem',
            fontWeight: 'bold',
            marginBottom: '20px',
        },
        heroSubtitle: {
            fontSize: '1.5rem',
            maxWidth: '800px',
            margin: '0 auto 40px',
        },
        section: {
            padding: '5px 20px',
        },
        container: {
            maxWidth: '1200px',
            margin: '0 auto',
        },
        sectionTitle: {
            textAlign: 'center',
            color: '#1a3a8f',
            fontSize: '2.5rem',
            marginBottom: '50px',
        },
        servicesGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
        },
        serviceCard: {
            background: 'linear-gradient(to right, #93c5fd, #ffffff)',
            borderRadius: '10px',
            padding: '30px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            textAlign: 'center',
            transition: 'transform 0.3s, box-shadow 0.3s',
            ':hover': {
                transform: 'translateY(-10px)',
                boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
            }
        },
        serviceIcon: {
            fontSize: '3rem',
            color: '#1a3a8f',
            marginBottom: '20px',
        },
        serviceTitle: {
            fontSize: '1.5rem',
            fontWeight: 'bold',
            marginBottom: '15px',
            color: '#1e293b',
        },
        serviceDescription: {
            color: '#64748b',
            lineHeight: '1.6',
        },
        aboutSection: {
            backgroundColor: '#f8fafc',
            padding: '80px 20px',
        },
        aboutContent: {
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: '50px',
            alignItems: 'center',
        },
        aboutText: {
            flex: 1,
        },
        aboutImage: {
            flex: 1,
            backgroundImage: `url(${officeImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: isMobile ? '300px' : '400px',
            width: '100%',
            borderRadius: '10px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
        },
        aboutTitle: {
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginBottom: '20px',
            color: '#1a3a8f',
        },
        aboutDescription: {
            fontSize: '1.1rem',
            lineHeight: '1.7',
            color: '#334155',
            marginBottom: '30px',
        },
        button: {
            backgroundColor: '#1a3a8f',
            color: 'white',
            padding: '12px 30px',
            borderRadius: '30px',
            border: 'none',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
            ':hover': {
                backgroundColor: '#2563eb',
            }
        },
        testimonialSection: {
            backgroundColor: '#1a3a8f',
            color: 'white',
            padding: '80px 20px',
        },
        testimonialGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
        },
        testimonialCard: {
            backgroundColor: 'rgba(255,255,255,0.1)',
            borderRadius: '10px',
            padding: '30px',
            border: '1px solid rgba(255,255,255,0.2)',
        },
        testimonialText: {
            fontStyle: 'italic',
            marginBottom: '20px',
            lineHeight: '1.7',
        },
        testimonialAuthor: {
            fontWeight: 'bold',
            fontSize: '1.1rem',
        },
        testimonialCompany: {
            color: '#cbd5e1',
        }
    };

    return (
        <div>
            {/* Hero Section */}
            <section style={styles.hero}>
                <h1 style={styles.heroTitle}>Empowering Your Business Success</h1>
                <p style={styles.heroSubtitle}>
                    Professional business management consulting for SMEs, entrepreneurs, and cooperatives in Eswatini.
                </p>
            </section>

            {/* About Section */}
            <section style={styles.aboutSection}>
                <div style={styles.container}>
                    <div style={styles.aboutContent}>
                        <div style={styles.aboutText}>
                            <h2 style={styles.aboutTitle}>About Bestman</h2>
                            <p style={styles.aboutDescription}>
                                Established in 2020, Bestman Business Management Consultant is a sole proprietorship
                                dedicated to providing comprehensive business management services. Founded by
                                Mr. Vusie Shongwe, our firm brings over 10 years of experience in entrepreneurship
                                development and training.
                            </p>
                            <p style={styles.aboutDescription}>
                                Strategically located in Malindza, Eswatini, we focus on empowering Small and
                                Medium Enterprises (SMEs), individual entrepreneurs, and cooperatives.
                            </p>
                            <button
                                style={styles.button}
                                onClick={() => navigate('/about')}
                            >
                                Learn More
                            </button>
                        </div>
                        <div style={styles.aboutImage}></div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section style={styles.section}>
                <div style={styles.container}>
                    <h2 style={styles.sectionTitle}>Our Services</h2>
                    <div style={styles.servicesGrid}>
                        {services.map((service, index) => (
                            <div key={index} style={styles.serviceCard}>
                                <div style={styles.serviceIcon}>{service.icon}</div>
                                <h3 style={styles.serviceTitle}>{service.title}</h3>
                                <p style={styles.serviceDescription}>{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section style={styles.testimonialSection}>
                <div style={styles.container}>
                    <h2 style={{ ...styles.sectionTitle, color: 'white' }}>What Our Clients Say</h2>
                    <div style={styles.testimonialGrid}>
                        <div style={styles.testimonialCard}>
                            <p style={styles.testimonialText}>
                                "Bestman's training programs transformed our cooperative operations. Their expertise
                                in corporate governance and recordkeeping helped us become more efficient and profitable."
                            </p>
                            <div style={styles.testimonialAuthor}>Ntsanjeni Farmers Cooperative</div>
                            <div style={styles.testimonialCompany}>Agriculture Sector</div>
                        </div>
                        <div style={styles.testimonialCard}>
                            <p style={styles.testimonialText}>
                                "Thanks to Bestman's digital marketing services, our customer base has expanded
                                significantly. Their strategic approach to online presence has been invaluable."
                            </p>
                            <div style={styles.testimonialAuthor}>Baftubangumnofto Grocery</div>
                            <div style={styles.testimonialCompany}>Retail Sector</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;