import React from "react";
import AVL from "./AVL";

function AVLTree() {
  React.useEffect(() => {
    // Example usage
    let tree = new AVL();
    tree.insertValue(10);
    tree.insertValue(20);
    tree.insertValue(30);
    tree.insertValue(40);
    tree.insertValue(50);
    tree.insertValue(25);

    tree.inOrderTraversal(); // Output: 10 20 25 30 40 50
  }, []);

  return (
    <div>
      <h2>AVL tree</h2>
      <div>(check console)</div>
    </div>
  );
}

export default AVLTree;
