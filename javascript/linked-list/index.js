'use strict';


class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insert(value) {
    let newHead = new Node(value);
    newHead.next = this.head;
    this.head = newHead;
    // [a]=newHead
    // newHead.next = null
    // [a]->null
    // [b]=newHead
    // newHead.next = [a]
    // [b]->[a]->null
  }
  includes(targetValue) {
    let current = this.head;

    while (current !== null) {
      if (current.value === targetValue)
        return true;
      current = current.next;
    }
    return false;
  }
  toString() {
    let current = this.head;
    let list = '';

    while (current !== null) {
      list = list + `{ ${current.value} } ->`;
      current = current.next;
    }
    list = list + 'NULL';
    return list;
  }
}

module.exports = LinkedList;
