function solution(lottos, win_nums) {
  let lucky = lottos.filter((x) => x === 0).length;
  let count = 0;
  // 등수의 정보를 저장한 객체
  var score = {
    6: 1,
    5: 2,
    4: 3,
    3: 4,
    2: 5,
    1: 6,
    0: 6,
  };
  for (let x of lottos) {
    if (win_nums.filter((a) => a === x).length !== 0) {
      count += 1;
    }
  }

  return [score[count + lucky], score[count]];
}