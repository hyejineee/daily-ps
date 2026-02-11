// https://www.acmicpc.net/problem/15649
// 1부터 n까지 중복없이 고르는 길이가 m개인 수열
const solution = (n, m) => {
	const visited = Array.from({ length: n + 1 }, () => false);
	const result = [];

	const backtrack = (arr) => {
		// 길이가 m이 되면 출력
		if (arr.length === m) {
			console.log(arr.join(' '));
			return;
		}

		// 1부터 n까지 시도
		for (let i = 1; i <= n; i++) {
			if (!visited[i]) {
				visited[i] = true;        // 선택
				arr.push(i);
				backtrack(arr);           // 재귀
				arr.pop();                // 선택 취소
				visited[i] = false;       // 백트래킹
			}
		}
	};

	backtrack([]);
};

module.exports = { solution };
