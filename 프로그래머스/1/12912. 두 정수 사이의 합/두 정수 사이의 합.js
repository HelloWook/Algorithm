function solution(a, b) {
  if (a > b) {
    var c = b;
    b = a;
    a = c;
  }
  var answer = 0;

  for (let i = a; i < b + 1; i++) {
    answer += i;
  }
  return answer;
}
console.log(solution(5, 3));
