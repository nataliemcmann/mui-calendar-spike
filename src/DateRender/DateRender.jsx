import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
//MUI X components
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';


function DateRender() {
    const [dates, setDates] = useState([]);

    useEffect(() => {
        getDates();
    }, []);

    const getDates = () => {
        axios.get('/bookings')
        .then((res) => {
            console.log('GET request successful', res.data);
        })
        .catch((err) => {
            console.log('Error in GET request', err);
        })
    }

    return(
        <>
            <DateCalendar/>
        </>
    );
}

export default DateRender;