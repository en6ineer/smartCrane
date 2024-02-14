const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/interface_design.html')
})

app.use(express.static(__dirname+ '/assets')) //Папка со всеми нужными штучками

http.listen(3000, () => console.log('Server working now!'))