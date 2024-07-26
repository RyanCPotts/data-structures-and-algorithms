// BSTTest.js

const BinarySearchTree = require('./BinarySearchTree');

// Instantiate a BinarySearchTree
const bst = new BinarySearchTree();

// Insert values into the BST
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

// Test searching for values
console.log(bst.search(5)); // Should print true
console.log(bst.search(8)); // Should print false

// Test in-order traversal
console.log(bst.inOrderTraversal()); // Should print [3, 5, 7, 10, 15]
