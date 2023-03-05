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
      <div>
      <DatePickers getBookings={getBookings}/>
      </div>
      <div>
        <ul>
          {bookingList && bookingList.map((booking) => {
            return (
              <li key={booking.id}>
                Check In: {booking.checkInDate} and
                Check Out: {booking.checkOutDate}
              </li>
            )
          })}
        </ul>
      </div>
      <DateRender/>
    </div>
  );
}

export default App;
