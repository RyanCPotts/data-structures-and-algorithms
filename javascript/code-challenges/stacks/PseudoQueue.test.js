// PseudoQueue.test.js

const { expect } = require('chai');
const PseudoQueue = require('./PseudoQueue');

describe('PseudoQueue', () => {
  let pseudoQueue;

  beforeEach(() => {
    pseudoQueue = new PseudoQueue();
  });

  describe('enqueue', () => {
    it('should enqueue elements correctly', () => {
      pseudoQueue.enqueue(1);
      pseudoQueue.enqueue(2);
      pseudoQueue.enqueue(3);

      // After enqueueing 1, 2, 3, the internal state should be [1, 2, 3] in stack1
      expect(pseudoQueue.stack1.peek()).to.equal(1);
    });
  });

  describe('dequeue', () => {
    it('should dequeue elements correctly', () => {
      pseudoQueue.enqueue(1);
      pseudoQueue.enqueue(2);
      pseudoQueue.enqueue(3);

      // After enqueueing 1, 2, 3, dequeue should return 1 (FIFO order)
      expect(pseudoQueue.dequeue()).to.equal(1);
      // After dequeueing 1, the internal state should be [2, 3] in stack1
      expect(pseudoQueue.stack1.peek()).to.equal(2);
    });

    it('should return "Queue is empty" if dequeued from an empty queue', () => {
      expect(pseudoQueue.dequeue()).to.equal("Queue is empty");
    });
  });

  // Add more tests as needed for edge cases and additional functionalities

});
