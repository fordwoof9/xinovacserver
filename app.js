const express = require('express')
const path = require('path')
const env = require('dotenv').config()
const cors = require('cors')
const helmet = require('helmet')

const app = express()

if (process.env.NODE_ENV !== "production") {
    require("dotenv").config()
  }

const domainsFromEnv = process.env.CORS_DOMAINS || ""
const whitelist = domainsFromEnv.split(",").map(item => item.trim())

const corsOptions = {
    origin: function (origin, callback) {
      if (!origin || whitelist.indexOf(origin) !== -1) {
        callback(null, true)
      } else {
        callback(new Error("Not allowed by CORS"))
      }
    },
    credentials: true,
  }

app.use(express.static(path.join(__dirname, 'public')))
//app.use(cors({credentials: true, origin: ['http://localhost:3000/', 'https://xinovac.herokuapp.com/', '*']}))
app.use(cors(corsOptions))

app.use(express.json()) 
app.use(express.urlencoded({ extended: false }))

app.use(helmet())

//app.get("/", (req, res) => {
    //res.send({ message: "Welcome to xinovac API!" })
  //})

//ROUTES
const bookingRoom = require("./routes/bookingRoute")
app.use('/api/booking', bookingRoom)

console.log('starting server...')
const port = process.env.PORT || 5000;
app.listen(port, () => { console.log(`server is running on port ${port}.`)})

module.exports = app;