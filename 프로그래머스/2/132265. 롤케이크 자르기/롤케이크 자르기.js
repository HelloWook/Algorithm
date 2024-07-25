function solution(topping) {
  // 답지 봤어요
  const cakeA = {};
  const cakeB = new Set();

  let typeOfToppingsA = 0;
  let typeOfToppingsB = 0;
  let answer = 0;

  for (let i = 0; i < topping.length; i++) {
    if (cakeA[topping[i]]) {
      cakeA[topping[i]]++;
    } else {
      cakeA[topping[i]] = 1;
      typeOfToppingsA++;
    }
  }

  for (let i = 0; i < topping.length; i++) {
    const currentTopping = topping[i];

    cakeA[currentTopping]--;
    if (cakeA[currentTopping] === 0) {
      delete cakeA[currentTopping];
      typeOfToppingsA--;
    }

    if (!cakeB.has(currentTopping)) {
      cakeB.add(currentTopping);
      typeOfToppingsB++;
    }

    if (typeOfToppingsA === typeOfToppingsB) {
      answer++;
    }
  }

  return answer;
}

console.log(solution([1, 2, 1, 3, 1, 4, 1, 2])); 
