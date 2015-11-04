import {email as isEmail} from './validate'
import signup from './signup'

var $form = document.querySelector('#signup')
$form.addEventListener('submit', e => {
    e.preventDefault()

    var addy = e.target.children.email.value
    if (isEmail(addy)) {
        signup(addy).fork(handleAPIError, function(res) {
            showMessage('Thanks! Don\'t forget to check your email to confirm your subscription.')
        })
    } else {
        showError('Whoops, that doesn\'t look like a valid email address. Try again?')
    }
})

function showError(msg) {
    var node = document.querySelector('#msg')
    node.classList.remove('success')
    node.classList.add('error')
    node.textContent = msg
}

function showMessage(msg) {
    var node = document.querySelector('#msg')
    node.classList.add('success')
    node.classList.remove('error')
    node.textContent = msg
}

function handleAPIError(response) {
    var rs = {
        'List_RoleEmailMember': 'This looks like it could be a known invalid email address. ' +
            'Unfortunately, you will have to manually subscribe to this mailing list. Thanks for understanding',
        'List_AlreadySubscribed': 'Looks like this email has already subscribed to this list. Thanks for subscribing!'
    }
    showError(rs[response.name]);
}

