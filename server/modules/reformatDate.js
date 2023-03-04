//change date data
function changeDateType(bookingsArray){
    for (let booking of bookingsArray) {
        if(booking.checkInDate !== null) {
            booking.checkInDate = reformatDate(booking.checkInDate);
        }
        if (booking.checkOutDate !== null) {
            booking.checkOutDate = reformatDate(booking.checkOutDate);
        }
    }
    return bookingsArray;
}

// helper function to change sqlDate

function reformatDate(date) {
    let stringDate = date.toISOString();
    let newDate = '';
    //iterate through date string and truncate
    //to 10 characters 
    for (let i = 0; i < 10; i++){
        newDate += stringDate[i];
    } 
    return newDate //format "YEAR-MM-DD"
}

module.exports = changeDateType;