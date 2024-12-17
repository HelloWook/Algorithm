/* 시간 복잡도 높은코드 
function solution(sequence, k) {
  var answer = [];
  for (let i = 0; i < sequence.length; i++) {
    let sum = 0;
    for (let x = i; x < sequence.length; x++) {
      if (sum > k) {
        break;
      } else {
        sum += sequence[x];
        if (sum === k) {
          if (answer.length > 0) {
            answer =
              answer[1] - answer[0] > x - i ? [i, x] : [answer[0], answer[1]];
          } else {
            answer = [i, x];
          }
        }
      }
    }
  }

  return answer;
}

console.log(solution([1, 2, 3, 4, 5], 7));
console.log(solution([1, 1, 1, 2, 3, 4, 5], 5));
console.log(solution([2, 2, 2, 2, 2], 6));
*/

// 투 포인터 알고리즘 적용 
function solution(sequence, k) {
  var answer = [];
  let sum = 0;
  let left = 0;
  for (let right = 0; right < sequence.length; right++) {
    sum += sequence[right];

    while (sum > k) {
      sum -= sequence[left];
      left++;
    }

    if (sum === k) {
      if (answer.length > 0) {
        answer =
          answer[1] - answer[0] > right - left
            ? [left, right]
            : [answer[0], answer[1]];
      } else {
        answer = [left, right];
      }
    }
  }
  return answer;
}

console.log(solution([1, 2, 3, 4, 5], 7));
console.log(solution([1, 1, 1, 2, 3, 4, 5], 5));
console.log(solution([2, 2, 2, 2, 2], 6));
