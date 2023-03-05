import React from 'react';
import { useState } from 'react';
//react date picker



function DateRender() {
    const [initialDate, setInitial] = useState(DateTime.fromISO('2023-03-04'))
    const [endDate, setEnd] = useState(DateTime.fromISO('2023-04-04'));
    const datesBetween = Interval.fromDateTimes(initialDate, endDate);
    datesBetween.shift(initialDate);
    datesBetween.push(endDate);


    return(
        <>
            <h4>Render Date Range</h4>
        </>
    );
}

export default DateRender;