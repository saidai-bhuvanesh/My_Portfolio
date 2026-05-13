import { motion } from 'framer-motion'

const Experience = () => {
  const experiences = [
    {
      role: 'Machine Learning Intern',
      company: 'National Small Industries Corporation (NSIC)',
      date: 'Jun – Jul 2025',
      points: [
        'Built classification and regression models using Scikit-learn, improving accuracy by 18%',
        'Reduced model error by 15–20% through feature engineering and data preprocessing',
        'Executed end-to-end ML pipelines from data ingestion to evaluation using industry practices'
      ]
    },
    {
      role: 'Open Source Intern',
      company: 'GSSoC (GirlScript Summer of Code)',
      date: 'Summer 2026',
      points: [
        'Contributed to various open-source projects by addressing issues and adding new features',
        'Collaborated with a global community of developers and mentors',
        'Enhanced skills in version control, code review, and collaborative software development'
      ]
    }
  ]

  const achievements = [
    'Winner – Aestr Alpha AI Summit Hackathon',
    'Runner-Up – Ideaforge 3.0 Hackathon',
    'Finalist in 3+ national-level hackathons',
    'Grew 175K+ LinkedIn reach and 2000+ connections via technical AI content'
  ]

  return (
    <section id="experience" className="section-container">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ marginBottom: '50px' }}
      >
        Experience <span className="text-gradient">&</span> Impact
      </motion.h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
        <div>
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="glass-panel"
              style={{ padding: '30px', marginBottom: '20px' }}
            >
              <h3 style={{ color: 'var(--accent-secondary)' }}>{exp.role}</h3>
              <p style={{ fontWeight: 600, opacity: 0.9 }}>{exp.company} | {exp.date}</p>
              <ul style={{ marginTop: '15px', paddingLeft: '20px', opacity: 0.8 }}>
                {exp.points.map((p, i) => <li key={i} style={{ marginBottom: '8px' }}>{p}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>

        <div>
          <h3 style={{ marginBottom: '25px', textTransform: 'uppercase', fontSize: '1.2rem' }}>Key Achievements</h3>
          {achievements.map((ach, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              style={{ 
                padding: '15px 20px', 
                borderLeft: '2px solid var(--accent-primary)',
                background: 'rgba(112, 0, 255, 0.05)',
                marginBottom: '15px'
              }}
            >
              <p>{ach}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
