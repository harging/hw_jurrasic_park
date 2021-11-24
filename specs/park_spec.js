const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');
const { it } = require('mocha');

describe('Park', function() {

  let dinosaur;
  let park;
  let dino1;
  let dino2;
  let dino3;
  let dino4;
  let dino5;
  let dino6;

  beforeEach(function () {

    park = new Park ('Edinburgh ZOO', 10);
    dino1 = new Dinosaur('T-Rex', 'Carnivore', 100);
    dino2 = new Dinosaur('Velociraptor', 'Carnivore', 70);
    dino3 = new Dinosaur('Triceratops', 'Herbivore', 50);
    dino4 = new Dinosaur('Diplodocus', 'Herbivore', 90);
    dino5 = new Dinosaur('Diplodocus', 'Herbivore', 92);
    dino6 = new Dinosaur('Diplodocus', 'Herbivore', 80);

  });

  it('should have a name', function() {
    const actual = park.name;
    assert.equal(actual, 'Edinburgh ZOO')
    });

  it('should have a ticket price', function () { 
    const actual = park.ticketPrice;
    assert.equal(actual, 10)
  });

  it('should have a collection of dinosaurs', function () {
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
    park.addDinosaur(dino1);
    park.addDinosaur(dino2);
    const actual = park.getMostPopular();
    assert.deepStrictEqual(actual, dino1);
  });

  it('should be able to find all dinosaurs of a particular species', function () {
    park.addDinosaur(dino1);
    park.addDinosaur(dino2);
    park.addDinosaur(dino3);
    park.addDinosaur(dino4);
    park.addDinosaur(dino5);
    park.addDinosaur(dino6);
    const actual = park.findSpecies('Diplodocus')
    assert.deepStrictEqual(actual, [dino4, dino5, dino6]);
  });

  it('should be able to calculate the total number of visitors per day', function () {
    park.addDinosaur(dino1);
    park.addDinosaur(dino2);
    park.addDinosaur(dino3);
    park.addDinosaur(dino4);
    park.addDinosaur(dino5);
    park.addDinosaur(dino6);
    const actual = park.visitsDaily()
    assert.deepStrictEqual(actual, 492);
  });

  it('should be able to calculate the total number of visitors per year', function () {
    park.addDinosaur(dino1);
    park.addDinosaur(dino2);
    park.addDinosaur(dino3);
    park.addDinosaur(dino4);
    park.addDinosaur(dino5);
    park.addDinosaur(dino6);
    const actual = park.visitsYearly()
    assert.deepStrictEqual(actual, 179580);
  });

  it('should be able to calculate total revenue for one year', function () {
    park.addDinosaur(dino1);
    park.addDinosaur(dino2);
    park.addDinosaur(dino3);
    park.addDinosaur(dino4);
    park.addDinosaur(dino5);
    park.addDinosaur(dino6);
    const actual = park.annualRevenue()
    assert.deepStrictEqual(actual, 1795800);
  });

});
