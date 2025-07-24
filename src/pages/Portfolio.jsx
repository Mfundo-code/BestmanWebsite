// src/pages/Portfolio.jsx
import React from 'react';

const Portfolio = () => {
    const projects = [
        {
            title: "Local Value Chain Development",
            client: "ESWADE & World Vision Eswatini",
            description: "Successfully executed a Local Value Chain Development project under a LULOTE sub-contract.",
            category: "Development"
        },
        {
            title: "SME Training Program",
            client: "Various SMEs Nationwide",
            description: "Conducted entrepreneurship and business management training for numerous SMEs across the country.",
            category: "Training"
        },
        {
            title: "Business Plan Development",
            client: "Startup Businesses",
            description: "Crafted detailed business plans to assist clients in securing funding and outlining business strategies.",
            category: "Consulting"
        },
        {
            title: "Corporate Governance Training",
            client: "Ntsanjeni Farmers Cooperative",
            description: "Implemented comprehensive training programs covering corporate governance and group dynamics.",
            category: "Training"
        },
        {
            title: "Digital Marketing Strategy",
            client: "Baftubangumnofto Grocery",
            description: "Developed and implemented a social media marketing strategy to enhance online presence and sales.",
            category: "Digital"
        },
        {
            title: "Monitoring & Evaluation Framework",
            client: "SEDCO",
            description: "Developed a logical framework for effective assessment and evaluation of projects and programs.",
            category: "Consulting"
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
        projectsGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
        },
        projectCard: {
            backgroundColor: 'white',
            borderRadius: '10px',
            overflow: 'hidden',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
        },
        projectImage: {
            backgroundColor: '#e2e8f0',
            height: '200px',
        },
        projectContent: {
            padding: '20px',
        },
        projectCategory: {
            display: 'inline-block',
            backgroundColor: '#dbeafe',
            color: '#1a3a8f',
            padding: '5px 15px',
            borderRadius: '20px',
            fontSize: '0.9rem',
            fontWeight: '600',
            marginBottom: '15px',
        },
        projectTitle: {
            fontSize: '1.5rem',
            fontWeight: 'bold',
            marginBottom: '10px',
            color: '#1e293b',
        },
        projectDescription: {
            color: '#64748b',
            marginBottom: '15px',
            lineHeight: '1.6',
        },
        projectClient: {
            fontWeight: '600',
            color: '#475569',
        },
    };

    return (
        <div>
            {/* Hero Section */}
            <section style={styles.hero}>
                <h1 style={styles.heroTitle}>Our Portfolio</h1>
                <p style={styles.heroSubtitle}>
                    Explore our recent projects and see how we've helped businesses succeed.
                </p>
            </section>

            {/* Projects Section */}
            <section style={styles.section}>
                <div style={styles.container}>
                    <h2 style={styles.sectionTitle}>Recent Projects</h2>
                    <div style={styles.projectsGrid}>
                        {projects.map((project, index) => (
                            <div key={index} style={styles.projectCard}>
                                <div style={styles.projectImage}></div>
                                <div style={styles.projectContent}>
                                    <span style={styles.projectCategory}>{project.category}</span>
                                    <h3 style={styles.projectTitle}>{project.title}</h3>
                                    <p style={styles.projectDescription}>{project.description}</p>
                                    <p style={styles.projectClient}>Client: {project.client}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Portfolio;