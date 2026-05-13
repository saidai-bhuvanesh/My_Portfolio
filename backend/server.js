const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const dataFile = path.join(__dirname, 'data.json');

// Get all projects
app.get('/api/projects', (req, res) => {
    fs.readFile(dataFile, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Failed to read data' });
        }
        res.json(JSON.parse(data));
    });
});

// Add a new project
app.post('/api/projects', (req, res) => {
    const newProject = req.body;

    fs.readFile(dataFile, 'utf8', (err, data) => {
        if (err) return res.status(500).json({ error: 'Failed to read data' });

        const projects = JSON.parse(data);
        newProject.id = Date.now(); // Generate a unique ID
        projects.push(newProject);

        fs.writeFile(dataFile, JSON.stringify(projects, null, 2), (err) => {
            if (err) return res.status(500).json({ error: 'Failed to save data' });
            res.status(201).json(newProject);
        });
    });
});

// Delete a project
app.delete('/api/projects/:id', (req, res) => {
    const projectId = parseInt(req.params.id);

    fs.readFile(dataFile, 'utf8', (err, data) => {
        if (err) return res.status(500).json({ error: 'Failed to read data' });

        let projects = JSON.parse(data);
        projects = projects.filter(p => p.id !== projectId);

        fs.writeFile(dataFile, JSON.stringify(projects, null, 2), (err) => {
            if (err) return res.status(500).json({ error: 'Failed to save data' });
            res.json({ success: true });
        });
    });
});

app.listen(PORT, () => {
    console.log(`Backend server running on http://localhost:${PORT}`);
});
