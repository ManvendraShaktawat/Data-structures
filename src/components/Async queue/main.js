import React from "react";
import asyncQueue from "./asyncQueue";

function AsyncQueueComp() {
  React.useEffect(() => {
    const queue = asyncQueue();
    queue.push(getAsyncCallback(1, 1000));
    queue.push(getAsyncCallback(2, 500));
    queue.push(getAsyncCallback(3, 1000));

    queue.process();
  }, []);

  function getAsyncCallback(id, wait) {
    return () =>
      new Promise((resolve) => {
        setTimeout(() => resolve(id), wait);
      });
  }

  return (
    <div>
      <h2>Async queue</h2>
      <div>(check console)</div>
    </div>
  );
}

export default AsyncQueueComp;
