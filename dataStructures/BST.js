class Node {
  constructor(val) {
    this.left = null;
    this.right = null;
    this.value = val;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let node = new Node(val);

    if (!this.root) {
      this.root = node;
      return this;
    } 
    
    let current = this.root;

    while (true) {
      if (val === current.value) {
        return undefined;
      } else if (value < current.value) {
        if (current.left) {
          current = current.left;
        } else {
          current.left = node;
          return this;
        }
      } else if (value > current.value) {
        if (current.right) {
          current = current.right;
        } else {
          current.right = node;
          return this;
        }
      }
    }
  }

  find(val) {
    if (!this.root) {
      return false;
    }

    let current = this.root;
    let found = false;

    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }

    if (!found) {
      return undefined;
    }

    return current;
  }
}