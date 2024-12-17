function solution(bridge_length, weight, truck_weights) {
  let bridge = Array(bridge_length).fill(0);
  let answer = 0;
  let bridgeWeight = 0;

  while (truck_weights.length > 0 || bridgeWeight > 0) {
    answer++;
    bridgeWeight -= bridge.shift();

    if (truck_weights.length > 0 && bridgeWeight + truck_weights[0] <= weight) {
      let truck = truck_weights.shift();
      bridge.push(truck);
      bridgeWeight += truck;
    } else {
      bridge.push(0);
    }
  }

  return answer;
}

console.log(solution(2, 10, [7, 4, 5, 6]));