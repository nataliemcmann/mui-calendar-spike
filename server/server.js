const express = require('express');
const app = express();
// const route = require('./routes/router.js'); rename to match router.js file
const bodyParser = require('body-parser');
//insert a route
const PORT = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for axios requests
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
// app.use('/', route) rename to match route import

/** ---------- START SERVER ---------- **/
app.listen(PORT,  () => {
    console.log('Listening on port: ', PORT);
});