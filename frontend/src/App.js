import React from 'react';
import SeatSelection from './components/SeatSelection';

const App = () => {
    return (
        <div>
            <h1>Welcome to the Travel App</h1>
            <SeatSelection busId="123" />
        </div>
    );
};

export default App;
