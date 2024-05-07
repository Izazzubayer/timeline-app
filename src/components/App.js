// src/components/App.js

import React, { useState } from 'react';
import Timeline from './timeline';
// src/components/App.js

function App() {
  // State variables
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [deadlines, setDeadlines] = useState({});

  // Function to calculate the number of days between two dates
  const calculateDaysRemaining = () => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const differenceInTime = end.getTime() - start.getTime();
      const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
      return differenceInDays;
    }
    return null;
  };

  return (
    <div className="App">
      <Timeline
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        deadlines={deadlines}
        setDeadlines={setDeadlines}
        daysRemaining={calculateDaysRemaining()}
      />
    </div>
  );
}

export default App;
