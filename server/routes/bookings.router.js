
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js')
// const reformatDate = require('../modules/reformatDate.js');

//routes here

//start POST 
router.post('/', (req, res) => {
    console.log('POST successful');
    let checkIn = req.body.dateObject.checkIn;
    let checkOut = req.body.dateObject.checkOut;
    let sqlValues=[checkIn, checkOut];
    let sqlQuery = `
    INSERT INTO "bookings"
    ("checkInDate", "checkOutDate")
    VALUES
    ($1, $2)
    `;
    pool.query(sqlQuery, sqlValues)
    .then((dbRes) => {
        res.sendStatus(201);
    })
    .catch((dbErr) => {
        console.log('POST route failed:', dbErr);
        res.sendStatus(500);
    })
}); //end POST

//start GET
router.get('/', (req, res) => {
    console.log('GET successful');
    let sqlQuery = `
    SELECT * FROM "bookings"
    ORDER BY "id" DESC
    `;
    pool.query(sqlQuery)
    .then((dbRes) => {
        let bookingsArray = dbRes.rows;
        res.send(bookingsArray);
    })
    .catch((dbErr) => {
        console.log('GET route not working:', dbErr);
        res.sendStatus(500);
    })
})
//end GET

module.exports = router;