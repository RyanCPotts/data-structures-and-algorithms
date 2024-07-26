const Stack = require('../Stack');

describe('Stack', () => {

  it('Can successfully instantiate an empty stack', () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toBe(true);
  });

  it('Can successfully push onto a stack', () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack.peek()).toBe(1);
    expect(stack.isEmpty()).toBe(false);
  });

  it('Can successfully push multiple values onto a stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.peek()).toBe(3);
    expect(stack.isEmpty()).toBe(false);
  });

  it('Can successfully pop off the stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.pop()).toBe(3);
    expect(stack.peek()).toBe(2);
  });

  it('Can successfully empty a stack after multiple pops', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.pop();
    stack.pop();
    stack.pop();
    expect(stack.isEmpty()).toBe(true);
  });

  it('Can successfully peek the next item on the stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.peek()).toBe(3);
    expect(stack.isEmpty()).toBe(false);
  });

  it('Calling pop on an empty stack raises an exception', () => {
    const stack = new Stack();
    expect(stack.pop()).toBe("Underflow");
  });

  it('Calling peek on an empty stack returns undefined', () => {
    const stack = new Stack();
    expect(stack.peek()).toBe(undefined);
  });
});
