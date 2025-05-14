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
    const { name, email, message } = req.body;

    contactMessages.push({ name, email, message, date: new Date() }); //save in memory array

    res.render('pages/thankyou', {
        name,
        email,
        message,
    });
});

router.get('/thankyou', (req, res) => {
  res.render('pages/thankyou');

module.exports = router;
