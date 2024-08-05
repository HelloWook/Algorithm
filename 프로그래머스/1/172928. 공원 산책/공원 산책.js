function solution(park, routes) {
  var answer = [];
  let x = 0;
  let y = 0;
  for (let i = 0; i < park.length; i++) {
    for (let j = 0; j < park[0].length; j++) {
      if (park[i][j] === "S") {
        y = i;
        x = j;
      }
    }
  }
  for (let i = 0; i < routes.length; i++) {
    let cmd = routes[i].split(" ");
    let nx = x;
    let ny = y;
    switch (cmd[0]) {
      case "N":
        ny -= Number(cmd[1]);
        break;
      case "S":
        ny += Number(cmd[1]);
        break;
      case "W":
        nx -= Number(cmd[1]);
        break;
      case "E":
        nx += Number(cmd[1]);
        break;
      default:
        break;
    }
    if (ny < park.length && ny >= 0 && nx < park[0].length && nx >= 0) {
      if (cmd[0] === "N" || cmd[0] === "S") {
        let ymin = Math.min(y, ny);
        let ymax = Math.max(y, ny);
        let yarray = [];
        for (let i = ymin; i < ymax + 1; i++) {
          yarray.push(park[i][x]);
        }
        if (!yarray.includes("X")) {
          y = ny;
        }
      } else {
        let xmin = Math.min(x, nx);
        let xmax = Math.max(x, nx);
        let xarray = [];
        for (let i = xmin; i < xmax + 1; i++) {
          xarray.push(park[y][i]);
        }
        if (!xarray.includes("X")) {
          x = nx;
        }
      }
    }
  }
  return [y, x];
}
