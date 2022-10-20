let dropdown = document.querySelector('#phone')
let content = document.querySelector('#container')
let state = 0
dropdown.onclick = function(){
if (state ==0){
    content.style.display = 'block'
    state = 1
}else{
    content.style.display = 'none'
    state = 0
}
}

let nameFirst = document.querySelector("#first-name")
let nameLast = document.querySelector("#last-name")
let date = document.querySelector('#calender')
let doctor = document.querySelector('#select')
let mail = document.querySelector('#email')
let phone = document.querySelector('#cell')
let text = document.querySelector('#message')
let button = document.querySelector("#submit")
let nameFirstValue = nameFirst.value
let nameLastValue = nameLast.value
let dateValue = date.value
let doctorValue = doctor.value
let mailValue = mail.value
let phoneValue = phone.value
let textValue = text.value
let array = [nameFirstValue,nameLastValue,dateValue,doctorValue,mailValue,phoneValue,textValue]
let mode = true 
button.onclick = function(){
  alert('Thank you for scheduling with Pellis')
}


