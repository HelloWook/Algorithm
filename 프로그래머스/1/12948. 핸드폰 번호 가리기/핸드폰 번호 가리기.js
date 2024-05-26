function solution(phone_number) {
  var num = phone_number.length;
  var maskedPart = "*".repeat(num - 4);
  var visiblePart = phone_number.slice(num - 4);
  var answer = maskedPart + visiblePart;
  return answer;
}
console.log(solution("01033334444"));
