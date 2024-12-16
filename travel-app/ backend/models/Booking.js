const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    busId: { type: mongoose.Schema.Types.ObjectId, ref: 'Bus', required: true },
    seatNumber: { type: Number, required: true },
    status: { type: String, default: 'Confirmed' },
});

module.exports = mongoose.model('Booking', BookingSchema);
