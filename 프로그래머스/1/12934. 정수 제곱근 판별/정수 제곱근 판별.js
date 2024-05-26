function solution(n) {
  function binary_search(left, right) {
    if (left > right) {
      return -1;
    }

    let mid = Math.floor((left + right) / 2);
    if (mid * mid === n) {
      return (mid + 1) ** 2;
    } else if (mid * mid < n) {
      return binary_search(mid + 1, right);
    } else {
      return binary_search(left, mid - 1);
    }
  }
  return binary_search(0, n);
}

console.log(solution(121));
