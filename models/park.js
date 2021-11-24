const Dinosaur = require('./dinosaur')

const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.collectionOfDinosaurs = [];
  }

Park.prototype.addDinosaur = function (dinosaur) {
    return this.collectionOfDinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaurBySpecies = function (dinosaurSpecies) {
    const indexOfDinosaur = this.collectionOfDinosaurs.indexOf(dinosaurSpecies);
    this.collectionOfDinosaurs.splice(indexOfDinosaur, 1);
};

Park.prototype.getMostPopular = function () {
    let mostPopular = this.collectionOfDinosaurs[0];
    
    for (const dino of this.collectionOfDinosaurs) {
        if (dino.guestsAttractedPerDay > mostPopular.guestsAttractedPerDay) {
            mostPopular = dino;
    }
  }

    return mostPopular;
};

  Park.prototype.findSpecies = function (species) {
    const oneSpecies = [];

    for (const dino of this.collectionOfDinosaurs) {
    if (dino.species === species) {
      oneSpecies.push(dino);
    }
  } 
  
    return oneSpecies;
};

Park.prototype.visitsDaily = function () {
    let visitors = 0;

  for (const dino of this.collectionOfDinosaurs) {
    visitors += this.collectionOfDinosaurs.guestsAttractedPerDay;
  }

  return visitors;
};

Park.prototype.visitsYearly = function () {
    const visitorsYearly = this.visitsDaily() * 365
    return visitorsYearly
};

Park.prototype.annualRevenue = function () {
    const revenueYearly = this.visitsDaily() * this.ticketPrice
    return revenueYearly
};

  module.exports = Park;