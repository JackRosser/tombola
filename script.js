let form = document.querySelector("form");
let formValue = 0;
let section = document.querySelector("section");

// Processo di creazione tabelle
let createUl = function (value) {
  for (let i = 0; i < value; i++) {
    let ul = document.createElement("ul");
    let celle = [];
    for (let j = 1; j < 16; j++) {
      let randomCells = Math.ceil(Math.random() * 76);
      celle.push(j);
      let li = document.createElement("li");
      li.textContent = randomCells;
      ul.appendChild(li);
    }

    section.appendChild(ul);
  }
};

let start = function (e) {
  e.preventDefault();
  let inputTypeNumber = document.getElementById("tabelle");
  if (inputTypeNumber.value !== "") {
    formValue = inputTypeNumber.value;
    form.style.display = "none";
    createUl(formValue);
  } else {
    alert("Scrivi qualcosa");
  }
};

form.addEventListener("submit", start);

let sacchetto = document.getElementById("sacchetto");

let sacchettoBox = [];
for (let i = 1; i <= 76; i++) {
  sacchettoBox.push(i);
}

sacchetto.addEventListener("click", function () {
  let randomIndex = Math.floor(Math.random() * sacchettoBox.length);
  let randomCells = sacchettoBox[randomIndex];
  let monetina = document.createElement("div");
  monetina.className = "numero_uscito";
  let tabellone = document.getElementById("tabellone");
  monetina.innerText = randomCells;

  sacchettoBox.splice(randomIndex, 1);

  tabellone.appendChild(monetina);

  let liElements = document.querySelectorAll("ul li");
  liElements.forEach(function (li) {
    if (li.innerText === monetina.innerText) {
      li.className = "li_selected";
    }

    //death
    if (sacchettoBox.length === 0) {
      sacchetto.addEventListener("click", function () {
        alert("non ci sono più numeri, smettila!");
        alert.remove();
      });
    }
  });
});
