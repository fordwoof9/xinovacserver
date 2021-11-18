const express = require('express');

const { bookingRoom } = require("../models/bookingModel")

exports.bookingRoom = async (req, res) => {
    const body = req.body;
    let result = await bookingRoom(body)
    result ? res.status(201).send({
        'status' : '201',
        'data' : {
            user_name : result[0],
            user_email : result[1],
            user_room : result[2],
        },
        'message' : 'Booking successfully'
    }) :res.status(400).send({
        'status' : '400',
        'data' : "",
        'message' : 'Booking failed!'
    })
}
