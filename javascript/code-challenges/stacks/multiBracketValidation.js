class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.items.length === 0)
      return "Underflow";
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

function validateBrackets(string) {
  let stack = new Stack();
  let brackets = { '(': ')', '[': ']', '{': '}' };

  for (let char of string) {
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
    } else if (char === ')' || char === ']' || char === '}') {
      let top = stack.pop();
      if (brackets[top] !== char) {
        return false;
      }
    }
  }

  return stack.isEmpty();
}

module.exports = validateBrackets;
