---
name: create-problem
description: 코딩테스트 문제 파일({문제}.js, {문제}.test.js)을 자동으로 생성합니다.
allowed-tools: Bash, Read, Edit, AskUserQuestion
---

# 코딩테스트 문제 파일 생성

이 스킬은 코딩테스트 문제를 위한 템플릿 파일을 자동으로 생성합니다.

## 실행 순서

### 1단계: 기본 파일 생성

`scripts/create-problem.js` 스크립트를 실행하여 기본 파일을 생성합니다.

**실행 방법:**
```bash
node scripts/create-problem.js --name="{문제이름}" --url="{URL}" --date="{날짜}"
```

- `--name`: 문제 이름 (필수)
- `--url`: 문제 URL (선택)
- `--date`: 날짜 YYMMDD (선택, 생략하면 오늘 날짜)

**생성되는 파일:**
- `{YYYY}/{MM}/{DD}/{문제}.js` - solution 함수 + 주석 처리된 백준 제출용 코드
- `{YYYY}/{MM}/{DD}/{문제}.test.js` - 기본 테스트 템플릿

### 2단계: 문제 정보 추가

백준 문제인 경우, solved.ac API를 사용하여 문제 정보를 가져와서 추가합니다:

**API 호출:**
```bash
curl -s "https://solved.ac/api/v3/problem/show?problemId={문제번호}"
```

**추가할 정보:**
- 난이도 (예: Silver 3)
- 태그 (예: 다이나믹 프로그래밍, 백트래킹)
- 문제 설명 요약

**파일 업데이트:**
`.js` 파일의 주석 부분을 Edit 도구로 업데이트합니다.

### 3단계: 예제 테스트 케이스 추가

사용자에게 예제를 제공받아 테스트 파일을 업데이트합니다.

**사용자에게 질문:**
```
예제 테스트 케이스를 추가하시겠습니까?
백준 문제 페이지의 예제 입출력을 복사해서 알려주시면 테스트 파일에 자동으로 추가해드립니다.
```

**예제 입력 형식:**
```
입력: 2
출력: 1

입력: 10
출력: 3
```

**테스트 파일 생성 규칙:**

1. **입력이 단일 숫자인 경우:**
   ```javascript
   test("예제 1", () => {
     expect(solution("2")).toBe(1);
   });
   ```

2. **입력이 여러 줄인 경우:**
   ```javascript
   test("예제 1", () => {
     const input = `7 7
2 0 0 0 1 1 0
0 0 1 0 1 2 0`;
     expect(solution(input)).toBe(27);
   });
   ```

3. **출력이 여러 줄인 경우:**
   ```javascript
   test("예제 1", () => {
     const input = "4 2";
     const expected = `1 2
1 3
1 4
2 3
2 4
3 4`;
     expect(solution(input)).toEqual(expected);
   });
   ```

### 4단계: solution 함수 시그니처 안내

사용자에게 solution 함수를 어떻게 작성해야 하는지 안내합니다:

**기본 형식:**
```javascript
const solution = (input) => {
  // 입력 파싱
  const n = Number(input);  // 단일 숫자
  // const [n, m] = input.split(' ').map(Number);  // 한 줄, 여러 값
  // const lines = input.split('\n');  // 여러 줄

  // 솔루션 코드

  return result;
};
```

**백준 제출 시:**
주석 처리된 백준 제출용 코드의 주석을 해제하고 제출합니다.

### 5단계: 완료 안내

사용자에게 다음 단계를 안내합니다:

```
✅ 코딩테스트 파일 생성 완료!

생성된 파일:
- {경로}/{문제}.js
- {경로}/{문제}.test.js

문제 정보:
- 난이도: Silver 3
- 태그: 다이나믹 프로그래밍

다음 단계:
1. {문제}.js 파일에 solution 함수를 작성하세요
2. 테스트 실행: npm test -- "{경로}/{문제}.test.js"
3. 모든 테스트가 통과하면, 백준 제출용 코드의 주석을 해제하고 제출하세요
```

## 생성되는 파일 예시

### {문제}.js

```javascript
// https://www.acmicpc.net/problem/1463
// 난이도: Silver 3
// 태그: 다이나믹 프로그래밍
// 문제 설명 요약

const solution = (input) => {
  // 입력 처리
  const n = Number(input);

  // 여기에 솔루션 코드를 작성하세요

  return result;
};

// 백준 제출용 코드
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim();
// const result = solution(input);
// console.log(result);

module.exports = { solution };
```

### {문제}.test.js

```javascript
const { solution } = require("./1로 만들기");

test("예제 1", () => {
  expect(solution("2")).toBe(1);
});

test("예제 2", () => {
  expect(solution("10")).toBe(3);
});
```

## 디렉토리 구조

```
daily-ps/
├── 2026/
│   └── 02/
│       ├── 11/
│       │   ├── 연구소.js
│       │   └── 연구소.test.js
│       └── 12/
│           ├── 1로 만들기.js
│           └── 1로 만들기.test.js
├── scripts/
│   └── create-problem.js
└── .claude/
    └── skills/
        └── create-problem/
            └── SKILL.md
```

## 중요 사항

1. **백준 제출용 코드는 항상 주석 처리됩니다** - 테스트 시에는 주석 처리 상태로, 제출 시에만 주석을 해제합니다.

2. **solution 함수는 input 문자열을 받습니다** - 테스트와 실제 제출 모두 동일한 형식으로 작동합니다.

3. **예제는 사용자가 제공합니다** - 백준이 크롤링을 막고 있어서 자동 추출이 불가능합니다.

4. **solved.ac API는 문제 메타데이터만 제공합니다** - 난이도와 태그는 자동으로 추가되지만, 예제는 수동으로 추가해야 합니다.
