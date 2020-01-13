const db = require('mongoose')

/* 
Pide a mongoose que emplée las promesas para resolver de forma más simple
-> "global" es un objeto de Javascript que permite acceder al scope Global 
-> Promise: clase nativa de JavaScript
*/
db.Promise = global.Promise

async function connect(url) {
    // MongoClient constructor
    await db.connect(url, {
        // para evitar problemas de compatibilidad con la versión del servidor
        useNewUrlParser: true,
        // para usar  el nuevo motor de monitoreo y "discover" de Mongo
        useUnifiedTopology: true
    })
    console.log('[db] Conexión exitosa')
}

module.exports = connect