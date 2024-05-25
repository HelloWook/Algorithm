function solution(n) {
  var answer = 0;
  let array = [];
  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      if (i * j === n) {
        array.push(i);
      }
    }
  }
  answer = array.reduce((acc, cur) => acc + cur, answer);
  return answer;
}

