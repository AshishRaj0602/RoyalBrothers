import React from 'react'
import {FaCalendar,FaClock} from 'react-icons/fa'

const BookingCard2 = () => {
  return (
    <div className='booking_card'>
      <div className="booking_card_heading">Search your next ride</div>
      <form className='form_container'>
        <div className="form_container_label">
            Pickup
        </div>
        <div className="form_input_container">
            <div className="form_input_field">
                <button><FaCalendar/>Date</button>
            </div>
            <div className="form_input_field">
                <button><FaClock/>Time</button>
            </div>
        </div>
        <div className="form_container_label">
            Drop
        </div>
        <div className="form_input_container">
            <div className="form_input_field">
                <button><FaCalendar/>Date</button>
            </div>
            <div className="form_input_field">
                <button><FaClock/>Time</button>
            </div>
        </div>
        <button type="submit" className="form_button">
                Submit
        </button>
      </form>
    </div>
  )
}

export default BookingCard2
