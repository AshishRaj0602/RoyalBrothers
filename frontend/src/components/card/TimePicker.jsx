import React, { useState } from 'react';
import './TimePicker.css'; // CSS file for styling

const TimePicker = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState('');

  const times = [
    '12:00 AM', '1:00 AM', '2:00 AM', '3:00 AM', '4:00 AM', '5:00 AM',
    '6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM',
    '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM', '11:00 PM'
  ];

  const handleTimeClick = (time) => {
    setSelectedTime(time);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="time-picker" onClick={(e)=>e.preventDefault()}>
      <button className="time-picker-button" onClick={toggleDropdown}>
        {selectedTime ? selectedTime : 'Select Time'}
      </button>
      {isOpen && (
        <ul className="time-picker-dropdown">
          {times.map((time, index) => (
            <li key={index} onClick={() => handleTimeClick(time)}>
              {time}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TimePicker;
