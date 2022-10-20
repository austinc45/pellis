let inputEczema = document.querySelector("#buttonEczema");
let inputAcne = document.querySelector("#buttonAcne");
let inputHerpes = document.querySelector("#buttonHerpes");
let inputScabbies = document.querySelector("#buttonScabbies");
let inputMonkey = document.querySelector("#buttonMonkey");
let inputMolluscum = document.querySelector("#buttonM");
let count = 0;
let imageSkin = document.querySelector("#image");
let answer;
let correct = 0;
let pDiv = document.querySelector("#resource");
let nextQ = document.querySelector("#next");
let paragraph = document.querySelector("#incorrect");
let noneP = document.querySelector("#none");
let website = document.querySelector('#link')
let end = document.createElement("p");
let imageTest = document.querySelector('#testMonkey')
let array = [
  "images/acne1.png",
  "images/monkeypox1.jpg",
  "images/scabies.jpg",
  "images/MolluscumC1.jpg",
  "images/monkeypox2.png",
  "images/herpes1.webp",
  "images/eczema1.jpg",
];
let quizLength = array.length;
let array2 = [
  "acne",
  "monkeypox",
  "scabbies",
  "Molluscum contagiosum",
  "monkeypox",
  "herpes",
  "eczema",
];
let wrong = [
  "https://www.mayoclinic.org/diseases-conditions/acne/symptoms-causes/syc-20368047",//acne
  "https://www.cdc.gov/poxvirus/monkeypox/symptoms.html",//monkey
  "https://www.cdc.gov/parasites/scabies/gen_info/faqs.html#:~:text=Scabies%20is%20an%20infestation%20of,a%20pimple%2Dlike%20skin%20rash.", //scabies
  "https://www.cdc.gov/poxvirus/molluscum-contagiosum/index.html",//molluscum
  "https://www.cdc.gov/poxvirus/monkeypox/symptoms.html",//monkey
  "https://www.cdc.gov/std/herpes/stdfact-herpes.htm",//herpes\
  'https://www.mayoclinic.org/diseases-conditions/atopic-dermatitis-eczema/symptoms-causes/syc-20353273#:~:text=Atopic%20dermatitis%20(eczema)%20is%20a,irritating%20but%20it%27s%20not%20contagious.'

];
let quizEnd = document.querySelector("#finish");

inputEczema.onclick = function () {
  answer = "eczema";
  if (answer == array2[count]) {
    correct++;
    paragraph.innerHTML = 'correct'
    paragraph.href = '#'
  } else {
    paragraph.innerHTML = "Click here for more information on: " + array2[count];;
    paragraph.href = wrong[count]
  }
};
inputAcne.onclick = function () {
  answer = "acne";
  if (answer == array2[count]) {
    console.log("correct");
    correct++;
    paragraph.innerHTML = 'correct'
    paragraph.href = '#'
  } else {
    paragraph.innerHTML = "Click here for more information on: " + array2[count];;
    paragraph.href = wrong[count]
  }
};
inputHerpes.onclick = function () {
  answer = "herpes";
  if (answer == array2[count]) {
    console.log("correct");
    correct++;
    paragraph.innerHTML = 'correct'
    paragraph.href = '#'
  } else {
    paragraph.innerHTML = "Click here for more information on: " + array2[count];;
    paragraph.href = wrong[count]
  }
};
inputMonkey.onclick = function () {
  answer = "monkeypox";
  if (answer == array2[count]) {
    console.log("correct");
    correct++;
    paragraph.innerHTML = 'correct'
    paragraph.href = '#'
  } else {
    paragraph.innerHTML = "Click here for more information on: " + array2[count];;
    paragraph.href = wrong[count]
  }
};
inputScabbies.onclick = function () {
  answer = "scabbies";
  if (answer == array2[count]) {
    console.log("correct");
    correct++;
    paragraph.innerHTML = 'correct'
    paragraph.href = '#'
  } else {
    paragraph.innerHTML = "Click here for more information on: " + array2[count];;
    paragraph.href = wrong[count]
  }
};
inputMolluscum.onclick = function () {
  answer = "Molluscum contagiosum";
  if (answer == array2[count]) {
    console.log("correct");
    correct++;
    paragraph.innerHTML = 'correct'
    paragraph.href = '#'
  } else {
    paragraph.innerHTML = "Click here for more information on: " + array2[count];
    paragraph.href = wrong[count]
  }
};
nextQ.onclick = function () {
  paragraph.innerHTML = "";
  count++;
  imageSkin.src = array[count];
  if (count == array.length) {
    noneP.style.display = "none";
    
    quizEnd.innerHTML =
      "Your score " +
      correct +
      "/" +
      quizLength +
      " was based on luck. It is very difficult to identify monkeypox based on the lesions. In order to identify monkeypox you need to get tested by your doctor.";
    imageTest.style.display = 'block'
  
  }
};

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