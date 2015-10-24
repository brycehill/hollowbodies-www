
var $form = document.querySelector('#signup')
$form.addEventListener('submit', function(e) {
    debugger;
    return e.target.children.email.value;
})
