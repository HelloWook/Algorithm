function solution(numbers) {
  var answer = [];
  for (let i = 0; i < numbers.length; i++) {
    let x = -1;
    for (let j = i; j < numbers.length; j++) {
      if (numbers[i] < numbers[j]) {
        x = numbers[j];
        break;
      }
    }
    answer.push(x);
  }
  return answer;
}
