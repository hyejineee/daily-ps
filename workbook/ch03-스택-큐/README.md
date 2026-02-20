# Ch03 스택과 큐

> **목표**: LIFO/FIFO 원리부터 모노토닉 스택, 우선순위 큐까지

---

## 핵심 개념

### 스택 (Stack)
- **LIFO** (Last In, First Out) — 되돌아가기, 괄호 매칭, 이전 상태 저장
- JavaScript: 배열 `push` / `pop`

### 큐 (Queue)
- **FIFO** (First In, First Out) — BFS, 순서대로 처리
- JavaScript: `push` / `shift` (O(n)) — 대용량에선 클래스로 구현 필요

### 덱 (Deque)
- 양쪽 모두 삽입/삭제 가능
- JavaScript: `push` / `pop` / `unshift` / `shift`

---

## 반드시 알아야 할 패턴

### 패턴 1: 괄호 유효성 검사

```js
function isValid(s) {
  const stack = [];
  const pairs = { ')': '(', '}': '{', ']': '[' };
  for (const ch of s) {
    if ('({['.includes(ch)) {
      stack.push(ch);
    } else {
      if (stack.pop() !== pairs[ch]) return false;
    }
  }
  return stack.length === 0;
}
```

### 패턴 2: 모노토닉 스택 (Monotonic Stack)

```js
// 오른쪽 첫 번째 큰 수 (Next Greater Element)
function nextGreater(arr) {
  const result = new Array(arr.length).fill(-1);
  const stack = []; // 인덱스를 저장

  for (let i = 0; i < arr.length; i++) {
    // 스택 top보다 현재 값이 크면 pop하고 답 기록
    while (stack.length && arr[stack[stack.length - 1]] < arr[i]) {
      result[stack.pop()] = arr[i];
    }
    stack.push(i);
  }
  return result;
}
```

> **모노토닉 스택 핵심**: 스택이 단조 증가/감소를 유지하면서
> 각 원소의 "이전/다음 크거나 작은 원소"를 O(n)에 찾는다.

### 패턴 3: 스택으로 히스토그램 최대 넓이

```js
function largestRectangle(heights) {
  const stack = [-1];
  let maxArea = 0;
  heights.push(0); // 마지막 처리용

  for (let i = 0; i < heights.length; i++) {
    while (stack[stack.length - 1] !== -1 &&
           heights[stack[stack.length - 1]] >= heights[i]) {
      const h = heights[stack.pop()];
      const w = i - stack[stack.length - 1] - 1;
      maxArea = Math.max(maxArea, h * w);
    }
    stack.push(i);
  }
  return maxArea;
}
```

### 패턴 4: 큐로 BFS

```js
function bfs(start, graph) {
  const queue = [start];
  const visited = new Set([start]);

  while (queue.length) {
    const node = queue.shift();
    for (const next of graph[node]) {
      if (!visited.has(next)) {
        visited.add(next);
        queue.push(next);
      }
    }
  }
}
```

### 패턴 5: 우선순위 큐 (Min-Heap) 직접 구현

```js
class MinHeap {
  constructor() { this.heap = []; }

  push(val) {
    this.heap.push(val);
    this._bubbleUp(this.heap.length - 1);
  }

  pop() {
    const top = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length) {
      this.heap[0] = last;
      this._sinkDown(0);
    }
    return top;
  }

  _bubbleUp(i) {
    while (i > 0) {
      const parent = (i - 1) >> 1;
      if (this.heap[parent] > this.heap[i]) {
        [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
        i = parent;
      } else break;
    }
  }

  _sinkDown(i) {
    const n = this.heap.length;
    while (true) {
      let smallest = i;
      const l = 2 * i + 1, r = 2 * i + 2;
      if (l < n && this.heap[l] < this.heap[smallest]) smallest = l;
      if (r < n && this.heap[r] < this.heap[smallest]) smallest = r;
      if (smallest === i) break;
      [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
      i = smallest;
    }
  }

  get size() { return this.heap.length; }
  peek() { return this.heap[0]; }
}
```

---

## 기초 문제 ★ (10문제)

| # | 문제명 | BOJ | 핵심 포인트 | 완료 |
|---|--------|-----|------------|------|
| 1 | 스택 | [10828](https://www.acmicpc.net/problem/10828) | 스택 연산 구현 | [ ] |
| 2 | 큐 | [10845](https://www.acmicpc.net/problem/10845) | 큐 연산 구현 | [ ] |
| 3 | 덱 | [10866](https://www.acmicpc.net/problem/10866) | 덱 연산 구현 | [ ] |
| 4 | 괄호 | [9012](https://www.acmicpc.net/problem/9012) | 스택 괄호 매칭 | [ ] |
| 5 | 균형잡힌 세상 | [4949](https://www.acmicpc.net/problem/4949) | 여러 괄호 유형 | [ ] |
| 6 | 스택 수열 | [1874](https://www.acmicpc.net/problem/1874) | 스택으로 순열 생성 | [ ] |
| 7 | 프린터 큐 | [1966](https://www.acmicpc.net/problem/1966) | 우선순위 + 큐 시뮬레이션 | [ ] |
| 8 | 카드2 | [2164](https://www.acmicpc.net/problem/2164) | 덱 시뮬레이션 | [ ] |
| 9 | 제로 | [10773](https://www.acmicpc.net/problem/10773) | undo 스택 | [ ] |
| 10 | 키로거 | [5397](https://www.acmicpc.net/problem/5397) | 커서 = 두 스택 | [ ] |

---

## 중급 문제 ★★ (20문제)

| # | 문제명 | BOJ | 핵심 포인트 | 완료 |
|---|--------|-----|------------|------|
| 11 | 에디터 | [1406](https://www.acmicpc.net/problem/1406) | 두 스택으로 커서 시뮬레이션 | [ ] |
| 12 | 괄호의 값 | [2504](https://www.acmicpc.net/problem/2504) | 스택 + 누적 곱셈 | [ ] |
| 13 | 오큰수 | [17298](https://www.acmicpc.net/problem/17298) | 모노토닉 스택 기본 | [ ] |
| 14 | 오등큰수 | [17299](https://www.acmicpc.net/problem/17299) | 빈도 계산 + 모노토닉 스택 | [ ] |
| 15 | 탑 | [2493](https://www.acmicpc.net/problem/2493) | 왼쪽 첫 번째 큰 수 | [ ] |
| 16 | 후위 표기식 2 | [1935](https://www.acmicpc.net/problem/1935) | 스택으로 수식 계산 | [ ] |
| 17 | 후위 표기식 | [1918](https://www.acmicpc.net/problem/1918) | 중위→후위 변환 | [ ] |
| 18 | 크게 만들기 | [2812](https://www.acmicpc.net/problem/2812) | 모노토닉 스택으로 최댓값 | [ ] |
| 19 | AC | [5430](https://www.acmicpc.net/problem/5430) | 덱으로 방향 반전 최적화 | [ ] |
| 20 | 트럭 | [13335](https://www.acmicpc.net/problem/13335) | 큐 슬라이딩 윈도우 | [ ] |
| 21 | 회전하는 큐 | [1021](https://www.acmicpc.net/problem/1021) | 덱 회전 최소화 | [ ] |
| 22 | 풍선 터뜨리기 | [2346](https://www.acmicpc.net/problem/2346) | 덱 방향 이동 | [ ] |
| 23 | 외계인의 기타 연주 | [2841](https://www.acmicpc.net/problem/2841) | 스택으로 현 눌림 상태 | [ ] |
| 24 | 최솟값 찾기 | [11003](https://www.acmicpc.net/problem/11003) | 모노토닉 덱 | [ ] |
| 25 | 히스토그램 | [1725](https://www.acmicpc.net/problem/1725) | 스택으로 최대 직사각형 | [ ] |
| 26 | 히스토그램에서 가장 큰 직사각형 | [6549](https://www.acmicpc.net/problem/6549) | 위와 동일, 분할정복 비교 | [ ] |
| 27 | 접미사 배열 | [11656](https://www.acmicpc.net/problem/11656) | 문자열 + 정렬 | [ ] |
| 28 | 오아시스 재결합 | [3015](https://www.acmicpc.net/problem/3015) | 스택 + 경우의 수 | [ ] |
| 29 | 큐 2 | [18258](https://www.acmicpc.net/problem/18258) | 효율적인 큐 구현 | [ ] |
| 30 | 주식 가격 | — | 모노토닉 스택 응용 | [ ] |

---

## 고급 문제 ★★★ (30문제)

| # | 문제명 | BOJ | 핵심 포인트 | 완료 |
|---|--------|-----|------------|------|
| 31 | 가운데를 말해요 | [1655](https://www.acmicpc.net/problem/1655) | 두 힙으로 중앙값 | [ ] |
| 32 | 이중 우선순위 큐 | [7662](https://www.acmicpc.net/problem/7662) | Min + Max 힙 | [ ] |
| 33 | 보석 도둑 | [1202](https://www.acmicpc.net/problem/1202) | Min-Heap + 그리디 | [ ] |
| 34 | 카드 정렬하기 | [1715](https://www.acmicpc.net/problem/1715) | Min-Heap (최솟값 우선 합산) | [ ] |
| 35 | 강의실 배정 | [11000](https://www.acmicpc.net/problem/11000) | Min-Heap 회의실 | [ ] |
| 36 | 컵라면 | [1781](https://www.acmicpc.net/problem/1781) | Max-Heap + 데드라인 | [ ] |
| 37 | 멀티탭 스케줄링 | [1700](https://www.acmicpc.net/problem/1700) | 페이지 교체 알고리즘 | [ ] |
| 38 | 연료 채우기 | [1826](https://www.acmicpc.net/problem/1826) | Max-Heap + 그리디 | [ ] |
| 39 | 도시 분할 계획 | [1647](https://www.acmicpc.net/problem/1647) | MST + 힙 | [ ] |
| 40 | 최단경로 | [1753](https://www.acmicpc.net/problem/1753) | 다익스트라 + Min-Heap | [ ] |
| 41 | 파티 | [1238](https://www.acmicpc.net/problem/1238) | 다익스트라 × 2 | [ ] |
| 42 | 음악프로그램 | [2623](https://www.acmicpc.net/problem/2623) | 위상정렬 + 큐 | [ ] |
| 43 | 줄 세우기 | [2252](https://www.acmicpc.net/problem/2252) | 위상정렬 기본 | [ ] |
| 44 | 게임 개발 | [1516](https://www.acmicpc.net/problem/1516) | 위상정렬 + DP | [ ] |
| 45 | ACM Craft | [1005](https://www.acmicpc.net/problem/1005) | 위상정렬 + DP | [ ] |
| 46 | 스카이라인 | [1863](https://www.acmicpc.net/problem/1863) | 스택 이벤트 처리 | [ ] |
| 47~60 | (추가 예정) | — | — | [ ] |

---

## 단원 모의고사 (90분)

| # | 문제 | BOJ | 예상 시간 |
|---|------|-----|----------|
| 1 | 괄호 | [9012](https://www.acmicpc.net/problem/9012) | 10분 |
| 2 | 오큰수 | [17298](https://www.acmicpc.net/problem/17298) | 20분 |
| 3 | 후위 표기식 | [1918](https://www.acmicpc.net/problem/1918) | 25분 |
| 4 | 가운데를 말해요 | [1655](https://www.acmicpc.net/problem/1655) | 35분 |

**내 풀이 시간 기록**: ____분 / 90분
