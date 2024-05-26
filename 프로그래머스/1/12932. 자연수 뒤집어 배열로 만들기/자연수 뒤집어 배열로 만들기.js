function solution(n) {
  n = String(n);
  var answer = n.split("").map(Number);
  answer = answer.reverse();
  return answer;
}
