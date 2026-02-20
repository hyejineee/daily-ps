# Ch09 동적 프로그래밍 (DP)

> **핵심 가이드**: [DP 완벽 가이드](../../docs/DP_완벽가이드.md)

---

## 핵심 개념

**DP 판별 체크리스트**
- [ ] 최적/최대/최소/개수를 구하는가?
- [ ] 같은 계산이 반복되는가?
- [ ] 이전 상태가 현재 상태에 영향을 주는가?

### DP 5단계 사고법
1. **상태 정의**: `dp[i]`가 무엇을 의미하는가?
2. **초기값**: 기저 조건은?
3. **점화식**: `dp[i]`를 이전 상태로 표현
4. **순서**: 어떤 순서로 채울까?
5. **답 위치**: `dp[?]`이 최종 답

---

## 반드시 알아야 할 패턴

### 패턴 1: 1D DP — 1로 만들기

```js
// dp[n] = n을 1로 만드는 최소 연산 횟수
function minOps(n) {
  const dp = new Array(n + 1).fill(Infinity);
  dp[1] = 0;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + 1; // -1 연산
    if (i % 2 === 0) dp[i] = Math.min(dp[i], dp[i / 2] + 1);
    if (i % 3 === 0) dp[i] = Math.min(dp[i], dp[i / 3] + 1);
  }
  return dp[n];
}
```

### 패턴 2: LIS (가장 긴 증가하는 부분 수열) — O(n²)

```js
function lis(arr) {
  const n = arr.length;
  const dp = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return Math.max(...dp);
}
```

### 패턴 3: LCS (최장 공통 부분 수열)

```js
function lcs(s, t) {
  const m = s.length, n = t.length;
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s[i - 1] === t[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
      else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
  return dp[m][n];
}
```

### 패턴 4: 0/1 Knapsack (배낭)

```js
function knapsack(items, capacity) {
  // dp[w] = 무게 w 이하에서 가능한 최대 가치
  const dp = new Array(capacity + 1).fill(0);

  for (const [weight, value] of items) {
    // 뒤에서부터 순회 (같은 아이템 중복 방지)
    for (let w = capacity; w >= weight; w--) {
      dp[w] = Math.max(dp[w], dp[w - weight] + value);
    }
  }
  return dp[capacity];
}
```

### 패턴 5: 구간 DP

```js
// dp[i][j] = 구간 [i, j]에서의 최적값
function intervalDP(arr) {
  const n = arr.length;
  const dp = Array.from({ length: n }, () => new Array(n).fill(0));

  // 구간 길이 2부터
  for (let len = 2; len <= n; len++) {
    for (let i = 0; i <= n - len; i++) {
      const j = i + len - 1;
      dp[i][j] = Infinity;
      for (let k = i; k < j; k++) {
        dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[k + 1][j] + cost(i, k, j));
      }
    }
  }
  return dp[0][n - 1];
}
```

---

## 기초 문제 ★ (10문제)

| # | 문제명 | BOJ | 핵심 포인트 | 완료 |
|---|--------|-----|------------|------|
| 1 | 1로 만들기 | [1463](https://www.acmicpc.net/problem/1463) | 1D DP 기본 | [ ] |
| 2 | 2×n 타일링 | [11726](https://www.acmicpc.net/problem/11726) | 피보나치형 점화식 | [ ] |
| 3 | 2×n 타일링 2 | [11727](https://www.acmicpc.net/problem/11727) | 타일 종류 추가 | [ ] |
| 4 | 1, 2, 3 더하기 | [9095](https://www.acmicpc.net/problem/9095) | 경우의 수 DP | [ ] |
| 5 | 쉬운 계단 수 | [10844](https://www.acmicpc.net/problem/10844) | 2D DP 기본 | [ ] |
| 6 | 오르막 수 | [11057](https://www.acmicpc.net/problem/11057) | 2D 비감소 DP | [ ] |
| 7 | 이친수 | [2193](https://www.acmicpc.net/problem/2193) | 상태 포함 DP | [ ] |
| 8 | 파도반 수열 | [9461](https://www.acmicpc.net/problem/9461) | 점화식 구하기 | [ ] |
| 9 | 합분해 | [2225](https://www.acmicpc.net/problem/2225) | 점화식 도출 | [ ] |
| 10 | 암호코드 | [2011](https://www.acmicpc.net/problem/2011) | 조건부 점화식 | [ ] |

---

## 중급 문제 ★★ (20문제)

| # | 문제명 | BOJ | 핵심 포인트 | 완료 |
|---|--------|-----|------------|------|
| 11 | RGB 거리 | [1149](https://www.acmicpc.net/problem/1149) | 2D DP 색상 제약 | [ ] |
| 12 | 정수 삼각형 | [1932](https://www.acmicpc.net/problem/1932) | 삼각형 DP | [ ] |
| 13 | 계단 오르기 | [2579](https://www.acmicpc.net/problem/2579) | 조건부 점화식 | [ ] |
| 14 | LCS | [9251](https://www.acmicpc.net/problem/9251) | LCS 기본 | [ ] |
| 15 | 연속합 | [1912](https://www.acmicpc.net/problem/1912) | 최대 연속 부분합 | [ ] |
| 16 | 가장 긴 증가하는 부분 수열 | [11053](https://www.acmicpc.net/problem/11053) | LIS O(n²) | [ ] |
| 17 | 평범한 배낭 | [12865](https://www.acmicpc.net/problem/12865) | 0/1 Knapsack | [ ] |
| 18 | 제곱수의 합 | [1699](https://www.acmicpc.net/problem/1699) | 동전 교환형 | [ ] |
| 19 | 타일 채우기 | [2133](https://www.acmicpc.net/problem/2133) | 패턴 분석 DP | [ ] |
| 20 | 가장 큰 정사각형 | [1915](https://www.acmicpc.net/problem/1915) | 2D DP | [ ] |
| 21 | 계단 수 | [1562](https://www.acmicpc.net/problem/1562) | 비트마스크 DP | [ ] |
| 22 | 전깃줄 | [2565](https://www.acmicpc.net/problem/2565) | LIS 응용 | [ ] |
| 23 | 파일 합치기 | [11066](https://www.acmicpc.net/problem/11066) | 구간 DP | [ ] |
| 24 | 이동하기 | [11048](https://www.acmicpc.net/problem/11048) | 격자 DP | [ ] |
| 25 | 내리막 길 | [1520](https://www.acmicpc.net/problem/1520) | DFS + 메모이제이션 | [ ] |
| 26 | ACM Craft | [1005](https://www.acmicpc.net/problem/1005) | 위상정렬 + DP | [ ] |
| 27 | 호텔 | [1106](https://www.acmicpc.net/problem/1106) | 무한 배낭 | [ ] |
| 28 | LCS 3 | [1958](https://www.acmicpc.net/problem/1958) | 3D LCS | [ ] |
| 29 | 로봇 조종 | [2169](https://www.acmicpc.net/problem/2169) | 방향 제약 격자 DP | [ ] |
| 30 | 가장 긴 증가하는 부분 수열 2 | [12015](https://www.acmicpc.net/problem/12015) | LIS O(n log n) | [ ] |

---

## 고급 문제 ★★★ (30문제)

| # | 문제명 | BOJ | 핵심 포인트 | 완료 |
|---|--------|-----|------------|------|
| 31 | 욕심쟁이 판다 | [1937](https://www.acmicpc.net/problem/1937) | DFS + DP | [ ] |
| 32 | 행렬 곱셈 순서 | [11049](https://www.acmicpc.net/problem/11049) | 구간 DP | [ ] |
| 33 | 같은 탑 | [1126](https://www.acmicpc.net/problem/1126) | 탑 높이 DP | [ ] |
| 34 | 경찰차 | [2618](https://www.acmicpc.net/problem/2618) | 두 에이전트 DP | [ ] |
| 35 | 괄호 | [10422](https://www.acmicpc.net/problem/10422) | 카탈란 수 DP | [ ] |
| 36 | 그림 교환 | [1029](https://www.acmicpc.net/problem/1029) | 비트마스크 DP | [ ] |
| 37 | 고층 빌딩 | [1328](https://www.acmicpc.net/problem/1328) | 3D DP | [ ] |
| 38 | 가로등 끄기 | [2315](https://www.acmicpc.net/problem/2315) | 구간 DP | [ ] |
| 39 | 데스노트 | [2281](https://www.acmicpc.net/problem/2281) | 줄 바꿈 DP | [ ] |
| 40 | 성냥개비 | [3687](https://www.acmicpc.net/problem/3687) | 최소/최대 DP | [ ] |
| 41 | 카드 게임 | [11062](https://www.acmicpc.net/problem/11062) | 게임 DP | [ ] |
| 42 | 트리의 지름 | [1167](https://www.acmicpc.net/problem/1167) | 트리 DP | [ ] |
| 43 | 외판원 순회 1 | [2098](https://www.acmicpc.net/problem/2098) | TSP 비트마스크 DP | [ ] |
| 44 | 인수 분해 | — | 소인수 DP | [ ] |
| 45 | 색상환 | [2482](https://www.acmicpc.net/problem/2482) | 원형 배열 DP | [ ] |
| 46 | 정상 회담 2 | [1670](https://www.acmicpc.net/problem/1670) | 카탈란 DP | [ ] |
| 47 | 타일 채우기 2 | [2718](https://www.acmicpc.net/problem/2718) | 비트마스크 DP | [ ] |
| 48 | 타일 채우기 3 | [14837](https://www.acmicpc.net/problem/14837) | — | [ ] |
| 49 | 히스토그램에서 가장 큰 직사각형 | [6549](https://www.acmicpc.net/problem/6549) | 분할정복 | [ ] |
| 50 | 단어 수학 최적 | — | — | [ ] |
| 51~60 | (추가 예정) | — | — | [ ] |

---

## 단원 모의고사 (120분)

| # | 문제 | BOJ | 예상 시간 |
|---|------|-----|----------|
| 1 | 계단 오르기 | [2579](https://www.acmicpc.net/problem/2579) | 15분 |
| 2 | LCS | [9251](https://www.acmicpc.net/problem/9251) | 20분 |
| 3 | 평범한 배낭 | [12865](https://www.acmicpc.net/problem/12865) | 25분 |
| 4 | 가장 큰 정사각형 | [1915](https://www.acmicpc.net/problem/1915) | 25분 |
| 5 | 파일 합치기 | [11066](https://www.acmicpc.net/problem/11066) | 35분 |

**내 풀이 시간 기록**: ____분 / 120분
