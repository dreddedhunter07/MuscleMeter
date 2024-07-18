require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workouts');

// Express app
const app = express();

// Middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// Routes
app.use('/api/workouts', workoutRoutes);

// Connect to DB
const mongoUri = process.env.MONGO_URI;
const port = process.env.PORT || 4000;

console.log('MONGO_URI:', mongoUri);
console.log('PORT:', port);




mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // Listen for requests
        app.listen(port, () => {
            console.log(`Connected to DB & listening on port ${port}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
