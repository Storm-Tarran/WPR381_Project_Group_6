const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('pages/home');
});

router.get('/about', (req, res) => {
    res.render('pages/about');
});

router.get('/events', (req, res) => {
    res.render('pages/events');
});

router.get('/contact', (req, res) => {
    res.render('pages/contact');
});

router.post('/contact', (req, res) => {
    const { name, email, message } = req.body;

    res.render('pages/thankyou', {
        name,
        email,
        message,
    });
});

module.exports = router;