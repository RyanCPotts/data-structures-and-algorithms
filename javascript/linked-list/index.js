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
    let newNodeCreated = new Node(value);

    if (!this.head) {
      this.head = newNodeCreated;
      return;
    } else if (this.head.value) {
      newNodeCreated.next = this.head;
      this.head = newNodeCreated;
    }
  }

  includes(searchValue) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === searchValue) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  toString() {
    let resultsArray = [];
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value) {
        resultsArray.push(currentNode.value);
        currentNode = currentNode.next;
      }
    }
    return resultsArray;
  }
}

module.exports = LinkedList;
