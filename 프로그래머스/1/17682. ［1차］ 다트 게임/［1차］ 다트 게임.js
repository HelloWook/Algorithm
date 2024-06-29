function solution(dartResult) {
  const results = [];
  let number = 0;

  for (let i = 0; i < dartResult.length; i++) {
    if (!isNaN(dartResult[i])) {
      if (dartResult[i] === "1" && dartResult[i + 1] === "0") {
        number = 10;
        i++;
      } else {
        number = parseInt(dartResult[i], 10);
      }
    } else {
      let len = results.length;
      switch (dartResult[i]) {
        case "S":
          number = Math.pow(number, 1);
          results.push(number);
          break;
        case "D":
          number = Math.pow(number, 2);
          results.push(number);
          break;
        case "T":
          number = Math.pow(number, 3);
          results.push(number);
          break;
        case "*":
          if (len > 0) results[len - 1] *= 2;
          if (len > 1) results[len - 2] *= 2;
          break;
        case "#":
          if (len > 0) results[len - 1] *= -1;
          break;
        default:
          break;
      }
    }
  }

  return results.reduce((acc, curr) => acc + curr, 0);
}
