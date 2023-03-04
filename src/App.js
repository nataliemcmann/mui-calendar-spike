import './App.css';
import React from 'react';
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
      <DatePickers getDates={getDates}/>
      <DateRender dates={dates}/>
    </div>
  );
}

export default App;
