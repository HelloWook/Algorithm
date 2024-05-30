function solution(n, arr1, arr2) {
  var answer = [];
  for (let i = 0; i < n; i++) {
    let binaryString = (arr1[i] | arr2[i]).toString(2);
    binaryString = binaryString.padStart(n, "0");
    let mapString = binaryString.replaceAll("1", "#").replaceAll("0", " ");
    answer.push(mapString);
  }
  return answer;
}
console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]));
