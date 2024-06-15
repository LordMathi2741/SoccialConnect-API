const express = require("express")
const bodyParser = require("body-parser")
const users = require('../api/users')
const profiles = require('../api/profiles')
const app = express()
const dbconnect = require('../src/server')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json()) 
app.use('/api/v1/users', users)
app.use('/api/v1/profiles', profiles)
app.listen(3000,() => console.log('Server on port 3000'))
dbconnect();