function solution(x) {
  var answer = x.reduce((acc, cuv) => acc + cuv, 0);

  var q = answer / x.length;
  return q;
}
console.log(solution([1, 2, 3, 4]));
