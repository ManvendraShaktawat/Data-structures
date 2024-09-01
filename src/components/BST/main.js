import React from "react";
import BST from "./BST";

function BinarySearchTree() {
  React.useEffect(() => {
    let bst = new BST(10);
    bst.addNode(5);
    bst.addNode(15);
    bst.addNode(3);
    bst.addNode(7);
    console.log("find 7", bst.findNode(7));
    console.log("find 12", bst.findNode(12));
    bst.deleteNode(5);
    console.log("find 5", bst.findNode(5));
    bst.deleteNode(10);
    console.log("find 15", bst.findNode(15));
    console.log("find 7", bst.findNode(7));
    bst.addNode(100);
  }, []);

  return (
    <div>
      <h2>Binary search tree</h2>
      <div>(check console)</div>
    </div>
  );
}

export default BinarySearchTree;
