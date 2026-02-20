# Ch08 그리디

> **목표**: "지금 가장 좋은 선택"이 전체 최적임을 증명하고 구현하기

---

## 핵심 개념

**그리디 알고리즘**: 각 단계에서 현재 시점의 최선을 선택

### 그리디를 쓸 수 있는 조건
1. **탐욕적 선택 속성**: 지금의 최선 선택이 전체 최적으로 이어진다
2. **최적 부분 구조**: 부분 문제의 최적해가 전체 최적해를 구성한다

### 그리디 vs DP 구분법
- "이전 선택이 현재에 영향?" → **DP**
- "매 단계 독립적으로 최선?" → **그리디**

---

## 반드시 알아야 할 패턴

### 패턴 1: 정렬 기반 그리디

```js
// 회의실 배정: 끝나는 시간 기준 정렬
function meetingRooms(meetings) {
  meetings.sort((a, b) => a[1] - b[1] || a[0] - b[0]); // 끝시간 기준

  let count = 0;
  let lastEnd = -Infinity;

  for (const [start, end] of meetings) {
    if (start >= lastEnd) { // 이전 회의 끝난 후 시작
      count++;
      lastEnd = end;
    }
  }
  return count;
}
```

### 패턴 2: 동전 교환 (큰 동전부터)

```js
function minCoins(coins, amount) {
  coins.sort((a, b) => b - a); // 큰 것부터
  let count = 0;
  for (const coin of coins) {
    count += Math.floor(amount / coin);
    amount %= coin;
  }
  return amount === 0 ? count : -1;
}
// 주의: 동전 종류가 임의적이면 DP가 필요!
// 그리디는 특수한 동전 체계(1, 5, 10, 50, 100, 500)에서만 유효
```

### 패턴 3: 교환 논증 (Exchange Argument)

```js
// 가중치가 있는 작업 정렬 — 어떤 기준으로 정렬할까?
// 두 작업 A, B를 교환했을 때 더 나은 쪽을 선택

// 예: 벌금 최소화 (작업마다 가중치 w, 처리시간 t)
// A→B 순서 비용: w_B * t_A  (A 처리 동안 B 대기)
// B→A 순서 비용: w_A * t_B
// A→B가 더 좋으려면: w_B * t_A < w_A * t_B → t_A/w_A < t_B/w_B
jobs.sort((a, b) => a.time / a.weight - b.time / b.weight);
```

### 패턴 4: 우선순위 큐 기반 그리디

```js
// k개의 강의실 배정 (최소 강의실 수)
function minMeetingRooms(intervals) {
  intervals.sort((a, b) => a[0] - b[0]); // 시작 시간 정렬
  const heap = new MinHeap(); // 각 강의실의 끝나는 시간

  for (const [start, end] of intervals) {
    if (heap.size && heap.peek() <= start) {
      heap.pop(); // 비어있는 강의실 재사용
    }
    heap.push(end);
  }
  return heap.size;
}
```

---

## 기초 문제 ★ (10문제)

| # | 문제명 | BOJ | 핵심 포인트 | 완료 |
|---|--------|-----|------------|------|
| 1 | 동전 0 | [11047](https://www.acmicpc.net/problem/11047) | 큰 동전부터 | [ ] |
| 2 | 설탕 배달 | [2839](https://www.acmicpc.net/problem/2839) | 탐욕 + 나머지 | [ ] |
| 3 | 회의실 배정 | [1931](https://www.acmicpc.net/problem/1931) | 끝시간 정렬 | [ ] |
| 4 | ATM | [11399](https://www.acmicpc.net/problem/11399) | 정렬 + 누적합 | [ ] |
| 5 | 로프 | [2217](https://www.acmicpc.net/problem/2217) | 내림차순 정렬 + 하중 | [ ] |
| 6 | 잃어버린 괄호 | [1541](https://www.acmicpc.net/problem/1541) | 음수 최대화 | [ ] |
| 7 | 주유소 | [13305](https://www.acmicpc.net/problem/13305) | 현재까지 최저가 유지 | [ ] |
| 8 | 병든 나이트 | [1783](https://www.acmicpc.net/problem/1783) | 경우의 수 분기 | [ ] |
| 9 | 수들의 합 | [1789](https://www.acmicpc.net/problem/1789) | 1부터 k까지의 합 | [ ] |
| 10 | 대회 or 인턴 | [2875](https://www.acmicpc.net/problem/2875) | 비율 분배 | [ ] |

---

## 중급 문제 ★★ (20문제)

| # | 문제명 | BOJ | 핵심 포인트 | 완료 |
|---|--------|-----|------------|------|
| 11 | 수 묶기 | [1744](https://www.acmicpc.net/problem/1744) | 양수는 크게, 음수는 작게 | [ ] |
| 12 | 보물 | [1026](https://www.acmicpc.net/problem/1026) | 역방향 매칭 | [ ] |
| 13 | 행렬 | [1080](https://www.acmicpc.net/problem/1080) | 뒤집기 그리디 | [ ] |
| 14 | 배 | [1092](https://www.acmicpc.net/problem/1092) | 투포인터 + 그리디 | [ ] |
| 15 | 센서 | [2212](https://www.acmicpc.net/problem/2212) | 간격 정렬 | [ ] |
| 16 | 신입 사원 | [1946](https://www.acmicpc.net/problem/1946) | 1등 기준 유지 | [ ] |
| 17 | 보석 도둑 | [1202](https://www.acmicpc.net/problem/1202) | Min-Heap + 그리디 | [ ] |
| 18 | 공주님의 정원 | [2457](https://www.acmicpc.net/problem/2457) | 구간 커버 그리디 | [ ] |
| 19 | 멀티탭 스케줄링 | [1700](https://www.acmicpc.net/problem/1700) | 미래 기반 교체 | [ ] |
| 20 | 우체국 | [2141](https://www.acmicpc.net/problem/2141) | 중앙값 그리디 | [ ] |
| 21 | 숫자의 신 | [1422](https://www.acmicpc.net/problem/1422) | 이어붙이기 정렬 | [ ] |
| 22 | 카드 정렬하기 | [1715](https://www.acmicpc.net/problem/1715) | Min-Heap으로 합산 | [ ] |
| 23 | 강의실 배정 | [11000](https://www.acmicpc.net/problem/11000) | Min-Heap + 회의실 | [ ] |
| 24 | 컵라면 | [1781](https://www.acmicpc.net/problem/1781) | 데드라인 스케줄링 | [ ] |
| 25 | 연료 채우기 | [1826](https://www.acmicpc.net/problem/1826) | 이동 중 최대 연료 | [ ] |
| 26 | 알바생 강호 | [1758](https://www.acmicpc.net/problem/1758) | 내림차순 정렬 + 합산 | [ ] |
| 27 | 이진수 | — | 비트 조작 그리디 | [ ] |
| 28 | 선발 명단 | [3980](https://www.acmicpc.net/problem/3980) | 백트래킹 vs 그리디 | [ ] |
| 29 | 사탕 | — | 가중치 정렬 | [ ] |
| 30 | 저울 | [2437](https://www.acmicpc.net/problem/2437) | 1~n 표현 가능 확인 | [ ] |

---

## 고급 문제 ★★★ (30문제)

| # | 문제명 | BOJ | 핵심 포인트 | 완료 |
|---|--------|-----|------------|------|
| 31 | 발전소 | [1102](https://www.acmicpc.net/problem/1102) | 비트마스크 DP + 그리디 | [ ] |
| 32 | 전구와 스위치 | [2138](https://www.acmicpc.net/problem/2138) | 첫 원소 고정 그리디 | [ ] |
| 33 | 한 줄로 서기 | [1138](https://www.acmicpc.net/problem/1138) | 역순 삽입 그리디 | [ ] |
| 34 | 구간 합 | — | 정렬 + 구간 | [ ] |
| 35 | 팰린드롬 | — | 그리디 접근 | [ ] |
| 36~60 | (추가 예정) | — | — | [ ] |

---

## 단원 모의고사 (90분)

| # | 문제 | BOJ | 예상 시간 |
|---|------|-----|----------|
| 1 | 회의실 배정 | [1931](https://www.acmicpc.net/problem/1931) | 15분 |
| 2 | 수 묶기 | [1744](https://www.acmicpc.net/problem/1744) | 20분 |
| 3 | 강의실 배정 | [11000](https://www.acmicpc.net/problem/11000) | 25분 |
| 4 | 보석 도둑 | [1202](https://www.acmicpc.net/problem/1202) | 30분 |

**내 풀이 시간 기록**: ____분 / 90분
