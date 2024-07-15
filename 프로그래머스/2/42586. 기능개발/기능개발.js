function solution(progresses, speeds) {
  var answer = [];
  var resDay = [];
  for (let i = 0; i < progresses.length; i++) {
    let sum = progresses[i];
    let day = 0;
    while (true) {
      if (sum >= 100) {
        break;
      }
      sum += speeds[i];
      day += 1;
    }
    resDay.push(day);
  }
  let slDay = 0;
  for (let i = 0; i < resDay.length; i++) {
    if (slDay < resDay[i]) {
      slDay = resDay[i];
      answer.push(1);
    } else if (slDay >= resDay[i]) {
      answer[answer.length - 1] += 1;
    }
  }

  return answer;
}