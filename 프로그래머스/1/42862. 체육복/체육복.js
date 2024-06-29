function solution(n, lost, reserve) {
  let reserve1 = reserve.filter((x) => !lost.includes(x));
  let lost2 = lost.filter((x) => !reserve.includes(x));

  reserve1.sort((a, b) => a - b);
  lost2.sort((a, b) => a - b);

  reserve1.forEach((r) => {
    const index = lost2.indexOf(r - 1);
    if (index !== -1) {
      lost2.splice(index, 1);
    } else {
      const index = lost2.indexOf(r + 1);
      if (index !== -1) {
        lost2.splice(index, 1);
      }
    }
  });

  return n - lost2.length;
}
