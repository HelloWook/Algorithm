function solution(num) {
  let words = ["A", "E", "I", "O", "U"];
  let visited = [];

  function dfs(word, len) {
    if (len > 5) {
      return;
    }
    visited.push(word); 
    for (let i = 0; i < words.length; i++) {
      dfs(word + words[i], len + 1); 
    }
  }
  dfs("", 0);

  return visited.indexOf(num);
}