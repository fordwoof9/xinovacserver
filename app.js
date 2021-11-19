const express = require('express')
const path = require('path')
const env = require('dotenv').config()
const cors = require('cors')
const helmet = require('helmet')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(cors({credentials: true, origin: ['https://xinovac.herokuapp.com/', '*']}))

app.use(express.json()) 
app.use(express.urlencoded({ extended: false }))

app.use(helmet())

//ROUTES
const bookingRoom = require("./routes/bookingRoute")
app.use('/api/booking', bookingRoom)



console.log('starting server...')
const port = process.env.PORT || 5000;
app.listen(port, () => { console.log(`server is running on port ${port}.`)})

module.exports = app;