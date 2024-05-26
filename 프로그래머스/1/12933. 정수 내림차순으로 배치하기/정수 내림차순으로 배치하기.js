function solution(n) {
  n = String(n);
  var answer = n
    .split("")
    .map(Number)
    .sort((a, b) => b - a);
  var x = "";
  for (let i = 0; i < answer.length; i++) {
    x += answer[i];
  }
  return Number(x);
}

