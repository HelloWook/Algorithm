function solution(numbers, hand) {
  var answer = "";
  let phon = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ["*", 0, "#"],
  ];
  let init = {
    left: [3, 0],  
    right: [3, 2], 
  };

  function getPosition(num) {
    for (let i = 0; i < phon.length; i++) {
      if (phon[i].includes(num)) {
        return [i, phon[i].indexOf(num)];
      }
    }
  }

  for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];
    let targetPos = getPosition(num);

    if (num === 1 || num === 4 || num === 7) {
      init["left"] = targetPos;
      answer += "L";
    } 
    else if (num === 3 || num === 6 || num === 9) {
      init["right"] = targetPos;
      answer += "R";
    } 
    else {
      let rightDistance = Math.abs(init["right"][0] - targetPos[0]) + Math.abs(init["right"][1] - targetPos[1]);
      let leftDistance = Math.abs(init["left"][0] - targetPos[0]) + Math.abs(init["left"][1] - targetPos[1]);

      if (leftDistance < rightDistance) {
        answer += "L";
        init["left"] = targetPos;
      } else if (rightDistance < leftDistance) {
        answer += "R";
        init["right"] = targetPos;
      } else {
        if (hand === "right") {
          answer += "R";
          init["right"] = targetPos;
        } else {
          answer += "L";
          init["left"] = targetPos;
        }
      }
    }
  }

  return answer;
}
