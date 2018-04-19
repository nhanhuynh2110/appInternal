var express = require('express')

var app = express()
var server = require('http').createServer(app)
var io = require('socket.io')(server)
var path = require('path')
var fs = require('fs')
var sha1 = require('sha1')
// var loggerConsole = require('./logger').createLogger() // logs to STDOUT
var loggerWriteFile = require('./loggerWriteFile').createLogger('dev.log') // logs to a file
global.rootDirectory = __dirname


var io = require('socket.io')(server)
io.on('connection', (socket) => {
    // TODO:
    // loggerConsole.ERROR('Connect Socket', 'error', 'now!')
    // loggerConsole.INFO('connect success')
    // loggerConsole.WARNNING('canh bao')
    loggerWriteFile.error('connect socket success', 'error', 'now!')
    console.log('connect socket success')
})


// router
app.use('/', require('./routes'))

server.listen(3100, () => {
  console.log('start server 3100 success')
})