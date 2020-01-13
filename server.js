// module loading
const express = require('express')
const bodyParser = require('body-parser')
const db = require('./db')
const router = require('./network/routes')

db('mongodb+srv://db_user_roam:4q9772t3bThunZW@cluster0-myaoh.mongodb.net/test')

const hostname = "127.0.0.1"
const port = 3000

var app = express()
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }))

// pasa el servidor express al router para crear todas las rutas necesarias
router(app)

app.use('/app', express.static('public'))

app.listen(port)
console.log(`Server running at http://${hostname}:${port}/`)