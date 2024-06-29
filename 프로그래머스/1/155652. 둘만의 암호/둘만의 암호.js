function solution(s, skip, index) {
  var answer = "";
  var skips = skip
    .split("")
    .map((element) => element.charCodeAt(0))
    .sort((a, b) => a - b);
  var skipSet = new Set(skips);

  for (var i = 0; i < s.length; i++) {
    let charCode = s.charCodeAt(i);
    let steps = index;

    while (steps > 0) {
      charCode++;
      if (charCode > 122) {
        charCode = 97; // 'a'
      }
      if (!skipSet.has(charCode)) {
        steps--;
      }
    }
    answer += String.fromCharCode(charCode);
  }

  return answer;
}
