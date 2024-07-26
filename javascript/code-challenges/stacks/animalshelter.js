const {Queue} = require('./Queue.js');


class AnimalShelter {
  constructor() {
    this.catQueue = new Queue();
    this.dogQueue = new Queue();
  }
  enqueue(animal) {
    if (!(animal.species === "dog" || animal.species === "cat"))
      return null;
    else if (animal.species === "dog") {
      this.dogQueue.enqueue(animal);
    }
    else if (animal.species === "cat") {
      this.catQueue.enqueue(animal);
    }
  }
  dequeue(pref) {
    if (!(pref === "dog" || pref === "cat"))
      return null;
    else if (pref === "dog") {
      return this.dogQueue.dequeue();
    }
    else if (pref === "cat") {
      return this.catQueue.dequeue();
    }
  }

}
module.exports = {AnimalShelter};
