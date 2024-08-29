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

console.log(form);

let sacchetto = document.getElementById("sacchetto");

sacchetto.addEventListener("click", function () {
  let randomCells = Math.ceil(Math.random() * 76);
  let monetina = document.createElement("div");
  monetina.className = "numero_uscito";
  monetina.innerText = randomCells;
  let tabellone = document.getElementById("tabellone");
  tabellone.appendChild(monetina);
  let li = document.querySelector("li");
  if (li.innerText === monetina.innerText) {
    li.className = "li_selected";
  }
});
