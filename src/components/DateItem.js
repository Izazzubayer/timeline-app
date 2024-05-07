// src/components/DateItem.js

import React from 'react';

function DateItem({ date, selectedDate, handleDateSelection }) {
  // Function to handle date selection
  const handleClick = () => {
    handleDateSelection(date);
  };

  // Determine if the date is selected
  const isSelected = date === selectedDate;

  return (
    <div
      className={`DateItem ${isSelected ? 'selected' : ''}`}
      onClick={handleClick}
    >
      {date}
    </div>
  );
}

export default DateItem;
