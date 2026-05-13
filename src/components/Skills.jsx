import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Html, Stars, Float, Sphere, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'
// Icon mapping to Official Devicons
const iconStyle = { width: '32px', height: '32px', objectFit: 'contain' }
const iconsMap = {
  Python: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" style={iconStyle} />,
  Java: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="Java" style={iconStyle} />,
  JavaScript: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" style={iconStyle} />,
  React: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" style={iconStyle} />,
  HTML5: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML5" style={iconStyle} />,
  CSS3: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS3" style={iconStyle} />,
  Tailwind: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" style={iconStyle} />,
  Flutter: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" alt="Flutter" style={iconStyle} />,
  'Node.js': <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="Node.js" style={iconStyle} />,
  MongoDB: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" alt="MongoDB" style={iconStyle} />,
  Docker: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" alt="Docker" style={iconStyle} />,
  GitHub: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub" style={iconStyle} />,
  'Scikit-learn': <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" alt="Scikit-learn" style={iconStyle} />,
  Pandas: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" alt="Pandas" style={iconStyle} />
}

// Individual Skill Node Component
const SkillNode = ({ position, skill }) => {
  const [hovered, setHover] = useState(false)
  const ref = useRef()
  
  // Make the node always face the camera
  useFrame(({ camera }) => {
    if (ref.current) {
      ref.current.quaternion.copy(camera.quaternion)
    }
  })

  return (
    <group position={position} ref={ref}>
      <Html transform distanceFactor={15} center zIndexRange={[100, 0]}>
        <div 
          onPointerEnter={() => setHover(true)}
          onPointerLeave={() => setHover(false)}
          style={{
            background: hovered ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.03)',
            border: `1px solid ${hovered ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.1)'}`,
            borderRadius: '50%',
            width: '60px',
            height: '60px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            boxShadow: hovered ? '0 15px 35px rgba(0, 0, 0, 0.4)' : '0 4px 15px rgba(0, 0, 0, 0.2)',
            transform: hovered ? 'scale(1.2) translateY(-5px)' : 'scale(1)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)'
          }}
        >
          <div style={{ transition: 'all 0.3s', display: 'flex' }}>
            {iconsMap[skill]}
          </div>
          
          {/* Tooltip/Popup */}
          <div style={{
            position: 'absolute',
            top: '-35px',
            color: '#fff',
            fontSize: '13px',
            fontWeight: '600',
            letterSpacing: '0.5px',
            whiteSpace: 'nowrap',
            opacity: hovered ? 1 : 0,
            transform: hovered ? 'translateY(0)' : 'translateY(10px)',
            transition: 'all 0.3s ease',
            pointerEvents: 'none',
            background: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(15px)',
            WebkitBackdropFilter: 'blur(15px)',
            padding: '6px 14px',
            borderRadius: '20px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 10px 25px rgba(0,0,0,0.5)'
          }}>
            {skill}
          </div>
          
          {/* Subtle Inner Glow on Hover */}
          {hovered && (
            <div style={{
              position: 'absolute',
              top: 0, left: 0, right: 0, bottom: 0,
              borderRadius: '50%',
              boxShadow: 'inset 0 0 15px rgba(255,255,255,0.2)',
              pointerEvents: 'none'
            }} />
          )}
        </div>
      </Html>
    </group>
  )
}

// Orbital Ring containing skills
const OrbitRing = ({ radius, speed, items, reverse }) => {
  const groupRef = useRef()

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += speed * (reverse ? -1 : 1)
    }
  })

  return (
    <group ref={groupRef}>
      {/* Visual Orbit Path */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[radius - 0.01, radius + 0.01, 128]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.15} side={THREE.DoubleSide} />
      </mesh>
      
      {/* Glow Path */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[radius - 0.05, radius + 0.05, 128]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.03} side={THREE.DoubleSide} />
      </mesh>
      
      {/* Skill Nodes positioned along the orbit */}
      {items.map((skill, i) => {
        const angle = (i / items.length) * Math.PI * 2
        const x = Math.cos(angle) * radius
        const z = Math.sin(angle) * radius
        return <SkillNode key={skill} position={[x, 0, z]} skill={skill} />
      })}
    </group>
  )
}

// Central Core Object
const TechCore = () => {
  return (
    <Float speed={3} rotationIntensity={2} floatIntensity={2}>
      {/* Central Text */}
      <Html center zIndexRange={[50, 0]}>
        <div style={{
          color: '#ffffff',
          fontWeight: 900,
          fontSize: '1.5rem',
          letterSpacing: '4px',
          textShadow: '0 0 20px #00E5FF, 0 0 40px #5B3DF5',
          textAlign: 'center',
          pointerEvents: 'none',
          whiteSpace: 'nowrap',
          background: 'rgba(0,0,0,0.4)',
          padding: '10px 20px',
          borderRadius: '30px',
          backdropFilter: 'blur(5px)',
          border: '1px solid rgba(0, 229, 255, 0.3)'
        }}>
          TECH STACK
        </div>
      </Html>
    </Float>
  )
}

// Main 3D Canvas
const SkillGalaxy = () => {
  return (
    <Canvas camera={{ position: [0, 10, 20], fov: 45 }} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#00E5FF" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#5B3DF5" />
      
      {/* Deep Space Background */}
      <Stars radius={150} depth={50} count={7000} factor={5} saturation={1} fade speed={2} />
      <fog attach="fog" args={['#050505', 10, 40]} />
      
      <TechCore />
      
      {/* Orbit Layers */}
      <OrbitRing radius={5} speed={0.006} items={['Python', 'Java', 'JavaScript']} />
      <OrbitRing radius={8.5} speed={0.003} items={['React', 'HTML5', 'CSS3', 'Tailwind', 'Flutter']} reverse />
      <OrbitRing radius={13} speed={0.002} items={['Node.js', 'MongoDB', 'Docker', 'GitHub', 'Scikit-learn', 'Pandas']} />
      
      {/* Cinematic Camera Controls */}
      <OrbitControls 
        enableZoom={true} 
        enablePan={false} 
        autoRotate 
        autoRotateSpeed={0.8} 
        maxPolarAngle={Math.PI / 1.5} 
        minPolarAngle={Math.PI / 4}
        maxDistance={35}
        minDistance={10}
        makeDefault
      />
    </Canvas>
  )
}

// Main Component Wrapper
const Skills = () => {
  return (
    <section id="skills" style={{ height: '100vh', width: '100%', position: 'relative', overflow: 'hidden', background: '#030305' }}>
      
      <div style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', zIndex: 10, textAlign: 'center', pointerEvents: 'none' }}>
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, letterSpacing: '4px', margin: 0 }}
        >
          <span className="text-gradient">TECHNICAL ARSENAL</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{ color: '#00E5FF', marginTop: '10px', fontSize: '1.1rem', letterSpacing: '1px', textShadow: '0 0 10px rgba(0,229,255,0.5)' }}
        >
          360° Interactive Ecosystem
        </motion.p>
      </div>

      {/* 3D Scene Container */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', cursor: 'grab' }} className="active:cursor-grabbing">
        <SkillGalaxy />
      </div>

      <div style={{ position: 'absolute', bottom: '30px', left: '50%', transform: 'translateX(-50%)', zIndex: 10, pointerEvents: 'none', display: 'flex', gap: '20px' }}>
        <div style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(5px)', padding: '8px 16px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: '#00E5FF', boxShadow: '0 0 10px #00E5FF' }}></span> Scroll to Zoom
        </div>
        <div style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(5px)', padding: '8px 16px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: '#5B3DF5', boxShadow: '0 0 10px #5B3DF5' }}></span> Drag to Rotate
        </div>
      </div>
    </section>
  )
}

export default Skills
