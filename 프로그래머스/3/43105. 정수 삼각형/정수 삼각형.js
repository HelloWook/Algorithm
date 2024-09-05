function solution(triangle) {
  const dp = triangle.slice();
  
  for(let i = dp.length-2; i >= 0; i--) {
    for(let j = 0; j < dp[i].length; j++) {
      dp[i][j] += Math.max(dp[i+1][j], dp[i+1][j+1]);
    }
  }
  
  return dp[0][0];
}
// js로하면 시간 초과 너무나서 걍 답지 봤씁니당..

/*
function solution(triangle) {
  let result = new Set();
  let dx = [0, 1];
  function dfs(x, y, sum) {
    if (x === triangle.length - 1) {
      result.add(sum);
      return;
    }
    for (let i = 0; i < dx.length; i++) {
      if (x + 1 < triangle.length && y + dx[i] <= x + 1 - 1) {
        dfs(x + 1, dx[i] + y, sum + triangle[x + 1][y + dx[i]]);
      }
    }
  }
  dfs(0, 0, triangle[0][0]);
  return Math.max(...Array.from(result));
}

console.log(solution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]));
;

*/