const solution = (order) => {
  const mainContainer = Array(order.length)
    .fill(0)
    .map((_, i) => i + 1)
    .reverse();

  const subContainer = [];
  const orderCopy = order;

  let currentIndex = 0;
  let count = 0;

  while (true) {
    const main = mainContainer[mainContainer.length - 1]
    const sub = subContainer[subContainer.length - 1]
    const current = orderCopy[currentIndex]

    if(!main && !sub && !current) break

    if(current === main){
        count++;
        currentIndex ++;
        mainContainer.pop()
        continue
    }

    if(current === sub){
        count++
        currentIndex ++;
        subContainer.pop()
        continue
    }

    subContainer.push(mainContainer.pop())

    if(mainContainer.length === 0 && subContainer.length > 0) break
  }

  return count
};

test(`택배상자`, () => {
  expect(solution([4, 3, 1, 2, 5])).toEqual(2);
  expect(solution([5, 4, 3, 2, 1])).toEqual(5);
});


// function solution(order) {
//   let k = [],
//     c = 1,
//     count = 0;
//   for (let i = 0; i < order.length; ++i) {
//     let t = order[i];
//     if (k.length && k[k.length - 1] == t) {
//       k.pop();
//       ++count;
//       continue;
//     }
//     while (t != c) {
//       k.push(c);
//       ++c;
//       if (c > order.length) return count;
//     }
//     ++c;
//     ++c
//   }
//   return count;
// }