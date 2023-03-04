import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
//import components
import DatePickers from './DatePickers/DatePickers';
import DateRender from './DateRender/DateRender';

function App() {
const [bookingList, setBookingList] = useState([]);

useEffect(() => {
  getBookings();
}, [])

function getBookings () {
  axios.get('/bookings')
  .then((res) => {
    console.log(res.data);
    setBookingList(res.data);
  })
  .catch((err) => {
    console.log('GET failed', err);
  })
}

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <DatePickers getBookings={getBookings}/>
      <div>
        {bookingList && bookingList.map(booking => (
          <ul>
            <li key={booking.id}>
                <p>
                Check In: {booking.checkInDate} and 
                Check Out: {booking.checkOutDate}
                </p>
                <DateRender booking={booking}/>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default App;
