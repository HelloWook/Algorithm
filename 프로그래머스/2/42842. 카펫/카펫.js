function solution(brown, yellow) {
  function find(yellow) {
    var array = [1, yellow];
    if (yellow === 1) {
      return [1, 1];
    }
    if (yellow === 2) {
      return [1, 2];
    }
    if (yellow === 3) {
      return [1, 3];
    }
    for (let i = 2; i <= yellow / 2; i++) {
      if (yellow % i === 0) {
        array.push(i);
      }
    }
    return array;
  }
  var res = find(yellow).sort((a, b) => a - b);
  let sum = brown + yellow;
  var answer = [];

  for (let i = 0; i < res.length; i++) {
    for (let j = i; j < res.length; j++) {
      if (res[i] * res[j] === yellow) {
        if ((res[i] + 2) * (res[j] + 2) === sum) {
          return [res[i] + 2, res[j] + 2].sort((a, b) => b - a);
        }
      }
    }
  }
}