import React from 'react';
import { useState } from 'react';
import axios from 'axios';
//import mui components
import { TextField, Button } from '@mui/material';
//import dateAdapter for Luxon
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
//import datetime form luxon
import { DateTime } from 'luxon';
//MUI X components
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';

function DatePickers({ getDates }) {
    const currentDate = DateTime.now();
    const minStayDate = currentDate.plus({months: 1});

    const [checkIn, setCheckIn] = useState(currentDate);
    const [checkOut, setCheckOut] = useState(minStayDate);

    // function resetCheckOut(newValue){
    //     console.log('add a month to check out automatically');
    //     setCheckOut(newValue.plus({months: 1}))
    // }

    function sendDates() {
        let dateObject = {
            checkIn,
            checkOut
        };
        console.log(dateObject);
        axios.post('/bookings', 
        {dateObject})
        .then((res) => {
            console.log('post request sent');
            getDates();
        })
        .catch((err) => {
            console.log('post request failed', err);
        })

    }

    return(
        <>
            <div className="checkInDate">
                <LocalizationProvider dateAdapter = { AdapterLuxon }>
                <DatePicker
                    mask="__/__/____"
                    label="Check In Date"
                    value={checkIn}
                    onChange={(newValue) => {
                    setCheckIn(newValue);
                    // resetCheckOut(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
                </LocalizationProvider>
                </div>
                <div className="checkOutDate">
                <LocalizationProvider dateAdapter = { AdapterLuxon }>
                <DatePicker
                    mask="__/__/____"
                    label="Check Out Date"
                    value={checkOut}
                    onChange={(newValue) => {
                    setCheckOut(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
                </LocalizationProvider>
            </div>
            <div>
                <Button onClick={e => {sendDates()}}>Confirm</Button>
            </div>
        </>
    )
}

export default DatePickers;