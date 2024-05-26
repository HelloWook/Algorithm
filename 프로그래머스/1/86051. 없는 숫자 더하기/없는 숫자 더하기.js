function solution(numbers) {
  var answer = 0;
  sum = numbers.reduce((a, b) => a + b, 0);
  answer = 45 - sum;
  return answer;
}
console.log(solution([1, 2, 3, 4, 6, 7, 8, 0]));
