import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import { Github, Linkedin } from './Icons'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Float, Sparkles } from '@react-three/drei'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

const NeuralNetwork = () => {
  const groupRef = useRef()
  
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15
      // Slight floating wobble
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  // Create a brain-like neural network structure
  const geometry = useMemo(() => {
    // High detail for brain folds
    const geo = new THREE.IcosahedronGeometry(1.2, 5) 
    const posAttribute = geo.attributes.position
    
    for (let i = 0; i < posAttribute.count; i++) {
      let x = posAttribute.getX(i)
      let y = posAttribute.getY(i)
      let z = posAttribute.getZ(i)
      
      // 1. Elongate front-to-back (Z-axis)
      z *= 1.3
      
      // 2. Shape the top and bottom
      y = y > 0 ? y * 1.1 : y * 0.8
      
      // 3. Create the longitudinal fissure (split between left and right hemispheres)
      const dip = Math.exp(-(x * x) * 8) * 0.3
      y -= dip > 0 ? dip : 0
      
      // 4. Widen the back slightly more than the front
      const widen = z < 0 ? 1.1 : 0.95
      x *= widen
      
      // 5. Add organic cortical folds (sulci and gyri)
      const noise = (Math.sin(x * 8) * Math.cos(y * 8) * Math.sin(z * 8)) * 0.08
      x += noise
      y += noise
      z += noise

      posAttribute.setXYZ(i, x, y, z)
    }
    geo.computeVertexNormals()
    return geo
  }, [])

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={groupRef}>
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#00f0ff" />
        <pointLight position={[-10, 5, -10]} intensity={1} color="#ff00ff" />
        
        {/* Synapses (Connections) */}
        <mesh geometry={geometry}>
          <meshBasicMaterial color="#00f0ff" wireframe transparent opacity={0.15} />
        </mesh>
        
        {/* Neurons (Nodes) */}
        <points geometry={geometry}>
          <pointsMaterial size={0.03} color="#ff00ff" transparent opacity={0.8} sizeAttenuation />
        </points>
        
        {/* Flying Data/Signals around the brain */}
        <Sparkles count={400} scale={4} size={1.2} color="#00f0ff" speed={0.4} noise={0.2} />
        <Sparkles count={150} scale={3.5} size={2.5} color="#ff00ff" speed={0.3} noise={0.3} opacity={0.6} />
      </group>
    </Float>
  )
}

const Hero = () => {
  return (
    <section id="home" className="section-container" style={{ position: 'relative', paddingTop: '100px', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: '30px', flexWrap: 'wrap', width: '100%', zIndex: 10 }}>
        <div style={{ flex: '1 1 500px' }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h4 style={{ color: 'var(--accent-secondary)', marginBottom: '10px', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}>Machine Learning Engineer | Full Stack Developer</h4>
            <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '20px' }}>
              Bhuvanesh <span className="text-gradient">S</span>
            </h1>
            <p style={{ fontSize: '1.2rem', opacity: 0.8, marginBottom: '40px', maxWidth: '600px', lineHeight: '1.6' }}>
              Transforming complex data into intelligent solutions. Specialist in ML pipelines, 
              interactive AI dashboards, and full-stack development with a track record of award-winning hackathon solutions.
            </p>
            
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
              <button className="btn-primary" onClick={() => window.location.href='#projects'}>View Work</button>
              <div style={{ display: 'flex', gap: '15px' }}>
                <a href="https://github.com/bhuviguru" target="_blank" rel="noreferrer" className="nav-link" aria-label="GitHub"><Github size={24} /></a>
                <a href="https://linkedin.com/in/bhuvanesh0709" target="_blank" rel="noreferrer" className="nav-link" aria-label="LinkedIn"><Linkedin size={24} /></a>
                <a href="mailto:bhuvanesh0709@gmail.com" className="nav-link" aria-label="Email"><Mail size={24} /></a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 3D Canvas Space */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          viewport={{ once: true }}
          style={{ flex: '1 1 400px', height: '500px', position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <div style={{ width: '100%', height: '100%', cursor: 'grab' }}>
            <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
              <NeuralNetwork />
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
            </Canvas>
          </div>
          {/* Subtle glow behind the 3D object */}
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(0,240,255,0.15) 0%, transparent 70%)', filter: 'blur(40px)', zIndex: -1, pointerEvents: 'none' }} />
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ 
          position: 'absolute', 
          bottom: '30px', 
          left: '50%', 
          transform: 'translateX(-50%)',
          opacity: 0.5,
          zIndex: 10
        }}
      >
        <div style={{ width: '2px', height: '50px', background: 'linear-gradient(to bottom, var(--accent-primary), transparent)' }} />
      </motion.div>
    </section>
  )
}

export default Hero
