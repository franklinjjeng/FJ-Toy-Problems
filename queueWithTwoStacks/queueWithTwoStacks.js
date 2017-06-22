/*
Create a queue using two stacks
*/

var Queue = function() {
  this.inbox = [];
  this.outbox = [];
};

Queue.prototype.enqueue = function(val) {
  this.inbox.push(val);
};

Queue.prototype.dequeue = function() {

  if (this.outbox.length === 0) {

    if (this.inbox.length === 0) {
      return undefined;
    }

    while (this.inbox.length > 0) {
      this.outbox.push(this.inbox.pop());
    }

  }

  return this.outbox.pop();
};


var queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue); // inbox 1, 2, 3
queue.dequeue();
console.log(queue); // outbox 3, 2
queue.enqueue(4);
console.log(queue); // inbox 4 outbox 3, 2
queue.dequeue();
console.log(queue); // inbox 4 outbox 3