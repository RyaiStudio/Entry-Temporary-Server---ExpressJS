var express = require('express')
var fs = require('fs')
var https = require('https')
var http = require('http')
var app = express()
var _path = require('path')

var rfSync = {
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
}

// app.use("/dist", express.static(__dirname + "/dist"))
// app.use("/public", express.static(__dirname + "/public"))

app.get("/", function(req, res) {
    // res.sendFile(_path.join(__dirname+'/public/index.html'))
    res.send('hello world')
})

https.createServer(rfSync, app).listen(3000, function () {
  console.log('Listening on port 3000! Go to https://localhost:3000/')
})