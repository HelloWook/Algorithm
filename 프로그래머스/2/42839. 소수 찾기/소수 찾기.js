function solution(numbers) {
  let array = numbers.split("");
  let res = new Set();
  let count = 0;

  function isPrime(x) {
    for (let i = 2; i < x; i++) {
      if (x % i === 0) {
        return false;
      }
    }
    return true;
  }

  function recursive(num, len, uselist) {
    if (len > array.length) {
      return;
    }

    if (num !== "") {
      res.add(parseInt(num));
    }

    for (let i = 0; i < array.length; i++) {
      if (!uselist.includes(i)) {
        uselist.push(i);
        recursive(num + array[i], len + 1, uselist);
        uselist.pop();
      }
    }
  }

  recursive("", 0, []);

  res.forEach((x) => {
    if (x > 1) {
      if (isPrime(x)) {
        count += 1;
      }
    }
  });

  return count;
}