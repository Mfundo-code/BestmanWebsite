// src/pages/About.jsx
import React, { useState, useEffect } from 'react';
import { FaUserTie, FaGraduationCap, FaUsers, FaHandshake } from 'react-icons/fa';
import otherguyImage from '../assets/otherguy.png';

const About = () => {
    const [isMobile, setIsMobile] = useState(false);

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

    const teamMembers = [
        {
            name: "Mr. Vusie Shongwe",
            role: "Founder & Lead Consultant",
            bio: "Holds a degree in Agricultural Business Management and Agricultural Economics with over 10 years of experience in entrepreneurship development and training."
        },
        {
            name: "Mr. Thabani Ginindza",
            role: "Operations Officer",
            bio: "Degree in Agribusiness and Agricultural Economics; currently pursuing a Master's degree in the same field."
        }
    ];

    const values = [
        {
            icon: <FaUserTie />,
            title: "Integrity",
            description: "We uphold the highest standards of honesty and ethical conduct in all our business relationships."
        },
        {
            icon: <FaHandshake />,
            title: "Reliability",
            description: "Our clients trust us to deliver consistent, high-quality services that meet their expectations."
        },
        {
            icon: <FaGraduationCap />,
            title: "Expertise",
            description: "We bring specialized knowledge and experience to help solve complex business challenges."
        },
        {
            icon: <FaUsers />,
            title: "Client Focus",
            description: "We prioritize our clients' needs and work collaboratively to achieve their business goals."
        }
    ];

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
        sectionTitle: {
            textAlign: 'center',
            color: '#1a3a8f',
            fontSize: '2.5rem',
            marginBottom: '50px',
        },
        content: {
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: '50px',
            marginBottom: '80px',
            alignItems: 'center',
        },
        textContent: {
            flex: 1,
        },
        imageContent: {
            flex: 1,
            backgroundImage: `url(${otherguyImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: isMobile ? '300px' : '500px',
            width: '100%',
            borderRadius: '10px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
        },
        aboutTitle: {
            fontSize: '2rem',
            fontWeight: 'bold',
            marginBottom: '20px',
            color: '#1a3a8f',
        },
        aboutText: {
            fontSize: '1.1rem',
            lineHeight: '1.7',
            color: '#334155',
            marginBottom: '30px',
        },
        valuesGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px',
            marginBottom: '80px',
        },
        valueCard: {
            background: 'linear-gradient(to right, #93c5fd, #ffffff)',
            borderRadius: '10px',
            padding: '30px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            textAlign: 'center',
            transition: 'transform 0.3s',
            ':hover': {
                transform: 'translateY(-5px)',
            }
        },
        valueIcon: {
            fontSize: '3rem',
            color: '#1a3a8f',
            marginBottom: '20px',
        },
        valueTitle: {
            fontSize: '1.5rem',
            fontWeight: 'bold',
            marginBottom: '15px',
            color: '#1e293b',
        },
        valueDescription: {
            color: '#64748b',
            lineHeight: '1.6',
        },
        teamGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
        },
        teamCard: {
            background: 'linear-gradient(to right, #93c5fd, #ffffff)',
            borderRadius: '10px',
            padding: '30px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            textAlign: 'center',
        },
        teamIconContainer: {
            backgroundColor: '#1a3a8f',
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            margin: '0 auto 20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        teamIcon: {
            color: 'white',
            fontSize: '4rem',
        },
        teamName: {
            fontSize: '1.5rem',
            fontWeight: 'bold',
            marginBottom: '10px',
            color: '#1e293b',
        },
        teamRole: {
            color: '#1a3a8f',
            fontWeight: '600',
            marginBottom: '15px',
        },
        teamBio: {
            color: '#64748b',
            lineHeight: '1.6',
        },
    };

    return (
        <div>
            {/* Hero Section */}
            <section style={styles.hero}>
                <h1 style={styles.heroTitle}>About Us</h1>
                <p style={styles.heroSubtitle}>
                    Learn about our mission, values, and the team behind Bestman Business Management Consultant.
                </p>
            </section>

            {/* Our Story Section */}
            <section style={styles.section}>
                <div style={styles.container}>
                    <h2 style={styles.sectionTitle}>Our Story</h2>
                    <div style={styles.content}>
                        <div style={styles.textContent}>
                            <h3 style={styles.aboutTitle}>Who We Are</h3>
                            <p style={styles.aboutText}>
                                Bestman Business Management Consultant was established in 2020 as a sole proprietorship
                                dedicated to providing comprehensive business management services. Founded by
                                Mr. Vusie Shongwe, our firm brings over 10 years of experience in entrepreneurship
                                development and training.
                            </p>
                            <p style={styles.aboutText}>
                                Strategically located in Malindza, along the road from Manzini to Siteki in Eswatini,
                                we focus on empowering Small and Medium Enterprises (SMEs), individual entrepreneurs,
                                and cooperatives.
                            </p>
                            <h3 style={styles.aboutTitle}>Our Mission</h3>
                            <p style={styles.aboutText}>
                                Empower businesses with innovative solutions that drive success and sustainability.
                            </p>
                            <h3 style={styles.aboutTitle}>Our Vision</h3>
                            <p style={styles.aboutText}>
                                To be the leading consultant in business management and development.
                            </p>
                        </div>
                        <div style={styles.imageContent}></div>
                    </div>

                    {/* Values Section */}
                    <h2 style={styles.sectionTitle}>Our Values</h2>
                    <div style={styles.valuesGrid}>
                        {values.map((value, index) => (
                            <div key={index} style={styles.valueCard}>
                                <div style={styles.valueIcon}>{value.icon}</div>
                                <h3 style={styles.valueTitle}>{value.title}</h3>
                                <p style={styles.valueDescription}>{value.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Team Section */}
                    <h2 style={styles.sectionTitle}>Our Team</h2>
                    <div style={styles.teamGrid}>
                        {teamMembers.map((member, index) => (
                            <div key={index} style={styles.teamCard}>
                                <div style={styles.teamIconContainer}>
                                    <FaUserTie style={styles.teamIcon} />
                                </div>
                                <h3 style={styles.teamName}>{member.name}</h3>
                                <p style={styles.teamRole}>{member.role}</p>
                                <p style={styles.teamBio}>{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;