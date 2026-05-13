import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="section-container">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ marginBottom: '50px' }}
      >
        Get In <span className="text-gradient">Touch</span>
      </motion.h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px' }}>
        <div>
          <p style={{ fontSize: '1.2rem', opacity: 0.8, marginBottom: '40px' }}>
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <div className="glass-panel" style={{ padding: '12px' }}><Mail size={24} color="var(--accent-secondary)" /></div>
              <div>
                <p style={{ opacity: 0.5, fontSize: '0.8rem', textTransform: 'uppercase' }}>Email</p>
                <p style={{ fontWeight: 600 }}>bhuvanesh0709@gmail.com</p>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <div className="glass-panel" style={{ padding: '12px' }}><Phone size={24} color="var(--accent-secondary)" /></div>
              <div>
                <p style={{ opacity: 0.5, fontSize: '0.8rem', textTransform: 'uppercase' }}>Phone</p>
                <p style={{ fontWeight: 600 }}>+91 93634 45366</p>
              </div>
            </div>
          </div>
        </div>

        <motion.form 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="glass-panel"
          style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '20px' }}
          onSubmit={(e) => e.preventDefault()}
        >
          <input 
            type="text" 
            placeholder="Your Name" 
            style={{ 
              background: 'rgba(255,255,255,0.05)', 
              border: '1px solid rgba(255,255,255,0.1)',
              padding: '15px',
              borderRadius: '10px',
              color: 'white',
              outline: 'none'
            }} 
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            style={{ 
              background: 'rgba(255,255,255,0.05)', 
              border: '1px solid rgba(255,255,255,0.1)',
              padding: '15px',
              borderRadius: '10px',
              color: 'white',
              outline: 'none'
            }} 
          />
          <textarea 
            placeholder="Message" 
            rows="5"
            style={{ 
              background: 'rgba(255,255,255,0.05)', 
              border: '1px solid rgba(255,255,255,0.1)',
              padding: '15px',
              borderRadius: '10px',
              color: 'white',
              outline: 'none',
              resize: 'none'
            }} 
          ></textarea>
          <button className="btn-primary" style={{ width: '100%' }}>Send Message</button>
        </motion.form>
      </div>
      
      <footer style={{ marginTop: '100px', textAlign: 'center', opacity: 0.3, fontSize: '0.8rem' }}>
        © 2026 Bhuvanesh S. Built with React & Three.js.
      </footer>
    </section>
  )
}

export default Contact
