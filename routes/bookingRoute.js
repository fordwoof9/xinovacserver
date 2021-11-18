const express = require('express')
const router = express.Router()
const booking = require("../controllers/bookingController");

router.post('/create-booking', booking.bookingRoom)

module.exports = router;