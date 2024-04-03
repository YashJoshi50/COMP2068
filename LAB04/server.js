const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Import routes
const homeRoute = require('./routes/Home');
const catRoute = require('./routes/Cat');
const dogRoute = require('./routes/dog');
const rabbitRoute = require('./routes/Rabbit');
const cowRoute = require('./routes/Cow');

// Define routes
app.use('/', homeRoute);
app.use('/cat', catRoute);
app.use('/cow',cowRoute ); // Corrected route name
app.use('/rabbit', rabbitRoute);
app.use('/dog', dogRoute);

// Start the server
app.listen(port, () => {
    console.log(`App listening at port ${port}`);
});