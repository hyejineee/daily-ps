const solution = (arrayA, arrayB) => {
  const aGCD = getGCD(arrayA);
  const bGCD = getGCD(arrayB);

  let result = 0;
  if (
    arrayA.every((e) => e % aGCD === 0) &&
    arrayB.every((e) => e % aGCD !== 0)
  )
    result = Math.max(result, aGCD);

  if (
    arrayB.every((e) => e % bGCD === 0) &&
    arrayA.every((e) => e % bGCD !== 0)
  )
    result = Math.max(result, bGCD);

  return result;
};

const gcd = (a, b) => {
  if (b === undefined) return a;

  let temp;
  if (b > a) {
    temp = a;
    a = b;
    b = temp;
  }

  while (b > 0) {
    temp = b;
    b = a % b;
    a = temp;
  }

  return a;
};

const getGCD = (array) => {
  let current;
  for (let e of array) {
    current = gcd(e, current);
  }
  return current;
};

// const solution = (arrayA, arrayB) => {
//   const arrACandidates = new Set();
//   const arrBCandidates = new Set();

//   for (let i = 0; i < arrayA.length; i++) {
//     getAliquots(arrayA[i]).forEach((e) => arrACandidates.add(e));
//     getAliquots(arrayB[i]).forEach((e) => arrBCandidates.add(e));
//   }

//   for (let a of arrACandidates) {
//     if (arrayA.every((e) => e % a === 0) && arrayB.every((e) => e % a !== 0))
//       continue;

//     arrACandidates.delete(a);
//   }

//   for (let a of arrBCandidates) {
//     if (arrayB.every((e) => e % a === 0) && arrayA.every((e) => e % a !== 0))
//       continue;

//     arrBCandidates.delete(a);
//   }

//   // console.log(arrACandidates);
//   // console.log(arrBCandidates);

//   const concat = Array.from(arrACandidates).concat(Array.from(arrBCandidates));
//   return concat.length > 0 ? Math.max(...concat) : 0;
// };

// const getAliquots = (n) => {
//   const result = [];
//   for (let i = 1; i < parseInt(Math.sqrt(n)); i++) {
//     if (n % i === 0) {
//       result.push(i);
//       if (i !== n / i) result.push(n / i);
//     }
//   }

//   return result;
// };

test(`숫자 카드 나누기`, () => {
  expect(solution([10, 17], [5, 20])).toEqual(0);
  expect(solution([10, 20], [5, 17])).toEqual(10);
  expect(solution([14, 35, 119], [18, 30, 102])).toEqual(7);
});
