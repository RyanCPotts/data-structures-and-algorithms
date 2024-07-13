# PseudoQueue Implementation

## Summary
This repository contains the implementation of a PseudoQueue class using two stacks to simulate queue operations.

## Description
The PseudoQueue class implements queue operations enqueue and dequeue using two stacks internally.

## Approach & Efficiency
- `enqueue(value)`: O(n) time complexity for each enqueue operation due to stack operations.
- `dequeue()`: O(1) time complexity for each dequeue operation.

## Solution
The PseudoQueue class uses two stacks (`stack1` and `stack2`) to manage enqueue and dequeue operations efficiently.

## UML
![UML Diagram](./UML.png)

## Link to Code
- [PseudoQueue.js](./PseudoQueue.js)
- [Stack.js](./Stack.js)

--------------------------------------
|            PseudoQueue             |
--------------------------------------
| - stack1: Stack                    |
| - stack2: Stack                    |
--------------------------------------
| + enqueue(value: any): void        |
| + dequeue(): any                   |
--------------------------------------
