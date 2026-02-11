// https://www.acmicpc.net/problem/14889
// 난이도: Silver 1
// 태그: 브루트포스, 백트래킹
// 평균 시도: 2.12회
//
// 문제: N명을 N/2명씩 스타트 팀과 링크 팀으로 나눈다.
// 능력치 Sij는 i번 사람과 j번 사람이 같은 팀에 속했을 때의 능력치.
// 팀의 능력치 = 팀에 속한 모든 쌍의 능력치 합
// 스타트 팀과 링크 팀의 능력치 차이의 최솟값을 구하라.
const solution = (n, stats) => {
	// n: 사람의 수 (짝수)
	// stats: n x n 능력치 배열
	// 반환: 스타트 팀과 링크 팀의 능력치 차이의 최솟값

	const visited = Array.from({ length: n }, () => false);
	visited[0] = true; // 0번을 스타트 팀에 고정 (대칭성 활용)

	let min = Infinity;
	const backtrack = (start, count) => {
		// 인원수가 다 차면
		if (count === n / 2) {
			let sum1 = 0;
			let sum2 = 0;

			// 능력치 계산 (조합 생성 없이 직접 계산)
			for (let i = 0; i < n; i++) {
				for (let j = i + 1; j < n; j++) {
					if (visited[i] && visited[j]) {
						// 둘 다 스타트 팀
						sum1 += stats[i][j] + stats[j][i];
					} else if (!visited[i] && !visited[j]) {
						// 둘 다 링크 팀
						sum2 += stats[i][j] + stats[j][i];
					}
				}
			}

			min = Math.min(min, Math.abs(sum1 - sum2));
			return;
		}

		// 조합 생성 (start부터 시작)
		for (let i = start; i < n; i++) {
			if (!visited[i]) {
				visited[i] = true;
				backtrack(i + 1, count + 1);
				visited[i] = false;
			}
		}
	};

	backtrack(1, 1); // 0번은 이미 선택했으므로 1부터 시작

	return min;
};

// 백준 제출용 코드
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
const lines = input.split("\n");
const n = Number(lines[0]);
const stats = lines.slice(1).map((line) => line.split(" ").map(Number));

const result = solution(n, stats);
console.log(result);

module.exports = { solution };
