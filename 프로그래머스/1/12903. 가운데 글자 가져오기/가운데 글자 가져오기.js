function solution(s) {
  var answer = "";
  var length = s.length;
  var mid = Math.floor(length / 2);

  if (length % 2 === 0) {
    answer = s.slice(mid - 1, mid + 1); 
  } else {
    answer = s.slice(mid, mid + 1); 
  }
  return answer;
}

