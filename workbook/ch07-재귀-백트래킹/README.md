# Ch07 재귀와 백트래킹

> **핵심 가이드**: [백트래킹 완벽 가이드](../../docs/백트래킹_완벽가이드.md)

---

## 핵심 개념

### 재귀 (Recursion)
- 자기 자신을 호출하는 함수 — **기저 조건(base case)** 필수
- 스택 메모리 사용 → 깊이가 깊어지면 스택 오버플로우

### 백트래킹 (Backtracking)
- 모든 가능성을 탐색하되, **가지치기(pruning)** 로 불필요한 탐색 제거
- DFS + 조건 검사

---

## 반드시 알아야 할 패턴

### 패턴 1: 순열 (Permutation) — 순서가 중요

```js
function permute(nums) {
  const result = [];
  const used = new Array(nums.length).fill(false);

  function dfs(current) {
    if (current.length === nums.length) {
      result.push([...current]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;
      used[i] = true;
      current.push(nums[i]);
      dfs(current);
      current.pop();
      used[i] = false;
    }
  }
  dfs([]);
  return result;
}
```

### 패턴 2: 조합 (Combination) — 순서 무관

```js
function combine(nums, k) {
  const result = [];

  function dfs(start, current) {
    if (current.length === k) {
      result.push([...current]);
      return;
    }
    for (let i = start; i < nums.length; i++) {
      current.push(nums[i]);
      dfs(i + 1, current); // 다음 인덱스부터 (중복 방지)
      current.pop();
    }
  }
  dfs(0, []);
  return result;
}
```

> **핵심**: `for (let i = start)` + `dfs(i + 1)` — 이 패턴이 중복을 막는다!

### 패턴 3: 부분집합 (Subset)

```js
function subsets(nums) {
  const result = [];

  function dfs(start, current) {
    result.push([...current]); // 모든 상태를 결과에 추가

    for (let i = start; i < nums.length; i++) {
      current.push(nums[i]);
      dfs(i + 1, current);
      current.pop();
    }
  }
  dfs(0, []);
  return result;
}
```

### 패턴 4: 가지치기 (Pruning)

```js
function combinationSum(nums, target) {
  const result = [];
  nums.sort((a, b) => a - b); // 정렬로 가지치기 효율화

  function dfs(start, current, remaining) {
    if (remaining === 0) {
      result.push([...current]);
      return;
    }
    for (let i = start; i < nums.length; i++) {
      if (nums[i] > remaining) break; // 가지치기: 이미 초과
      current.push(nums[i]);
      dfs(i + 1, current, remaining - nums[i]);
      current.pop();
    }
  }
  dfs(0, [], target);
  return result;
}
```

---

## 기초 문제 ★ (10문제)

| # | 문제명 | BOJ | 핵심 포인트 | 완료 |
|---|--------|-----|------------|------|
| 1 | 팩토리얼 | [10872](https://www.acmicpc.net/problem/10872) | 재귀 기본 | [ ] |
| 2 | 피보나치 수 5 | [10870](https://www.acmicpc.net/problem/10870) | 재귀 + 메모이제이션 필요성 | [ ] |
| 3 | 하노이 탑 이동 순서 | [11729](https://www.acmicpc.net/problem/11729) | 재귀 구조 이해 | [ ] |
| 4 | Z | [1074](https://www.acmicpc.net/problem/1074) | 분할정복 재귀 | [ ] |
| 5 | N과 M (1) | [15649](https://www.acmicpc.net/problem/15649) | 순열 기본 | [ ] |
| 6 | N과 M (2) | [15650](https://www.acmicpc.net/problem/15650) | 조합 기본 | [ ] |
| 7 | N과 M (3) | [15651](https://www.acmicpc.net/problem/15651) | 중복 순열 | [ ] |
| 8 | N과 M (4) | [15652](https://www.acmicpc.net/problem/15652) | 중복 조합 | [ ] |
| 9 | N-Queen | [9663](https://www.acmicpc.net/problem/9663) | 백트래킹 가지치기 | [ ] |
| 10 | 일곱 난쟁이 | [2309](https://www.acmicpc.net/problem/2309) | 부분집합 | [ ] |

---

## 중급 문제 ★★ (20문제)

| # | 문제명 | BOJ | 핵심 포인트 | 완료 |
|---|--------|-----|------------|------|
| 11 | N과 M (5) | [15654](https://www.acmicpc.net/problem/15654) | 값 기반 순열 | [ ] |
| 12 | N과 M (7) | [15656](https://www.acmicpc.net/problem/15656) | 값 기반 중복 순열 | [ ] |
| 13 | 로또 | [6603](https://www.acmicpc.net/problem/6603) | 조합 응용 | [ ] |
| 14 | 부분집합의 합 | [1182](https://www.acmicpc.net/problem/1182) | 부분집합 + 합 조건 | [ ] |
| 15 | 암호 만들기 | [1759](https://www.acmicpc.net/problem/1759) | 조합 + 모음 조건 | [ ] |
| 16 | 스도쿠 | [2580](https://www.acmicpc.net/problem/2580) | 백트래킹 + 유효성 검사 | [ ] |
| 17 | 알파벳 | [1987](https://www.acmicpc.net/problem/1987) | DFS + 방문 상태 | [ ] |
| 18 | 연산자 끼워넣기 | [14888](https://www.acmicpc.net/problem/14888) | 순열 + 수식 계산 | [ ] |
| 19 | 외판원 순회 2 | [10971](https://www.acmicpc.net/problem/10971) | 순열로 모든 경로 | [ ] |
| 20 | 부등호 | [2529](https://www.acmicpc.net/problem/2529) | 조건부 순열 | [ ] |
| 21 | 단어 수학 | [1339](https://www.acmicpc.net/problem/1339) | 그리디 + 순열 비교 | [ ] |
| 22 | 감소하는 수 | [1038](https://www.acmicpc.net/problem/1038) | 조합으로 생성 | [ ] |
| 23 | 숫자판 점프 | [2210](https://www.acmicpc.net/problem/2210) | DFS + 중복 허용 | [ ] |
| 24 | 체스판 다시 칠하기 | [1018](https://www.acmicpc.net/problem/1018) | 완전탐색 | [ ] |
| 25 | 영화감독 숌 | [1436](https://www.acmicpc.net/problem/1436) | 완전탐색 | [ ] |
| 26 | Guess | [1248](https://www.acmicpc.net/problem/1248) | 부호 조건 백트래킹 | [ ] |
| 27 | 좋은수열 | [2661](https://www.acmicpc.net/problem/2661) | 문자열 백트래킹 | [ ] |
| 28 | 2차원 합 게임 | — | 부분집합 응용 | [ ] |
| 29 | 단어 변환 | — | BFS/DFS 경로 | [ ] |
| 30 | 퍼즐 | [1525](https://www.acmicpc.net/problem/1525) | 상태 BFS | [ ] |

---

## 고급 문제 ★★★ (30문제)

| # | 문제명 | BOJ | 핵심 포인트 | 완료 |
|---|--------|-----|------------|------|
| 31 | 비숍 | [1799](https://www.acmicpc.net/problem/1799) | 홀짝 분리 백트래킹 | [ ] |
| 32 | 부분수열의 합 2 | [1208](https://www.acmicpc.net/problem/1208) | Meet in the Middle | [ ] |
| 33 | 우주 탐사선 | [17182](https://www.acmicpc.net/problem/17182) | 비트마스크 + 백트래킹 | [ ] |
| 34 | 외판원 순회 1 | [2098](https://www.acmicpc.net/problem/2098) | 비트마스크 DP | [ ] |
| 35 | 스도쿠 심화 | [2239](https://www.acmicpc.net/problem/2239) | 고급 백트래킹 | [ ] |
| 36 | 소풍 | [2026](https://www.acmicpc.net/problem/2026) | — | [ ] |
| 37 | 도미노 | — | 비트마스크 + 백트래킹 | [ ] |
| 38 | 마법사 상어와 비바라기 (재귀) | — | 복합 문제 | [ ] |
| 39 | 트리 구조 | — | 재귀 트리 탐색 | [ ] |
| 40 | 사탕 게임 | — | 최적화 백트래킹 | [ ] |
| 41~60 | (추가 예정) | — | — | [ ] |

---

## 단원 모의고사 (90분)

| # | 문제 | BOJ | 예상 시간 |
|---|------|-----|----------|
| 1 | N과 M (2) | [15650](https://www.acmicpc.net/problem/15650) | 10분 |
| 2 | 부분집합의 합 | [1182](https://www.acmicpc.net/problem/1182) | 20분 |
| 3 | 연산자 끼워넣기 | [14888](https://www.acmicpc.net/problem/14888) | 25분 |
| 4 | N-Queen | [9663](https://www.acmicpc.net/problem/9663) | 35분 |

**내 풀이 시간 기록**: ____분 / 90분
