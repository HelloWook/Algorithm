function solution(arr) {
  const minValue = Math.min(...arr);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === minValue) {
      arr.splice(i, 1);
    }
  }
  if (arr.length === 0) {
    arr.push(-1);
  }
  return arr;
}
console.log(solution([4, 3, 2, 1]));
