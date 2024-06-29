function solution(X, Y) {
  let arrayX = new Array(10).fill(0);
  let arrayY = new Array(10).fill(0);
  let array = "";
  X.split("").forEach((element) => {
    arrayX[element] += 1;
  });
  Y.split("").forEach((element) => {
    arrayY[element] += 1;
  });

  for (let i = 0; i < 10; i++) {
    if (arrayX[i] > 0 && arrayY[i]) {
      array += String(i).repeat(Math.min(arrayX[i], arrayY[i]));
    }
  }
  res = array
    .split("")
    .sort((a, b) => b - a)
    .join("");
  if (res.length === 0) {
    return "-1";
  }
  if (res[0] === "0") {
    return "0";
  }

  return res;
}
