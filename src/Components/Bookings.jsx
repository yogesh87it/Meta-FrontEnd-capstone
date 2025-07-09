import { useState, useRef } from "react";

import React from "react";
export default function Bookings({
  availableTimes,
  dispatch,
  bookings,
  setBookings,
}) {
  const refForm = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guestNos, setGuestNos] = useState(1);
  const [occasion, setOccasion] = useState("regular");

  const handleSubmit = (e) => {
    e.preventDefault();
    setBookings((prev) => [...prev, { date, time }]);
    setSubmitted(true);
  };
  const handleConfirmation = (e) => {
    e.preventDefault();
    setDate("");
    setTime("");
    setGuestNos(1);
    setOccasion("regular");
    setSubmitted(false);
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    dispatch({ type: "update", date: new Date(selectedDate) });
  };
  return (
    <div>
      {submitted ? (
        <div className="confirmation-msg">
          <h2>Booking Confirmed!!</h2>
          <button onClick={handleConfirmation}>Ok</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} ref={refForm}>
          <label htmlFor="date">Select Date</label>
          <input
            id="date"
            name="date"
            type="date"
            value={date}
            onChange={handleDateChange}
            required
          />

          <label htmlFor="time">Select Time</label>
          <select
            id="time"
            name="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          >
            <option value="">--Select Time--</option>
            {availableTimes.map((t) => {
              const isBooked = bookings.some(
                (b) => b.date === date && b.time === t
              );
              return (
                <option
                  key={t}
                  value={t}
                  disabled={isBooked}
                  style={{ color: isBooked ? "red" : "black" }}
                >
                  {t} {isBooked ? " (Slot Booked)" : ""}
                </option>
              );
            })}
          </select>

          <label htmlFor="guestNos">No. of Guests (Max 10)</label>
          <input
            id="guestNos"
            name="guestNos"
            type="number"
            min="1"
            max="10"
            value={guestNos}
            onChange={(e) => setGuestNos(e.target.value)}
            required
          />

          <label htmlFor="occasion">Select Occasion</label>
          <select
            id="occasion"
            name="occasion"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
            required
          >
            <option value="regular">Regular</option>
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
          </select>

          <button type="submit">Reserve Table</button>
        </form>
      )}
    </div>
  );
}

/* 
  <form onSubmit={handleSubmit}>
            <label htmlFor="date">Select Date</label>
            <input name="date" type="date" id="date" required />
            <label htmlFor="time">Select Time</label>
            <select name="time" id="time" required>
              <option value="11.00">11.00</option>
              <option value="11.30">11.30</option>
              <option value="12.00">12.00</option>
              <option value="12.30">12.30</option>
              <option value="13.00">13.00</option>
              <option value="13.30">13.30</option>
              <option value="14.00">14.00</option>
              <option value="14.30">14.30</option>
              <option value="15.00">15.00</option>
              <option value="15.30">15.30</option>
              <option value="16.00">16.00</option>
              <option value="16.30">16.30</option>
              <option value="17.00">17.00</option>
              <option value="17.30">17.30</option>
              <option value="18.00">18.00</option>
              <option value="18.30">18.30</option>
              <option value="19.00">19.00</option>
              <option value="19.30">19.30</option>
              <option value="20.00">20.00</option>
              <option value="20.30">20.30</option>
              <option value="21.00">21.00</option>
            </select>
            <label htmlFor="guestNos">No. of Guest(Max 10)</label>
            <input
              id="guestNos"
              type="number"
              min="1"
              max="10"
              name="guestNos"
              required
            />
            <label htmlFor="occasion">Select Occasion</label>
            <select id="occasion" name="occasion" required>
              <option value="none">None</option>
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
            </select>
            <button type="submit">Reserve Table</button>
          </form>

  */
