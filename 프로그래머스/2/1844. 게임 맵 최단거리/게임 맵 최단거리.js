function solution(maps) {
  var n = maps.length;
  var m = maps[0].length;
  var visited = Array.from(new Array(n), () => new Array(m).fill(false));
  var queue = [[0, 0, 1]];
  visited[0][0] = true;

  var directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  while (queue.length > 0) {
    var [x, y, dist] = queue.shift();

    if (x === n - 1 && y === m - 1) {
      return dist;
    }

    for (var i = 0; i < directions.length; i++) {
      var nx = x + directions[i][0];
      var ny = y + directions[i][1];

      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < n &&
        ny < m &&
        maps[nx][ny] === 1 &&
        !visited[nx][ny]
      ) {
        queue.push([nx, ny, dist + 1]);
        visited[nx][ny] = true;
      }
    }
  }

  return -1;
}

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
);
