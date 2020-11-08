class BinarySearchTree {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.left  = null;
    this.right = null;
  }

  insert(key, value) {
    if (this.key == null) {
      this.key = key;
      this.value = value;
    }

    if (key < this.key) {
       if (this.left == null) {
         this.left = new BinarySearchTree(key, value)
       } else {
         this.left.insert(key, value)
       }
    }

    if (key > this.key) {
      if (this.right == null) {
        this.right = new BinarySearchTree(key, value)
      } else {
        this.right.insert(key, value)
      }
    }
  }

  find(key) {
    if (this.key === key) {
      return this.value
    }

    if (key > this.key && this.right) {
      return this.right.find(key)
    }

    if (key < this.key && this.left) {
      return this.left.find(key)
    }

    throw new Error('Key Error')
  }
}

module.exports = BinarySearchTree




















