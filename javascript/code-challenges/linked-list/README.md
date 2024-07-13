# Linked List

## Summary
Implementation of a singly linked list.

## Description
This implementation includes methods to insert nodes, check for the existence of a value, and convert the list to a string representation.

## Approach & Efficiency
- Insert: O(1)
- Includes: O(n)
- ToString: O(n)



+-----------------+
|     Node        |
+-----------------+
| - value: any    |
| - next: Node    |
+-----------------+

+-----------------------+
|     LinkedList        |
+-----------------------+
| - head: Node          |
+-----------------------+
| + insert(value: any): void |
| + includes(value: any): boolean |
| + toString(): string   |
+-----------------------+
