// https://www.acmicpc.net/problem/11728
// 난이도: Silver 5
// 태그: 정렬, 두 포인터
// 제목: 배열 합치기

const solution = (n, m, arrA, arrB) => {
	// n: A 배열의 크기
	// m: B 배열의 크기
	// arrA: A 배열
	// arrB: B 배열
	// 여기에 솔루션 코드를 작성하세요

	let p1 = 0;
	let p2 = 0;
	const result = [];

	while (p1 < n && p2 < m) {
		const a = arrA[p1];
		const b = arrB[p2];

		if (a > b) {
			result.push(b);
			p2++;
		} else {
			result.push(a);
			p1++;
		}
	}

	while (p1 < n) {
		result.push(arrA[p1]);
		p1++;
	}

	while (p2 < m) {
		result.push(arrB[p2]);
		p2++;
	}

	return result.join(" ");
};

// 백준 제출용 코드
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
const lines = input.split("\n");
const [n, m] = lines[0].split(" ").map(Number);
const arrA = lines[1].split(" ").map(Number);
const arrB = lines[2].split(" ").map(Number);
const result = solution(n, m, arrA, arrB);
console.log(result);

module.exports = { solution };
