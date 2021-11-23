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

Park.prototype.getMostPopular = function (collectionOfDinosaurs) {
    var popular = [];
    for (var dinosaur in collectionOfDinosaurs) {
        var value = dinosaur[guestsAttractedPerDay];
        popular.push(value);
    }
    popular.sort(function (a, b) {return b-a});
    return popular[0];
}
  module.exports = Park;