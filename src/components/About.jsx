import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="section-container" style={{ minHeight: 'auto', paddingBottom: '50px' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{ marginBottom: '40px', textAlign: 'center' }}>About <span className="text-gradient">Me</span></h2>
        
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '50px', flexWrap: 'wrap' }}>
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center' }}
          >
            <div style={{
              width: '100%',
              maxWidth: '350px',
              aspectRatio: '1/1',
              borderRadius: '24px',
              overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(0, 240, 255, 0.1)',
              position: 'relative'
            }}>
              <img 
                src="/profile.png" 
                alt="Profile" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10, 10, 15, 0.8) 0%, transparent 40%)', pointerEvents: 'none' }}></div>
            </div>
          </motion.div>

          {/* Right: Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ flex: '2 1 400px' }}
          >
            <p style={{ fontSize: '1.1rem', opacity: 0.8, marginBottom: '20px', lineHeight: '1.6' }}>
              I am a B.Tech student in Artificial Intelligence and Data Science at Vel Tech High Tech Engineering College. 
              My passion lies at the intersection of Machine Learning and user-centric software design.
            </p>
            <p style={{ fontSize: '1.1rem', opacity: 0.8, marginBottom: '30px', lineHeight: '1.6' }}>
              With a focus on building impactful AI solutions, I've successfully delivered projects ranging from 
              automated scraping systems to full-stack CRM platforms. I thrive in hackathons and competitive 
              environments where speed and innovation are paramount.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
              <div className="glass-panel" style={{ padding: '20px' }}>
                <h4 style={{ color: 'var(--accent-secondary)', fontSize: '0.9rem', marginBottom: '8px' }}>Education</h4>
                <p style={{ fontWeight: 600, marginBottom: '4px' }}>B.Tech AI & DS</p>
                <p style={{ fontSize: '0.8rem', opacity: 0.6 }}>Vel Tech High Tech | CGPA: 8.5</p>
              </div>
              <div className="glass-panel" style={{ padding: '20px' }}>
                <h4 style={{ color: 'var(--accent-secondary)', fontSize: '0.9rem', marginBottom: '8px' }}>Location</h4>
                <p style={{ fontWeight: 600, marginBottom: '4px' }}>Tamil Nadu, India</p>
                <p style={{ fontSize: '0.8rem', opacity: 0.6 }}>Open to Remote/Relocation</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
