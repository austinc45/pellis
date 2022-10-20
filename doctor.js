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

let button = document.querySelector("#submit")
let mode = true 
button.onclick = function(){
    let nameFirst = document.querySelector("#first-name")
let nameLast = document.querySelector("#last-name")
let date = document.querySelector('#calender')
let doctor = document.querySelector('#select')
let mail = document.querySelector('#email')
let phone = document.querySelector('#cell')
let text = document.querySelector('#message')
let nameFirstValue = nameFirst.value
let nameLastValue = nameLast.value
let dateValue = date.value
let doctorValue = doctor.value
let mailValue = mail.value
let phoneValue = phone.value
let textValue = text.value
let array = [nameFirstValue,nameLastValue,dateValue,doctorValue,mailValue,phoneValue,textValue]
let array2 = [nameFirst,nameLast,date,doctor,mail,phone,text]
for (let x =0;x<array.length;x++){
    if(array[x]==''){
        mode = false
        alert('Please fill in all required information.')
        break
    }
} if (mode){
if(confirm(nameFirstValue+" " +nameLastValue+" is all of the provided infromation correct?"))
{
    alert("Thank you "+ nameFirstValue+" "+nameLastValue+" for scheduling with Pellis. "+"Your appointment with "+doctorValue+" is on the "+dateValue+".")
    for( let x =0;x<array2.length;x++){
        array2[x].value = ''
    }
}else{
alert('Please check all of the inputted information.')
}
  
}
}


