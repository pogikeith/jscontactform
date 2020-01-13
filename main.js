console.log('it works')

$(document).ready(function () {
    $('.submit').click(function(event) {
       
        console.log('clicked button')

        var email = $('.email').val()
        var subject = $('.subject').val()
        var subject = $('.message').val()
        var statusElm = $('.status')

        if(email.length > 5 && email.includes('@') && email.includes('.')) {
            statusElm.append('<div>email is valid</div>')
        } else {
            event.preventDefault()
            statusElm.append('<div>email is not valid</div>')
        }    

        if(subject.length >= 2) {
            statusElm.append('<div>Subject is valid</div>')
        } else {
            event.preventDefault()
            statusElm.append('<div>Subject is not valid</div>')
        }   
        
        if(message.length > 20) {
            statusElm.append('<div>Message is valid</div>')
        } else {
            event.preventDefault()
            statusElm.append('<div>Message is not valid</div>')
        }
    }) 

}) 