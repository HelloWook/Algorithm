function solution(s) {
  var answer = [];
  let obj = {};
  let check = [];
  var array = s
    .replaceAll("{", " ")
    .replaceAll("}", " ")
    .replaceAll(" ", "")
    .split(",");

  array.forEach((element) => {
    if (obj.hasOwnProperty(element)) {
      obj[element] += 1;
    } else {
      obj[element] = 1;
    }
  });

  for (key in obj) {
    check.push([key, obj[key]]);
  }

  answer = check.sort((a, b) => b[1] - a[1]).map((x) => Number(x[0]));

  return answer;
}