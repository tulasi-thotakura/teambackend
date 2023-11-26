//teamLeadModel.js
const mongoose = require('mongoose');

const teamLeadSchema = new mongoose.Schema({
  teamCode: { type: String, required: true },
  teamName: { type: String, required: true },
  projectName: { type: String, required: true },
  members: [
    {
      email: { type: String, required: true },
      name: { type: String, required: true },
      contactNumber: { type: String, required: true },
    },
  ],
});

const TeamLead = mongoose.model('TeamLead', teamLeadSchema);

module.exports = TeamLead;
