function solution(x, n) {
  var answer = [];
  num = x;
  for (let i = 0; i < n; i++) {
    answer.push(x);
    x = x + num;
  }
  return answer;
}
console.log(solution(2, 5));
