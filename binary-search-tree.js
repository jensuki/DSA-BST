class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    // if tree is empty, create new node with val and set it as root of tree
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }
    // start traversal
    let current = this.root; // current = pointer used to traverse tree
    while (true) {
      // go left if val is smaller
      if (val < current.val) {
        if (current.left === null) { // if left child is empty, insert new node here
          current.left = new Node(val); // create new node and set it as the left child
          return this; // node inserted, return the tree
        } else {
          current = current.left; // otherwise continue searching
        }
      }
      else {
        // go right if val is larger or equal
        if (current.right === null) { // if right child is empty, insert new node here
          current.right = new Node(val); // create new node and set it as right child
          return this; // node inserted, return the tree
        } else {
          current = current.right;
        }
      }
    }

  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, current = this.root) { // current - to keep track of current node being evaluated
    // base case: if current node is null, this is the correct spot for insertion
    if (current === null) {
      return new Node(val);
    }
    // traverse using recursion: compare val with the current nodes value
    if (val < current.val) {
      // if val is smaller, recurse in left subtree
      // update the left child with result of the recursive call
      current.left = this.insertRecursively(val, current.left);
    } else {
      // if val >= , recurse in right subtree
      //update right child with result of the recursive call
      current.right = this.insertRecursively(val, current.right);
    }
    // return current node to maintain tree structure
    return current;

  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root; // pointer to keep track

    while (current !== null) { // continue until no more nodes to check
      if (current.val === val) {
        return current; // if matches val, return the current node
      } else if (val < current.val) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    //  if not found
    return undefined;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, current = this.root) {
    // base case 1: if current node is null, value is not in the tree
    if (current === null) return undefined; // value not found

    // base case 2:
    if (val === current.val) { // if current nodes val matches val, return current node
      return current;
    }

    // recursive traversal to find node with value of val
    if (val < current.val) {
      // recursively search left subtree
      return this.findRecursively(val, current.left);
    } else {
      return this.findRecursively(val, current.right);
    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * process current node -> recursive into left subtree -> recurse into right subtree
   * Return an array of visited nodes. */

  dfsPreOrder(current = this.root) { //
    const visitedNodesArray = []; // store visited nodes in array

    function traverse(node) {
      if (node == null) return; // if node is null , return to stop recursion

      visitedNodesArray.push(node.val) // process current node first and add its value to array
      traverse(node.left);
      traverse(node.right);
    }
    // begin traversal starting at the root
    traverse(current)
    return visitedNodesArray;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS. process myself in the middle
   * Return an array of visited nodes. */

  dfsInOrder(current = this.root) {
    const visitedNodesArray = [];

    function traverse(node) {
      if (node == null) return;

      traverse(node.left)
      visitedNodesArray.push(node.val);
      traverse(node.right);

    }
    traverse(current)
    return visitedNodesArray;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(current = this.root) {
    const visitedNodesArray = [];

    function traverse(node) {
      if (node == null) return;

      traverse(node.left)
      traverse(node.right);
      visitedNodesArray.push(node.val);

    }
    traverse(current)
    return visitedNodesArray;
  }

  /** bfs(): Traverse the array using BFS. start at root node and add it to a 'queue'
   * Return an array of visited nodes. */

  bfs(node = this.root) {
    const visitedNodesArray = []; // to store visite nodes
    const queue = []; // queue to keep track of nodes to visit

    // if root node is not null, start with root node in queue
    if (node) queue.push(node);

    while (queue.length > 0) { // while there are nodes in the queue
      //first in first out, remove front node with shift()
      const current = queue.shift()
      visitedNodesArray.push(current.val); // add val to the array

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return visitedNodesArray;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val, current = this.root, parent = null) {
    if (current === null) return undefined; // if current node is null, value is not in tree

    // search for node to remove
    if (val < current.val) {
      // if val is smaller,go left and pass current node as parent
      return this.remove(val, current.left, current);
    } else if (val > current.val) {
      // if val is larger, go right nad pass current node as parent
      return this.remove(val, current.right, current);
    } else {
      // found the node to remove

      //case1: node is a leaf ( no children):
    }
  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {

  }
}

module.exports = BinarySearchTree;
