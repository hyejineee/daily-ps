const solution = (babbling) => {
  const words = ['aya', 'ye', 'woo', 'ma'];

  let count = 0;
  for (let word of babbling) {
    for (let w of words) {
      word = word.replace(new RegExp(`${w}`, 'g'), ' ');
    }
    if (word.replace(/\s/g, '').length === 0) count++;
  }
  return count;
};

test(`옹알이`, () => {
  expect(solution(['aya', 'yee', 'u', 'maa', 'wyeoo'])).toEqual(1);
  expect(solution(['ayaye', 'uuuma', 'ye', 'yemawoo', 'ayaa'])).toEqual(3);
});

// function solution(babbling) {
//   var answer = 0;
//   const regex = /^(aya|ye|woo|ma)+$/;

//   babbling.forEach(word => {
//     if (regex.test(word)) answer++;
//   })

//   return answer;
// }
