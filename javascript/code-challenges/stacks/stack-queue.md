# Data Structures: Stack and Queue Implementation and Tests

## Summary
This challenge involves implementing stack and queue data structures and writing comprehensive unit tests to ensure their correctness. The stack is implemented using an array-based approach, while the queue is implemented using a linked list-based approach. Various methods such as `push`, `pop`, `peek`, `enqueue`, `dequeue`, and `isEmpty` are included. The unit tests cover different scenarios to verify the functionality and robustness of the stack and queue implementations.

## Description
### Stack
A stack is a data structure that follows the Last-In-First-Out (LIFO) principle. The primary operations for a stack are:
- **push**: Adds an element to the top of the stack.
- **pop**: Removes and returns the top element of the stack.
- **peek**: Returns the top element of the stack without removing it.
- **isEmpty**: Checks if the stack is empty.

### Queue
A queue is a data structure that follows the First-In-First-Out (FIFO) principle. The primary operations for a queue are:
- **enqueue**: Adds an element to the rear of the queue.
- **dequeue**: Removes and returns the front element of the queue.
- **peek**: Returns the front element of the queue without removing it.
- **isEmpty**: Checks if the queue is empty.


## Approach & Efficiency
### Stack
The stack is implemented using an array, which allows efficient addition and removal of elements at the end of the array. The time complexity for `push`, `pop`, and `peek` operations is O(1), as they involve adding, removing, or accessing the last element of the array. The space complexity is O(n), where n is the number of elements in the stack.

### Queue
The queue is implemented using a linked list, which allows efficient addition of elements at the rear and removal of elements from the front. The time complexity for `enqueue` and `dequeue` operations is O(1). The space complexity is O(n), where n is the number of elements in the queue.

## Solution
### Stack
To use the stack implementation, include the `Stack` class in your project and instantiate it. The following methods are available:
- `push(element)`: Adds an element to the top of the stack.
- `pop()`: Removes and returns the top element of the stack. Returns "Underflow" if the stack is empty.
- `peek()`: Returns the top element of the stack without removing it. Returns `undefined` if the stack is empty.
- `isEmpty()`: Checks if the stack is empty.

### Queue
To use the queue implementation, include the `Queue` class in your project and instantiate it. The following methods are available:
- `enqueue(value)`: Adds an element to the rear of the queue.
- `dequeue()`: Removes and returns the front element of the queue. Throws an error if the queue is empty.
- `peek()`: Returns the front element of the queue without removing it. Throws an error if the queue is empty.
- `isEmpty()`: Checks if the queue is empty.

### Example Usage
#### Stack
```javascript
const Stack = require('../Stack');

const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.peek()); // Output: 2
console.log(stack.pop());  // Output: 2
console.log(stack.isEmpty()); // Output: false
console.log(stack.pop());  // Output: 1
console.log(stack.isEmpty()); // Output: true
console.log(stack.pop());  // Output: "Underflow"
console.log(stack.peek()); // Output: undefined
