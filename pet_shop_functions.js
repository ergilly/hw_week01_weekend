myFunctions = {
  getName: (shopname) => {
    return shopname.name;
  },
  getTotalCash: (shopname) => {
    return shopname.admin.totalCash;
  },
  addOrRemoveCash: (shopname, cash) => {
    shopname.admin.totalCash = shopname.admin.totalCash + cash;
  },
  getPetsSold: (shopname) => {
    return shopname.admin.petsSold;
  },
  increasePetsSold: (shopname, number) => {
    shopname.admin.petsSold = shopname.admin.petsSold + number;
  }
  // Write your functions here
};

module.exports = myFunctions;
