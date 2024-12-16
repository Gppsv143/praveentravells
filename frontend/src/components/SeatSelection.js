import React, { useState, useEffect } from 'react';

const SeatSelection = ({ busId }) => {
    const [seats, setSeats] = useState([]);
    const [selectedSeat, setSelectedSeat] = useState(null);

    useEffect(() => {
        fetch(`/api/buses/${busId}`)
            .then(res => res.json())
            .then(data => setSeats(data.seats));
    }, [busId]);

    const bookSeat = () => {
        fetch(`/api/book-seat/${busId}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ seatNumber: selectedSeat }),
        })
            .then(res => res.json())
            .then(data => alert(data.message));
    };

    return (
        <div>
            <h1>Select Your Seat</h1>
            <div className="seats-grid">
                {seats.map((seat, index) => (
                    <button
                        key={index}
                        disabled={seat === 1}
                        onClick={() => setSelectedSeat(index)}
                        style={{
                            backgroundColor: seat === 1 ? 'red' : selectedSeat === index ? 'green' : 'white',
                        }}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
            {selectedSeat !== null && (
                <button onClick={bookSeat}>Confirm Seat {selectedSeat + 1}</button>
            )}
        </div>
    );
};

export default SeatSelection;
