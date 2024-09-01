import React from "react";
import PQ from "./PQ";

function PriorityQueue() {
  React.useEffect(() => {
    // Usage example
    const pq = new PQ();
    pq.enqueue("task1", 1);
    pq.enqueue("task2", 2);
    pq.enqueue("task3", 3);

    console.log(pq.dequeue()); // Output: "task3"
    console.log(pq.peek()); // Output: "task2"
    console.log(pq.dequeue()); // Output: "task2"
    console.log(pq.isEmpty()); // Output: false
    console.log(pq.dequeue()); // Output: "task1"
    console.log(pq.isEmpty()); // Output: true
  }, []);

  return (
    <div>
      <h2>Priority queue</h2>
      <div>(check console)</div>
    </div>
  );
}

export default PriorityQueue;
