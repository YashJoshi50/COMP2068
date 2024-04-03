// routes/home.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // Sample user object
    const description = {
        title: 'Cat',
        content: 'Cats, with their enigmatic gaze and graceful demeanor, have captivated human hearts for centuries.',
        img:'/mySite/public/images/CAT.JPG'
    };

    // Render the 'index' view and pass the 'user' object to it
    res.render('information', { description: description  });
});

module.exports = router;