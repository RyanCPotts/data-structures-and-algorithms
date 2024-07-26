'use strict';

const LinkedList = require('../index.js');

describe('LinkedList', () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
  });

  test('Can successfully instantiate an empty linked list', () => {
    expect(list.head).toBe(null);
  });

  test('Can properly insert into the linked list', () => {
    list.insert('a');
    expect(list.head.value).toBe('a');
  });

  test('The head property will properly point to the first node in the linked list', () => {
    list.insert('a');
    list.insert('b');
    expect(list.head.value).toBe('b');
  });

  test('Can properly insert multiple nodes into the linked list', () => {
    list.insert('a');
    list.insert('b');
    list.insert('c');
    expect(list.head.value).toBe('c');
    expect(list.head.next.value).toBe('b');
    expect(list.head.next.next.value).toBe('a');
  });

  test('Will return true when finding a value within the linked list that exists', () => {
    list.insert('a');
    list.insert('b');
    list.insert('c');
    expect(list.includes('b')).toBe(true);
  });

  test('Will return false when searching for a value in the linked list that does not exist', () => {
    list.insert('a');
    list.insert('b');
    list.insert('c');
    expect(list.includes('d')).toBe(false);
  });

  test('Can properly return a collection of all the values that exist in the linked list', () => {
    list.insert('a');
    list.insert('b');
    list.insert('c');
    expect(list.toString()).toBe('{ c } ->{ b } ->{ a } ->NULL');
  });

  test('Can zip two linked lists together when both have multiple elements', () => {
    let list1 = new LinkedList();
    let list2 = new LinkedList();

    list1.insert('a');
    list1.insert('b');
    list1.insert('c');

    list2.insert('1');
    list2.insert('2');
    list2.insert('3');

    let zippedList = new LinkedList();
    zippedList = zippedList.linkedListZip(list1, list2);

    expect(zippedList.toString()).toBe('{ c } ->{ 3 } ->{ b } ->{ 2 } ->{ a } ->{ 1 } ->NULL');
  });

  test('Can zip two linked lists together when one list is empty', () => {
    let list1 = new LinkedList();
    let list2 = new LinkedList();

    list1.insert('a');
    list1.insert('b');
    list1.insert('c');

    let zippedList = new LinkedList();
    zippedList = zippedList.linkedListZip(list1, list2);

    expect(zippedList.toString()).toBe('{ c } ->{ b } ->{ a } ->NULL');
  });

  test('Can zip two linked lists together when both lists are empty', () => {
    let list1 = new LinkedList();
    let list2 = new LinkedList();

    let zippedList = new LinkedList();
    zippedList = zippedList.linkedListZip(list1, list2);

    expect(zippedList).toBe(null);
  });
});
