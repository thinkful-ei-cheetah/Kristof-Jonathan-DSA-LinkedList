'use strict';
class _Node {
  constructor (value, next){
    this.value = value;
    this.next = next;
  }
  
  
}
  
class LL {
  constructor (){
    this.head = null;
  }
  
  insertFirst(value){
    this.head = new _Node(value, this.head);
  }
  
  insertLast(value){
    let tempNode = this.head;
    while (tempNode.next !== null){
      tempNode = tempNode.next;
    }
    tempNode.next= new _Node(value, null);
  }

  insertBefore(key, value){

    if (this.head.value === key){
           
      this.head = new _Node(value, this.head);

    } else {
      
      let tempNode = this.head;
      let prevNode =this.head;
      while (tempNode!==null && tempNode.value !== key){
        prevNode = tempNode;
        tempNode = tempNode.next;
      }
      if (tempNode === null) {
        return new Error('Youre an idiot');
      }
      prevNode.next = new _Node(value, tempNode); 
    }
  }

  insertAfter(key, value){

    let tempNode = this.head;
    while (tempNode!==null && tempNode.value !== key){
      tempNode = tempNode.next;
    }
    if (tempNode === null) {
      return new Error('Youre an idiot');
    }
    tempNode.next = new _Node(value, tempNode.next); 
          
  }
  insertAt(n, value)
  {
        
    if (n<0)
      return;

    if (n===0)
    {
      this.insertFirst(value);
    }
    let counter = 1;
    let tempNode = this.head;
    while (tempNode!==null && counter < n){
      tempNode = tempNode.next;
      counter++;
    }

    if (counter!==n)
      return;
    console.log(counter);
    console.log(n);
    console.log(tempNode);
    tempNode.next = new _Node(value, tempNode.next);

  }

  
  remove(value){
    if (this.head === null) return new Error('Youre an idiot');
  
    if (this.head.value === value){
      this.head = this.head.next;
    } else {
  
      let tempNode = this.head;
      let prevNode =this.head;
      while (tempNode!==null && tempNode.value !== value){
        prevNode = tempNode;
        tempNode = tempNode.next;
      }
      if (tempNode === null) {
        return new Error('Youre an idiot');
      }
      prevNode.next = tempNode.next; 
    }
  }
  
  find(value){
    if (this.head === null) return new Error('Empty List');
  
    if (this.head.value === value){
      return this.head;
    } else {
      let tempNode = this.head;
  
      while (tempNode && tempNode.value !== value){
        tempNode = tempNode.next;
      }
      if (tempNode === null) {
        return new Error('Youre an idiot');
      }
      return tempNode;
    }
  }
}

function main()
{

  let SLL = new LL();
  SLL.insertFirst('BOOMER0');
  SLL.insertLast('KRISTOF1');
  SLL.insertLast('KRISTOF2');
   

  SLL.insertBefore('BOOMER0', 'ATHENA');

  const util = require('util');
  SLL.insertAt(0, 'Tauhida');
  // console.log(util.inspect(SLL, {showHidden: true, depth: 5}));

 
  function sizer(list){
    if (list.head === null) return new Error('No List');
    let counter = 1;
    let tempNode = list.head;
    while (tempNode !== null && tempNode.next !== null){
      tempNode = tempNode.next;
      counter++;
    }
    return counter;
  }
  console.log(sizer(SLL));



  function displayer(list){
    if (list.head === null) return new Error('No List');

    let tempNode = list.head;

    while (tempNode !== null && tempNode.next !== null){
      console.log(tempNode);
      tempNode = tempNode.next;
    }
  }
  (displayer(SLL));

  function isEmpty(list){
    return list.head === null;
  }
  console.log(isEmpty(SLL));


  function lastItem(list){
    if (list.head === null) return new Error('No List');
    let tempNode = list.head;

    while (tempNode !== null && tempNode.next !== null){
      tempNode = tempNode.next;
    }
    return tempNode;
  }
  console.log(lastItem(SLL));


  function prevItem(value, list){
    if (list.head === null) return new Error('No List');

    let tempNode = list.head;
    let prevNode = list.head;
    while (tempNode ===null && tempNode.value !==value){
      prevNode = tempNode;
      tempNode = tempNode.next;
    }
    if (tempNode === null) return new Error('Search value not found');
    return prevNode;
  }

  console.log(prevItem('KRISTOF2', SLL));


  function reverseList(list){
    if (list.next === null) return list;
    return  new reverseList(list.head);
  }
  console.log(reverseList(SLL));

  function find3FromLast(SLL){

    if (SLL.head === null) return new Error('No List');
    const length = sizer(SLL);
    if (length < 3) return new Error('Not Possible');
    
    const thirdFromEnd = length - 3;
    let tempNode = Sll.head;
    let counter = 0;

    while (counter < thirdFromEnd){
      tempNode = tempNode.next;
      counter++;
    }
    return tempNode
}



main();

function WhatDoesThisProgramDo(lst) {
  let current = lst.head; 
  while (current !== null) {
    let newNode = current; //A
    while (newNode.next !== null) { //B
      if (newNode.next.value === current.value) {  //if A.value == B.value
        newNode.next = newNode.next.next;
      }
      else {
        newNode = newNode.next;
      }
    }
    current = current.next;
  } 
}



//removes duplicates if they have the same value

function find3FromLast(SLL){
  const length = sizer(SLL);


  }