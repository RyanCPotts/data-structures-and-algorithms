const { AnimalShelter } = require('../animalshelter');


describe('AnimalShelter', () => {
  let shelter;

  beforeEach(() => {
    shelter = new AnimalShelter();
  });

  test('should dequeue a cat based on preference', () => {

    const cat1 = { species: 'cat', name: 'Whiskers' };
    const cat2 = { species: 'cat', name: 'Felix' };
    shelter.enqueue(cat1);
    shelter.enqueue(cat2);


    const dequeuedCat = shelter.dequeue('cat');


    expect(dequeuedCat).toEqual(cat1);
    expect(shelter.catQueue.isEmpty()).toBe(false);
  });

  test('should dequeue a dog based on preference', () => {

    const dog1 = { species: 'dog', name: 'Rex' };
    const dog2 = { species: 'dog', name: 'Buddy' };
    shelter.enqueue(dog1);
    shelter.enqueue(dog2);


    const dequeuedDog = shelter.dequeue('dog');


    expect(dequeuedDog).toEqual(dog1);
    expect(shelter.dogQueue.isEmpty()).toBe(false);
  });

  test('should return null when trying to dequeue a bird', () => {

    const result = shelter.dequeue('bird');


    expect(result).toBeNull();
  });
});
