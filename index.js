var express = require('express')
var app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('server is running on https')
})

var port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log('listening to port '+ port)
});