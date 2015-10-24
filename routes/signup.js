var config = require('../config')
var MC = require('mailchimp-api').Mailchimp
var mc = new MC(config.mailchimp.key)

// @todo Validate email. Geo Ip?
exports.post = function(req, res) {
    var email = req.body.email

    mc.lists.subscribe({
        id: config.mailchimp.list.id,
        email: { email: email }
    }, function() {
        console.log('success!')
        res.json(200)
    }, function(err) {
        res.json(err)
    })
}
