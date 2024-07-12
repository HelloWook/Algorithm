function solution(cacheSize, cities) {
  let queue = [];
  let answer = 0;
  cities = cities.map((x) => x.toUpperCase());

  if (cacheSize === 0) {
    return cities.length * 5;
  }

  for (let i = 0; i < cities.length; i++) {
    const city = cities[i];
    const index = queue.indexOf(city);

    if (index !== -1) {
      queue.splice(index, 1);
      queue.push(city);
      answer += 1;
    } else {
      if (queue.length >= cacheSize) {
        queue.shift();
      }
      queue.push(city);
      answer += 5;
    }
  }

  return answer;
}