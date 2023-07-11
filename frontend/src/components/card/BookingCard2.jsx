import React,{useState} from 'react'
import {FaCalendar,FaClock} from 'react-icons/fa'
import DatePicker from 'react-datepicker';

import './bookingCard.css'
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from './TimePicker';
const BookingCard2 = () => {
  const [startDate, setStartDate] = useState(new Date());
  const calendarIconStyle = {
    position: 'absolute',
    right: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
    zIndex: '1',
  };
  return (
    <div className='booking_card'>
      <div className="booking_card_heading">Search your next ride</div>
      <form className='form_container'>
        <div className="form_container_label">
            Pickup
        </div>
        <div className="form_input_container">
            <div className="form_input_field" style={{ position: 'relative' }}>
                <FaCalendar size={15} style={calendarIconStyle}/>
                <DatePicker className='datepiker' selected={startDate} onChange={(date) => setStartDate(date)} type='date' placeholder='Date'/>
            </div>
            <div className="form_input_field">
                <FaClock/>
                <TimePicker/>
            </div>
        </div>
        <div className="form_container_label">
            Drop
        </div>
        <div className="form_input_container">
        <div className="form_input_field" style={{ position: 'relative' }}>
                <FaCalendar size={15} style={calendarIconStyle}/>
                <DatePicker className='datepiker' selected={startDate} onChange={(date) => setStartDate(date)} type='date' placeholder='Date'/>
            </div>
            <div className="form_input_field">
                 <FaClock/>
                <TimePicker />
            </div>
        </div>
        <button type="submit" className="form_button" onClick={(e)=>e.preventDefault()}>
                Submit
        </button>
      </form>
    </div>
  )
}

export default BookingCard2
