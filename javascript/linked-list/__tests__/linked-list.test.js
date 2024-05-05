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
