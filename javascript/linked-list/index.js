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

  linkedListZip(ll1, ll2) {
    if (ll1.head === null && ll2.head === null) {
      return null;
    }
    else if (ll1.head === null) {
      return ll2;
    }
    else if (ll2.head === null) {
      return ll1;
    }

    const newLL = new LinkedList();
    let current1 = ll1.head;
    let current2 = ll2.head;

    while (current1 || current2) {
      if (current1) {
        newLL.append(current1.value);
        current1 = current1.next;
      }
      if (current2) {
        newLL.append(current2.value);
        current2 = current2.next;
      }
    }
    return newLL;
  }



}

module.exports = LinkedList;
