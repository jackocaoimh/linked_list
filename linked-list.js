/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {

    let newNode = new Node(val);
    
    if(this.head === null) this.head = newNode;

    if(this.tail !== null) this.tail.next = newNode;

    this.tail = newNode;

  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {

    let newNode = new Node(val)

    if(this.head === null){
      this.head = newNode;
      this.tail = newNode;
    } else{

      newNode.next = this.head
      this.head = newNode;
    }

    this.length++;


  }

  /** pop(): return & remove last item. */

  pop() {
    // empty list
    if(this.head === null){
      return undefined;
    }

    // one item in list
    if(this.head === this.tail){

      let val = this.head.val;
      this.head = null
      this.tail = null
      this.length--;
      return val;
    }

    // more than one item in list
    let current = this.head;
    let newTail = current;

    while(current.next){
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;


    this.length--;

    return current.val;
  }

  /** shift(): return & remove first item. */

  shift() {
    // Case 1: If the list is empty, return undefined.
    if (this.head === null) {
      return undefined;
    }

    // Store the value of the head to return it later.
    let val = this.head.val;

    // Case 2: Move the head to the next node.
    this.head = this.head.next;

    // Case 3: If the list becomes empty after removal, update the tail to null.
    if (this.head === null) {
      this.tail = null;
    }

    // Decrement the length of the list.
    this.length--;

    // Return the value of the removed node.
    return val;

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    // Check if idx is out of bounds of the list.
    if (idx < 0 || idx >= this.length) {
      return null;
    }

    // Start from the head of the list.
    let current = this.head;
    let count = 0;

    // Traverse the list until the specified index is reached.
    while (count < idx) {
      current = current.next;
      count++;
    }

    // Return the value of the node at the specified index.
    return current.val;
  }



  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    // Check if idx is out of bounds of the list.
    if (idx < 0 || idx >= this.length) {
      return null;
    }

    // Start from the head of the list.
    let current = this.head;
    let count = 0;

    // Traverse the list until the specified index is reached.
    while (count < idx) {
      current = current.next;
      count++;
    }

    current.val = val;
  }



  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {

    // If idx is 0 or list is empty
    // adds val to start of list using unshift
    if(idx <= 0 || this.head === null){
      this.unshift(val);
      return;
    }

    // if idx is outside lenght or list
    // push function is used to insert at end of list
    if(idx >= this.length){
      this.push(val);
      return
    }

    // if idx is within list we must create a new node
    // this is the standard case

    // initiate new node using Node class
    let newNode = new Node(val);

    // set current to head
    let current = this.head;
    // if current is head then previous node to that must be null
    let previous = null
    // initiate count to 0
    let count = 0;

    // now we traverse the list to find node before given idx
    while(count < idx){

      previous = current;
      current = current.next;
      count++;
    }

    //insert new node
    newNode.next = current;
    previous.next = newNode;

    //increment length
    this.length++;
    
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx < 0 || idx >= this.length) {
      return null;
    }

    if(idx === 0 ){
      return this.shift();
    }

      // Start from the head of the list.
    let current = this.head;
    let previous = null;
    let count = 0;

    // Traverse the list to find the node just before the specified index.
    while (count < idx) {
      previous = current;
      current = current.next;
      count++;
    }

    // Unlink the node from the list.
    previous.next = current.next;

    // Special case: if removing the last item, update the tail.
    if (idx === this.length - 1) {
      this.tail = previous;
    }

    // Decrement the length of the list.
    this.length--;

    // Return the value of the removed node.
    return current.val;
  }

  /** average(): return an average of all values in the list */

  average() {
    // If the list is empty, return 0 or null based on your design decision.
    if (this.head === null) {
      return 0;
    }

    // Initialize sum and start from the head of the list.
    let sum = 0;
    let current = this.head;

    // Traverse the list to sum up all the values.
    while (current !== null) {
      sum += current.val;
      current = current.next;
    }

    // Calculate and return the average.
    return sum / this.length;
    
  }
}

module.exports = LinkedList;
