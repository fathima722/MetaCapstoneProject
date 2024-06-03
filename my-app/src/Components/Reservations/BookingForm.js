import React from 'react';

export default function BookingForm({date,setDate,time,setTime,guests,setGuests,occasion,setOccasion,availableTimes,dispatch,onSubmit}) {

    const handleDateChange = (event) => {
        setDate(event.target.value);
        dispatch({type:'UPDATE_TIMES',payload: event.target.value})
    };
    
    const handleTimeChange = (event) => {
        setTime(event.target.value);
      };

      const handleGuestsChange = (event) => {
        setGuests(event.target.value);
      };

      const handleOccasionChange = (event) => {
        setOccasion(event.target.value);
      };

      const handleClick = (e) => {
        e.preventDefault();
        const newDetails = {
          date,
          time,
          guests,
          occasion
        };
        onSubmit(newDetails);
      };
    return (
        <>
        <form style={{ display: "grid", maxWidth: "200px", gap: "20px" }} onSubmit={handleClick}>
          <label htmlFor="res-date" data-testid="res-date">Choose Date:</label>
          <input type="date" id="res-date" onChange={handleDateChange} value={date} />
  
          <label htmlFor="res-time">Choose Time:</label>
          <select id="res-time" data-testid="select-time" onChange={handleTimeChange} value={time}>
            {availableTimes && availableTimes.map(time => (
                <option key={time} value={time}>{time}</option>
            ))}
          </select>
  
          <label htmlFor="guests">Number of guests:</label>
          <input type="number" placeholder="1" min="1" max="10" id="guests" onChange={handleGuestsChange} value={guests} />
  
          <label htmlFor="occasion">Occasion</label>
          <select id="occasion" onChange={handleOccasionChange} value={occasion}>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>
  
          <button type="submit">Make your Reservation</button>
        </form>
      </>
    )
}