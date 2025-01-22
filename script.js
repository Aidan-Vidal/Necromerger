// Gebäude brauchen eine Nummer, damit Daten korrekt ausgelesen werden können
let buildings = [
  "00_Grave_L5.webp",
  "01_Cupboard_L5.webp",
  "02_Altar_L5.webp",
  "03_Foul_Chicken_L5.webp",
  "04_Lectern_L5.webp",
  "05_Fridge_L5.webp",
  "06_Portal_L5.webp",
  "07_images_L5.webp",
  "08_Mana_Pool_L6.webp",
  "09_Slime_Vat_L6.webp",
  "10_Dark_Stores_L6.webp",
];
let forgotten_minios = [
  "Archdemon.webp",
  "Cyclops.webp",
  "Gorgon.webp",
  "Harpy.webp",
  "Lich.webp",
  "Reaper.webp",
  "Site-logo.webp",
];

function init() {
  RenderBuildings();
  RenderWantedButtons();
  RenderOwnedButtons();
}

function RenderBuildings() {
  let buildingsRef = document.getElementById("buildings");

  for (let index = 0; index < buildings.length; index++) {
    const building = buildings[index];

    buildingsRef.innerHTML += `<button class=building onclick="selected_building(${index})">${build_imglink(
      building
    )}</button>`;
  }
}

function build_imglink(building) {
  return `<img src="./img/${building}">`;
}

function RenderWantedButtons() {
  let buttonsRef = document.getElementById("wanted");

  for (let index = 0; index < 7; index++) {
    buttonsRef.innerHTML += `<button class=wanted_btn onclick="selected_wanted_btn(${index})">Level ${index}</button>`;
  }
}
function RenderOwnedButtons() {
  let buttonsRef = document.getElementById("needed");

  for (let index = 0; index < 7; index++) {
    buttonsRef.innerHTML += `<button class=owned_btn onclick="selected_owned_btn(${index})">Level ${index}</button>`;
  }
}
function calculate() {
  let metricsRef = document.getElementsByClassName("selected");
  if (metricsRef.length !== 3) {
    console.log("Es fehlt noch etwas...");
  } else {
    extract_data(metricsRef);    
  }
  // calc1 = pow(2, target - 1) * self.cost1 - pow(2, owned - 1) * self.cost1 if owned != 0 else pow(2, target - 1) * self.cost1
  // calc2 = pow(2, target - 1) * self.cost2 - pow(2, owned - 1) * self.cost2 if owned != 0 else pow(2, target - 1) * self.cost2
}

// 'building' liest die zweite Stelle des jeweiligen Gebäude-Strings aus (alles davor ist die img-Declaration)
// die beiden anderen Variablen überspringen den 'Level '-String und lesen die Nummer aus
function extract_data(array) {
  let building = array[0].innerHTML[17];
  let wanted = array[1].innerHTML[6];
  let owned = array[2].innerHTML[6];
  console.log(building,wanted,owned);
  
}

function selected_building(btn_num) {
  let buildingRef = document.getElementsByClassName("building");

  for (let index = 0; index < buildingRef.length; index++) {
    buildingRef[index].classList.remove("selected");
  }
  buildingRef[btn_num].classList.add("selected");
}

function selected_wanted_btn(btn_num) {
  let wantedRef = document.getElementsByClassName("wanted_btn");

  for (let index = 0; index < wantedRef.length; index++) {
    wantedRef[index].classList.remove("selected");
  }
  wantedRef[btn_num].classList.add("selected");
}

function selected_owned_btn(btn_num) {
  let ownedRef = document.getElementsByClassName("owned_btn");

  for (let index = 0; index < ownedRef.length; index++) {
    ownedRef[index].classList.remove("selected");
  }
  ownedRef[btn_num].classList.add("selected");
}
