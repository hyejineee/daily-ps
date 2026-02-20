# Ch01 배열과 문자열

> **목표**: 배열/문자열 조작을 자유자재로, 2D 배열 시뮬레이션까지

---

## 핵심 개념

### 배열
- **인덱스** 기반 접근 O(1), 탐색 O(n)
- **정렬** `sort((a, b) => a - b)` — 기본 sort는 문자열 비교이므로 반드시 비교함수 전달
- **누적합(Prefix Sum)** — 구간 합을 O(1)에 계산

### 문자열
- JavaScript 문자열은 **불변(immutable)** — 수정 시 새 문자열 생성
- `split('')` → 배열로 변환 후 조작 → `join('')`
- 정규식 활용: `/[a-z]/`, `/\d/`

---

## 반드시 알아야 할 패턴

### 패턴 1: 누적합 (Prefix Sum)

```js
// 구간 합 [l, r] 을 O(1)에 구하기
function buildPrefixSum(arr) {
  const prefix = new Array(arr.length + 1).fill(0);
  for (let i = 0; i < arr.length; i++) {
    prefix[i + 1] = prefix[i] + arr[i];
  }
  return prefix;
}

// 구간 합 [l, r] (0-indexed)
function rangeSum(prefix, l, r) {
  return prefix[r + 1] - prefix[l];
}
```

### 패턴 2: 차분 배열 (Difference Array)

```js
// 구간 [l, r]에 val을 일괄 적용할 때 O(1)
const diff = new Array(n + 1).fill(0);

function rangeAdd(diff, l, r, val) {
  diff[l] += val;
  diff[r + 1] -= val;
}

// 복원
function restore(diff) {
  const result = [...diff];
  for (let i = 1; i < result.length; i++) {
    result[i] += result[i - 1];
  }
  return result;
}
```

### 패턴 3: 방향 배열 (2D 시뮬레이션)

```js
// 4방향 (상하좌우)
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

// 8방향 (대각선 포함)
const dx8 = [-1, -1, -1, 0, 0, 1, 1, 1];
const dy8 = [-1, 0, 1, -1, 1, -1, 0, 1];

// 이동 후 범위 체크
function inBounds(x, y, n, m) {
  return x >= 0 && x < n && y >= 0 && y < m;
}

// 사용 예시
for (let d = 0; d < 4; d++) {
  const nx = x + dx[d];
  const ny = y + dy[d];
  if (inBounds(nx, ny, n, m)) {
    // 이동 가능
  }
}
```

### 패턴 4: 다중 조건 정렬

```js
// 1순위: 길이 오름차순, 2순위: 사전순
arr.sort((a, b) => {
  if (a.length !== b.length) return a.length - b.length;
  return a < b ? -1 : a > b ? 1 : 0;
});
```

### 패턴 5: 문자 빈도 카운팅

```js
const freq = new Array(26).fill(0);
for (const ch of str) {
  freq[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
}
```

---

## 기초 문제 ★ (10문제)

| # | 문제명 | BOJ | 핵심 포인트 | 완료 |
|---|--------|-----|------------|------|
| 1 | 최소, 최대 | [10818](https://www.acmicpc.net/problem/10818) | 배열 순회 | [ ] |
| 2 | 최댓값 | [2562](https://www.acmicpc.net/problem/2562) | 인덱스와 값 동시 추적 | [ ] |
| 3 | 바구니 뒤집기 | [10811](https://www.acmicpc.net/problem/10811) | 구간 reverse | [ ] |
| 4 | 평균 | [1546](https://www.acmicpc.net/problem/1546) | 배열 변환 | [ ] |
| 5 | 숫자의 개수 | [2577](https://www.acmicpc.net/problem/2577) | 빈도 카운팅 | [ ] |
| 6 | 단어 공부 | [1157](https://www.acmicpc.net/problem/1157) | 문자 빈도, 최댓값 | [ ] |
| 7 | 단어의 개수 | [1152](https://www.acmicpc.net/problem/1152) | split 처리 | [ ] |
| 8 | 상수 | [2908](https://www.acmicpc.net/problem/2908) | 문자열 뒤집기 | [ ] |
| 9 | 알파벳 찾기 | [10809](https://www.acmicpc.net/problem/10809) | indexOf | [ ] |
| 10 | 팰린드롬수 | [1259](https://www.acmicpc.net/problem/1259) | 문자열 회문 검사 | [ ] |

---

## 중급 문제 ★★ (20문제)

| # | 문제명 | BOJ | 핵심 포인트 | 완료 |
|---|--------|-----|------------|------|
| 11 | 단어 정렬 | [1181](https://www.acmicpc.net/problem/1181) | 다중 조건 정렬 | [ ] |
| 12 | 그룹 단어 체커 | [1316](https://www.acmicpc.net/problem/1316) | 등장 여부 추적 | [ ] |
| 13 | 크로아티아 알파벳 | [2941](https://www.acmicpc.net/problem/2941) | 문자열 치환 | [ ] |
| 14 | 문서 검색 | [1543](https://www.acmicpc.net/problem/1543) | 중복 없는 부분문자열 탐색 | [ ] |
| 15 | IOIOI | [5525](https://www.acmicpc.net/problem/5525) | 패턴 매칭 | [ ] |
| 16 | Java vs C++ | [3613](https://www.acmicpc.net/problem/3613) | camelCase ↔ snake_case | [ ] |
| 17 | 단어 뒤집기 2 | [17413](https://www.acmicpc.net/problem/17413) | 스택 + 문자열 파싱 | [ ] |
| 18 | 수학숙제 | [2870](https://www.acmicpc.net/problem/2870) | 숫자 추출 후 정렬 | [ ] |
| 19 | 한국이 그리울 땐 서버에 접속하자 | [9996](https://www.acmicpc.net/problem/9996) | 패턴 앞뒤 매칭 | [ ] |
| 20 | 색종이 | [2563](https://www.acmicpc.net/problem/2563) | 2D 배열 영역 표시 | [ ] |
| 21 | 배열 돌리기 1 | [16926](https://www.acmicpc.net/problem/16926) | 2D 배열 회전 | [ ] |
| 22 | 주사위 굴리기 | [14499](https://www.acmicpc.net/problem/14499) | 3D 시뮬레이션 | [ ] |
| 23 | 오목 | [2615](https://www.acmicpc.net/problem/2615) | 2D 연속 검사 | [ ] |
| 24 | 유성 | [10703](https://www.acmicpc.net/problem/10703) | 열별 최저 위치 | [ ] |
| 25 | 누울 자리를 찾아라 | [1652](https://www.acmicpc.net/problem/1652) | 행/열 연속 빈칸 | [ ] |
| 26 | 경비원 | [2564](https://www.acmicpc.net/problem/2564) | 둘레 좌표 변환 | [ ] |
| 27 | 뱀 | [3190](https://www.acmicpc.net/problem/3190) | 시뮬레이션 + 덱 | [ ] |
| 28 | 로봇 청소기 | [14503](https://www.acmicpc.net/problem/14503) | 방향 전환 시뮬레이션 | [ ] |
| 29 | 부분 문자열 | [16916](https://www.acmicpc.net/problem/16916) | includes / KMP | [ ] |
| 30 | 톱니바퀴 | [14891](https://www.acmicpc.net/problem/14891) | 연쇄 시뮬레이션 | [ ] |

---

## 고급 문제 ★★★ (30문제)

| # | 문제명 | BOJ | 핵심 포인트 | 완료 |
|---|--------|-----|------------|------|
| 31 | 경사로 | [14890](https://www.acmicpc.net/problem/14890) | 조건부 배열 검사 | [ ] |
| 32 | 게리맨더링 2 | [17779](https://www.acmicpc.net/problem/17779) | 2D 시뮬레이션 경계 처리 | [ ] |
| 33 | 청소년 상어 | [19236](https://www.acmicpc.net/problem/19236) | 완전탐색 + 시뮬레이션 | [ ] |
| 34 | 마법사 상어와 비바라기 | [21610](https://www.acmicpc.net/problem/21610) | 이동 경로 시뮬레이션 | [ ] |
| 35 | 마법사 상어와 파이어볼 | [20056](https://www.acmicpc.net/problem/20056) | 객체 이동 시뮬레이션 | [ ] |
| 36 | 원판 돌리기 | [17822](https://www.acmicpc.net/problem/17822) | 원형 배열 회전 | [ ] |
| 37 | 나무 재테크 | [16235](https://www.acmicpc.net/problem/16235) | 복잡한 상태 시뮬레이션 | [ ] |
| 38 | 낚시왕 | [17143](https://www.acmicpc.net/problem/17143) | 상어 이동 시뮬레이션 | [ ] |
| 39 | 상어 중학교 | [21609](https://www.acmicpc.net/problem/21609) | BFS + 시뮬레이션 | [ ] |
| 40 | 어른 상어 | [19237](https://www.acmicpc.net/problem/19237) | 냄새 전파 시뮬레이션 | [ ] |
| 41 | 마법사 상어와 토네이도 | [20057](https://www.acmicpc.net/problem/20057) | 나선형 이동 | [ ] |
| 42 | 이차원 배열과 연산 | [17140](https://www.acmicpc.net/problem/17140) | 행/열 정렬 후 재구성 | [ ] |
| 43 | 마법사 상어와 파이어스톰 | [20058](https://www.acmicpc.net/problem/20058) | 분할 회전 + BFS | [ ] |
| 44 | 캐슬 디펜스 | [17135](https://www.acmicpc.net/problem/17135) | 조합 + 시뮬레이션 | [ ] |
| 45 | 인구 이동 | [16234](https://www.acmicpc.net/problem/16234) | BFS + 반복 시뮬레이션 | [ ] |
| 46 | 감시 | [15683](https://www.acmicpc.net/problem/15683) | CCTV 방향 완전탐색 | [ ] |
| 47 | 연구소 | [14502](https://www.acmicpc.net/problem/14502) | 벽 3개 배치 + BFS | [ ] |
| 48 | 치킨 배달 | [15686](https://www.acmicpc.net/problem/15686) | 조합 + 거리 계산 | [ ] |
| 49 | 드래곤 커브 | [15685](https://www.acmicpc.net/problem/15685) | 방향 누적 패턴 | [ ] |
| 50 | 주사위 굴리기 2 | [23288](https://www.acmicpc.net/problem/23288) | BFS + 주사위 상태 | [ ] |
| 51 | 스티커 붙이기 | [18808](https://www.acmicpc.net/problem/18808) | 회전 + 위치 탐색 | [ ] |
| 52 | 게리맨더링 | [17471](https://www.acmicpc.net/problem/17471) | 부분집합 + BFS | [ ] |
| 53 | 새로운 게임 2 | [17837](https://www.acmicpc.net/problem/17837) | 말 쌓기 시뮬레이션 | [ ] |
| 54 | 마법사 상어와 복제 | [23290](https://www.acmicpc.net/problem/23290) | 복합 시뮬레이션 | [ ] |
| 55 | 테트로미노 | [14500](https://www.acmicpc.net/problem/14500) | 회전/반전 DFS | [ ] |
| 56 | 미세먼지 안녕! | [17144](https://www.acmicpc.net/problem/17144) | 순환 + 확산 시뮬 | [ ] |
| 57 | 아기 상어 | [16236](https://www.acmicpc.net/problem/16236) | BFS 반복 | [ ] |
| 58 | 연구소 3 | [17142](https://www.acmicpc.net/problem/17142) | 조합 + BFS | [ ] |
| 59 | 고층 건물 | [1027](https://www.acmicpc.net/problem/1027) | 기울기 비교 | [ ] |
| 60 | ⚾ | [17281](https://www.acmicpc.net/problem/17281) | 순열 + 타순 시뮬레이션 | [ ] |

---

## 단원 모의고사 (90분)

> 타이머를 켜고 실전처럼 풀어보세요. 풀이 후 시간 기록.

| # | 문제 | BOJ | 예상 시간 |
|---|------|-----|----------|
| 1 | 단어 정렬 | [1181](https://www.acmicpc.net/problem/1181) | 10분 |
| 2 | 배열 돌리기 1 | [16926](https://www.acmicpc.net/problem/16926) | 20분 |
| 3 | 로봇 청소기 | [14503](https://www.acmicpc.net/problem/14503) | 25분 |
| 4 | 연구소 | [14502](https://www.acmicpc.net/problem/14502) | 30분 |

**내 풀이 시간 기록**: ____분 / 90분
