function solution(nums) {
    let answer = 0;
    
    for (let i = 0; i<nums.length-2; i++) {
//        console.log(i);
        for (let j = i+1; j<nums.length-1; j++) {
//            console.log(j);
            for (let k = j+1; k<nums.length; k++) {
//                console.log(k);
                let sum = nums[i] + nums[j] + nums[k]
//                console.log(sum);
                answer++;
//                console.log(answer);
                
                for (let n = 2; n<=Math.sqrt(sum); n++) {
//                    console.log(n);
                    if (sum % n === 0) {
//                        console.log(sum);
                        answer--;
//                        console.log(answer);
                        break;
                    }
                }
            }
        }
    }
    
    return answer;
}