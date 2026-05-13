import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { Github } from './Icons'

const Projects = () => {
  const projects = [
    {
      title: 'AI Job Scraper & Opportunity Tracker',
      desc: 'Built an automated scraping system aggregating 1,000+ listings with smart filtering by role, skills, and location, improving relevance by 40%.',
      tech: ['Python', 'REST APIs', 'BeautifulSoup'],
      link: '#',
      github: 'https://github.com/bhuviguru',
      image: '/assets/project1.png'
    },
    {
      title: 'TechCRM - Customer Relationship Management',
      desc: 'Engineered a full-stack CRM to manage customer data and leads, improving team workflow efficiency by 30% through structured data handling and dashboard UI.',
      tech: ['Node.js', 'React', 'Express', 'MongoDB'],
      link: '#',
      github: 'https://github.com/bhuviguru',
      image: '/assets/project2.png'
    },
    {
      title: 'InternFinder - Internship Discovery Platform',
      desc: 'Built a responsive platform aggregating internship listings from multiple sources. Reduced discovery time with domain-based filtering and centralized search.',
      tech: ['JavaScript', 'HTML/CSS', 'APIs'],
      link: '#',
      github: 'https://github.com/bhuviguru',
      image: '/assets/project3.png'
    },
    {
      title: 'Weather App - Real-Time Dashboard',
      desc: 'Developed a real-time weather app consuming a live REST API with a 5-day forecast display, featuring a mobile-responsive UI and dynamic data rendering.',
      tech: ['JavaScript', 'REST API', 'CSS Grid'],
      link: '#',
      github: 'https://github.com/bhuviguru',
      image: '/assets/project4.png'
    }
  ]

  return (
    <section id="projects" className="section-container">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ marginBottom: '50px' }}
      >
        Featured <span className="text-gradient">Projects</span>
      </motion.h2>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', 
        gap: '30px' 
      }}>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="glass-panel"
            style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
          >
            <div style={{ 
              height: '200px', 
              background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url(${project.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative'
            }}>
              <div style={{ position: 'absolute', bottom: '15px', right: '15px', display: 'flex', gap: '10px' }}>
                <a href={project.github} className="nav-link"><Github size={20} /></a>
                <a href={project.link} className="nav-link"><ExternalLink size={20} /></a>
              </div>
            </div>
            
            <div style={{ padding: '25px', flex: 1 }}>
              <h3 style={{ marginBottom: '10px', fontSize: '1.4rem' }}>{project.title}</h3>
              <p style={{ opacity: 0.7, fontSize: '0.95rem', marginBottom: '20px' }}>{project.desc}</p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {project.tech.map((t, i) => (
                  <span key={i} style={{ 
                    fontSize: '0.75rem', 
                    padding: '4px 12px', 
                    borderRadius: '20px', 
                    background: 'rgba(255,255,255,0.1)',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects
