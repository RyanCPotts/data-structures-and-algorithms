# Linked List Implementation
This project contains an implementation of a singly linked list in JavaScript. The linked list supports basic operations such as insertion, searching for values, and converting the list to a string representation.

## Approach & Efficiency
### Approach
The linked list is implemented using a Node class for individual elements and a LinkedList class to manage the nodes. Each node contains a value and a reference to the next node. The LinkedList class includes methods to insert values, check for the existence of a value, and convert the list to a string.

### Efficiency
- **Insertion (insert method)**: O(1) - Constant time complexity, as we always insert at the head of the list.
- **Search (includes method)**: O(n) - Linear time complexity, where n is the number of nodes in the list, as we may need to traverse the entire list.
- **ToString (toString method)**: O(n) - Linear time complexity, as we need to traverse the entire list to create the string representation.

