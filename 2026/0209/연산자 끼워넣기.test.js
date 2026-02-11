const { solution } = require("./연산자 끼워넣기");

test("예제 1", () => {
	const n = 6;
	const numbers = [1, 2, 3, 4, 5, 6];
	const operators = [2, 1, 1, 1]; // [덧셈, 뺄셈, 곱셈, 나눗셈]

	const [max, min] = solution(n, numbers, operators);
	expect(max).toBe(54);
	expect(min).toBe(-24);
});

test("예제 2", () => {
	const n = 2;
	const numbers = [5, 6];
	const operators = [0, 0, 1, 0]; // [덧셈, 뺄셈, 곱셈, 나눗셈]

	const [max, min] = solution(n, numbers, operators);
	expect(max).toBe(30);
	expect(min).toBe(30);
});

test("예제 3", () => {
	const n = 3;
	const numbers = [3, 4, 5];
	const operators = [1, 0, 1, 0]; // [덧셈, 뺄셈, 곱셈, 나눗셈]

	const [max, min] = solution(n, numbers, operators);
	expect(max).toBe(35);
	expect(min).toBe(17);
});

test("예제 4 - 양수를 음수로 나누기", () => {
	const n = 2;
	const numbers = [1, -2];
	const operators = [0, 0, 0, 1]; // [덧셈, 뺄셈, 곱셈, 나눗셈]

	const [max, min] = solution(n, numbers, operators);
	expect(max).toBe(0);
	expect(min).toBe(0);
});
