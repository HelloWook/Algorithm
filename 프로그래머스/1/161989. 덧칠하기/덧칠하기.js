function solution(n, m, section) {
  let count = 0;
  let array = new Array(n + 1).fill(1).map((x, index) => {
    if (section.includes(index)) {
      x = 0;
    }
    return x;
  });
  for (let i = 1; i < array.length + 1; i++) {
    if (array[i] === 0) {
      for (let j = i; j < i + m; j++) {
        if (j > array.length + 1) {
          break;
        }
        array[j] = 1;
      }
      count += 1;
    }
  }
  return count;
}
