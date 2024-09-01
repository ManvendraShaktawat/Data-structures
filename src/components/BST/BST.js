function Node(value) {
  this.value = value;
  this.leftChild = null;
  this.rightChild = null;
}

function BST(rootValue) {
  let root = new Node(rootValue);

  console.log("Created Root", rootValue);

  this.addNode = function (nodeValue) {
    const newNode = new Node(nodeValue);
    if (!root) {
      root = newNode;
      console.log("Created Root", nodeValue);
      return;
    }

    let tempNode = root;

    while (tempNode) {
      if (nodeValue < tempNode.value) {
        if (tempNode.leftChild) {
          tempNode = tempNode.leftChild;
        } else {
          tempNode.leftChild = newNode;
          console.log("Added", nodeValue, "to", tempNode.value);
          return;
        }
      } else {
        if (tempNode.rightChild) {
          tempNode = tempNode.rightChild;
        } else {
          tempNode.rightChild = newNode;
          console.log("Added", nodeValue, "to", tempNode.value);
          return;
        }
      }
    }
  };

  this.findNode = function (nodeValue) {
    let tempNode = root;

    while (tempNode) {
      if (nodeValue === tempNode.value) {
        return true;
      }
      if (nodeValue < tempNode.value) {
        tempNode = tempNode.leftChild;
      } else {
        tempNode = tempNode.rightChild;
      }
    }
    return false;
  };

  this.deleteNode = function (nodeValue) {
    if (nodeValue === root.value) {
      root = null;
      console.log("Deleted Root", nodeValue);
      return;
    }

    let tempNode = root;

    while (tempNode) {
      if (nodeValue < tempNode.value) {
        if (nodeValue === tempNode.leftChild.value) {
          tempNode.leftChild = null;
          console.log("Deleted", nodeValue, "from", tempNode.value);
          break;
        }
        tempNode = tempNode.leftChild;
      } else {
        if (nodeValue === tempNode.rightChild.value) {
          tempNode.rightChild = null;
          console.log("Deleted", nodeValue, "from", tempNode.value);
          break;
        }
        tempNode = tempNode.rightChild;
      }
    }
  };
}

export default BST;
