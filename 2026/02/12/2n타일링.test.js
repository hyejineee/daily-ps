const { solution } = require("./2n타일링");

test("테스트 케이스 1", () => {
	const input = 2;
	const expected = 2;
	expect(solution(input)).toEqual(expected);
});

test("테스트 케이스 1", () => {
	const input = 9;
	const expected = 55;
	expect(solution(input)).toEqual(expected);
});

// 추가 테스트 케이스를 작성하세요
