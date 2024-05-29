function solution(sizes) {
  let maxWidth = 0;
  let maxHeight = 0;

  for (let i = 0; i < sizes.length; i++) {
    let width = Math.max(sizes[i][0], sizes[i][1]);
    let height = Math.min(sizes[i][0], sizes[i][1]);

    if (width > maxWidth) maxWidth = width;
    if (height > maxHeight) maxHeight = height;
  }

  let answer = maxWidth * maxHeight;
  return answer;
}

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
);
