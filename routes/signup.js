var config = require('../config')
var validator = require('email-validator')
var MC = require('mailchimp-api').Mailchimp
var mc = new MC(config.mailchimp.key)

// @todo Validate email. Geo Ip?
exports.post = function(req, res) {
    var email = req.body.email

    if (!validator.validate(email)) {
        return res.status(400).json({ msg: '' })
    }

    mc.lists.subscribe({
        id: config.mailchimp.list.id,
        email: { email: email }
    }, function(response) {
        console.log('success!', response)
        res.json(200)
    }, function(err) {
        var errMap = {
            'List_RoleEmailMember': 400,
            'List_AlreadySubscribed': 409
        }
        res.status(errMap[err.name]).json(err)
    })
}
