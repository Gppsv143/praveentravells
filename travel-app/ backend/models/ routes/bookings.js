const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// Create a booking
router.post('/', async (req, res) => {
    const { userId, busId, seatNumber } = req.body;
    try {
        const booking = await Booking.create({ userId, busId, seatNumber });
        res.status(201).json(booking);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
