'use strict';

// Require our linked list implementation
const LinkedList = require('../index');

describe('Linked List', () => {
  it('works', () => {
    expect(true).toBeTruthy();
  });


  it('should insert a value', () => {
    let sampleLL = new LinkedList();
    sampleLL.insert('apple');
    sampleLL.insert('mango');
    sampleLL.insert('strawberry');
    expect(sampleLL.head.value).toEqual('strawberry');
    expect(sampleLL.head.next.value).toEqual('mango');


  });

  it('should include a value', () => {
    let sampleLL = new LinkedList();
    sampleLL.insert('apple');
    sampleLL.insert('mango');
    sampleLL.insert('strawberry');
    expect(sampleLL.includes('mango')).toBe(true);
  });
}
);



describe('LinkedList', () => {

  let list;

  beforeEach(() => {
    list = new LinkedList();
  });

  test('Can successfully instantiate an empty linked list', () => {
    expect(list.head).toBeNull();
  });

  test('Can properly insert into the linked list', () => {
    list.insert('a');
    expect(list.head.value).toBe('a');
    expect(list.head.next).toBeNull();
  });

  test('The head property will properly point to the first node in the linked list', () => {
    list.insert('a');
    list.insert('b');
    expect(list.head.value).toBe('b');
    expect(list.head.next.value).toBe('a');
  });

  test('Can properly insert multiple nodes into the linked list', () => {
    list.insert('a');
    list.insert('b');
    list.insert('c');
    expect(list.head.value).toBe('c');
    expect(list.head.next.value).toBe('b');
    expect(list.head.next.next.value).toBe('a');
    expect(list.head.next.next.next).toBeNull();
  });

  test('Will return true when finding a value within the linked list that exists', () => {
    list.insert('a');
    list.insert('b');
    list.insert('c');
    expect(list.includes('b')).toBe(true);
    expect(list.includes('a')).toBe(true);
    expect(list.includes('c')).toBe(true);
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
});
