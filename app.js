const express = require('express')
const path = require('path')
const env = require('dotenv').config()
const cors = require('cors')
const helmet = require('helmet')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(cors({credentials: true, origin: ['http://localhost:3000', '*']}))

app.use(express.json()) 
app.use(express.urlencoded({ extended: false }))

app.use(helmet())

//ROUTES
const bookingRoom = require("./routes/bookingRoute")
app.use('/api/booking', bookingRoom)



console.log('starting server...')
const SERVER_PORT = 5000
app.listen(SERVER_PORT, () => { console.log(`server is running on port ${SERVER_PORT}.`)})

module.exports = app;