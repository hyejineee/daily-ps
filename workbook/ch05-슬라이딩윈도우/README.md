# Ch05 슬라이딩 윈도우

> **핵심 가이드**: [슬라이딩 윈도우 완벽 가이드](../../docs/슬라이딩윈도우_완벽가이드.md)

---

## 핵심 개념

배열에서 **연속된 구간**을 탐색할 때, 윈도우를 밀어가며 O(n)에 처리

### 두 종류

| 종류 | 특징 | 사용 시기 |
|------|------|----------|
| **고정 크기** | 윈도우 크기 k 고정 | "크기 k인 구간에서 최대/최소/합" |
| **가변 크기** | 조건 만족할 때까지 확장/수축 | "조건을 만족하는 최소/최대 구간" |

---

## 반드시 알아야 할 패턴

### 패턴 1: 고정 크기 윈도우

```js
function maxSumFixed(arr, k) {
  // 첫 윈도우 초기화
  let windowSum = arr.slice(0, k).reduce((a, b) => a + b, 0);
  let maxSum = windowSum;

  // 윈도우 슬라이딩
  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k]; // 추가 - 제거
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum;
}
```

### 패턴 2: 가변 크기 윈도우 (조건 만족하면 수축)

```js
function minWindowSubstring(s, t) {
  const need = new Map();
  for (const c of t) need.set(c, (need.get(c) || 0) + 1);

  const window = new Map();
  let left = 0, formed = 0, required = need.size;
  let minLen = Infinity, minLeft = 0;

  for (let right = 0; right < s.length; right++) {
    const c = s[right];
    window.set(c, (window.get(c) || 0) + 1);
    if (need.has(c) && window.get(c) === need.get(c)) formed++;

    while (formed === required) {
      if (right - left + 1 < minLen) {
        minLen = right - left + 1;
        minLeft = left;
      }
      const lc = s[left++];
      window.set(lc, window.get(lc) - 1);
      if (need.has(lc) && window.get(lc) < need.get(lc)) formed--;
    }
  }
  return minLen === Infinity ? '' : s.slice(minLeft, minLeft + minLen);
}
```

### 패턴 3: 모노토닉 덱 (구간 최솟값/최댓값)

```js
// 크기 k인 슬라이딩 윈도우에서 최솟값
function slidingWindowMin(arr, k) {
  const deque = []; // 인덱스 저장, 값은 단조 증가
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    // 윈도우 밖으로 나간 인덱스 제거
    while (deque.length && deque[0] < i - k + 1) deque.shift();
    // 현재 값보다 큰 값 제거 (단조 증가 유지)
    while (deque.length && arr[deque[deque.length - 1]] > arr[i]) deque.pop();
    deque.push(i);
    // k개 이상 처리됐을 때만 결과에 추가
    if (i >= k - 1) result.push(arr[deque[0]]);
  }
  return result;
}
```

---

## 기초 문제 ★ (10문제)

| # | 문제명 | BOJ | 핵심 포인트 | 완료 |
|---|--------|-----|------------|------|
| 1 | DNA 비밀번호 | [12891](https://www.acmicpc.net/problem/12891) | 고정 크기 + 빈도 | [ ] |
| 2 | 최솟값 찾기 | [11003](https://www.acmicpc.net/problem/11003) | 모노토닉 덱 | [ ] |
| 3 | 수열 | [2559](https://www.acmicpc.net/problem/2559) | 고정 크기 합 | [ ] |
| 4 | 블로그 | [21921](https://www.acmicpc.net/problem/21921) | 고정 크기 + 조건 | [ ] |
| 5 | 귀여운 라이언 | [15565](https://www.acmicpc.net/problem/15565) | 가변 크기 최소 | [ ] |
| 6 | 게으른 백기사 | [10025](https://www.acmicpc.net/problem/10025) | 고정 크기 누적합 | [ ] |
| 7 | 도둑 | [13422](https://www.acmicpc.net/problem/13422) | 원형 배열 + 고정 크기 | [ ] |
| 8 | 회전 초밥 | [2531](https://www.acmicpc.net/problem/2531) | 고정 크기 + 종류 수 | [ ] |
| 9 | 개똥벌레 | [3020](https://www.acmicpc.net/problem/3020) | 차분 배열 응용 | [ ] |
| 10 | 부분합 | [1806](https://www.acmicpc.net/problem/1806) | 가변 크기 최소 길이 | [ ] |

---

## 중급 문제 ★★ (20문제)

| # | 문제명 | BOJ | 핵심 포인트 | 완료 |
|---|--------|-----|------------|------|
| 11 | 소수의 연속합 | [1644](https://www.acmicpc.net/problem/1644) | 같은 방향 + 소수 | [ ] |
| 12 | 고냥이 | [16472](https://www.acmicpc.net/problem/16472) | 가변 크기 + 종류 제한 | [ ] |
| 13 | 겹치는 건 싫어 | [20922](https://www.acmicpc.net/problem/20922) | 가변 크기 + Set | [ ] |
| 14 | 나는야 포켓몬 마스터 | — | — | [ ] |
| 15 | 썬도그 | — | 구간 쿼리 최적화 | [ ] |
| 16 | 수들의 합 5 | [2018](https://www.acmicpc.net/problem/2018) | 자연수 연속합 | [ ] |
| 17 | 바이러스 | — | 조건 최소 구간 | [ ] |
| 18 | 이동 평균 | — | 고정 크기 평균 | [ ] |
| 19 | 가장 긴 짝수 연속한 부분 수열 | [22857](https://www.acmicpc.net/problem/22857) | 가변 + 조건 | [ ] |
| 20 | 연속된 부분 수열의 합 | [2018](https://www.acmicpc.net/problem/2018) | 자연수 한정 | [ ] |
| 21~30 | (추가 예정) | — | — | [ ] |

---

## 고급 문제 ★★★ (30문제)

| # | 문제명 | BOJ | 핵심 포인트 | 완료 |
|---|--------|-----|------------|------|
| 31 | 최솟값과 최댓값 | [2357](https://www.acmicpc.net/problem/2357) | 세그먼트 트리 예고 | [ ] |
| 32 | k개의 이웃 | — | 모노토닉 덱 응용 | [ ] |
| 33 | 최소 창 부분 문자열 | — | 가변 크기 + Map | [ ] |
| 34~60 | (추가 예정) | — | — | [ ] |

---

## 단원 모의고사 (75분)

| # | 문제 | BOJ | 예상 시간 |
|---|------|-----|----------|
| 1 | DNA 비밀번호 | [12891](https://www.acmicpc.net/problem/12891) | 15분 |
| 2 | 회전 초밥 | [2531](https://www.acmicpc.net/problem/2531) | 20분 |
| 3 | 고냥이 | [16472](https://www.acmicpc.net/problem/16472) | 25분 |
| 4 | 최솟값 찾기 | [11003](https://www.acmicpc.net/problem/11003) | 25분 |

**내 풀이 시간 기록**: ____분 / 75분
