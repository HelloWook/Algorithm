function solution(n) {
  var array = [0, 1];
  var answer = 0;
  for (let i = 2; i < n + 1; i++) {
    array[i] = (array[i - 1] + array[i - 2]) % 1234567;
  }
  answer = array[n];
  return answer;
}

console.log(solution(5));
