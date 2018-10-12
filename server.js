var express = require('express')
var fs = require('fs')
var https = require('https')
var app = express()
var _path = require('path')

app.use("/dist", express.static(__dirname + "/dist")) // dist folder
app.use("/public", express.static(__dirname + "/public")) // public folder

app.get("/", function(req, res) {
    res.sendFile(_path.join(__dirname+'/public/index.html'))
})

app.get("/info", function(req, res) {
    res.sendFile(_path.join(__dirname+'/public/info.html'))
})

https.createServer({
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
}, app)

.listen(3000, function () {
  console.log('Example app listening on port 3000! Go to https://localhost:3000/')
})