//server.js 
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const teamLeadRoutes = require('./routes/teamLeadRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));

app.use(express.json());

const startServer = async () => {
  try {
    await mongoose.connect('mongodb+srv://tanmayi:12345@cluster0.dwlluae.mongodb.net/TeamLeadInfo', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to MongoDB');

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

startServer();

app.use('/api/teamLead', teamLeadRoutes);
