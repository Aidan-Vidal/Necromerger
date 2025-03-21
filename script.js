function init() {
  RenderBuildings();
  RenderWantedButtons();
  RenderOwnedButtons();
}

function calculate() {
  document.getElementById('name').innerHTML = "";
  document.getElementById('rune1').innerHTML = "";
  document.getElementById('rune2').innerHTML = "";
  let metricsRef = document.getElementsByClassName("selected");
  if (metricsRef.length !== 3) {
    console.log("Es fehlt noch etwas...");
  } else {
    let building = metricsRef[0].innerHTML[17];
    let wanted = metricsRef[1].innerHTML[6];
    let owned = metricsRef[2].innerHTML[6];
    if (owned != 0) {
      calc1 = 2**(wanted-1)*calc_table[building].cost1-2**(owned-1)*calc_table[building].cost1;
      calc2 = 2 ** (wanted - 1) * calc_table[building].cost2 - 2 ** (owned - 1) * calc_table[building].cost2;
    } else {
      calc1 = 2 ** (wanted - 1) * calc_table[building].cost1;
      calc2 = 2 ** (wanted - 1) * calc_table[building].cost2;
    }
    document.getElementById('name').innerHTML = calc_table[building].name;
    document.getElementById('rune1').innerHTML = `${calc_table[building].rune1}<br>${calc1}`;
    if (calc2 != 0) {
      document.getElementById('rune2').innerHTML = `${calc_table[building].rune2}<br>${calc2}`;
    }
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