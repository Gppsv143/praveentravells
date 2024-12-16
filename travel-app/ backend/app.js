const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const busRoutes = require('./routes/buses');
const bookingRoutes = require('./routes/bookings');
const { connectDB } = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Database Connection
connectDB();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/buses', busRoutes);
app.use('/api/bookings', bookingRoutes);

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
