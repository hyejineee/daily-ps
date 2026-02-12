// https://www.acmicpc.net/problem/15686
// 난이도: Gold 5
// 태그: 백트래킹, 브루트포스, 구현
// 평균 시도: 2.11회 | 해결한 사람: 35,433명
//
// 문제: N×N 크기 도시에서 M개의 치킨집을 선택하여 도시의 치킨 거리를 최소화하라.
// 치킨 거리 = 각 집에서 가장 가까운 치킨집까지의 거리 합
//
// 접근: 1) 조합으로 치킨집 중 M개 선택 (백트래킹)
//       2) 각 경우에 대해 치킨 거리 계산
//       3) 최솟값 반환
const solution = (n, m, map) => {
	// n: 도시 크기
	// m: 선택할 치킨집 개수
	// map: n x n 크기의 도시 (0: 빈 칸, 1: 집, 2: 치킨집)
	// 반환: 도시의 치킨 거리 최솟값

	const chickens = [];
	const homs = [];

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			if (map[i][j] === 1) {
				homs.push([i, j]);
			}

			if (map[i][j] === 2) {
				chickens.push([i, j]);
			}
		}
	}

	let min = Infinity;
	const backtrack = (start, arr) => {
		if (arr.length === m) {
			const pick = [...arr];

			let sum = 0;

			// 모든 집의 치킨거리 구하기
			for (const [hi, hj] of homs) {
				let minDistance = Infinity;
				for (const [pi, pj] of pick) {
					minDistance = Math.min(
						minDistance,
						Math.abs(hi - pi) + Math.abs(hj - pj),
					);
				}
				sum += minDistance;
			}

			min = Math.min(min, sum);
			return;
		}

		for (let i = start; i < chickens.length; i++) {
			arr.push(chickens[i]);
			backtrack(i + 1, arr);
			arr.pop();
		}
	};

	backtrack(0, []);

	return min;
};

// 백준 제출용 코드
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
const lines = input.split("\n");
const [n, m] = lines[0].split(" ").map(Number);
const map = lines.slice(1).map((line) => line.split(" ").map(Number));

const result = solution(n, m, map);
console.log(result);

module.exports = { solution };
