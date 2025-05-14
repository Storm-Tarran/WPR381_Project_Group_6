const express = require('express');
const router = express.Router();

const contactMessages = []; //In memory array for contact form

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
    const { name, email, phone, subject, message } = req.body;
    const entry = { name, email, phone, subject, message, date: new Date() };

    contactMessages.push(entry); //save in memory array
    console.log("New Contact Entry: ", entry);

    res.render('pages/thankyou', {
        name,
        email,
        message,
    });
});

module.exports = router;
