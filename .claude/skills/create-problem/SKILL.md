---
name: create-problem
description: 코딩테스트 문제 파일({문제}.js, {문제}.test.js)을 자동으로 생성합니다.
allowed-tools: Bash, AskUserQuestion
---

# 코딩테스트 문제 파일 생성

이 스킬은 코딩테스트 문제를 위한 템플릿 파일을 자동으로 생성합니다.

## 실행 순서

### 1단계: 사용자 입력 수집

사용자로부터 다음 정보를 수집합니다:

**필수 입력:**
- **문제 이름**: 파일명으로 사용될 문제 이름 (예: "토마토", "평범한배낭", "n과m_1")

**선택 입력:**
- **문제 URL**: 문제 링크 (예: https://www.acmicpc.net/problem/7576)
  - 입력하지 않으면 빈 주석으로 생성
- **날짜 디렉토리**: YYMMDD 형식 (예: 260209)
  - 입력하지 않으면 오늘 날짜를 자동으로 사용

### 2단계: 스크립트 실행

수집한 정보를 사용하여 `scripts/create-problem.js` 스크립트를 실행합니다.

스크립트는 다음과 같이 작동합니다:
1. 날짜 기반 디렉토리 구조 생성 (예: 2026/0209/)
2. `{문제}.js` 파일 생성 (솔루션 템플릿)
3. `{문제}.test.js` 파일 생성 (테스트 템플릿)

**실행 방법:**

```bash
cd /Users/hyeonhyejin/Desktop/dev/daily-ps
node scripts/create-problem.js --name="{문제이름}" --url="{URL}" --date="{날짜}"
```

- `--name`: 문제 이름 (필수)
- `--url`: 문제 URL (선택, 빈 문자열 가능)
- `--date`: 날짜 YYMMDD (선택, 빈 문자열이면 오늘 날짜)

### 3단계: 예제 테스트 케이스 추가 (선택)

파일 생성 후, 사용자에게 예제 테스트 케이스를 추가할지 물어봅니다.

**사용자가 예제를 제공하는 경우:**

사용자로부터 다음 형식으로 예제를 받습니다:
```
예제 1:
입력: 4 2
출력: 1 2
1 3
1 4
2 3
2 4
3 4

예제 2:
입력: ...
출력: ...
```

받은 예제를 파싱하여 `{문제}.test.js` 파일을 Edit 도구로 업데이트합니다:

```javascript
const { solution } = require("./{문제}");

test("예제 1", () => {
  expect(solution(4, 2)).toEqual([
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 3],
    [2, 4],
    [3, 4]
  ]);
});

test("예제 2", () => {
  // ...
});
```

**테스트 케이스 작성 가이드:**
- 입력 형식에 따라 solution 함수의 파라미터를 조정
- 출력 형식에 따라 expect().toEqual()의 값을 조정
- 여러 줄 문자열은 템플릿 리터럴 사용
- 숫자 배열은 배열 형태로 변환
- 문자열 출력은 문자열로 유지

### 4단계: 문제 정보 추가

solved.ac API를 사용하여 문제 정보(난이도, 태그)를 가져와 `.js` 파일에 주석으로 추가합니다:

```bash
curl -s "https://solved.ac/api/v3/problem/show?problemId={문제번호}"
```

추출한 정보를 `{문제}.js` 파일의 주석에 추가:
```javascript
// https://www.acmicpc.net/problem/{번호}
// 난이도: Silver 3
// 태그: 백트래킹
// {문제 설명}
```

### 5단계: 생성 완료 안내

생성된 파일 경로를 사용자에게 알려주고, 다음 단계를 안내합니다:

```
✅ 코딩테스트 파일 생성 완료!

생성된 파일:
- {경로}/{문제}.js
- {경로}/{문제}.test.js

다음 단계:
1. {문제}.js 파일에 솔루션 코드를 작성하세요
2. 백준 입출력 코드를 실제 입력 형식에 맞게 수정하세요
3. {문제}.test.js 파일에 테스트 케이스를 추가하세요
4. 테스트 실행: npm test -- {경로}/{문제}.test.js
5. 백준 제출 시 파일 전체를 복사하여 제출하세요
```

## 백준 입출력 코드 포함

생성되는 `.js` 파일에는 백준 온라인 저지 제출을 위한 입출력 코드가 기본으로 포함됩니다:

```javascript
// 백준 제출용 코드
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
```

사용자는 문제의 입력 형식에 맞게 다음과 같이 수정할 수 있습니다:

- **한 줄, 공백 구분**: `const [n, m] = input.split(' ').map(Number);`
- **여러 줄**: `const lines = input.split('\n');`
- **2차원 배열**:
  ```javascript
  const lines = input.split('\n');
  const [n, m] = lines[0].split(' ').map(Number);
  const arr = lines.slice(1).map(line => line.split(' ').map(Number));
  ```

## 생성되는 파일 템플릿

### {문제}.js

```javascript
// {문제 URL}
// 문제 설명을 여기에 작성하세요
const solution = () => {
  // 여기에 솔루션 코드를 작성하세요
};

// 백준 제출용 코드
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
// 입력 처리 예시:
// const [n, m] = input.split(' ').map(Number);
// const lines = input.split('\n');

// const result = solution();
// console.log(result);

module.exports = { solution };
```

### {문제}.test.js

```javascript
const { solution } = require("./{문제}");

test("테스트 케이스 1", () => {
  expect(solution()).toEqual(/* 예상 결과 */);
});

// 추가 테스트 케이스를 작성하세요
```

## 디렉토리 구조

파일은 다음과 같은 구조로 생성됩니다:

```
daily-ps/
├── 2026/
│   ├── 0207/
│   │   ├── 평범한배낭.js
│   │   └── 평범한배낭.test.js
│   └── 0209/
│       ├── n과m_1.js
│       └── n과m_1.test.js
└── scripts/
    └── create-problem.js
```

## 사용 예시

사용자: `/create-problem`

1. 문제 이름: "이진트리"
2. URL: https://www.acmicpc.net/problem/1234
3. 날짜: 260210 (또는 Enter로 오늘 날짜)

결과:
- `2026/0210/이진트리.js` 생성
- `2026/0210/이진트리.test.js` 생성
