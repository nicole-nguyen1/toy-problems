const Queue = require('./queue');

class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(val) {
    this.root = val;
  }

  BFS() {
    let queue = new Queue();
    let data = [];

    queue.enqueue(this.root);

    while (queue) {
      let node = queue.dequeue();
      data.push(node);

      if (node.left) {
        queue.enqueue(node.left);
      }

      if (node.right) {
        queue.enqueue(node.right);
      }
    }

    return data;
  }

  DFSPreOrder() {
    let data = [];

    const traverse = (node) => {
      data.push(node);

      if (node.left) {
        traverse(node.left);
      }

      if (node.right) {
        traverse(node.right);
      }
    }

    traverse(this.root);
    return data;
  }

  DFSPostOrder() {
    let data = [];

    const traverse = (node) => {
      if (node.left) {
        traverse(node.left);
      }

      if (node.right) {
        traverse(node.right);
      }

      data.push(node);
    }

    traverse(this.root);
    return data;
  }

  DFSInOrder() {
    let data = [];

    const traverse = (node) => {
      if (node.left) {
        traverse(node.left);
      }

      data.push(node);

      if (node.right) {
        traverse(node.right);
      }
    }

    traverse(this.root);
    return data;
  }
}