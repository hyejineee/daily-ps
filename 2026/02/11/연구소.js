// https://www.acmicpc.net/problem/14502
// 난이도: Gold 4
// 태그: 브루트포스, BFS, 구현
// 평균 시도: 1.78회 | 해결한 사람: 41,374명
//
// 문제: N×M 크기의 연구소에 바이러스가 퍼지지 않도록 벽 3개를 세우고,
// 안전 영역 크기의 최댓값을 구하라.
//
// 접근: 1) 조합으로 빈 칸 중 3곳에 벽 설치 (백트래킹)
//       2) 각 경우에 대해 BFS로 바이러스 확산 시뮬레이션
//       3) 안전 영역(0인 칸) 개수의 최댓값 반환
const solution = (n, m, map) => {
	// n, m: 연구소 크기
	// map: n x m 크기의 연구소 상태 (0: 빈 칸, 1: 벽, 2: 바이러스)
	// 반환: 안전 영역의 최댓값

	const availableWall = [];
	const vs = [];
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < m; j++) {
			if (map[i][j] === 0) availableWall.push([i, j]);
			if (map[i][j] === 2) vs.push([i, j]);
		}
	}

	const d = [
		[-1, 0],
		[1, 0],
		[0, 1],
		[0, -1],
	];

	const spread = (i, j, copy) => {
		if (copy[i][j] === 1) return;
		for (const [di, dj] of d) {
			const ni = i + di;
			const nj = j + dj;
			if (copy?.[ni]?.[nj] === 0) {
				copy[ni][nj] = 2;
				spread(ni, nj, copy);
			}
		}
	};

	let max = -Infinity;

	const backtrack = (start, arr) => {
		if (arr.length === 3) {
			const walls = [...arr];

			const copy = map.map((a) => [...a]);

			for (const [i, j] of walls) {
				copy[i][j] = 1;
			}

			for (const [si, sj] of vs) {
				spread(si, sj, copy);
			}

			max = Math.max(max, copy.flat().filter((v) => v === 0).length);

			return;
		}

		for (let i = start; i < availableWall.length; i++) {
			arr.push(availableWall[i]);
			backtrack(i + 1, arr);
			arr.pop();
		}
	};

	backtrack(0, []);

	return max;
};

// 백준 제출용 코드
// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim();
// const lines = input.split("\n");
// const [n, m] = lines[0].split(" ").map(Number);
// const map = lines.slice(1).map((line) => line.split(" ").map(Number));

// const result = solution(n, m, map);
// console.log(result);

module.exports = { solution };
