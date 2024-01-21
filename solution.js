const { nums, words } = require("./data/data.js");

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let count = 0;
    let node = this.head;

    while (node) {
      count++;
      node = node.next;
    }

    return count;
  }

  delete(key) {
    if (!this.head) {
      return;
    }

    if (this.head.data === key) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    let prev = null;

    while (current && current.data !== key) {
      prev = current;
      current = current.next;
    }

    if (!current) {
      return;
    }

    prev.next = current.next;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let current = this.head;
    while (current && current.next) {
      current = current.next;
    }
    return current;
  }

  search(key) {
    let current = this.head;
    while (current !== null && current.data !== key) {
      
      current = current.next;
    }
    return current;
  }

  

  getKth(k) {
    let current = this.head;
    for (let i = 0; i < k; i++) {
      if (!current) {
        return;
      }
      current === current.next;
    }
    return current;
  }
  
  getKthToLast(k) {
    let slow = this.head;
    let fast = this.head;

    for (let i = 0; i < k; i++) {
      if (!fast) {
        return null;
      }
      fast = fast.next;
    }

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next;
    }

    return slow;
  }

  isEmpty() {
    return this.head === null;
  }

  clear() {
    this.head = null;
  }

  toArray() {
    let result = [];
    let current = this.head;

    while (current) {
      result.push(current.data);
      current = current.next;
    }

    return result;
  }

  containsDuplicates() {
    let seen = new Set();
    let current = this.head;

    while (current) {
      if (seen.has(current.data)) {
        return true;
      }
      seen.add(current.data);
      current = current.next;
    }

    return false;
  }
}

module.exports = {
  Node,
  LinkedList,
};
