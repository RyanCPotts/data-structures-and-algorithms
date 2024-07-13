# k-th Value from End of Linked List

## Challenge Summary
Find the k-th value from the end of a linked list.

## Challenge Description
Implement a method for returning the node’s value that is k places from the tail of the linked list.

## Approach & Efficiency
- **kthFromEnd**: O(n)

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
| + kthFromEnd(k): any     |
+--------------------+     +--------------------+
