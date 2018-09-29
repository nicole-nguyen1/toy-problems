class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

module.exports = class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }

    let current = this.head;

    this.head = current.next;
    this.length--;

    return current;
  }

  unshift(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let current = this.head;
    let count = 0;

    while (current.next) {
      if (count === index) {
        return current.val;
      }

      current = current.next;
      count++;
    }

    return current;
  } 

  set(val, index) {
    let node = this.get(index);

    if (node) {
      node.val = val;
      return true;
    }

    return false;
  }

  insert(val, index) {
    if (index < 0 || index > this.length) {
      return false;
    } else if (index === this.length) {
      this.push(new Node(val));
    } else if (index === 0) {
      this.unshift(new Node(val));
    } else {
      let node = this.get(index - 1);
      let newNode = new Node(val);
      let temp = node.next;

      node.next = newNode;
      newNode.next = temp;
    }

    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) {
      return undefined;
    } else if (index === this.length - 1) {
      this.pop();
    } else if (index === 0) {
      this.shift();
    } else {
      let node = this.get(index - 1);
      let removed = node.next;

      node.next = removed.next;
      this.length--;
      return removed;
    }
  }

  reverse() {
    //swap head and tail
    let node = this.head;

    this.head = this.tail;
    this.tail = node;

    let next;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
  }
}

let list = new LinkedList();
list.push('Hello');
list.push('Bye');
list.push('nevermind');
console.log(list);
list.reverse();
