function solution(d, budget) {
  d.sort((a, b) => a-b);
  var sum = 0;
  var count = 0;
  for (let i = 0; i < d.length; i++) {
    if (sum+d[i] > budget) {
      break;
    }
    sum = sum + d[i];
    count++;
  }
  return count;
}