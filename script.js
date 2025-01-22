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
const grave = {
  'name' : 'Grave',
  'rune1' : "Ice Runes",
  'cost1' : 20,
  'rune2' : "",
  'cost2' : 0
}

const cupboard = {
  'name' : 'Supply Cupboard',
  'rune1' : 'Poison Runes',
  'cost1' : 20,
  'rune2' : "",
  'cost2' : 0
}
const altar = {
  'name' : 'Altar',
  'rune1' : 'Blood Runes',
  'cost1' : 20,
  'rune2' : "",
  'cost2' : 0
}
const foul_chicken = {
  'name' : 'Foul Chicken',
  'rune1' : "Poison Runes",
  'cost1' : 15,
  'rune2' : "Ice Runes",
  'cost2' : 30
}
const lectern = {
  'name' : 'Lectern',
  'rune1' : "Moonlight Runes",
  'cost1' : 20,
  'rune2' : "Ice Runes",
  'cost2' : 50
}
const frigde = {
  'name' : 'Fridge',
  'rune1' : "Moonlight Runes",
  'cost1' : 20,
  'rune2' : "Poison Runes",
  'cost2' : 50
}
const portal = {
  'name' : 'Portal',
  'rune1' : "Blood Runes",
  'cost1' : 30,
  'rune2' : "Death Runes",
  'cost2' : 30
}
const crashed_saucer = {
  'name' : 'Crashed Saucer',
  'rune1' : "Cosmic Runes",
  'cost1' : 20,
  'rune2' : "",
  'cost2' : 0
}
const mana_pool = {
  'name' : 'Mana Pool',
  'rune1' : "Poison Runes",
  'cost1' : 5,
  'rune2' : "Ice Runes",
  'cost2' : 10
}
const slime_vat = {
  'name' : 'Slime Vat',
  'rune1' : "Blood Runes",
  'cost1' : 5,
  'rune2' : "Poison Runes",
  'cost2' : 10
}
const dark_stores = {
  'name' : 'Dark Stores',
  'rune1' : "Moonlight Runes",
  'cost1' : 5,
  'rune2' : "Blood Runes",
  'cost2' : 10
}
const calc_table = {
  '0' : grave,
  '1' : cupboard,
  '2' : altar,
  '3' : foul_chicken,
  '4' : lectern,
  '5' : frigde,
  '6' : portal,
  '7' : crashed_saucer,
  '8' : mana_pool,
  '9' : slime_vat,
  '10':dark_stores
}

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

    // 'building' liest die zweite Stelle des jeweiligen Gebäude-Strings aus (alles davor ist die img-Declaration)
    // die beiden anderen Variablen überspringen den 'Level '-String und lesen die Nummer aus
    let building = metricsRef[0].innerHTML[17];
    let wanted = metricsRef[1].innerHTML[6];
    let owned = metricsRef[2].innerHTML[6];
    if (owned !== 0) {
      calc1 = 2 ** wanted - 1 * calc_table[building].cost1 - 2 ** owned - 1 * calc_table[building].cost1;
      calc2 = 2 ** wanted - 1 * calc_table[building].cost2 - 2 ** owned - 1 * calc_table[building].cost2;
    } else {
      calc1 = 2 ** wanted - 1 * building.cost1;
      calc2 = 2 ** wanted - 1 * building.cost2;
    }
    document.getElementById('name').innerHTML = calc_table[building].name;
    document.getElementById('rune1').innerHTML = `${calc_table[building].rune1}<br>${calc1}`;
    document.getElementById('rune2').innerHTML = `${calc_table[building].rune2}<br>${calc2}`;
  }
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
