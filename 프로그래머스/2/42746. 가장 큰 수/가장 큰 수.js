function solution(numbers) {
  numbers = numbers
    .map(String)
    .sort((a, b) => b + a - (a + b))

   return numbers[0] == 0 ? "0" : numbers.join(""); 
}

console.log(solution([6, 10, 2]));
