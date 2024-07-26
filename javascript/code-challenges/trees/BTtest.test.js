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
