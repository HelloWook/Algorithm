function solution(n, k) {
  let array = n.toString(k).split("0");
  let cnt = 0;

  function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  for (let i = 0; i < array.length; i++) {
    if (isPrime(Number(array[i]))) {
      cnt += 1;
    }
  }

  return cnt;
}

console.log(solution(437674, 3));
