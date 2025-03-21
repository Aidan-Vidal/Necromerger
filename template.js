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