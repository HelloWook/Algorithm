function solution(record) {
  let user = {};
  let result = [];
  let answer = [];
  for (let i = 0; i < record.length; i++) {
    message = record[i].split(" ");
    if (message[0] === "Enter") {
      user[message[1]] = message[2];
      result.push([message[1], `님이 들어왔습니다.`]);
    } else if (message[0] === "Leave") {
      result.push([message[1], `님이 나갔습니다.`]);
    } else if (message[0] === "Change") {
      user[message[1]] = message[2];
    }
  }
  for (let i = 0; i < result.length; i++) {
    let num = result[i];
    answer.push(user[num[0]] + num[1]);
  }
  return answer;
}