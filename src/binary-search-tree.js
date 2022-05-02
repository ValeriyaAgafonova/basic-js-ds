const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
 
  constructor() {
    this.rot = null
}
  root() {
 return this.rot
  }

  add(data) {
  this.rot = addData(this.rot, data);
  function addData(node, data){
    if (!node){
      return new Node(data)
    }
    if (node.data === data){
      return node
    }
    if (data < node.data) {
      node.left = addData(node.left, data)
    }
    else{
      node.right = addData(node.right, data)
    }
    return node
  }
}
  

  has(data) {
    return searchData(this.rot, data);
    function searchData(node, data){
    if (!node){
      return false
    }
    if (node.data === data){
      return true
    }
    return data < node.data ?
    searchData(node.left, data) :
    searchData(node.right, data);
  }
  }

  find(data) {
   return findNode(this.rot, data)
   function findNode(node, data){
     if (!node) return null
     if (node.data === data){
       return node
     }
     return data < node.data ?
     findNode(node.left, data):
     findNode(node.right, data);
   }
  }

  remove(data) {
  this.rot = removeData(this.rot, data)
  function removeData(node, data){
    if (!node){
      return null
    }
    if (data < node.data){
      node.left = removeData(node.left, data)
      return node;
    }
    else if(data > node.data){
      node.right = removeData(node.right, data)
      return node
    }
    else{
      if (!node.left && !node.right){
        return null
      }
      if (!node.left){
        node = node.right
        return node
      }
      if (!node.right){
        node = node.left
        return node
      }
      let rightMin = node.right
      while (rightMin.left){
        rightMin = rightMin.left
      }
      node.data = rightMin.data
      node.right = removeData(node.right, rightMin.data)
      return node
    }
  }
  }


  min() {
    if (!this.rot) {
      return ;
   }
   let minNode = this.rot

   while (minNode.left) {
      minNode = minNode.left;
   }
   return minNode.data;
}
  

  max() {
  
    if (!this.rot) {
      return
   }
  let maxNode = this.rot

   while (maxNode.right) {
      maxNode = maxNode.right;
   }
   return maxNode.data;
  }

}

module.exports = {
  BinarySearchTree
};