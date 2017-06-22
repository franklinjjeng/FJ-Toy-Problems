/*
Create a queue using two stacks
*/

var Queue = function() {
  this.inbox = [];
  this.outbox = [];
};

Queue.prototype.enqueue = function(val) {
  
  if (this.outbox.length > 0) {

    while (this.outbox.length > 0) {
      this.inbox.push(this.outbox.pop());
    }

  }
  
  this.inbox.push(val);

};

Queue.prototype.dequeue = function() {

  if (this.inbox.length > 0) {

    while (this.inbox.length > 0) {
      this.outbox.push(this.inbox.pop());
    }

  }

  this.outbox.pop();

};


var queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue); // inbox 1, 2, 3
queue.dequeue();
console.log(queue); // outbox 3, 2
queue.enqueue(4);
console.log(queue); // inbox 2, 3, 4
queue.dequeue();
console.log(queue); // outbox 4, 3



