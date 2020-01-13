/*
Archivo separado para todas las rutas de nuestros mensajes.
Encargada de recibir la petición HTTP, procesar la información y 
enviarlo al controlador.
*/

const express = require('express')
const res = require('../../network/response')
const controller = require('./controller')
const router = express.Router()

router.get('/', function (request, response) {
    const filterMessages = request.query.user || null
    controller.getMessages(filterMessages)
        .then((messageList) => {
            res.success(request, response, messageList, 200)
        })
        .catch(e => {
            res.error(request, response, 'Unexpected Error', 500, e)
        })
})

router.post('/', function (request, response) {
    controller.addMessage(request.body.user, request.body.message)
        .then((fullMessage) => {
            res.success(request, response, fullMessage, 201)
        })
        .catch(e => {
            res.error(request, response, 'Información inválida', 400, 'Error en el controlador')
        })
})

router.patch('/:id', function (request, response) {
    controller.updateMessage(request.params.id, request.body.message)
        .then((data) => {
            res.success(request, response, data, 200)
        })
        .catch(e => {
            res.error(request, response, 'Error interno', 500, e)
        })
})

router.delete('/:id', function(request, response) {
    controller.deleteMessage(request.params.id)
        .then(() => {
            res.success(request, response, `Mensaje ${request.params.id} eliminado`)
        })
        .catch(e => {
            res.error(request, response, 'Error interno', 500, e)
        })
})

// exportamos el enrutador
module.exports = router