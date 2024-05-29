function solution(s) {
  array = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  for (let i = 0; i < array.length; i++) {
    s = s.replaceAll(array[i], i);
  }
  var answer = Number(s);
  return answer;
}