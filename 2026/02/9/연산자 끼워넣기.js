// https://www.acmicpc.net/problem/14888
// 난이도: Silver 1
// 태그: 브루트포스 알고리즘, 백트래킹
// 연산자 끼워넣기
const solution = (n, numbers, operators) => {
	// 여기에 솔루션 코드를 작성하세요
	// operators: [덧셈, 뺄셈, 곱셈, 나눗셈]
	// return [최댓값, 최솟값]

	const express = [];
	const ops = ["+", "-", "*", "/"];
	for (let i = 0; i < 4; i++) {
		for (let j = 0; j < operators[i]; j++) {
			express.push(ops[i]);
		}
	}

	const visited = Array.from({ length: express.length }, () => false);

	let max = -Infinity;
	let min = Infinity;

	const backtrack = (arr) => {
		if (arr.length === express.length) {
			max = Math.max(max, calculate(numbers, [...arr]));
			min = Math.min(min, calculate(numbers, [...arr]));
			return;
		}

		for (let i = 0; i < express.length; i++) {
			if (!visited[i]) {
				visited[i] = true;
				arr.push(express[i]);
				backtrack(arr);
				arr.pop();
				visited[i] = false;
			}
		}
		return;
	};

	backtrack([]);

	return [max, min];
};

const calculate = (numbers, ops) => {
	let result = numbers[0];
	for (let i = 1; i < numbers.length; i++) {
		const op = ops[i - 1];
		const num = numbers[i];

		if (op === "+") result += num;
		if (op === "-") result -= num;
		if (op === "*") result *= num;
		if (op === "/") result = Math.trunc(result / num);
	}

	return result === 0 ? 0 : result;
};

// 백준 제출용 코드
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
const lines = input.split("\n");
const n = parseInt(lines[0]);
const numbers = lines[1].split(" ").map(Number);
const operators = lines[2].split(" ").map(Number);

const [max, min] = solution(n, numbers, operators);
console.log(max);
console.log(min);

module.exports = { solution };
