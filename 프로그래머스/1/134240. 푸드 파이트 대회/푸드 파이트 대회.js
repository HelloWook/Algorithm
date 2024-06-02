function solution(food) {
  var answer = [];
  var sl = [];
  var x = "";
  for (let i = 1; i < food.length; i++) {
    answer.push(Math.floor(food[i] / 2));
  }
  for (let i = 0; i < answer.length; i++) {
    sl.push(String(i + 1).repeat(answer[i]));
  }
  if (food[0] !== 0) {
    x = sl.join("") + "0" + sl.reverse().join("");
  } else {
    x = sl.join("") + sl.reverse().join("");
  }
  return x;
}

console.log(solution([1, 3, 4, 6]));
