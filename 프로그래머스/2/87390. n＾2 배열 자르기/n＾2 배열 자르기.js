function solution(n, left, right) {
  var array = [];
  for (let j = left; j < right + 1; j++) {
    x = j % n;
    y = Math.floor(j / n);
    x >= y ? array.push(x + 1) : array.push(y + 1);
  }

  return array;
}