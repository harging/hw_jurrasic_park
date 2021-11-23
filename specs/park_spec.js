const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let dinosaur;
  beforeEach(function () {
    park = new Park ('Edinburgh ZOO', 10)
  })
  it('should have a name', function() {
    const actual = park.name;
    assert.equal(actual, 'Edinburgh ZOO')
    });

  it('should have a ticket price', function (){ 
    const actual = park.ticketPrice;
    assert.equal(actual, 10)
  });

  it('should have a collection of dinosaurs', function (){
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual(actual, []);
  });  

  it('should be able to add a dinosaur to its collection', function () {
    park.addDinosaur("T-Rex");
    const actual = park.collectionOfDinosaurs.length;
    assert.strictEqual(actual, 1)
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.addDinosaur("T-Rex");
    park.addDinosaur("Triceratops");
    park.removeDinosaurBySpecies("T-Rex");
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual(actual, ["Triceratops"]);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    park.addDinosaur("T-Rex", "Carnivore", 100);
    park.addDinosaur("Triceratops", "Herbivore", 90);
    const actual = park.collectionOfDinosaurs[0];
    assert.deepStrictEqual(actual, [100]);
  });

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
