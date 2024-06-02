function solution(name, yearning, photo) {
  var answer = [];
  var num = 0;
  var sum = 0;
  for (let i = 0; i < photo.length; i++) {
    for (let j = 0; j < photo[i].length; j++) {
      num = name.indexOf(photo[i][j]);
      if (num !== -1) {
        sum += yearning[num];
      }
    }
    answer.push(sum);
    sum = 0;
  }
  return answer;
}

console.log(
  solution(
    ["may", "kein", "kain", "radi"],
    [5, 10, 1, 3],
    [
      ["may", "kein", "kain", "radi"],
      ["may", "kein", "brin", "deny"],
      ["kon", "kain", "may", "coni"],
    ]
  )
);
