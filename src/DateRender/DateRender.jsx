import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
//luxon
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
//MUI X components
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DateCalendar } from '@mui/x-date-pickers';


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
            <LocalizationProvider dateAdapter={AdapterLuxon}>
                <DateCalendar/>
            </LocalizationProvider>
        </>
    );
}

export default DateRender;