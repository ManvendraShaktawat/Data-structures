function asyncQueue() {
  const queue = [];

  function push(asyncCallback) {
    queue.push(asyncCallback);
  }

  function process() {
    if (!queue.length) {
      return;
    }
    const callback = queue.shift();
    callback().then((id) => {
      console.log(`Callback-${id} executed!`);
      process();
    });
  }

  return {
    push,
    process,
  };
}

export default asyncQueue;
