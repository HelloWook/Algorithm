function solution(babbling) {
  const array = ["aya", "ye", "woo", "ma"];
  let count = 0;
  babbling.forEach((element) => {
    array.forEach((x) => (element = element.replace(x, " ")));
    if (element.trim() === "") {
      count += 1;
    }
  });
  return count;
}

console.log(solution(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]));
