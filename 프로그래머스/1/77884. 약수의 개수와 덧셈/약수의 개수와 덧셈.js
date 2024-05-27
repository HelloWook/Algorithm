function solution(left, right) {
  let calculation = 0;

  for (let number = left; number <= right; number++) {
    let count = 0;
    for (let j = 1; j <= number; j++) {
      if (number % j === 0) {
        count++;
      }
    }

    if (count % 2 === 0) {
      calculation += number;
    } else {
      calculation -= number;
    }
  }

  return calculation;
}
