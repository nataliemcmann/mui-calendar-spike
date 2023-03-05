import React from 'react';
import { useState } from 'react';
//luxon
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
//import datetime form luxon
import { DateTime } from 'luxon';
//MUI X components
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DateCalendar } from '@mui/x-date-pickers';



function DateRender({ bookingList }) {
    const sqlDateCheckIn = bookingList[0].checkInDate;
    const luxonDateCheckIn = DateTime.fromSQL(sqlDateCheckIn);

    const [initialDate, setInitial] = useState(luxonDateCheckIn);

    return(
        <>
            <LocalizationProvider dateAdapter={AdapterLuxon}>
                <DateCalendar 
                value={initialDate}
                onChange={(newDate) => {
                    setInitial(newDate);
                }} 
                disabled
                />
            </LocalizationProvider>
        </>
    );
}

export default DateRender;