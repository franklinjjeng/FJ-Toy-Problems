/*
  Use your Stack class to implement a new class MaxStack with a function getMax() that returns the largest element in the stack.
  getMax() should not remove the item.
*/

function Stack() {
    // initialize an empty array
    this.items = [];
}

// push a new item to the last index
Stack.prototype.push = function(item) {
    this.items.push(item);
};

// remove the last item
Stack.prototype.pop = function() {

    // if the stack is empty, return null
    // (it would also be reasonable to throw an exception)
    if (!this.items.length) {
        return null;
    }
    return this.items.pop();
};

// see what the last item is
Stack.prototype.peek = function() {
    if (!this.items.length) {
        return null;
    }
    return this.items[this.items.length -1];
};

var MaxStack = function() {
  Stack.call(this);
  this.max = null;
}

// TODO create function getMax()
MaxStack.prototype = Object.create(Stack.prototype);
MaxStack.prototype.constructor = MaxStack;

MaxStack.prototype.push = function(item) {
    if (this.max < item || this.max === null) {
        this.max = item;
    }

    this.items.push(item);
}

MaxStack.prototype.pop = function() {
    
    var popped = this.items.pop();

    if (popped === this.max) {
        this.max = Math.max(...this.items);
    }
    
    return popped;
}

MaxStack.prototype.getMax = function() {
    return this.max;
}

var maxStack = new MaxStack();
maxStack.push(1);
maxStack.push(2);
maxStack.push(12);
maxStack.push(3);
console.log(maxStack);
maxStack.pop();
console.log(maxStack);
maxStack.pop();
console.log(maxStack);

