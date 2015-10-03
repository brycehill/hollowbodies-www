var express = require('express')
var favicon = require('serve-favicon')
var app = express()

app.use(express.static('public'))
app.use(favicon(__dirname + '/public/favicon.ico'));

app.get('/', function (req, res) {
  res.send('Hello World!')
})

var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port

  console.log('Server listening at http://%s:%s', host, port)
});
