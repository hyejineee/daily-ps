// https://www.acmicpc.net/problem/15650
// 난이도: Silver 3
// 태그: 백트래킹
// N과 M (2): 1부터 N까지 자연수 중에서 중복 없이 M개를 고른 수열 (오름차순)
const solution = (n, m) => {
	const visited = Array.from({ length: n + 1 }, () => false);

	const result = [];
	const backtrack = (start, arr) => {
		if (arr.length === m) {
			result.push([...arr]);
			return;
		}

		for (let i = start; i <= n; i++) {
			visited[i] = true;
			arr.push(i);
			backtrack(i + 1, arr);
			arr.pop();
			visited[i] = false;
		}
	};

	backtrack(1, []);

	return result;
};

// 백준 제출용 코드
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const [n, m] = input.map(Number);

const result = solution(n, m);
result.forEach(arr => console.log(arr.join(' ')));

module.exports = { solution };
