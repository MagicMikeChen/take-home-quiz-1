/* 使用 Linked List 實作 Stack 
實作需包含以下方法
push() : 添加新元素
pop()：移除元素並返回被移除的元素
size()：返回所有元素數量
const myStack = new Stack() 
myStack.push(1) 
myStack.push(2) 
myStack.push(3) 
myStack.pop() // 3
myStack.size() // 2
*/
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  size() {
    return this.length;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const curPointer = this.top;
      this.top = newNode;
      this.top.next = curPointer;
    }
    this.length += 1;
    return this;
  }
  pop() {
    if (!this.top) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    const curPointer = this.top;
    this.top = this.top.next;
    this.length -= 1;
    return curPointer.value;
  }
}

const myStack = new Stack() 
myStack.push(1) 
myStack.push(2) 
myStack.push(3) 
console.log(myStack.pop())
console.log(myStack.size()) 

