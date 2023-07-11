import React from 'react'
import './fleet.css';
const FleetCard = () => {
  return (
    <div className='fleet_card'>
      <div className="fleet_card-subContainer">
        <div className="fleet_card--bikeName">
        Honda Activa 5G
        </div>
        <img src="https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/233/medium/HONDA_ACTIVA_5G.png?1660731811" alt="bike" />
      </div>
      <div className="fleet_card--bikePrice"> ₹18/hour</div>
      <button className='fleet_card--bookButton btn'>BOOK NOW</button>
    </div>
  )
}

export default FleetCard
