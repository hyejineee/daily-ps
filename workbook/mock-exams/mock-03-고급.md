# 모의고사 3회 — 고급 종합

> **범위**: 전 범위 고급
> **제한 시간**: 180분 (카카오/네이버 코테 기준)
> **목표**: 실전 코딩테스트 시뮬레이션

---

## 시험 시작 전

- [ ] 타이머 켜기 (180분)
- [ ] 5문제를 먼저 모두 읽고 난이도 파악
- [ ] 쉬운 것부터 — 3문제를 확실히 잡고, 남은 시간에 나머지
- [ ] 40분 이상 막히면 과감하게 다음 문제로

---

## 문제 목록

| # | 문제 | BOJ | 주제 | 예상 시간 | 내 시간 | 결과 |
|---|------|-----|------|----------|---------|------|
| 1 | 연구소 | [14502](https://www.acmicpc.net/problem/14502) | 완전탐색 + BFS | 30분 | ____분 | [ ] |
| 2 | 평범한 배낭 | [12865](https://www.acmicpc.net/problem/12865) | 0/1 배낭 DP | 25분 | ____분 | [ ] |
| 3 | 가장 긴 증가하는 부분 수열 2 | [12015](https://www.acmicpc.net/problem/12015) | LIS + 이진탐색 | 30분 | ____분 | [ ] |
| 4 | 최단경로 | [1753](https://www.acmicpc.net/problem/1753) | 다익스트라 | 35분 | ____분 | [ ] |
| 5 | 벽 부수고 이동하기 | [2206](https://www.acmicpc.net/problem/2206) | BFS + 상태 관리 | 40분 | ____분 | [ ] |

**총 소요 시간**: ____분 / 180분

---

## 풀이 후 점검

### 문제 1: 연구소 (BOJ 14502)
**접근**:
1. 빈 칸에서 벽 3개를 놓는 모든 조합 (`nC3`)
2. 각 조합마다 BFS로 바이러스 전파
3. 안전 구역 넓이 최대값 갱신
```
빈 칸이 최대 64개 → 64C3 = 41664 조합
각 BFS가 O(n*m = 64) → 총 O(64 * 41664) ≈ 260만 → 가능
```
**핵심 코드 구조**:
```js
function solve(grid) {
  const empties = []; // 모든 빈 칸 좌표
  // 벽 3개 놓기: combinations(empties, 3)
  for each combination:
    place walls
    bfs(grid, viruses)
    calculate safe area
    restore walls
}
```

---

### 문제 2: 평범한 배낭 (BOJ 12865)
**접근**: 0/1 Knapsack
```
dp[w] = 무게 w 이하에서 최대 가치
역방향 순회로 같은 물건 중복 방지
```
**핵심 코드**:
```js
const dp = new Array(capacity + 1).fill(0);
for (const [w, v] of items) {
  for (let j = capacity; j >= w; j--) {
    dp[j] = Math.max(dp[j], dp[j - w] + v);
  }
}
```
**자주 하는 실수**: 순방향으로 순회하면 같은 아이템을 여러 번 사용

---

### 문제 3: 가장 긴 증가하는 부분 수열 2 (BOJ 12015)
**접근**: dp 배열을 유지하되 이진탐색으로 O(n log n) 달성
```
dp = 길이 i인 LIS의 마지막 원소 중 최솟값
arr[j]를 처리할 때: dp에서 arr[j]가 들어갈 위치를 lower_bound로 찾기
```
**핵심 코드**:
```js
const dp = [];
for (const num of arr) {
  const pos = lowerBound(dp, num); // dp에서 num 이상인 첫 위치
  dp[pos] = num;
}
return dp.length; // LIS 길이
```

---

### 문제 4: 최단경로 (BOJ 1753)
**접근**: 다익스트라 + Min-Heap
```
dist 배열 초기화: Infinity
시작점 dist = 0, heap에 삽입
heap에서 꺼낸 거리가 현재 dist보다 크면 skip (이미 처리됨)
```
**주의**: BOJ 1753은 단방향 그래프!
```js
const graph = Array.from({ length: V + 1 }, () => []);
// u → v, weight w (단방향)
graph[u].push([v, w]);
```

---

### 문제 5: 벽 부수고 이동하기 (BOJ 2206)
**접근**: BFS + 상태에 "벽을 부쉈는가" 포함
```
visited[r][c][broke] = 방문 여부
  broke = 0: 아직 벽을 안 부쉈음
  broke = 1: 이미 한 번 부쉈음
```
**핵심 코드**:
```js
const visited = Array.from({ length: n },
  () => Array.from({ length: m },
    () => [false, false]  // [벽 안 부숨, 벽 부숨]
  )
);
// BFS 큐: [r, c, broke, dist]
```
**자주 하는 실수**: broke 상태 없이 visited만 관리하면 최적 경로를 놓침

---

## 실전 팁

### 시간 배분 전략
```
1번 확인 (5분) → 1번 풀기 → 2번 확인 → ... → 빠른 문제 먼저

막힌 경우:
- 15분 이상 막히면 → 다른 접근법 시도
- 30분 이상 막히면 → 일단 다음 문제로, 나중에 돌아오기
```

### 코드 작성 전 체크리스트
- [ ] 시간 복잡도 계산 (`n = ?`, `O(?) ≤ 10^8`)
- [ ] 엣지 케이스 (`n = 1`, 빈 배열, 최대값)
- [ ] 자료형 오버플로우 (JS는 BigInt 필요한 경우)

---

## 오답 노트

| 문제 | 틀린 이유 | 올바른 접근 | 다시 풀 날짜 |
|------|----------|------------|------------|
| | | | |
