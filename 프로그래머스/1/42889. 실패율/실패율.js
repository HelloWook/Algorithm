function solution(N, stages) {
  var array = new Array(N).fill(0);
  let num = stages.length;
  let answer = [];
  let answer2 = [];
  stages = stages
    .sort((a, b) => a - b)
    .forEach((element) => {
      element < N + 1 && array[element - 1]++;
    });

  array.slice().map((x, index) => {
    let per = 0;
    per = x / num;
    num -= x;
    answer.push([index + 1, per]);
    return per;
  });

  answer
    .slice()
    .sort((a, b) => b[1] - a[1])
    .forEach((x) => {
      answer2.push(x[0]);
    });
  return answer2;
}