class LinkNode{
    constructor(val,next){
        this.val = val
        this.next = next
    }
}
var MyLinkedList = function() {
   this._size = 0
   this._tail = null
   this._head = null
};

MyLinkedList.prototype.getNode = function(index){
    if(index<0||index>this._size) return null
    let cur = new LinkNode(0,this._head)
    let count = 0
    while(count++ <=index){
        cur = cur.next
    }
    return cur
}

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    // 判断是否越界
    if(index<0 || index>=this._size) return null
    // 创建虚拟节点
    let cur = new LinkNode(0,this._head)
    let count = 0
    while(count++ <=index){
        cur = cur.next
    }
    return cur.val
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    const cur = new LinkNode(val,this._head) //创建该节点，让他下一位指向头部
    this._head = cur // 目前头部为创建的这个节点
    this._size++  // 创建了一个节点，数量加一
    if(!this._tail){
        this._tail = node // 如果尾部为空，那么尾部也指向当前节点
    }
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    const cur = new LinkNode(val,null)
    this._size++
    if(this._tail){
        this._tail.next = cur
        this._tail = cur
    }
    this._tail = cur
    this._head = cur
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if(index > this._size) return
    if(index<=0){
        this.addAtHead(val)
        return;
    }
    if(index===this._size){
        this.addAtTail(val)
        return;
    }
    const node = this.getNode(index-1)
    node.next = new LinkNode(val,node.next)
    this._size++
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(index<0 || index>=this._size) return
    if(index===0){
        this._head = this._head.next
        // 如果删除的这个节点同时是尾节点，要处理尾节点
        if(index===this._size-1){
            this._tail = this._head
        }
        this._size--
        return;
    }
    const cur = this.getNode(index-1)
    cur.next = cur.next.next
    // 如果删除的是尾节点
    if(index === this._size-1){
        this._tail = cur
        cur.next = null
    }
    this._size--
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */