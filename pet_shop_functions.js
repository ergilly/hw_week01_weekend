myFunctions = {
  getName: (shopname) => {
    return shopname.name;
  },
  getTotalCash: (shopname) => {
    return shopname.admin.totalCash;
  },
  addOrRemoveCash: (shopname, cash) => {
    shopname.admin.totalCash += cash;
  },
  getPetsSold: (shopname) => {
    return shopname.admin.petsSold;
  },
  increasePetsSold: (shopname, number) => {
    shopname.admin.petsSold += number;
  },
  getStockCount: (shopname) => {
    return shopname.pets.length;
  },
  getPetsByBreed: (shopname, breed) => {
    let numOfPets = 0;

    for (let pet of shopname.pets) {
      if (breed == pet.breed) {
        numOfPets++;
        console.log(numOfPets);
      }
    }
    return numOfPets;
  },
  getPetByName: (shopname, petName) => {
    for (let pet of shopname.pets) {
      if (petName == pet.name) {
        return pet;
      }
    }
  },
  removePetByName: (shopname, petName) => {
    for (var i = 0; i < shopname.pets.length; i++) {
      if (petName == shopname.pets[i].name) {
        shopname.pets.splice(i, 1);
      }
    }
  },
  addPetToStock: (shopname, newPet) => {
    shopname.pets.push(newPet);
  }
  // Write your functions here
};

module.exports = myFunctions;
