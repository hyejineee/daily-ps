const solution = (numbers, hand) => {
  const lKeys = [1, 4, 7];
  const rKeys = [3, 6, 9];

  let currentL = 10;
  let currentR = 12;

  const result = numbers.map((e) => {
    const pressed = e === 0 ? 11 : e;
    // 왼쪽 키패드에 있는 숫자를 누를 경우

    // console.log(
    //   `누른 위치 : ${pressed}, 현재 왼손 위치 : ${currentL},현재 오른손 위치 : ${currentR}`
    // );

    if (lKeys.includes(pressed)) {
      currentL = pressed;
      return "L";
    }

    // 오른쪽 키패드에 있는 숫자를 누를 경우
    if (rKeys.includes(pressed)) {
      currentR = pressed;
      return "R";
    }

    // 가운데에 있는 숫자를 누를 경우
    const lGap = getGap(currentL, pressed);
    const rGap = getGap(currentR, pressed);

    // console.log(`누른 위치 : ${pressed}`);
    // console.log(`현재 왼손 위치 : ${currentL}, gap : ${lGap} `);
    // console.log(`현재 오른손 위치 : ${currentR}, gap : ${rGap} `);

    if (lGap < rGap) {
      // 왼손이 가까운 경우
      currentL = pressed;
      return "L";
    } else if (lGap > rGap) {
      // 오른손이 가까운 경우
      currentR = pressed;
      return "R";
    } else {
      // 같은 경우
      if (hand === "right") {
        currentR = pressed;
        return "R";
      } else {
        currentL = pressed;
        return "L";
      }
    }
  });

  return result.join("");
};

const getGap = (current, pressed) => {
  const gap = Math.abs(current - pressed);
  if (gap === 0) return 0;
  if (gap === 1 || gap === 3) return 1;
  if (gap === 2 || gap === 4 || gap === 6) return 2;
  if (gap === 5 || gap === 7 || gap === 9) return 3;
  if (gap === 8 || gap === 10) return 4;
  return 5;
};

test(`키패드 누르기`, () => {
  expect(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right")).toEqual(
    "LRLLLRLLRRL"
  );
  expect(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left")).toEqual(
    "LRLLRRLLLRR"
  );
  expect(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "	right")).toEqual(
    "LLRLLRLLRL"
  );
});
