function solution(babbling) {
  var array = ["aya", "ye", "woo", "ma"];
  for (let i = 0; i < babbling.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (babbling[i].includes(array[j].repeat(2))) {
        break;
      }
      babbling[i] = babbling[i].replaceAll(array[j], " ");
    }
  }
  babbling = babbling.map((x) => x.trim());
  return babbling.filter((x) => x === "").length;
}