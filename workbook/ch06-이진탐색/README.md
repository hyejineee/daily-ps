# Ch06 이진탐색

> **목표**: 단순 탐색부터 파라메트릭 서치까지 — "답을 이진탐색"하는 발상 훈련

---

## 핵심 개념

정렬된 배열에서 **절반씩 범위를 줄여** O(log n)에 탐색

### 3가지 유형

| 유형 | 설명 | 예시 |
|------|------|------|
| **값 찾기** | 배열에 특정 값 있나? | 숫자 카드 |
| **Lower/Upper Bound** | 조건 만족하는 첫/마지막 위치 | 숫자 카드 2 |
| **파라메트릭 서치** | 최적값을 이진탐색으로 결정 | 나무 자르기, 랜선 자르기 |

---

## 반드시 알아야 할 패턴

### 패턴 1: 기본 이진탐색

```js
function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    const mid = (left + right) >> 1;
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1; // 없으면 -1
}
```

### 패턴 2: Lower Bound (target 이상인 첫 번째 위치)

```js
function lowerBound(arr, target) {
  let left = 0, right = arr.length;
  while (left < right) {
    const mid = (left + right) >> 1;
    if (arr[mid] < target) left = mid + 1;
    else right = mid;
  }
  return left; // arr[left] >= target 인 첫 인덱스
}
```

### 패턴 3: Upper Bound (target 초과인 첫 번째 위치)

```js
function upperBound(arr, target) {
  let left = 0, right = arr.length;
  while (left < right) {
    const mid = (left + right) >> 1;
    if (arr[mid] <= target) left = mid + 1;
    else right = mid;
  }
  return left; // arr[left] > target 인 첫 인덱스
}

// target의 개수 = upperBound - lowerBound
function count(arr, target) {
  return upperBound(arr, target) - lowerBound(arr, target);
}
```

### 패턴 4: 파라메트릭 서치 (핵심!)

> "최적값 x를 모른다 → x가 가능한지 O(n)에 확인 가능 → x를 이진탐색"

```js
// 예: 나무 높이 h로 잘랐을 때 목재 합이 m 이상인가?
function canCut(heights, m, h) {
  let total = 0;
  for (const height of heights) {
    if (height > h) total += height - h;
  }
  return total >= m;
}

function solve(heights, m) {
  let left = 0, right = Math.max(...heights);
  let answer = 0;

  while (left <= right) {
    const mid = (left + right) >> 1;
    if (canCut(heights, m, mid)) {
      answer = mid;  // 가능 → 더 크게 잘라보기
      left = mid + 1;
    } else {
      right = mid - 1; // 불가능 → 덜 잘라야 함
    }
  }
  return answer;
}
```

> **파라메트릭 서치 체크리스트**
> 1. 최적값이 범위 내에 있다 (min ~ max)
> 2. "mid가 가능한가?"를 O(n) 이하로 판단 가능
> 3. 가능/불가능이 단조 (한 번 불가능하면 그 이상도 불가능)

---

## 기초 문제 ★ (10문제)

| # | 문제명 | BOJ | 핵심 포인트 | 완료 |
|---|--------|-----|------------|------|
| 1 | 수 찾기 | [1920](https://www.acmicpc.net/problem/1920) | 기본 이진탐색 | [ ] |
| 2 | 숫자 카드 | [10815](https://www.acmicpc.net/problem/10815) | 이진탐색 존재 확인 | [ ] |
| 3 | 먹을 것인가 먹힐 것인가 | [7795](https://www.acmicpc.net/problem/7795) | 정렬 + 이진탐색 카운팅 | [ ] |
| 4 | 나무 자르기 | [2805](https://www.acmicpc.net/problem/2805) | 파라메트릭 서치 기본 | [ ] |
| 5 | 랜선 자르기 | [1654](https://www.acmicpc.net/problem/1654) | 파라메트릭 서치 | [ ] |
| 6 | 공유기 설치 | [2110](https://www.acmicpc.net/problem/2110) | 최솟값 최대화 | [ ] |
| 7 | 용돈 관리 | [6236](https://www.acmicpc.net/problem/6236) | 파라메트릭 서치 | [ ] |
| 8 | 숫자 카드 2 | [10816](https://www.acmicpc.net/problem/10816) | Lower/Upper Bound | [ ] |
| 9 | K번째 수 | [1300](https://www.acmicpc.net/problem/1300) | 2D 이진탐색 | [ ] |
| 10 | 입국심사 | [3079](https://www.acmicpc.net/problem/3079) | 시간 파라메트릭 | [ ] |

---

## 중급 문제 ★★ (20문제)

| # | 문제명 | BOJ | 핵심 포인트 | 완료 |
|---|--------|-----|------------|------|
| 11 | 예산 | [2512](https://www.acmicpc.net/problem/2512) | 파라메트릭 + 합 조건 | [ ] |
| 12 | 휴게소 세우기 | [1477](https://www.acmicpc.net/problem/1477) | 최솟값 최대화 | [ ] |
| 13 | 기타 레슨 | [2343](https://www.acmicpc.net/problem/2343) | 파라메트릭 서치 | [ ] |
| 14 | 두 수의 합 | [2150](https://www.acmicpc.net/problem/2150) | — | [ ] |
| 15 | 가장 긴 증가하는 부분 수열 2 | [12015](https://www.acmicpc.net/problem/12015) | LIS + lower bound | [ ] |
| 16 | 두 용액 | [2467](https://www.acmicpc.net/problem/2467) | 정렬 + 이진탐색 | [ ] |
| 17 | 고수 | [13702](https://www.acmicpc.net/problem/13702) | 파라메트릭 서치 | [ ] |
| 18 | 징검다리 | [1649](https://www.acmicpc.net/problem/1649) | 최솟값 최대화 | [ ] |
| 19 | 게임 | [1072](https://www.acmicpc.net/problem/1072) | 승률 파라메트릭 | [ ] |
| 20 | 중간 단계 | [18113](https://www.acmicpc.net/problem/18113) | lower bound 응용 | [ ] |
| 21 | 이진 검색 트리 | — | BST 순회 이해 | [ ] |
| 22 | 눈금 없는 자 | [1946](https://www.acmicpc.net/problem/1946) | — | [ ] |
| 23 | 미래 도시 | — | 그래프 + 이진탐색 | [ ] |
| 24 | N번째 수 | [1300](https://www.acmicpc.net/problem/1300) | 응용 | [ ] |
| 25 | 사탕 게임 | [3745](https://www.acmicpc.net/problem/3745) | LIS 길이 계산 | [ ] |
| 26 | 배열 원소 K개 | — | Lower bound 응용 | [ ] |
| 27 | 수 정렬하기 | [10989](https://www.acmicpc.net/problem/10989) | 계수 정렬 (비교) | [ ] |
| 28 | 집회 장소 | [2585](https://www.acmicpc.net/problem/2585) | 파라메트릭 + 거리 | [ ] |
| 29 | 숫자 이진 분류 | — | — | [ ] |
| 30 | 블루레이 | [2343](https://www.acmicpc.net/problem/2343) | 파라메트릭 서치 | [ ] |

---

## 고급 문제 ★★★ (30문제)

| # | 문제명 | BOJ | 핵심 포인트 | 완료 |
|---|--------|-----|------------|------|
| 31 | 가장 긴 증가하는 부분 수열 5 | [14003](https://www.acmicpc.net/problem/14003) | LIS 역추적 | [ ] |
| 32 | K번째 소수 | — | 소수 + 이진탐색 | [ ] |
| 33 | 두 배열에서 k번째 수 | — | 이진탐색 고급 | [ ] |
| 34 | 삼각형의 외각의 합 | — | — | [ ] |
| 35 | 수 나누기 | — | 이진탐색 + 그리디 | [ ] |
| 36~60 | (추가 예정) | — | — | [ ] |

---

## 단원 모의고사 (90분)

| # | 문제 | BOJ | 예상 시간 |
|---|------|-----|----------|
| 1 | 랜선 자르기 | [1654](https://www.acmicpc.net/problem/1654) | 20분 |
| 2 | 공유기 설치 | [2110](https://www.acmicpc.net/problem/2110) | 25분 |
| 3 | 가장 긴 증가하는 부분 수열 2 | [12015](https://www.acmicpc.net/problem/12015) | 25분 |
| 4 | 입국심사 | [3079](https://www.acmicpc.net/problem/3079) | 20분 |

**내 풀이 시간 기록**: ____분 / 90분
