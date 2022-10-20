let button = document.querySelector("#blur")
let monkeypox = document.querySelector("#monkeypox")
let scabbies = document.querySelector("#scabbies")
let eczema = document.querySelector("#eczema")
let acne = document.querySelector("#acne")
let molluscum = document.querySelector("#MC")
let herpes = document.querySelector("#herpes")
let array = [monkeypox,scabbies,eczema,acne,molluscum,herpes]
let state = 0
let monkeypoximage = document.querySelector("#monkeydiv")
let scabbiesimage = document.querySelector("#scabbiesdiv")
let eczemaimage = document.querySelector("#eczemadiv")
let acneimage = document.querySelector("#acnediv")
let molluscumimage = document.querySelector("#MCdiv")
let herpesimage = document.querySelector("#herpesdiv")
button.onclick = function(){
    if (state ==0){
        for (let x =0;x<array.length;x++){
            array[x].style.filter = 'blur(0px)'
        }
        state ++
    }else{
        for (let x =0;x<array.length;x++){
            array[x].style.filter = 'blur(30px)'
        }
        state = 0
    }
}

monkeypoximage.onclick =  function(){
    if (monkeypox.style.filter == 'blur(30px)'){
        monkeypox.style.filter = 'blur(0px)'
    }else{
        monkeypox.style.filter = 'blur(30px)'
    }
}


scabbiesimage.onclick = function(){
    if (scabbies.style.filter == 'blur(30px)'){
        scabbies.style.filter = 'blur(0px)'
    }else{
        scabbies.style.filter = 'blur(30px)'
    }
}
eczemaimage.onclick =function(){
    if (eczema.style.filter == 'blur(30px)'){
        eczema.style.filter = 'blur(0px)'
    }else{
        eczema.style.filter = 'blur(30px)'
    }
} 
acneimage.onclick = function(){
    if (acne.style.filter == 'blur(30px)'){
        acne.style.filter = 'blur(0px)'
    }else{
        acne.style.filter = 'blur(30px)'
    }
}
molluscumimage.onclick = function(){
    if (molluscum.style.filter == 'blur(30px)'){
        molluscum.style.filter = 'blur(0px)'
    }else{
        molluscum.style.filter = 'blur(30px)'
    }
}
herpesimage.onclick =function(){
    if (herpes.style.filter == 'blur(30px)'){
        herpes.style.filter = 'blur(0px)'
    }else{
        herpes.style.filter = 'blur(30px)'
    }
}

let dropdown = document.querySelector('#phone')
let content = document.querySelector('#container')
let turn = 0
dropdown.onclick = function(){
if (turn ==0){
    content.style.display = 'block'
    turn = 1
}else{
    content.style.display = 'none'
    turn = 0
}
}