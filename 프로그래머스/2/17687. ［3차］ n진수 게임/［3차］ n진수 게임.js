function solution(n, t, m, p) {
  var answer = "";
  let str = "";
  let num = p - 1;

  for (let i = 0; str.length < m * t; i++) {
    str += i.toString(n).toUpperCase();
  }
  let arrayx = str.split("");
  arrayx.forEach((val, idx) => {
    if (num === idx && answer.length < t) {
      answer += arrayx[num];
      num += m;
    }
  });
  return answer;
}