// https://www.acmicpc.net/problem/11726
// 문제 설명을 여기에 작성하세요

const solution = (input) => {
	// 입력 처리
	// const lines = input.split('\n');
	// const [n, m] = input.split(' ').map(Number);

	const dp = Array.from({ length: input }, () => 0);
	dp[0] = 1;
	dp[1] = 2;
	dp[2] = 3;

	for (let i = 3; i < input; i++) {
		dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;
	}
	return dp[input - 1];
};

// 백준 제출용 코드
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
const result = solution(input);
console.log(result);

module.exports = { solution };
