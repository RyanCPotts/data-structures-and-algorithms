const { BinaryTree } = require('./BinaryTree');
const  TreeNode  = require('./Node');

describe('BinaryTree', () => {
  let binaryTree;

  beforeEach(() => {
    binaryTree = new BinaryTree();

    // Set up a sample tree
    //       1
    //      / \
    //     2   3
    //    / \
    //   4   5
    binaryTree.root = new TreeNode(1);
    binaryTree.root.left = new TreeNode(2);
    binaryTree.root.right = new TreeNode(3);
    binaryTree.root.left.left = new TreeNode(4);
    binaryTree.root.left.right = new TreeNode(5);
  });

  test('can successfully return a collection from a pre-order traversal', () => {
    // Act
    const result = binaryTree.preOrder();

    // Assert
    expect(result).toEqual([1, 2, 4, 5, 3]);
  });

  test('can successfully return a collection from an in-order traversal', () => {
    // Act
    const result = binaryTree.inOrder();

    // Assert
    expect(result).toEqual([4, 2, 5, 1, 3]);
  });

  test('can successfully return a collection from a post-order traversal', () => {
    // Act
    const result = binaryTree.postOrder();

    // Assert
    expect(result).toEqual([4, 5, 2, 3, 1]);
  });
});


describe('BinaryTree', () => {
  let binaryTree;

  beforeEach(() => {
    binaryTree = new BinaryTree();

    // Set up a sample tree
    binaryTree.root = new TreeNode(1);
    binaryTree.root.left = new TreeNode(2);
    binaryTree.root.right = new TreeNode(3);
    binaryTree.root.left.left = new TreeNode(4);
    binaryTree.root.left.right = new TreeNode(5);
    binaryTree.root.right.right = new TreeNode(6);
  });

  test('can successfully return a collection from a pre-order traversal', () => {
    const result = binaryTree.preOrder();
    expect(result).toEqual([1, 2, 4, 5, 3, 6]);
  });

  test('can successfully return a collection from an in-order traversal', () => {
    const result = binaryTree.inOrder();
    expect(result).toEqual([4, 2, 5, 1, 3, 6]);
  });

  test('can successfully return a collection from a post-order traversal', () => {
    const result = binaryTree.postOrder();
    expect(result).toEqual([4, 5, 2, 6, 3, 1]);
  });

  test('can successfully find the maximum value in the tree', () => {
    const max = binaryTree.findMax();
    expect(max).toBe(6);
  });

  test('can successfully find the maximum value in a single-node tree', () => {
    const singleNodeTree = new BinaryTree();
    singleNodeTree.root = new TreeNode(42);
    const max = singleNodeTree.findMax();
    expect(max).toBe(42);
  });

  test('can successfully find the maximum value in an empty tree', () => {
    const emptyTree = new BinaryTree();
    expect(() => emptyTree.findMax()).toThrow("Cannot read properties of null (reading 'value')");
  });
});
