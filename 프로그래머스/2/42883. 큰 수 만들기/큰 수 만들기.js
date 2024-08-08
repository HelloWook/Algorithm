function solution(number, k) {
  const stack = [];
  let removeCount = k;

  for (const digit of number) {
    while (
      removeCount > 0 &&
      stack.length > 0 &&
      stack[stack.length - 1] < digit
    ) {
      stack.pop();
      removeCount--;
    }
    stack.push(digit);
  }
  while (removeCount > 0) {
    stack.pop();
    removeCount--;
  }

  return stack.join("");
}
