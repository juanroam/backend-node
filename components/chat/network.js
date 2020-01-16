const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')
const router = express.Router()

router.get('/:userId', function (req, res) {
    controller.listChats(req.params.userId)
        .then((users) => {
            response.success(req, res, users, 200)
        })
        .catch(e => {
            response.error(req, res, 'Unexpected Error', 500, e)
        })
})

router.post('/', function (req, res) {
    controller.addChat(req.body.users)
        .then((newChat) => {
            response.success(req, res, newChat, 201)
        })
        .catch(error => {
            response.error(req, res, 'Internal error', 500, error)
        })
})

module.exports = router