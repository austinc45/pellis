let inputEczema = document.querySelector("#buttonEczema");
let inputAcne = document.querySelector("#buttonAcne");
let inputHerpes = document.querySelector("#buttonHerpes");
let inputScabbies = document.querySelector("#buttonScabbies");
let inputMonkey = document.querySelector("#buttonMonkey");
let inputMolluscum = document.querySelector("#buttonM");
let count = 0;
let imageSkin = document.querySelector("#image");
let answer;
let correct;
let pDiv = document.querySelector("#resource");
let nextQ = document.querySelector("#next");
let paragraph = document.querySelector("#incorrect");
let noneP = document.querySelector("#none");
let array = [
  "images/acne1.png",
  "images/monkeypox1.jpg",
  "images/scabies.jpg",
  "images/MolluscumC1.jpg",
  "images/monkeypox2.jpg",
];
let array2 = [
  "acne",
  "monkeypox",
  "scabbies",
  "Molluscum contagiosum",
  "monkeypox",
];
let wrong = ["wrong", "wrong", "wrong", "wrong", "wrong"];
let quizEnd = document.querySelector("#finish");

inputEczema.onclick = function () {
  answer = "eczema";
  if (answer == array2[count]) {
    console.log("correct");
    correct++;
  } else {
    paragraph.innerHTML = wrong[count];
  }
};
inputAcne.onclick = function () {
  answer = "acne";
  if (answer == array2[count]) {
    console.log("correct");
    correct++;
  } else {
    paragraph.innerHTML = wrong[count];
  }
};
inputHerpes.onclick = function () {
  answer = "herpes";
  if (answer == array2[count]) {
    console.log("correct");
    correct++;
  } else {
    paragraph.innerHTML = wrong[count];
  }
};
inputMonkey.onclick = function () {
  answer = "monkeypox";
  if (answer == array2[count]) {
    console.log("correct");
    correct++;
  } else {
    paragraph.innerHTML = wrong[count];
  }
};
inputScabbies.onclick = function () {
  answer = "scabbies";
  if (answer == array2[count]) {
    console.log("correct");
    correct++;
  } else {
    paragraph.innerHTML = wrong[count];
  }
};
inputMolluscum.onclick = function () {
  answer = "Molluscum contagiosum";
  if (answer == array2[count]) {
    console.log("correct");
    correct++;
  } else {
    paragraph.innerHTML = wrong[count];
  }
};
nextQ.onclick = function () {
  paragraph.innerHTML = "";
  count++;
  imageSkin.src = array[count];
  if (count == array.length) {
    noneP.style.display = "none";
    let end = document.createElement("p");
    end.innerHTML = "your score was based on luck";
    quizEnd.appendChild(end);
    console.log(end)
    console.log(quizEnd)
  }
};
