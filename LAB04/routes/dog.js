// routes/elliptical.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // Sample user object
    const description = {
      title: 'Dog',
      content: 'Dogs are incredibly diverse and fascinating creatures, each with its own unique personality and characteristics.',
      img: '/mySite/public/images/DOG.JPG'
  };


    // Render the 'elliptical' view and pass the 'intro' object to it
    res.render('information', { description: description  });
});

module.exports = router;