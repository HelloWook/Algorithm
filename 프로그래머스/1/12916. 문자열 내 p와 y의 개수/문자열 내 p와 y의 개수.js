function solution(s) {
  var answer = true;
  array = s.split("");
  let countp = 0;
  let county = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i].toLowerCase() === "p") {
      countp += 1;
    } else if (array[i].toLowerCase() === "y") {
      county += 1;
    }
  }
  if (countp === county) {
    answer = true;
  } else {
    answer = false;
  }
  return answer;
}

