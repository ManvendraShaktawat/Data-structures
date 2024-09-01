import React from "react";
import { serialize, deserialize } from "./BT";

function BinaryTree() {
  React.useEffect(() => {
    const str = [1, 2, 3, 4, null, null, 5, 6, 7, 8, null, null, null, null, 9];
    const tree = deserialize(str);
    console.log(tree);
    console.log(serialize(tree));
  }, []);

  return (
    <div>
      <h2>Binary</h2>
      <div>(check console)</div>
    </div>
  );
}

export default BinaryTree;
