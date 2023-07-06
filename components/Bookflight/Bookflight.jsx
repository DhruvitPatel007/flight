import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '@/components/Bookflight/Bookflight.css';

const FlightBookingForm = () => {
  const [tripType, setTripType] = useState('oneway');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departDate, setDepartDate] = useState(new Date());
  const [returnDate, setReturnDate] =   useState(new Date());
  const [travellers, setTravellers] = useState({ adults: 1, children: 0 });
  const [classType, setClassType] = useState('economy');

  const handleTripTypeChange = (e) => {
    setTripType(e.target.value);
  };

  const handleDepartDateChange = (date) => {
    setDepartDate(date);
    if (tripType === 'roundtrip') {
      const nextDay = new Date(date);
      nextDay.setDate(nextDay.getDate() + 1);
      setReturnDate(nextDay);
    }
  };

  const handleReturnDateChange = (date) => {
    setReturnDate(date);
  };

  const handleTravellersChange = (type, count) => {
    setTravellers((prevState) => ({ ...prevState, [type]: count }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform booking logic or API call here
    console.log('Form submitted:', {
      tripType,
      from,
      to,
      departDate,
      returnDate,
      travellers,
      classType,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flight-booking-form">
      <div className="radio-group">
        <label>
          <input
            type="radio"
            value="oneway"
            checked={tripType === 'oneway'}
            onChange={handleTripTypeChange}
          />
          One way
        </label>
        <label>
          <input
            type="radio"
            value="roundtrip"
            checked={tripType === 'roundtrip'}
            onChange={handleTripTypeChange}
          />
          Round Trip
        </label>
      </div>
      <div className="form-group">
        <label>
          From:
          <input type="text" value={from} onChange={(e) => setFrom(e.target.value)} />
        </label>
      </div>
      <div className="form-group">
        <label>
          To:
          <input type="text" value={to} onChange={(e) => setTo(e.target.value)} />
        </label>
      </div>
      <div className="form-group">
        <label>
          Depart on:
          <Calendar value={departDate} onChange={handleDepartDateChange} />
        </label>
      </div>
      {tripType === 'roundtrip' && (
        <div className="form-group">
          <label>
            Return on:
            <Calendar value={returnDate} onChange={handleReturnDateChange} />
          </label>
        </div>
      )}
      <div className="form-group">
        <label>
          Travellers:
          <div className="travellers-group">
            <button
              type="button"
              onClick={() => handleTravellersChange('adults', travellers.adults - 1)}
              disabled={travellers.adults === 1}
            >
              -
            </button>
            <input
              type="number"
              min="1"
              max="9"
              value={travellers.adults}
              onChange={(e) => handleTravellersChange('adults', parseInt(e.target.value))}
            />
            <button
              type="button"
              onClick={() => handleTravellersChange('adults', travellers.adults + 1)}
              disabled={travellers.adults === 9}
            >
              +
            </button>
          </div>
          Adults
        </label>
        <label>
          <div className="travellers-group">
            <button
              type="button"
              onClick={() => handleTravellersChange('children', travellers.children - 1)}
              disabled={travellers.children === 0}
            >
              -
            </button>
            <input
              type="number"
              min="0"
              max="6"
              value={travellers.children}
              onChange={(e) => handleTravellersChange('children', parseInt(e.target.value))}
            />
            <button
              type="button"
              onClick={() => handleTravellersChange('children', travellers.children + 1)}
              disabled={travellers.children === 6}
            >
              +
            </button>
          </div>
          Children
        </label>
      </div>
      <div className="form-group">
        <label>
          Class:
          <select value={classType} onChange={(e) => setClassType(e.target.value)}>
            <option value="economy">Economy</option>
            <option value="business">Business</option>
            <option value="first">First Class</option>
          </select>
        </label>
      </div>
      <button type="submit">Search</button>
    </form>
  );
};

export default FlightBookingForm;
