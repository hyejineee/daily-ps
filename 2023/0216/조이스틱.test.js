const solution = (name) => {
  let alphabetMoveCount = 0; // 알바벳을 변경하는데 움직인 횟수
  let cursorMoveCount = name.length - 1; // 커서 위치를 변경하는 데 움직인 횟수

  for (let i = 0; i < name.length; i++) {
    // 현재 알파벳의 인덱스가 절반을 넘어가면 뒤에서 부터 변경, 절반 보다 작으면 앞에서 부터 변경
    alphabetMoveCount += Math.min(
      name.charCodeAt(i) - 'A'.charCodeAt(0),
      'Z'.charCodeAt(0) - name.charCodeAt(i) + 1
    );

    // A가 아닌 위치까지 커서 이동하는 부분
    let index = i + 1;
    while (index < name.length && name[index] === 'A') index++;

    cursorMoveCount = Math.min(cursorMoveCount, i * 2 + name.length - index);
    cursorMoveCount = Math.min(cursorMoveCount, (name.length - index) * 2 + i);
  }
  return alphabetMoveCount + cursorMoveCount;
};

// BBBBAAAAAAAB

test(`조이스틱`, () => {
  expect(solution('JAZ')).toEqual(11);
  expect(solution('JEROEN')).toEqual(56);
  expect(solution('JAN')).toEqual(23);
});
