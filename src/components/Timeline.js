// src/components/Timeline.js

import React from 'react';
import DateItem from './DdateItem';
import DeadlineList from './deadlinelist';
// src/components/Timeline.js

function Timeline({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  selectedDate,
  handleDateSelection,
  deadlines,
  addDeadline
}) {
  // Function to handle date range selection
  const handleDateRangeSelection = (start, end) => {
    setStartDate(start);
    setEndDate(end);
  };

  // Function to handle deadline addition
  const handleAddDeadline = (deadline) => {
    if (selectedDate) {
      addDeadline(selectedDate, deadline);
    }
  };

  return (
    <div className="Timeline">
      {/* Render DateItem component */}
      <DateItem
        startDate={startDate}
        endDate={endDate}
        handleDateRangeSelection={handleDateRangeSelection}
        handleDateSelection={handleDateSelection}
      />
      
      {/* Render DeadlineList component */}
      <DeadlineList
        selectedDate={selectedDate}
        deadlines={deadlines}
      />

      {/* Input field for adding deadlines */}
      {selectedDate && (
        <div>
          <input type="text" placeholder="Add deadline..." />
          <button onClick={handleAddDeadline}>Add Deadline</button>
        </div>
      )}
    </div>
  );
}

export default Timeline;
