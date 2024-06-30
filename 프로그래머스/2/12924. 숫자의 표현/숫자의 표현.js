function solution(n) {
  let count = 0;
  for (let i = 1; i < n + 1; i++) {
    let acc = 0;
    for (let j = i; acc <= n; j++) {
      acc += j;
      if (acc === n) {
        count += 1;
        break;
      }
    }
  }
  return count;
}
