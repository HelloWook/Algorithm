function solution(keymap, targets) {
  var answer = new Array(targets.length).fill(0);
  var keypressCounts = {};

  for (let k = 0; k < keymap.length; k++) {
    for (let x = 0; x < keymap[k].length; x++) {
      let char = keymap[k][x];
      if (!keypressCounts[char] || keypressCounts[char] > x + 1) {
        keypressCounts[char] = x + 1;
      }
    }
  }

  for (let i = 0; i < targets.length; i++) {
    var target = targets[i];
    var totalPresses = 0;
    for (let j = 0; j < target.length; j++) {
      let char = target[j];
      if (keypressCounts[char]) {
        totalPresses += keypressCounts[char];
      } else {
        totalPresses = -1; 
        break;
      }
    }
    answer[i] = totalPresses;
  }

  return answer;
}