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
 //   a a b c 
//    0 1 2 3
//
    insertAt(n, value)
    {
        
        if (n<0)
            return;

        if (n===0)
        {
            this.insertFirst(value)
        }
        let counter = 1;
        let tempNode = this.head;
        while (tempNode!==null && counter < n){
          tempNode = tempNode.next;
          counter++;
        }

        if (counter!==n)
            return;
        console.log(counter)
        console.log(n)
        console.log(tempNode)
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
   



    const util = require('util')


    
    SLL.insertAt(0, 'Tauhida');
    console.log(util.inspect(SLL, {showHidden: true, depth: 5}))


  }

  main();
