import { motion } from 'framer-motion'

const Navbar = () => {
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="glass-panel"
      style={{
        position: 'fixed',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
        padding: '12px 40px',
        display: 'flex',
        gap: '30px',
        width: 'auto',
        maxWidth: '90%',
        overflowX: 'auto',
        whiteSpace: 'nowrap',
        scrollbarWidth: 'none' // Firefox
      }}
    >
      <style>{`
        nav::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      {navItems.map((item) => (
        <a key={item.name} href={item.href} className="nav-link">
          {item.name}
        </a>
      ))}
    </motion.nav>
  )
}

export default Navbar
