// 1) Bringing in all of our dependencies
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');                                      // Parses incoming request bodies
const cors = require('cors');                                                   // cors allows us to make a request to our api with a different domain name
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

// Connect To Database
mongoose.connect(config.database);

// On Connection                                                                // Checking connection status
mongoose.connection.on('connected', () => {
    console.log('Connected to database ' +config.database);
});

// On Error
mongoose.connection.on('error', () => {
    console.log('Database error: ' +err);
});

const app = express();                                                          // Initializing express

const users = require('./routes/users');                                        // The file will be in a folder called routes

//Port Number
const port = 9000;

// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));                        // we need a place to put our client side files/ setting our static folder to public

// Body Parser middleware
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.Initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);                                                       // anything that is '/users'/abc123 will go to /users file.

// Index Route for rendering
app.get('/', (req,res) => {
    res.send('Invalid Endpoint. Retry!!!')
})

// Start Server
app.listen(port, () => {
    console.log('Server started on port ' +port);
})
