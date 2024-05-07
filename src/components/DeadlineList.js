// src/components/DeadlineList.js

import React from 'react';
import DeadlineItem from './deadlineItem';

function DeadlineList({ selectedDate, deadlines, setDeadlines }) {
  // Render deadline list UI here
  return (
    <div className="DeadlineList">
      {/* Render DeadlineItem component for each deadline */}
      {selectedDate && deadlines[selectedDate] && deadlines[selectedDate].map((deadline, index) => (
        <DeadlineItem key={index} deadline={deadline} />
      ))}
    </div>
  );
}

export default DeadlineList;
