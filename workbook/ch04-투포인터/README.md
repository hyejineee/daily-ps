# Ch04 투포인터

> **핵심 가이드**: [투포인터 완벽 가이드](../../docs/투포인터_완벽가이드.md) | [패턴 선택 사고법](../../docs/투포인터_패턴선택_사고법.md)

---

## 핵심 개념

두 포인터를 사용해 O(n²) → **O(n)** 으로 줄이는 기법

### 3가지 패턴

| 패턴 | 포인터 위치 | 언제 쓰는가 |
|------|------------|------------|
| **양 끝** | `left=0, right=n-1` | 정렬된 배열, 합이 목표값 |
| **같은 방향** | `left=right=0` | 연속 구간, 조건 만족 범위 |
| **두 배열** | 각 배열 처음 | 정렬된 두 배열 병합/비교 |

---

## 반드시 알아야 할 패턴

### 패턴 1: 양 끝 (두 수의 합)

```js
function twoSumSorted(arr, target) {
  let left = 0, right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) return [left, right];
    if (sum < target) left++;
    else right--;
  }
  return null;
}
```

### 패턴 2: 같은 방향 (연속 부분합)

```js
function minSubarrayLen(arr, target) {
  let left = 0, sum = 0, minLen = Infinity;

  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];
    while (sum >= target) {
      minLen = Math.min(minLen, right - left + 1);
      sum -= arr[left++];
    }
  }
  return minLen === Infinity ? 0 : minLen;
}
```

### 패턴 3: 세 수의 합 (양 끝 응용)

```js
function threeSum(arr) {
  arr.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < arr.length - 2; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) continue; // 중복 skip
    let left = i + 1, right = arr.length - 1;

    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right];
      if (sum === 0) {
        result.push([arr[i], arr[left], arr[right]]);
        while (left < right && arr[left] === arr[left + 1]) left++;
        while (left < right && arr[right] === arr[right - 1]) right--;
        left++; right--;
      } else if (sum < 0) left++;
      else right--;
    }
  }
  return result;
}
```

---

## 기초 문제 ★ (10문제)

| # | 문제명 | BOJ | 핵심 포인트 | 완료 |
|---|--------|-----|------------|------|
| 1 | 수들의 합 2 | [2003](https://www.acmicpc.net/problem/2003) | 같은 방향 기본 | [ ] |
| 2 | 주몽 | [1940](https://www.acmicpc.net/problem/1940) | 양 끝 기본 | [ ] |
| 3 | 두 수의 합 | [3273](https://www.acmicpc.net/problem/3273) | 정렬 + 양 끝 | [ ] |
| 4 | 배열 합치기 | [11728](https://www.acmicpc.net/problem/11728) | 두 배열 병합 | [ ] |
| 5 | 좋다 | [1253](https://www.acmicpc.net/problem/1253) | 자기 자신 제외 양 끝 | [ ] |
| 6 | 수 고르기 | [2230](https://www.acmicpc.net/problem/2230) | 같은 방향 최소 차이 | [ ] |
| 7 | 두 용액 | [2470](https://www.acmicpc.net/problem/2470) | 양 끝 최소 합 | [ ] |
| 8 | 부분합 | [1806](https://www.acmicpc.net/problem/1806) | 같은 방향 최소 길이 | [ ] |
| 9 | 합이 0인 네 정수 | [7453](https://www.acmicpc.net/problem/7453) | 이분할 + 이진탐색 | [ ] |
| 10 | 겹치는 건 싫어 | [20922](https://www.acmicpc.net/problem/20922) | 같은 방향 + Map | [ ] |

---

## 중급 문제 ★★ (20문제)

| # | 문제명 | BOJ | 핵심 포인트 | 완료 |
|---|--------|-----|------------|------|
| 11 | List of Unique Numbers | [13144](https://www.acmicpc.net/problem/13144) | 고유 구간 카운팅 | [ ] |
| 12 | 소수의 연속합 | [1644](https://www.acmicpc.net/problem/1644) | 에라토스테네스 + 같은 방향 | [ ] |
| 13 | 팰린드롬 만들기 | [1254](https://www.acmicpc.net/problem/1254) | 양 끝으로 팰린드롬 확장 | [ ] |
| 14 | 고냥이 | [16472](https://www.acmicpc.net/problem/16472) | 같은 방향 + 종류 제한 | [ ] |
| 15 | 세 용액 | [2473](https://www.acmicpc.net/problem/2473) | 정렬 + 세 포인터 | [ ] |
| 16 | 가장 긴 짝수 연속한 부분 수열 | [22857](https://www.acmicpc.net/problem/22857) | 같은 방향 + 조건 | [ ] |
| 17 | 줄어드는 수 | — | 양 끝 응용 | [ ] |
| 18 | 내려가기 | [2096](https://www.acmicpc.net/problem/2096) | DP + 최적화 | [ ] |
| 19 | 배열에서 합이 K | — | 같은 방향 응용 | [ ] |
| 20 | 준오는 서울에 가고 싶다 | [15831](https://www.acmicpc.net/problem/15831) | 양 끝 카운팅 | [ ] |
| 21 | 수열과 쿼리 1 | [13537](https://www.acmicpc.net/problem/13537) | 오프라인 + 정렬 | [ ] |
| 22 | 색종이와 가위 | [20444](https://www.acmicpc.net/problem/20444) | 양 끝 최적화 | [ ] |
| 23 | 알약 | [16235](https://www.acmicpc.net/problem/16235) | — | [ ] |
| 24 | 두 수의 합 (해시) | — | 해시 vs 투포인터 비교 | [ ] |
| 25~30 | (추가 예정) | — | — | [ ] |

---

## 고급 문제 ★★★ (30문제)

| # | 문제명 | BOJ | 핵심 포인트 | 완료 |
|---|--------|-----|------------|------|
| 31 | 부분수열의 합 2 | [1208](https://www.acmicpc.net/problem/1208) | Meet in the Middle | [ ] |
| 32 | 가장 긴 증가하는 부분 수열 2 | [12015](https://www.acmicpc.net/problem/12015) | LIS + 이진탐색 | [ ] |
| 33 | 두 배열의 합 | [2143](https://www.acmicpc.net/problem/2143) | 투포인터 + 정렬 | [ ] |
| 34~60 | (추가 예정) | — | — | [ ] |

---

## 단원 모의고사 (75분)

| # | 문제 | BOJ | 예상 시간 |
|---|------|-----|----------|
| 1 | 두 수의 합 | [3273](https://www.acmicpc.net/problem/3273) | 10분 |
| 2 | 부분합 | [1806](https://www.acmicpc.net/problem/1806) | 15분 |
| 3 | 소수의 연속합 | [1644](https://www.acmicpc.net/problem/1644) | 20분 |
| 4 | 세 용액 | [2473](https://www.acmicpc.net/problem/2473) | 30분 |

**내 풀이 시간 기록**: ____분 / 75분
