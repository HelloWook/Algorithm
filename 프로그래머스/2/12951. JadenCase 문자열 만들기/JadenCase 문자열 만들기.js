function solution(s) {
  var answer = "";
  var array = s.split(" ");
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > 0) {
      array[i] = array[i][0].toUpperCase() + array[i].slice(1).toLowerCase();
    }
  }
  answer = array.join(" ");
  return answer;
}

console.log(solution("3people unFollowed me")); 
