// teamLeadRoutes.js
const express = require('express');
const router = express.Router();
const teamLeadController = require('../controllers/teamLeadController');

router.post('/submit', teamLeadController.createTeamLead);
router.get('/projects', teamLeadController.getTeamProjects);
router.put('/update/team/:projectName', teamLeadController.updateTeamProject);

module.exports = router;
