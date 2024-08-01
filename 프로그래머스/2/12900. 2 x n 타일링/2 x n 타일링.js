function solution(n) {
  array = [1, 2];
  var answer = 0;
  for (let i = 2; i < n; i++) {
    array[i] = array[i - 1] + array[i - 2];
    array[i] = array[i] % 1000000007;
  }
  return array[n - 1];
}

console.log(solution(5));
