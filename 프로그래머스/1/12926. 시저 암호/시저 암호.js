function solution(s, n) {
  var answer = "";

  for (let i = 0; i < s.length; i++) {
    var char = s[i];
    if (char === " ") {
      answer += " ";
      continue;
    }

    var charCode = char.charCodeAt();
    var newCharCode;

    if (charCode >= 65 && charCode <= 90) {
      newCharCode = charCode + n;
      if (newCharCode > 90) {
        newCharCode = 65 + (newCharCode - 91);
      }
    } else if (charCode >= 97 && charCode <= 122) {
      newCharCode = charCode + n;
      if (newCharCode > 122) {
        newCharCode = 97 + (newCharCode - 123);
      }
    }

    answer += String.fromCharCode(newCharCode);
  }

  return answer;
}
