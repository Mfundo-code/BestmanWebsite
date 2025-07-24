// src/pages/Services.jsx
import React from 'react';
import { FaGraduationCap, FaChartLine, FaClipboardList, FaFileAlt, FaDollarSign, FaLaptopCode, FaUsers, FaLightbulb, FaGlobe, FaChartPie, FaMobileAlt } from 'react-icons/fa';

const Services = () => {
    const services = [
        {
            icon: <FaGraduationCap />,
            title: "Training & Mentorship",
            description: "Comprehensive training programs covering corporate governance, group dynamics, costing, marketing, and recordkeeping for entrepreneurs and SME owners."
        },
        {
            icon: <FaChartLine />,
            title: "Business Advisory",
            description: "Expert guidance on business operations, strategic planning, and development to help your business thrive in competitive markets."
        },
        {
            icon: <FaClipboardList />,
            title: "Monitoring & Evaluation",
            description: "Development of logical frameworks for effective assessment and evaluation of projects and programs."
        },
        {
            icon: <FaFileAlt />,
            title: "Business Plan Writing",
            description: "Professional business plan development to assist clients in securing funding and effectively outlining their business strategies."
        },
        {
            icon: <FaDollarSign />,
            title: "Financial Statements Preparation",
            description: "Preparation of comprehensive financial statements to aid businesses in monitoring their finances and making informed decisions."
        },
        {
            icon: <FaDollarSign />,
            title: "Tax Return Submission",
            description: "Assisting clients with accurate and timely tax return submissions to ensure compliance with regulations."
        },
        {
            icon: <FaLaptopCode />,
            title: "Digital Marketing",
            description: "Strategies designed to enhance your online presence, including social media marketing, SEO, and content marketing."
        },
        {
            icon: <FaUsers />,
            title: "Company Registration",
            description: "Facilitating the registration process for new businesses to ensure compliance with local regulations."
        },
        {
            icon: <FaLightbulb />,
            title: "Strategic Planning",
            description: "Helping businesses create and implement effective short-term and long-term strategic plans for sustainable growth."
        },
        {
            icon: <FaGlobe />,
            title: "Local Value Chain Development",
            description: "Expertise in developing local value chains to enhance economic opportunities and community development."
        },
        {
            icon: <FaChartPie />,
            title: "Entrepreneurship Development",
            description: "Training and support programs to foster entrepreneurial skills and mindset among aspiring business owners."
        },
        {
            icon: <FaMobileAlt />,
            title: "Website Development",
            description: "Creating professional websites and e-commerce platforms to establish and expand your online presence."
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
    };

    return (
        <div>
            {/* Hero Section */}
            <section style={styles.hero}>
                <h1 style={styles.heroTitle}>Our Services</h1>
                <p style={styles.heroSubtitle}>
                    Comprehensive business solutions designed to help your organization grow and succeed.
                </p>
            </section>

            {/* Services Section */}
            <section style={styles.section}>
                <div style={styles.container}>
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
        </div>
    );
};

export default Services;