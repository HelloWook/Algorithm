function solution(priorities, location) {
  let queue = priorities.map((priority, index) => ({ priority, index }));
  let printOrder = 0;

  while (queue.length > 0) {
    let current = queue.shift();
    if (queue.some((task) => task.priority > current.priority)) {
      queue.push(current);
    } else {
      printOrder += 1;
      if (current.index === location) {
        return printOrder;
      }
    }
  }
}