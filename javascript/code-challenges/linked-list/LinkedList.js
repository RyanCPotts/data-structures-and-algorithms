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
      const newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode;
  }

  includes(value) {
      let current = this.head;
      while (current) {
          if (current.value === value) {
              return true;
          }
          current = current.next;
      }
      return false;
  }

  toString() {
      let current = this.head;
      let string = '';
      while (current) {
          string += `{ ${current.value} } -> `;
          current = current.next;
      }
      return string + 'NULL';
  }

  append(value) {
      const newNode = new Node(value);
      if (!this.head) {
          this.head = newNode;
          return;
      }
      let current = this.head;
      while (current.next) {
          current = current.next;
      }
      current.next = newNode;
  }

  insertBefore(value, newValue) {
      const newNode = new Node(newValue);
      if (!this.head) return;
      if (this.head.value === value) {
          newNode.next = this.head;
          this.head = newNode;
          return;
      }
      let current = this.head;
      while (current.next && current.next.value !== value) {
          current = current.next;
      }
      if (current.next) {
          newNode.next = current.next;
          current.next = newNode;
      }
  }

  insertAfter(value, newValue) {
      const newNode = new Node(newValue);
      let current = this.head;
      while (current && current.value !== value) {
          current = current.next;
      }
      if (current) {
          newNode.next = current.next;
          current.next = newNode;
      }
  }

  kthFromEnd(k) {
      if (k < 0) throw new Error('k must be a positive integer');
      let length = 0;
      let current = this.head;
      while (current) {
          length++;
          current = current.next;
      }
      if (k >= length) throw new Error('k is greater than the length of the linked list');
      current = this.head;
      for (let i = 0; i < length - k - 1; i++) {
          current = current.next;
      }
      return current.value;
  }
}

module.exports = LinkedList;
