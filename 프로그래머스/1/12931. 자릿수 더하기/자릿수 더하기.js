function solution(n) {
  var answer = 0;
  n = String(n);
  let array = n.split("").map(Number);
  answer = array.reduce((acc, cur) => acc + cur, answer);
  return answer;
}

