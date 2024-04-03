// routes/home.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // Sample user object
    const description = {
        title: 'Rabbit',
        content: 'Rabbits are adorable and intriguing creatures that captivate people with their fluffy fur, twitching noses, and playful antics.',
        img: '/mySite/public/images/RABBIT.JPG'
    };

    // Render the 'spiral' view and pass the 'description' object to it
    res.render('information', { description: description });

});

module.exports = router;