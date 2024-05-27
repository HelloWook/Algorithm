function solution(price, money, count) {
  var answer = -1;
  var sum = 0;
  for (let i = 1; i < count + 1; i++) {
    sum += price * i;
  }
  answer = sum - money;
  if (answer < 0) {
    answer = 0;
  }
  return answer;
}
