const express = require('express')
var cors = require('cors')
require('dotenv').config()
//2



const { errorHandler } = require('./middleware/errorMiddleware')
//5
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/Trading', {useNewUrlParser: true, useUnifiedTopology: true})

// 1
const app = express()

//4
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

//3

app.use('/users', require('./routes/users_routes'))


app.use(errorHandler)

module.exports = app;
