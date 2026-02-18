// https://www.acmicpc.net/problem/2470
// 난이도: Gold 5
// 태그: 정렬, 이분 탐색, 두 포인터

const solution = (n, liquids) => {
	// n: 용액의 개수
	// liquids: n개의 용액 특성값 배열

	const sorted = liquids.sort((a, b) => a - b);

	let left = 0;
	let right = n - 1;
	let min = Infinity;
	const result = [];

	while (left < right) {
		const a = sorted[left];
		const b = sorted[right];

		const sum = a + b;
		if (min > Math.abs(sum)) {
			result.pop();
			result.push([a, b]);
			min = Math.abs(sum);
		}

		if (sum < 0) {
			left++;
		} else {
			right--;
		}
	}

	return result[0].join(" ");
};

// 백준 제출용 코드
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
const lines = input.split("\n");
const n = Number(lines[0]);
const liquids = lines[1].split(" ").map(Number);
const result = solution(n, liquids);
console.log(result);

module.exports = { solution };
