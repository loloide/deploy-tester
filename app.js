var express = require('express')

var app = express();
var server = app.listen(process.env.PORT || 3000, listen);

function listen() {
    var host = "localhost"
    var port = server.address().port;
    console.log('Example app listening at http://' + host + ':' + port);
  }
    
  app.use(express.static('src'));