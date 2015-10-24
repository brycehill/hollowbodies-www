var express = require('express')
var exphbs  = require('express-handlebars')
var bodyParser = require('body-parser')
var favicon = require('serve-favicon')
var signup = require('./routes/signup')
var home = require('./routes/home')
var app = express()

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(bodyParser.json())
app.use(express.static('public'))
app.use(favicon(__dirname + '/public/favicon.ico'))

app.get('/', home.get)
app.post('/signup', signup.post)

var server = app.listen(3000, function () {
    var host = server.address().address
    var port = server.address().port

    console.log('Server listening at http://%s:%s', host, port)
})
