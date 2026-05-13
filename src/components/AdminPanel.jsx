import React, { useState, useEffect } from 'react'

const AdminPanel = () => {
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    desc: '',
    tech: '',
    link: '#',
    github: 'https://github.com/bhuviguru',
    image: '/assets/project1.png'
  });

  useEffect(() => {
    fetch('http://localhost:5000/api/projects')
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.error("Error fetching projects:", err));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const techArray = formData.tech.split(',').map(t => t.trim());
    
    const newProject = { ...formData, tech: techArray };

    try {
      const res = await fetch('http://localhost:5000/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newProject)
      });
      const addedProject = await res.json();
      setProjects([...projects, addedProject]);
      setFormData({ ...formData, title: '', desc: '', tech: '' }); // reset some fields
    } catch (err) {
      console.error("Failed to add project", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/projects/${id}`, { method: 'DELETE' });
      setProjects(projects.filter(p => p.id !== id));
    } catch (err) {
      console.error("Failed to delete project", err);
    }
  };

  return (
    <div style={{ padding: '100px 50px', color: 'white', minHeight: '100vh', background: 'rgba(0,0,0,0.8)' }}>
      <h2>Admin Dashboard</h2>
      
      <div style={{ display: 'flex', gap: '50px', marginTop: '30px', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 300px', background: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '15px' }}>
          <h3>Add New Project</h3>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }}>
            <input name="title" value={formData.title} onChange={handleChange} placeholder="Project Title" required style={inputStyle} />
            <textarea name="desc" value={formData.desc} onChange={handleChange} placeholder="Project Description" required style={{...inputStyle, height: '100px'}} />
            <input name="tech" value={formData.tech} onChange={handleChange} placeholder="Tech Stack (comma separated)" required style={inputStyle} />
            <input name="link" value={formData.link} onChange={handleChange} placeholder="Live Link URL" style={inputStyle} />
            <input name="github" value={formData.github} onChange={handleChange} placeholder="GitHub URL" style={inputStyle} />
            <input name="image" value={formData.image} onChange={handleChange} placeholder="Image URL (e.g. /assets/proj.png)" style={inputStyle} />
            
            <button type="submit" style={{ padding: '12px', background: '#00E5FF', color: 'black', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
              Add Project
            </button>
          </form>
        </div>

        <div style={{ flex: '2 1 400px' }}>
          <h3>Current Projects Database</h3>
          <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {projects.map(proj => (
              <div key={proj.id} style={{ display: 'flex', justifyContent: 'space-between', background: 'rgba(255,255,255,0.05)', padding: '15px', borderRadius: '8px' }}>
                <div>
                  <h4 style={{ margin: '0 0 5px' }}>{proj.title}</h4>
                  <p style={{ margin: 0, fontSize: '0.8rem', opacity: 0.7 }}>{proj.tech.join(', ')}</p>
                </div>
                <button onClick={() => handleDelete(proj.id)} style={{ background: '#ff3366', color: 'white', border: 'none', borderRadius: '5px', padding: '5px 15px', cursor: 'pointer' }}>Delete</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const inputStyle = {
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid rgba(255,255,255,0.2)',
  background: 'rgba(0,0,0,0.5)',
  color: 'white',
  width: '100%',
  boxSizing: 'border-box'
};

export default AdminPanel
