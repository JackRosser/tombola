let form = document.querySelector("form");
let start = function (e) {
  e.preventDefault();
  let inputTypeNumber = document.getElementById("tabelle");
  if (inputTypeNumber.value !== "") {
    form.remove();
  } else {
    alert("Scrivi qualcosa");
  }
};

form.addEventListener("submit", start);
