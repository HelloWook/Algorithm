function solution(arr) {
  let res = [0, 0];
  function req(num) {
    let set = new Set(num.flat());
    if (set.size === 1) {
      let uniqueValue = [...set][0];
      res[uniqueValue] += 1;
      return;
    }

    if (num.length === 1) {
      res[num[0][0]] += 1;
      return;
    }
    let rightNum = num.length;
    let leftNum = rightNum / 2;

    //  1사분면
    let zoneOne = num
      .slice(leftNum, rightNum)
      .map((row) => row.slice(0, leftNum));

    // 2사분면
    let zoneTwo = num.slice(0, leftNum).map((row) => row.slice(0, leftNum));

    // 3사분면
    let zoneThree = num
      .slice(0, leftNum)
      .map((row) => row.slice(leftNum, rightNum));

    //  4사분면
    let zoneFour = num
      .slice(leftNum, rightNum)
      .map((row) => row.slice(leftNum, rightNum));

    let array = [zoneOne, zoneTwo, zoneThree, zoneFour];

    array.forEach((element) => {
      let set = new Set(element.flat());
      if (set.size === 1) {
        let uniqueValue = [...set][0];
        res[uniqueValue] += 1;
      } else {
        req(element);
      }
    });
  }

  req(arr);
  return res;
}

console.log(
  solution([
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
  ])
);
