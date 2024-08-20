function solution(str1, str2) {
  let checkEng = /^[A-Z]{2}$/;

  function makeBigram(str) {
    let arr = [];
    str = str.toUpperCase();
    for (let i = 0; i < str.length - 1; i++) {
      let bigram = str[i] + str[i + 1];
      if (checkEng.test(bigram)) {
        arr.push(bigram);
      }
    }
    return arr;
  }

  let array1 = makeBigram(str1);
  let array2 = makeBigram(str2);

  if (array1.length === 0 && array2.length === 0) {
    return 65536;
  }

  let interaction = [];
  let copyArray2 = [...array2];

  array1.forEach((item) => {
    let index = copyArray2.indexOf(item);
    if (index > -1) {
      interaction.push(item);
      copyArray2.splice(index, 1);
    }
  });

  let union = array1.length + array2.length - interaction.length;

  let jaccard = (interaction.length / union) * 65536;

  return Math.floor(jaccard);
}

console.log(solution("FRANCE", "french"));
