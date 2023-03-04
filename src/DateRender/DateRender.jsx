import React from 'react';
//luxon
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
//MUI X components
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DateCalendar, PickersDay } from '@mui/x-date-pickers';



function DateRender({ dates }) {

    // const initialDate = firstBooking.checkInDate;



    return(
        <>
            <LocalizationProvider dateAdapter={AdapterLuxon}>
                <DateCalendar 
                // defaultValue={initialDate} 
                disabled
                />
            </LocalizationProvider>
            {/* <p>{dates[0].checkInDate}</p> */}
        </>
    );
}


export default DateRender;