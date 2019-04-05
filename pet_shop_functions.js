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
  },
  getCustomersCash: (customer) => {
    return customer.cash;
  },
  getCustomersCashTotal: (customers) => {
    let totalCash = 0;
    for (let customer of customers) {
      totalCash += customer.cash;
    }
    return totalCash;
  },
  removeCustomerCash: (customer, cash) => {
    customer.cash -= cash;
  },
  getCustomerPetCount: (customer) => {
    return customer.pets.length;
  },
  addPetToCustomer: (customer, newPet) => {
    customer.pets.push(newPet);
  },
  // EXTENSIONS
  customerCanAffordPet: (customer, newPet) => {
    return customer.cash >= newPet.price;
  },
  sellPetToCustomer: (shopname, pet, customer) => {
    myFunctions.addPetToCustomer(customer, pet)
    myFunctions.increasePetsSold(shopname, 1);
    myFunctions.removeCustomerCash(customer, pet.price);
    myFunctions.addOrRemoveCash(shopname, pet.price);
  }
  // Write your functions here
};

module.exports = myFunctions;
