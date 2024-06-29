function solution(s) {
  sIndex = 0;
  var answer = [];
  let countNm = 0;
  let countM = 0;
  str = "";
  let array = s.split("");
  array.forEach((x, index) => {
    if (countM === 0 && countNm === 0) {
      str = x;
    }
    if (str !== x) {
      countNm += 1;
    } else {
      countM += 1;
    }
    if (countM === countNm) {
      answer.push(s.slice(sIndex, index + 1));
      sIndex = index + 1;
      countM = 0;
      countNm = 0;
    }
  });

  if (answer.join("") !== s) {
    let x = s[s.length - 1];
    answer.push(x);
  }
  return answer.length;
}