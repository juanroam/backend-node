const express = require('express')
const app = express()
const server = require('http').Server(app)

const cors = require('cors')
const bodyParser = require('body-parser')
const socket = require('./socket')
const db = require('./db')
const router = require('./network/routes')

db('mongodb+srv://db_user_roam:4q9772t3bThunZW@cluster0-myaoh.mongodb.net/test')

app.use(cors())

const hostname = "127.0.0.1"
const port = 3000

app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }))

socket.connect(server)

// pasa el servidor express al router para crear todas las rutas necesarias
router(app)

app.use('/', express.static('public'))

server.listen(port, function() {
    console.log(`Server running at http://${hostname}:${port}/`)
})