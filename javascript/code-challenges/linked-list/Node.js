// linked-list/Node.js
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

module.exports = Node;
// linked-list/__tests__/LinkedList.test.js
const LinkedList = require('../LinkedList');

describe('Linked List', () => {
  it('can successfully instantiate an empty linked list', () => {
    const list = new LinkedList();
    expect(list.head).toBeNull();
  });

  it('can properly insert into the linked list', () => {
    const list = new LinkedList();
    list.insert('a');
    expect(list.head.value).toBe('a');
  });

  it('the head property will properly point to the first node in the linked list', () => {
    const list = new LinkedList();
    list.insert('a');
    list.insert('b');
    expect(list.head.value).toBe('b');
    expect(list.head.next.value).toBe('a');
  });

  it('can properly insert multiple nodes into the linked list', () => {
    const list = new LinkedList();
    list.insert('a');
    list.insert('b');
    list.insert('c');
    expect(list.head.value).toBe('c');
    expect(list.head.next.value).toBe('b');
    expect(list.head.next.next.value).toBe('a');
  });

  it('will return true when finding a value within the linked list that exists', () => {
    const list = new LinkedList();
    list.insert('a');
    expect(list.includes('a')).toBe(true);
  });

  it('will return false when searching for a value in the linked list that does not exist', () => {
    const list = new LinkedList();
    list.insert('a');
    expect(list.includes('b')).toBe(false);
  });

  it('can properly return a collection of all the values that exist in the linked list', () => {
    const list = new LinkedList();
    list.insert('a');
    list.insert('b');
    list.insert('c');
    expect(list.toString()).toBe('{ c } -> { b } -> { a } -> NULL');
  });
});
