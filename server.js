require('dotenv').config()

const express = require('express')
const app = express()
const server = require('http').Server(app)

const config = require('./config')

const cors = require('cors')
const bodyParser = require('body-parser')
const socket = require('./socket')
const db = require('./db')
const router = require('./network/routes')

db(config.dbUrl)

app.use(cors())

app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }))

socket.connect(server)

// pasa el servidor express al router para crear todas las rutas necesarias
router(app)

app.use(config.publicRoute, express.static('public'))

server.listen(config.port, function() {
    console.log(`Server running at http://${config.host}:${config.port}/`)
})