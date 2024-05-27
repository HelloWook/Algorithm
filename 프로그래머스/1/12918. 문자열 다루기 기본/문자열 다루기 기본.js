function solution(s) {
  var answer = s.split("");
  var isTrue = true;
  if (s.length === 4 || s.length === 6) {
    isTrue = true;
  } else {
    isTrue = false;
  }
  for (let i = 0; i < answer.length; i++) {
    if (isNaN(answer[i])) {
      isTrue = false;
      break;
    }
  }
  return isTrue;
}

console.log(solution("1234"));
