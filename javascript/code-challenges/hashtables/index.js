'use strict';

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
};

class HashTable {
  constructor() {
    this.map = {};
  }

  set(key, value) {
    const hashKey = this.hash(key);
    this.map[hashKey] = value;
  }

  has(key) {
    return this.hash(key) in this.map;
  }

  get(key) {
    if (this.map[this.hash(key)]) {
      return this.map[this.hash(key)];
    }
    else {
      return null;
    }
  }

  keys() {
    return Object.keys(this.map);
  }

  hash(key) {
    let hashKey = 0;
    for (let i = 0; i < key.length; i++) {
      hashKey += (key.charCodeAt(i) * 13);
    }
    return hashKey;
  }

}
