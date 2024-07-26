'use strict';


class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}


class Queue{
  constructor(){
    this.front = null;
    this.rear = null;
  }

  enqueue(value){
    const node = new Node(value);
    if(this.rear === null){
      this.front = node;
      this.rear = node;
    } else {
      this.rear.next = node;
      this.rear = node;
    }
  }
  dequeue(){
    if(this.front === null)
      throw new Error('queue is empty');
    const temp = this.front;
    this.front = this.front.next;
    return temp.value;
  }
  peek(){
    if(this.front === null)
      throw new Error('queue is empty');
    return this.front.value;

  }
  isEmpty(){
    return this.front === null;
  }
}
module.exports = {Queue};
