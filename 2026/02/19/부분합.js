// https://www.acmicpc.net/problem/1806
// 난이도: Gold 4
// 태그: 누적 합, 두 포인터

const solution = (n, s, arr) => {
	let l = 0;
	let sum = 0;
	let min = Infinity;

	for (let r = 0; r < n; r++) {
		sum += arr[r];

		while (sum >= s) {
			min = Math.min(min, r - l + 1);
			sum -= arr[l++];
		}
	}

	return min === Infinity ? 0 : min;
};

// 백준 제출용 코드
// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const [n, s] = input[0].split(" ").map(Number);
// const arr = input[1].split(" ").map(Number);
// const result = solution(n, s, arr);
// console.log(result);

module.exports = { solution };
