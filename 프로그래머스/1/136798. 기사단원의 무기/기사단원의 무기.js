function solution(number, limit, power) {
  var array = new Array(number).fill(0);
  let sum = 0;
  function measure(x) {
    x = x + 1;
    let count = 2;

    if (x === 1) {
      return 1;
    } else if (x === 2) {
      return 2;
    } else if (x === 3) {
      return 2;
    }
    for (let i = 2; i < x / 2 + 1; i++) {
      if (x % i === 0) {
        count += 1;
      }
    }
    return count;
  }

  for (let i = 0; i < number; i++) {
    array[i] = measure(i);
  }

  for (let i = 0; i < number; i++) {
    if (array[i] > limit) {
      sum += power;
    } else {
      sum += array[i];
    }
  }

  return sum;
}