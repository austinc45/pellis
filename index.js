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
            array[x].style.filter = 'blur(8px)'
        }
        state = 0
    }
}

monkeypoximage.onclick =  function(){
    if (monkeypox.style.filter == 'blur(8px)'){
        monkeypox.style.filter = 'blur(0px)'
    }else{
        monkeypox.style.filter = 'blur(8px)'
    }
}


scabbiesimage.onclick = function(){
    if (scabbies.style.filter == 'blur(8px)'){
        scabbies.style.filter = 'blur(0px)'
    }else{
        scabbies.style.filter = 'blur(8px)'
    }
}
eczemaimage.onclick =function(){
    if (eczema.style.filter == 'blur(8px)'){
        eczema.style.filter = 'blur(0px)'
    }else{
        eczema.style.filter = 'blur(8px)'
    }
} 
acneimage.onclick = function(){
    if (acne.style.filter == 'blur(8px)'){
        acne.style.filter = 'blur(0px)'
    }else{
        acne.style.filter = 'blur(8px)'
    }
}
molluscumimage.onclick = function(){
    if (molluscum.style.filter == 'blur(8px)'){
        molluscum.style.filter = 'blur(0px)'
    }else{
        molluscum.style.filter = 'blur(8px)'
    }
}
herpesimage.onclick =function(){
    if (herpes.style.filter == 'blur(8px)'){
        herpes.style.filter = 'blur(0px)'
    }else{
        herpes.style.filter = 'blur(8px)'
    }
}

