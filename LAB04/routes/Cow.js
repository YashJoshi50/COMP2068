// routes/home.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // Sample user object
    const description = {
        title: 'Cow',
        content: 'The cow, with its gentle eyes and serene presence, holds a special place in human culture and history.',
        img: '/mySite/public/images/COW2.JPG'
    };

    // Render the 'index' view and pass the 'user' object to it
    res.render('information', { description: description  });
});

module.exports = router;