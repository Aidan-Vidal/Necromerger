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
  let legendary_minios = [
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
    'cost2' : 0,
    'img' : '00_Grave_L5.webp'
  }
  
  const cupboard = {
    'name' : 'Supply Cupboard',
    'rune1' : 'Poison Runes',
    'cost1' : 20,
    'rune2' : "",
    'cost2' : 0,
    'img' : '01_Cupboard_L5.webp'
  }
  const altar = {
    'name' : 'Altar',
    'rune1' : 'Blood Runes',
    'cost1' : 20,
    'rune2' : "",
    'cost2' : 0,
    'img' : '02_Altar_L5.webp'
  }
  const foul_chicken = {
    'name' : 'Foul Chicken',
    'rune1' : "Poison Runes",
    'cost1' : 15,
    'rune2' : "Ice Runes",
    'cost2' : 30,
    'img' : '03_Foul_Chicken_L5.webp'
  }
  const lectern = {
    'name' : 'Lectern',
    'rune1' : "Moonlight Runes",
    'cost1' : 20,
    'rune2' : "Ice Runes",
    'cost2' : 50,
    'img' : '04_Lectern_L5.webp'
  }
  const frigde = {
    'name' : 'Fridge',
    'rune1' : "Moonlight Runes",
    'cost1' : 20,
    'rune2' : "Poison Runes",
    'cost2' : 50,
    'img' : '05_Fridge_L5.webp'
  }
  const portal = {
    'name' : 'Portal',
    'rune1' : "Blood Runes",
    'cost1' : 30,
    'rune2' : "Death Runes",
    'cost2' : 30,
    'img' : '06_Portal_L5.webp'
  }
  const crashed_saucer = {
    'name' : 'Crashed Saucer',
    'rune1' : "Cosmic Runes",
    'cost1' : 20,
    'rune2' : "",
    'cost2' : 0,
    'img' : '07_images_L5.webp'
  }
  const mana_pool = {
    'name' : 'Mana Pool',
    'rune1' : "Poison Runes",
    'cost1' : 5,
    'rune2' : "Ice Runes",
    'cost2' : 10,
    'img' : '08_Mana_Pool_L6.webp'
  }
  const slime_vat = {
    'name' : 'Slime Vat',
    'rune1' : "Blood Runes",
    'cost1' : 5,
    'rune2' : "Poison Runes",
    'cost2' : 10,
    'img' : '09_Slime_Vat_L6.webp'
  }
  const dark_stores = {
    'name' : 'Dark Stores',
    'rune1' : "Moonlight Runes",
    'cost1' : 5,
    'rune2' : "Blood Runes",
    'cost2' : 10,
    'img' : '10_Dark_Stores_L6.webp'
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