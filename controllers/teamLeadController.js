// teamLeadController.js
const TeamLead = require('../models/teamLeadModel');

const createTeamLead = async (req, res) => {
  try {
    const { teamCode, teamName, projectName, members } = req.body;

    // Validate data
    if (!teamCode || !teamName || !projectName || !members) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    console.log('Received data:', { teamCode, teamName, projectName, members });

    const newTeamLead = await TeamLead.create({ teamCode, teamName, projectName, members });

    console.log('New team lead created:', newTeamLead);

    if (newTeamLead) {
      res.status(200).json({ message: 'Team lead created successfully', data: newTeamLead });
    } else {
      res.status(500).json({ error: 'Failed to create team lead' });
    }
  } catch (error) {
    console.error('Error creating team lead:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getTeamProjects = async (req, res) => {
  try {
    const projects = await TeamLead.find({}, 'projectName');
    res.json(projects.map(project => project.projectName));
  } catch (error) {
    console.error('Error fetching project names:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateTeamProject = async (req, res) => {
  try {
    const { projectName } = req.params;

    // Validate data
    if (!projectName) {
      return res.status(400).json({ error: 'Missing project name in the request parameters' });
    }

    const updatedProject = await TeamLead.findOneAndUpdate(
      { projectName },
      { $set: req.body },
      { new: true }
    );

    if (updatedProject) {
      res.status(200).json({ success: true, message: 'Team project updated successfully', data: updatedProject });
    } else {
      res.status(404).json({ success: false, message: 'Team project not found' });
    }
  } catch (error) {
    console.error('Error updating Team project:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

module.exports = { createTeamLead, getTeamProjects, updateTeamProject };
