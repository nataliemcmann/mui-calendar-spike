import React from 'react';
import { useState } from 'react';
//react date picker
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const css = `
.my-today { 
    border-color: blue;
    color: blue;
}
`


function DateRender({ bookingList }) {
    const [startDate, setStart] = useState(new Date(2023, 2, 4));
    const [endDate, setEnd] = useState(new Date(2023, 3, 8));
    const dateArray = [{ 
        from: startDate, 
        to: endDate 
    }];

    return(
        <>
            <h4>Render Date Range</h4>
            <style>{css}</style>
            <DayPicker
            mode="multiple"
            disabled={dateArray}
            modifiersClassNames={{
                today: 'my-today'
                }}
            />
        </>
    );
}

export default DateRender;