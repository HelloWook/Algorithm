function solution(s) {
  let array = [];
  array = s.split("");
  var answer = [];
  answer = array.sort((a, b) => {
    if (a < b) {
      return 1;
    } else {
      return -1;
    }
  });
  return answer.reduce((a, b) => a + b);
}

console.log(solution("Zbcdefg"));
