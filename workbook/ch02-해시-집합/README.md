# Ch02 해시와 집합

> **목표**: O(1) 조회로 탐색 문제를 해결, 빈도/중복/매핑 패턴 완전 정복

---

## 핵심 개념

### Hash Map (`Map`)
- **키-값 저장** — 모든 타입을 키로 사용 가능
- 삽입/조회/삭제 O(1) 평균
- `map.get(key)` / `map.set(key, val)` / `map.has(key)`

### Hash Set (`Set`)
- **중복 없는 집합** — 원소 존재 여부 O(1)
- `set.add(val)` / `set.has(val)` / `set.delete(val)`

### 언제 해시를 쓰는가?
- "이미 나왔나?" → Set
- "몇 번 나왔나?" → Map (빈도 카운팅)
- "A에 해당하는 B는?" → Map (매핑)
- "두 배열의 공통 원소" → Set 교집합

---

## 반드시 알아야 할 패턴

### 패턴 1: 빈도 카운팅 (Frequency Count)

```js
function countFreq(arr) {
  const freq = new Map();
  for (const x of arr) {
    freq.set(x, (freq.get(x) || 0) + 1);
  }
  return freq;
}

// 최빈값 찾기
const maxFreq = Math.max(...freq.values());
const mode = [...freq.entries()].find(([k, v]) => v === maxFreq)[0];
```

### 패턴 2: Two Sum (합이 target인 두 수)

```js
function twoSum(nums, target) {
  const seen = new Map(); // 값 → 인덱스
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (seen.has(complement)) {
      return [seen.get(complement), i];
    }
    seen.set(nums[i], i);
  }
  return [];
}
```

### 패턴 3: 집합 연산

```js
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);

// 교집합
const intersection = new Set([...setA].filter(x => setB.has(x)));

// 합집합
const union = new Set([...setA, ...setB]);

// 차집합 (A - B)
const difference = new Set([...setA].filter(x => !setB.has(x)));
```

### 패턴 4: 양방향 Map (인덱스 ↔ 값)

```js
// "나는야 포켓몬 마스터" 패턴
const nameToId = new Map();
const idToName = new Map();

names.forEach((name, idx) => {
  nameToId.set(name, idx + 1);
  idToName.set(idx + 1, name);
});
```

### 패턴 5: 슬라이딩 윈도우 + 해시 (고유 원소 추적)

```js
// 윈도우 내 원소 개수 추적
const window = new Map();
let left = 0;

for (let right = 0; right < arr.length; right++) {
  window.set(arr[right], (window.get(arr[right]) || 0) + 1);

  // 조건 위반 시 left 이동
  while (window.size > k) {
    const cnt = window.get(arr[left]) - 1;
    if (cnt === 0) window.delete(arr[left]);
    else window.set(arr[left], cnt);
    left++;
  }
  // 현재 윈도우 처리
}
```

---

## 기초 문제 ★ (10문제)

| # | 문제명 | BOJ | 핵심 포인트 | 완료 |
|---|--------|-----|------------|------|
| 1 | 수 찾기 | [1920](https://www.acmicpc.net/problem/1920) | Set으로 O(1) 탐색 | [ ] |
| 2 | 숫자 카드 | [10815](https://www.acmicpc.net/problem/10815) | Set 존재 여부 | [ ] |
| 3 | 문자열 집합 | [14425](https://www.acmicpc.net/problem/14425) | Set 멤버십 확인 | [ ] |
| 4 | 듣보잡 | [1764](https://www.acmicpc.net/problem/1764) | 두 집합 교집합 | [ ] |
| 5 | 대칭 차집합 | [1269](https://www.acmicpc.net/problem/1269) | A∪B - A∩B | [ ] |
| 6 | 회사에 있는 사람 | [7785](https://www.acmicpc.net/problem/7785) | 출퇴근 Map 처리 | [ ] |
| 7 | 비밀번호 찾기 | [17219](https://www.acmicpc.net/problem/17219) | 키-값 Map | [ ] |
| 8 | 숫자 카드 2 | [10816](https://www.acmicpc.net/problem/10816) | 빈도 카운팅 | [ ] |
| 9 | 나는야 포켓몬 마스터 | [1620](https://www.acmicpc.net/problem/1620) | 양방향 Map | [ ] |
| 10 | 수강신청 | [13414](https://www.acmicpc.net/problem/13414) | 순서 유지 Set | [ ] |

---

## 중급 문제 ★★ (20문제)

| # | 문제명 | BOJ | 핵심 포인트 | 완료 |
|---|--------|-----|------------|------|
| 11 | 친구 네트워크 | [4195](https://www.acmicpc.net/problem/4195) | Map + Union-Find | [ ] |
| 12 | 패션왕 신해빈 | [9375](https://www.acmicpc.net/problem/9375) | 범주별 카운팅 | [ ] |
| 13 | 파일 정리 | [20291](https://www.acmicpc.net/problem/20291) | 확장자 빈도 + 정렬 | [ ] |
| 14 | 통계학 | [2108](https://www.acmicpc.net/problem/2108) | 최빈값 처리 | [ ] |
| 15 | 회전 초밥 | [2531](https://www.acmicpc.net/problem/2531) | 슬라이딩 윈도우 + Map | [ ] |
| 16 | 이중 우선순위 큐 | [7662](https://www.acmicpc.net/problem/7662) | Map으로 min/max 관리 | [ ] |
| 17 | 거짓말 | [1043](https://www.acmicpc.net/problem/1043) | Union-Find + Set | [ ] |
| 18 | 팰린드롬 만들기 | [1213](https://www.acmicpc.net/problem/1213) | 빈도 홀짝 분석 | [ ] |
| 19 | Hashing | [15829](https://www.acmicpc.net/problem/15829) | 다항 해시 구현 | [ ] |
| 20 | 무한 수열 | [1351](https://www.acmicpc.net/problem/1351) | 메모이제이션 Map | [ ] |
| 21 | 숫자 카드 2 (응용) | [10816](https://www.acmicpc.net/problem/10816) | lower/upper bound | [ ] |
| 22 | 안녕 | [1535](https://www.acmicpc.net/problem/1535) | (배낭 예고) | [ ] |
| 23 | 단어 수학 | [1339](https://www.acmicpc.net/problem/1339) | 자리값 + 그리디 | [ ] |
| 24 | 싸지방에 간 준하 | [12764](https://www.acmicpc.net/problem/12764) | 좌석 배정 Map | [ ] |
| 25 | 연구소 | [17219](https://www.acmicpc.net/problem/17219) | — | [ ] |
| 26 | 나의 인생에는 수학과 함께 | [22233](https://www.acmicpc.net/problem/22233) | 키워드 제거 Set | [ ] |
| 27 | 카드 구매하기 | [11052](https://www.acmicpc.net/problem/11052) | (DP 예고) | [ ] |
| 28 | 소수 찾기 | [1978](https://www.acmicpc.net/problem/1978) | 에라토스테네스의 체 + Set | [ ] |
| 29 | 오큰수 | [17298](https://www.acmicpc.net/problem/17298) | (스택 예고) | [ ] |
| 30 | 두 용액 | [2470](https://www.acmicpc.net/problem/2470) | (투포인터 예고) | [ ] |

---

## 고급 문제 ★★★ (30문제)

| # | 문제명 | BOJ | 핵심 포인트 | 완료 |
|---|--------|-----|------------|------|
| 31 | 부분합이 K인 연속 부분 배열 | — | prefix sum + Map | [ ] |
| 32 | LRU 캐시 | — | Map 삽입 순서 활용 | [ ] |
| 33 | 보석 도둑 | [1202](https://www.acmicpc.net/problem/1202) | 우선순위큐 + 그리디 | [ ] |
| 34 | 전화번호 목록 | [5052](https://www.acmicpc.net/problem/5052) | Trie / 정렬 | [ ] |
| 35 | 개미굴 | [14725](https://www.acmicpc.net/problem/14725) | Trie 구현 | [ ] |
| 36 | 가장 긴 팰린드롬 부분 문자열 | — | Manacher / 해시 | [ ] |
| 37 | 등장 횟수 세기 | — | 슬라이딩 해시 | [ ] |
| 38 | 두 배열의 합 | [1208](https://www.acmicpc.net/problem/1208) | Meet in the Middle | [ ] |
| 39 | 구간 합이 k인 최장 부분 배열 | — | prefix + Map | [ ] |
| 40 | 모든 아나그램 찾기 | — | 슬라이딩 윈도우 + Map | [ ] |
| 41~60 | (추가 예정) | — | — | [ ] |

---

## 단원 모의고사 (75분)

| # | 문제 | BOJ | 예상 시간 |
|---|------|-----|----------|
| 1 | 듣보잡 | [1764](https://www.acmicpc.net/problem/1764) | 10분 |
| 2 | 패션왕 신해빈 | [9375](https://www.acmicpc.net/problem/9375) | 15분 |
| 3 | 회전 초밥 | [2531](https://www.acmicpc.net/problem/2531) | 20분 |
| 4 | 친구 네트워크 | [4195](https://www.acmicpc.net/problem/4195) | 30분 |

**내 풀이 시간 기록**: ____분 / 75분
