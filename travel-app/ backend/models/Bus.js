const mongoose = require('mongoose');

const BusSchema = new mongoose.Schema({
    name: { type: String, required: true },
    seats: { type: Number, required: true },
    route: { type: String, required: true },
    price: { type: Number, required: true },
    departureTime: { type: Date, required: true },
    arrivalTime: { type: Date, required: true },
});

module.exports = mongoose.model('Bus', BusSchema);
