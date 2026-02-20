# Ch10 그래프 / BFS / DFS

> **목표**: 연결 탐색 기본부터 최단경로(다익스트라), 위상정렬, MST까지

---

## 핵심 개념

### 그래프 표현

```js
// 인접 리스트 (희소 그래프에 유리)
const graph = Array.from({ length: n + 1 }, () => []);
graph[u].push([v, weight]);

// 인접 행렬 (밀집 그래프, n ≤ 1000)
const matrix = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(0));
matrix[u][v] = weight;
```

### BFS vs DFS 선택 기준

| 상황 | 추천 |
|------|------|
| 최단 거리 (가중치 없음) | **BFS** |
| 연결 요소, 순환 감지 | **DFS** |
| 모든 경로 탐색 | **DFS (백트래킹)** |
| 최단 거리 (가중치 있음) | **다익스트라** |
| 위상정렬 | **BFS (Kahn's)** 또는 **DFS** |

---

## 반드시 알아야 할 패턴

### 패턴 1: DFS (재귀)

```js
function dfs(graph, node, visited) {
  visited[node] = true;
  for (const next of graph[node]) {
    if (!visited[next]) {
      dfs(graph, next, visited);
    }
  }
}
```

### 패턴 2: BFS (최단 거리)

```js
function bfs(graph, start, n) {
  const dist = new Array(n + 1).fill(-1);
  const queue = [start];
  dist[start] = 0;

  while (queue.length) {
    const node = queue.shift();
    for (const next of graph[node]) {
      if (dist[next] === -1) {
        dist[next] = dist[node] + 1;
        queue.push(next);
      }
    }
  }
  return dist;
}
```

### 패턴 3: 다익스트라 (가중치 최단경로)

```js
function dijkstra(graph, start, n) {
  const dist = new Array(n + 1).fill(Infinity);
  dist[start] = 0;
  const heap = new MinHeap(); // [거리, 노드]
  heap.push([0, start]);

  while (heap.size) {
    const [d, node] = heap.pop();
    if (d > dist[node]) continue; // 이미 더 짧은 경로로 처리됨

    for (const [next, weight] of graph[node]) {
      const newDist = dist[node] + weight;
      if (newDist < dist[next]) {
        dist[next] = newDist;
        heap.push([newDist, next]);
      }
    }
  }
  return dist;
}
```

### 패턴 4: 위상정렬 (Kahn's Algorithm)

```js
function topologicalSort(graph, inDegree, n) {
  const queue = [];
  const result = [];

  for (let i = 1; i <= n; i++) {
    if (inDegree[i] === 0) queue.push(i);
  }

  while (queue.length) {
    const node = queue.shift();
    result.push(node);
    for (const next of graph[node]) {
      if (--inDegree[next] === 0) queue.push(next);
    }
  }
  return result.length === n ? result : []; // 사이클 있으면 빈 배열
}
```

### 패턴 5: Union-Find (서로소 집합)

```js
const parent = Array.from({ length: n + 1 }, (_, i) => i);

function find(x) {
  if (parent[x] !== x) parent[x] = find(parent[x]); // 경로 압축
  return parent[x];
}

function union(x, y) {
  const px = find(x), py = find(y);
  if (px === py) return false; // 이미 같은 집합
  parent[px] = py;
  return true;
}
```

---

## 기초 문제 ★ (10문제)

| # | 문제명 | BOJ | 핵심 포인트 | 완료 |
|---|--------|-----|------------|------|
| 1 | DFS와 BFS | [1260](https://www.acmicpc.net/problem/1260) | 두 탐색 구현 | [ ] |
| 2 | 바이러스 | [2606](https://www.acmicpc.net/problem/2606) | DFS 연결 요소 | [ ] |
| 3 | 연결 요소의 개수 | [11724](https://www.acmicpc.net/problem/11724) | DFS 반복 | [ ] |
| 4 | 유기농 배추 | [1012](https://www.acmicpc.net/problem/1012) | 2D DFS | [ ] |
| 5 | 단지번호붙이기 | [2667](https://www.acmicpc.net/problem/2667) | DFS + 크기 계산 | [ ] |
| 6 | 토마토 | [7576](https://www.acmicpc.net/problem/7576) | 다중 시작 BFS | [ ] |
| 7 | 미로 탐색 | [2178](https://www.acmicpc.net/problem/2178) | BFS 최단거리 | [ ] |
| 8 | 숨바꼭질 | [1697](https://www.acmicpc.net/problem/1697) | 1D BFS | [ ] |
| 9 | 섬의 개수 | [4963](https://www.acmicpc.net/problem/4963) | 8방향 DFS | [ ] |
| 10 | 안전 영역 | [2468](https://www.acmicpc.net/problem/2468) | 완전탐색 + DFS | [ ] |

---

## 중급 문제 ★★ (20문제)

| # | 문제명 | BOJ | 핵심 포인트 | 완료 |
|---|--------|-----|------------|------|
| 11 | 케빈 베이컨의 6단계 법칙 | [1389](https://www.acmicpc.net/problem/1389) | 플로이드-워셜 | [ ] |
| 12 | 불 | [5427](https://www.acmicpc.net/problem/5427) | 두 BFS 동시 진행 | [ ] |
| 13 | 다리 만들기 | [2146](https://www.acmicpc.net/problem/2146) | BFS × 2 | [ ] |
| 14 | 나이트의 이동 | [7562](https://www.acmicpc.net/problem/7562) | BFS 특수 이동 | [ ] |
| 15 | 트리의 지름 | [1167](https://www.acmicpc.net/problem/1167) | BFS/DFS 두 번 | [ ] |
| 16 | 줄 세우기 | [2252](https://www.acmicpc.net/problem/2252) | 위상정렬 기본 | [ ] |
| 17 | 게임 개발 | [1516](https://www.acmicpc.net/problem/1516) | 위상정렬 + DP | [ ] |
| 18 | 네트워크 연결 | [1922](https://www.acmicpc.net/problem/1922) | MST (크루스칼) | [ ] |
| 19 | 최소 스패닝 트리 | [1197](https://www.acmicpc.net/problem/1197) | MST (프림/크루스칼) | [ ] |
| 20 | 최단경로 | [1916](https://www.acmicpc.net/problem/1916) | 다익스트라 기본 | [ ] |
| 21 | 경로 찾기 | [11403](https://www.acmicpc.net/problem/11403) | 플로이드-워셜 | [ ] |
| 22 | 파티 | [1238](https://www.acmicpc.net/problem/1238) | 다익스트라 × 2 | [ ] |
| 23 | 효율적인 해킹 | [1325](https://www.acmicpc.net/problem/1325) | DFS/BFS 카운팅 | [ ] |
| 24 | 상범 빌딩 | [6593](https://www.acmicpc.net/problem/6593) | 3D BFS | [ ] |
| 25 | DSLR | [9019](https://www.acmicpc.net/problem/9019) | BFS 상태 탐색 | [ ] |
| 26 | 구슬 찾기 | [2617](https://www.acmicpc.net/problem/2617) | DFS + 카운팅 | [ ] |
| 27 | 전쟁 전투 | [1303](https://www.acmicpc.net/problem/1303) | DFS 크기^2 합산 | [ ] |
| 28 | 촌수계산 | [2644](https://www.acmicpc.net/problem/2644) | BFS 거리 | [ ] |
| 29 | 음악프로그램 | [2623](https://www.acmicpc.net/problem/2623) | 위상정렬 + 조건 | [ ] |
| 30 | ACM Craft | [1005](https://www.acmicpc.net/problem/1005) | 위상정렬 + DP | [ ] |

---

## 고급 문제 ★★★ (30문제)

| # | 문제명 | BOJ | 핵심 포인트 | 완료 |
|---|--------|-----|------------|------|
| 31 | 최단경로 (대규모) | [1753](https://www.acmicpc.net/problem/1753) | 다익스트라 최적화 | [ ] |
| 32 | 플로이드 2 | [11780](https://www.acmicpc.net/problem/11780) | 경로 역추적 | [ ] |
| 33 | 벽 부수고 이동하기 | [2206](https://www.acmicpc.net/problem/2206) | BFS + 상태 | [ ] |
| 34 | 탈출 | [3055](https://www.acmicpc.net/problem/3055) | 다중 시작 BFS | [ ] |
| 35 | 달이 차오른다 가자 | [1194](https://www.acmicpc.net/problem/1194) | BFS + 비트마스크 | [ ] |
| 36 | 탈옥 | [9376](https://www.acmicpc.net/problem/9376) | BFS 3방향 합산 | [ ] |
| 37 | 백조의 호수 | [3197](https://www.acmicpc.net/problem/3197) | BFS + 이진탐색 | [ ] |
| 38 | 벽 부수고 이동하기 4 | [16946](https://www.acmicpc.net/problem/16946) | BFS + 크기 매핑 | [ ] |
| 39 | 아기 상어 | [16236](https://www.acmicpc.net/problem/16236) | BFS 반복 + 조건 | [ ] |
| 40 | 행성 터널 | [2887](https://www.acmicpc.net/problem/2887) | MST + 좌표 압축 | [ ] |
| 41 | 통나무 옮기기 | [1938](https://www.acmicpc.net/problem/1938) | BFS 복잡한 상태 | [ ] |
| 42 | 성곽 | [2234](https://www.acmicpc.net/problem/2234) | 비트마스크 + BFS | [ ] |
| 43 | 퍼즐 | [1525](https://www.acmicpc.net/problem/1525) | BFS + 상태 해시 | [ ] |
| 44 | 말이 되고픈 원숭이 | [1600](https://www.acmicpc.net/problem/1600) | BFS + 상태 | [ ] |
| 45 | 거울 설치 | [2151](https://www.acmicpc.net/problem/2151) | 다익스트라 응용 | [ ] |
| 46 | 빙산 | [2573](https://www.acmicpc.net/problem/2573) | BFS + 반복 시뮬 | [ ] |
| 47 | 치즈 | [2638](https://www.acmicpc.net/problem/2638) | BFS + 반복 | [ ] |
| 48 | 군사 이동 | [11085](https://www.acmicpc.net/problem/11085) | MST + 이진탐색 | [ ] |
| 49 | 연구소 3 | [17142](https://www.acmicpc.net/problem/17142) | 조합 + BFS | [ ] |
| 50 | 게리맨더링 | [17471](https://www.acmicpc.net/problem/17471) | 부분집합 + BFS | [ ] |
| 51 | 소형기관차 | [2616](https://www.acmicpc.net/problem/2616) | DP + 누적합 | [ ] |
| 52 | 도시 분할 계획 | [1647](https://www.acmicpc.net/problem/1647) | MST 응용 | [ ] |
| 53 | 최소 이동 거리 | — | 다익스트라 응용 | [ ] |
| 54 | 강의 배정 | — | 위상정렬 응용 | [ ] |
| 55 | SCC (강한 연결 요소) | — | 코사라주/타잔 | [ ] |
| 56 | 2-SAT | — | SCC 응용 | [ ] |
| 57 | 이분 그래프 | [1707](https://www.acmicpc.net/problem/1707) | BFS 2-색칠 | [ ] |
| 58 | 단절점 | [11266](https://www.acmicpc.net/problem/11266) | DFS 트리 응용 | [ ] |
| 59 | 단절선 | [11400](https://www.acmicpc.net/problem/11400) | DFS 브릿지 찾기 | [ ] |
| 60 | 네트워크 유량 | — | Ford-Fulkerson | [ ] |

---

## 단원 모의고사 (120분)

| # | 문제 | BOJ | 예상 시간 |
|---|------|-----|----------|
| 1 | 토마토 | [7576](https://www.acmicpc.net/problem/7576) | 15분 |
| 2 | 다리 만들기 | [2146](https://www.acmicpc.net/problem/2146) | 25분 |
| 3 | 최단경로 | [1916](https://www.acmicpc.net/problem/1916) | 25분 |
| 4 | 줄 세우기 | [2252](https://www.acmicpc.net/problem/2252) | 20분 |
| 5 | 벽 부수고 이동하기 | [2206](https://www.acmicpc.net/problem/2206) | 35분 |

**내 풀이 시간 기록**: ____분 / 120분
