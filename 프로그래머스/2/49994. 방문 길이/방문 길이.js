function solution(num) {
  var answer = 0;
  let graph = Array.from(new Array(11), () => new Array(11).fill(false));
  dirs = num.split("");
  graph[5][5] = true;
  let visited = [];
  let x = 5;
  let y = 5;
  for (let i = 0; i < dirs.length; i++) {
    let nx = 0;
    let ny = 0;
    if (dirs[i] === "U") {
      ny = -1;
    } else if (dirs[i] === "D") {
      ny = +1;
    } else if (dirs[i] === "R") {
      nx = +1;
    } else if (dirs[i] === "L") {
      nx = -1;
    }
    let sx = x + nx;
    let sy = y + ny;
    if (0 <= sx && sx <= 10 && 0 <= sy && sy <= 10) {
      let path1 = `${x},${y},${sx},${sy}`;
      let path2 = `${sx},${sy},${x},${y}`;
      if (!visited.includes(path1) && !visited.includes(path2)) {
        visited.push(path1);
        visited.push(path2);
        answer += 1;
      }
      x = sx;
      y = sy;
    }
  }
  return answer;
}