function solution(s) {
  var answer = "";
  var array = s.split(" ").map(Number);
  var max, min;
  max = Math.max(...array).toString();
  min = Math.min(...array).toString();
  answer = min + " " + max;
  return answer;
}
console.log(solution("-1 -2 -3 -4"));
