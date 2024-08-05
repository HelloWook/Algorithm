function solution(board, moves) {
  var answer = 0;
  let stack = [];
  for (let i = 0; i < moves.length; i++) {
    let num = moves[i] - 1;
    for (let j = 0; j < board.length; j++) {
      if (board[j][num] > 0) {
        stack.push(board[j][num]);
        board[j][num] = 0;
        break;
      }
    }
    if (stack.length >= 2)
      if (stack[stack.length - 1] === stack[stack.length - 2]) {
        stack.splice(stack.length - 2, 2);
        answer += 2;
      }
  }
  return answer;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);
