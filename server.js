var express = require('express')
var exphbs  = require('express-handlebars')
var favicon = require('serve-favicon')
var app = express()

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars');

app.use(express.static('public'))
app.use(favicon(__dirname + '/public/favicon.ico'));

app.get('/', function (req, res) {
  res.render('home')
})
})

var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port

  console.log('Server listening at http://%s:%s', host, port)
});
