// https://www.acmicpc.net/problem/2230
// 난이도: Gold 5
// 태그: 정렬, 두 포인터

const solution = (n, m, arr) => {
	arr.sort((a, b) => a - b);

	let l = 0;
	let r = 1;
	let min = Infinity;

	while (r < n) {
		const sub = arr[r] - arr[l];

		if (sub > m) {
			min = Math.min(min, sub);
			l++;
		} else if (sub < m) {
			r++;
		} else {
			min = m;
			break;
		}

		if (l === r) {
			r++;
		}
	}

	return min;
};

// 백준 제출용 코드

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
console.log(solution(n, m, arr));

module.exports = { solution };
