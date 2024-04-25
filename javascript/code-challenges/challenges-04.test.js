'use strict';

/* ------------------------------------------------------------------------------------------------
These objects and arrays are global and will be used for each assignment. DO NOT ALTER THEM
------------------------------------------------------------------------------------------------ */

const people = ['Kookla', 'Fran', 'Ollie'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toys: 57,
  toothbrush: 'frayed',
  cars: ['Toyota', 'Mazda']
}

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1

In the addPeople function, use spread and destructuring assignments to:
  - Create a new as a copy of the people array
  - Add a person named 'Odie' added to the beginning of the array
  - Add another one named 'Garfield' added to the end of the array
  - Return the new array

Prove that the original people array is unchanged

------------------------------------------------------------------------------------------------ */

const addPeople = (arr) => {
  // Create a copy of the people array using spread operator
  const newArr = [...arr];

  // Add 'Odie' to the beginning of the array
  newArr.unshift('Odie');

  // Add 'Garfield' to the end of the array
  newArr.push('Garfield');

  // Return the new array
  return newArr;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

In the setSate function, use spread and destructuring assignments to:
  - Create and return a state object with 2 keys:
    people, which will contain a copy of the people array
    stuff, which will contain a copy of the stuff object
  - Return the state object that you've created

Ensure that the original people array and stuff objects are unchanged

------------------------------------------------------------------------------------------------ */

const setState = (arr, obj) => {
  // Create copies of the people array and stuff object using spread operator
  const peopleCopy = [...arr];
  const stuffCopy = {...obj};

  // Create and return a state object with the copied arrays and object
  return { people: peopleCopy, stuff: stuffCopy };
};


/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

In the newState function, use only spread and destructuring assignments to:
  - Create and return a state object with 2 keys:
    people, which will contain a copy of the people array
    stuff, which will contain a copy of the stuff object
    Add a new car ("Ford") added to the list of cars
    Change the toothbrush from "frayed" to "brand new"
    Add 1 to the number of toys
  - Return the new object that you've created

Ensure that the original people array and stuff objects are unchanged

------------------------------------------------------------------------------------------------ */

const newState = (arr, obj) => {
  // Create copies of the people array and stuff object using spread operator
  const peopleCopy = [...arr];
  const stuffCopy = {...obj};

  // Add a new car ("Ford") to the copied stuff object's cars array
  const updatedCars = [...stuffCopy.cars, "Ford"];

  // Change the toothbrush from "frayed" to "brand new" in the copied stuff object
  const updatedStuff = {...stuffCopy, toothbrush: "brand new"};

  // Add 1 to the number of toys in the copied stuff object
  const updatedToys = stuffCopy.toys + 1;

  // Create and return a state object with the copied arrays and updated object properties
  return { people: peopleCopy, stuff: {...updatedStuff, cars: updatedCars, toys: updatedToys} };
};


/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code.

Run your tests from the console: jest challenges-03.test.js
------------------------------------------------------------------------------------------------ */


describe('Testing challenge 1', () => {
  test('It should return a copy of the people array with 2 new values', () => {
    const orig = ['Kookla', 'Fran', 'Ollie'];
    const expected = ['Odie', 'Kookla', 'Fran', 'Ollie', 'Garfield'];
    const copy = addPeople(orig);
    expect(copy).toStrictEqual(expected);
    expect(orig).toStrictEqual(people);
  });
});

describe('Testing challenge 2', () => {
  test('It should return a state object with 2 keys', () => {
    const originalPeople = ['Kookla', 'Fran', 'Ollie'];
    const originalStuff = {
      tv: 'huge',
      radio: 'old',
      toys: 57,
      toothbrush: 'frayed',
      cars: ['Toyota', 'Mazda']
    }
    const expected = {people: originalPeople, stuff: originalStuff};
    const copy = setState(originalPeople, originalStuff);
    expect(copy).toStrictEqual(expected);
    expect(originalPeople).toStrictEqual(people);
    expect(originalStuff).toStrictEqual(stuff);
  });
});

describe('Testing challenge 3', () => {
  test('It should return a state object with 2 keys and new values', () => {
    const originalPeople = ['Kookla', 'Fran', 'Ollie'];
    const originalStuff = {
      tv: 'huge',
      radio: 'old',
      toys: 57,
      toothbrush: 'frayed',
      cars: ['Toyota', 'Mazda']
    }
    const expected = {
      people: ['Kookla', 'Fran', 'Ollie'],
      stuff: {
        tv: 'huge',
        radio: 'old',
        toys: 58,
        toothbrush: 'brand new',
        cars: ['Toyota', 'Mazda', 'Ford']
      }
    }
    const copy = newState(originalPeople, originalStuff);
    expect(copy).toStrictEqual(expected);
    expect(originalPeople).toStrictEqual(people);
    expect(originalStuff).toStrictEqual(stuff);
  });
});
