function solution(players, callings) {
  let hash = new Map();
  let answer = [...players];

  answer.forEach((val, index) => {
    hash.set(val, index);
  });
  for (let i = 0; i < callings.length; i++) {
    let index = hash.get(callings[i]);
    let forward = answer[index - 1];
    let back = answer[index];

    answer[index - 1] = back;
    answer[index] = forward;

    hash.set(forward, index);
    hash.set(back, index - 1);
  }

  return answer;
}

console.log(
  solution(
    ["mumu", "soe", "poe", "kai", "mine"],
    ["kai", "kai", "mine", "mine"]
  )
);
