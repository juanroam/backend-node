const statusMessage = {
    '200': 'Done',
    '201': 'Created',
    '400': 'Invalid format',
    '500': 'Internal error'
}

exports.success = function (request, response, message, status) {
    let statusCode = !status ? 200 : status
    let statusMsg = !message ? statusMessage[status] : message

    response.status(statusCode).send({
        error: '',
        body: statusMsg
    })
}

exports.error = function (request, response, message, status, details) {
    let statusCode = !status ? 200 : status
    let statusMsg = !message ? statusMessage[status] : message

    console.error('[response error] ' + details)
    response.status(statusCode).send({
        error: statusMsg,
        body: ''
    })
}