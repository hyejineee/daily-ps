// https://www.acmicpc.net/problem/2018
// 난이도: Silver 5
// 태그: 수학, 두 포인터
// 제목: 수들의 합 5

const solution = (n) => {
	// n을 직접 사용
	// 여기에 솔루션 코드를 작성하세요

	let left = 0;
	let right = 0;
	let count = 0;

	while (left < n && right < n) {
		let sum = 0;

		for (let i = left; i <= right; i++) {
			sum += i + 1;
		}

		if (sum < n) {
			right++;
		} else if (sum > n) {
			left++;
		} else {
			right++;
			count++;
		}
	}

	return count;
};

// 백준 제출용 코드
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
const n = Number(input);
const result = solution(n);
console.log(result);

module.exports = { solution };
