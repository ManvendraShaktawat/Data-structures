class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

/**
 * @param {Node} root
 * @return {string}
 */
export function serialize(root) {
  if (!root) return [];

  const serialized = [];
  const queue = [root];

  while (queue.length > 0) {
    const node = queue.shift();
    if (node) {
      serialized.push(node.value);
      queue.push(node.left);
      queue.push(node.right);
    } else {
      serialized.push(null);
    }
  }

  // Remove trailing nulls
  while (serialized[serialized.length - 1] === null) {
    serialized.pop();
  }

  return serialized;
}

/**
 * @param {string} serialized
 * @return {Node}
 */
export function deserialize(serialized) {
  if (!serialized.length) return null;

  // A separate queue for BST traversal, initialised with first item
  const root = new Node(serialized.shift());
  const queue = [root];

  while (queue.length > 0) {
    const node = queue.shift();

    // add left child to the queue
    if (serialized.length > 0) {
      const leftVal = serialized.shift();
      if (leftVal !== null) {
        node.left = new Node(leftVal);
        queue.push(node.left);
      }
    }

    // add right child to the queue
    if (serialized.length > 0) {
      const rightVal = serialized.shift();
      if (rightVal !== null) {
        node.right = new Node(rightVal);
        queue.push(node.right);
      }
    }
  }

  return root;
}
