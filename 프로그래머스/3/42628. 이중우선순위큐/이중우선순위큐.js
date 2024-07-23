function solution(operations) {
  let queue = [];
  for (let i = 0; i < operations.length; i++) {
    let word = operations[i][0];
    let num = operations[i].split(" ");
    if (word === "I") {
      queue.push(Number(num[1]));
    } else if (word === "D") {
      if (num[1] === "1") {
        let maxNum = Math.max(...queue);
        let index = queue.indexOf(maxNum);
        queue.splice(index, 1);
      } else {
        let minNum = Math.min(...queue);
        let index = queue.indexOf(minNum);
        queue.splice(index, 1);
      }
    }
  }
  return queue.length !== 0 ? [Math.max(...queue), Math.min(...queue)] : [0, 0];
}
