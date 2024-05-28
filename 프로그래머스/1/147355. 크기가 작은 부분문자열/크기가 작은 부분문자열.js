function solution(t, p) {
  var count = 0;
  var pLength = p.length;
  var pNumber = Number(p);

  for (let i = 0; i <= t.length - pLength; i++) {
    var subStr = t.substr(i, pLength);
    if (Number(subStr) <= pNumber) {
      count++;
    }
  }

  return count;
}
