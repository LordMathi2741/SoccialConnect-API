const express = require("express")
const bodyParser = require("body-parser")
const users = require('../src/controllers/users')
const publications = require('../src/controllers/publication')
const app = express()
const dbconnect = require('../src/server')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json()) 
app.use('/api/v1/users', users)
app.use('/api/v1/publication', publications)
app.listen(3000,() => console.log('Server on port 3000'))
dbconnect();