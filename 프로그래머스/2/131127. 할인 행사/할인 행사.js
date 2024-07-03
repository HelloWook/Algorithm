function solution(want, number, discount) {
  var answer = 0;
  for (let i = 0; i <= discount.length - 10; i++) {
    let array = number.slice();
    for (let j = i; j < i + 10; j++) {
      let index = want.indexOf(discount[j]);
      if (index !== -1) {
        array[index] -= 1;
      }
    }
    if (array.every((x) => x <= 0)) {
      answer += 1;
    }
  }
  return answer;
}
