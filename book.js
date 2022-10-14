let firstName = document.querySelector('#first')

let lastName = document.querySelector('#last')
let phone = document.querySelector('#number')
let dermatologist = document.querySelector('#doctor')
let description = document.querySelector('#symptoms')
let day = document.querySelector('#date')
let button = document.querySelector('#btn')
button.onclick= function(){
    if (confirm("Do you want schedule your appointment?") == true) {
        alert('Thank you for scheduling with Pellis')
    } else {
        alert('Confirm your schedule before resubmitting!')
    }
}