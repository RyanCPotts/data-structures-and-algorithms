# Linked List Insertions

## Challenge Summary
Extend a Linked List to allow various insertion methods.

## Challenge Description
Implement methods for appending, inserting before, and inserting after nodes in a linked list.

## Approach & Efficiency
- **Append**: O(n)
- **Insert Before**: O(n)
- **Insert After**: O(n)

## Solution

### UML Diagram
```plaintext
+--------------------+     +--------------------+
|      LinkedList    |     |        Node        |
+--------------------+     +--------------------+
| - head: Node       |     | - value: any       |
+--------------------+     | - next: Node       |
| + insert(value)    |     +--------------------+
| + includes(value): Boolean |
| + toString(): String     |
| + append(value)          |
| + insertBefore(value, newValue) |
| + insertAfter(value, newValue)  |
+--------------------+     +--------------------+
