# 모의고사 1회 — 기초 종합

> **범위**: Ch01~Ch05 기초
> **제한 시간**: 90분
> **목표**: 기초 패턴을 실전 속도로 구현

---

## 시험 시작 전

- [ ] 타이머 켜기 (90분)
- [ ] 문제를 처음 봤을 때 **어떤 패턴인지** 먼저 적기
- [ ] 각 문제 풀고 나서 실제 소요 시간 기록

---

## 문제 목록

| # | 문제 | BOJ | 주제 | 예상 시간 | 내 시간 | 결과 |
|---|------|-----|------|----------|---------|------|
| 1 | 단어 정렬 | [1181](https://www.acmicpc.net/problem/1181) | 배열 정렬 | 15분 | ____분 | [ ] |
| 2 | 듣보잡 | [1764](https://www.acmicpc.net/problem/1764) | 해시/집합 | 10분 | ____분 | [ ] |
| 3 | 괄호 | [9012](https://www.acmicpc.net/problem/9012) | 스택 | 10분 | ____분 | [ ] |
| 4 | 두 수의 합 | [3273](https://www.acmicpc.net/problem/3273) | 투포인터 | 15분 | ____분 | [ ] |
| 5 | DNA 비밀번호 | [12891](https://www.acmicpc.net/problem/12891) | 슬라이딩 윈도우 | 20분 | ____분 | [ ] |

**총 소요 시간**: ____분 / 90분

---

## 풀이 후 점검

### 문제 1: 단어 정렬 (BOJ 1181)
**접근**: 다중 조건 정렬 — 1순위 길이, 2순위 사전순
**핵심 코드**:
```js
words.sort((a, b) => {
  if (a.length !== b.length) return a.length - b.length;
  return a < b ? -1 : a > b ? 1 : 0;
});
// 중복 제거
const unique = [...new Set(words)];
```
**실수 포인트**: sort 전에 중복 제거 vs 후에 중복 제거 순서 주의

---

### 문제 2: 듣보잡 (BOJ 1764)
**접근**: 두 집합의 교집합, 결과 정렬
**핵심 코드**:
```js
const setA = new Set(listA);
const result = listB.filter(name => setA.has(name)).sort();
```

---

### 문제 3: 괄호 (BOJ 9012)
**접근**: 스택, '(' push, ')' 만나면 pop
**핵심 코드**:
```js
function isValid(s) {
  let stack = 0;
  for (const c of s) {
    if (c === '(') stack++;
    else if (--stack < 0) return 'NO';
  }
  return stack === 0 ? 'YES' : 'NO';
}
```

---

### 문제 4: 두 수의 합 (BOJ 3273)
**접근**: 정렬 후 양 끝 포인터
**핵심 코드**:
```js
arr.sort((a, b) => a - b);
let left = 0, right = arr.length - 1, count = 0;
while (left < right) {
  const sum = arr[left] + arr[right];
  if (sum === target) { count++; left++; right--; }
  else if (sum < target) left++;
  else right--;
}
```

---

### 문제 5: DNA 비밀번호 (BOJ 12891)
**접근**: 고정 크기 슬라이딩 윈도우 + 빈도 Map
**핵심 코드**:
```js
// 필요 개수를 충족한 문자 종류 수 tracking
let satisfied = 0;
// 윈도우에 추가할 때: 필요량 딱 맞으면 satisfied++
// 윈도우에서 제거할 때: 필요량 미달되면 satisfied--
```

---

## 오답 노트

| 문제 | 틀린 이유 | 올바른 접근 |
|------|----------|------------|
| | | |
