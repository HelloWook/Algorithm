function solution(x) {
  array = String(x).split("").map(Number);
  sum = array.reduce((acc, cur) => acc + cur, 0);
  if (x % sum === 0) {
    answer = true;
  } else {
    answer = false;
  }
  return answer;
}
console.log(solution(121));
