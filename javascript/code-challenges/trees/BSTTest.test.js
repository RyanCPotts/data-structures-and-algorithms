const BinarySearchTree = require('./BinarySearchTree');

describe('BinarySearchTree', () => {
  let bst;

  beforeEach(() => {
    bst = new BinarySearchTree();
  });

  test('can successfully instantiate an empty tree', () => {
    // Assert
    expect(bst.root).toBeNull();
  });

  test('can successfully instantiate a tree with a single root node', () => {
    // Act
    bst.insert(10);

    // Assert
    expect(bst.root).not.toBeNull();
    expect(bst.root.value).toBe(10);
    expect(bst.root.left).toBeNull();
    expect(bst.root.right).toBeNull();
  });

  test('can successfully add a left child and right child properly to a node', () => {
    // Act
    bst.insert(10); // root node
    bst.insert(5);  // left child
    bst.insert(15); // right child

    // Assert
    expect(bst.root.left).not.toBeNull();
    expect(bst.root.left.value).toBe(5);
    expect(bst.root.right).not.toBeNull();
    expect(bst.root.right.value).toBe(15);
  });
});
