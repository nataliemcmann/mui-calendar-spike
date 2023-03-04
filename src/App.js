import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
//import components
import DatePickers from './DatePickers/DatePickers';
import DateRender from './DateRender/DateRender';

function App() {
  const [dates, setDates] = useState([]);

  useEffect(() => {
      getDates();
  }, []);

  const getDates = () => {
      axios.get('/bookings')
      .then((res) => {
          console.log('GET request successful', res.data);
          setDates(res.data);
          console.log(dates);
      })
      .catch((err) => {
          console.log('Error in GET request', err);
      })
  }

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <DatePickers getDates={getDates}/>
      <DateRender dates={dates}/>
    </div>
  );
}

export default App;
