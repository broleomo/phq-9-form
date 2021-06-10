const express = require('express')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const answers = require('./routes/answers')
app.use('/answers', answers)

module.exports = app
