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
  }
  // Write your functions here
};

module.exports = myFunctions;
