function solution(s) {
  var answer = true;
  var stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(s[i]);
    } else if (s[i] === ")") {
      if (stack.length === 0) {
        answer = false;
        break;
      } else {
        stack.pop();
      }
    }
  }
  if (stack.length !== 0) {
    answer = false;
  }
  return answer;
}
console.log(solution("(()("));
