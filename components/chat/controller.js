const store = require('./store')

function addChat(users) {
    if (!users || !Array.isArray(users)) {
        return Promise.reject('Invalid user list')
    }
    const newChat = {
        users: users
    }
    return store.add(newChat)
}

function listChats(userId) {
    return store.list(userId)
}

module.exports = {
    addChat,
    listChats
}