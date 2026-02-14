#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');
const https = require('https');

// 커맨드 라인 인자 파싱
const args = process.argv.slice(2);
const flags = {
  name: args.find(arg => arg.startsWith('--name='))?.split('=')[1],
  url: args.find(arg => arg.startsWith('--url='))?.split('=')[1],
  date: args.find(arg => arg.startsWith('--date='))?.split('=')[1]
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

// 백준 페이지에서 예제 가져오기
async function fetchBaekjoonExamples(problemId) {
  return new Promise((resolve, reject) => {
    const url = `https://www.acmicpc.net/problem/${problemId}`;
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        try {
          const examples = [];
          // 예제 입력/출력 파싱
          const inputMatches = data.match(/<pre class="sampledata" id="sample-input-\d+"[^>]*>([\s\S]*?)<\/pre>/g);
          const outputMatches = data.match(/<pre class="sampledata" id="sample-output-\d+"[^>]*>([\s\S]*?)<\/pre>/g);

          if (inputMatches && outputMatches) {
            const minLength = Math.min(inputMatches.length, outputMatches.length);
            for (let i = 0; i < minLength; i++) {
              const input = inputMatches[i]
                .replace(/<pre class="sampledata" id="sample-input-\d+"[^>]*>/, '')
                .replace(/<\/pre>/, '')
                .trim();
              const output = outputMatches[i]
                .replace(/<pre class="sampledata" id="sample-output-\d+"[^>]*>/, '')
                .replace(/<\/pre>/, '')
                .trim();
              examples.push({ input, output });
            }
          }
          resolve(examples);
        } catch (error) {
          reject(error);
        }
      });
    }).on('error', reject);
  });
}

async function main() {
  try {
    // 문제 이름 입력 (커맨드 라인 또는 대화형)
    let problemName = flags.name;
    if (!problemName) {
      problemName = await question('문제 이름을 입력하세요: ');
    }

    if (!problemName || !problemName.trim()) {
      console.error('문제 이름은 필수입니다.');
      rl.close();
      process.exit(1);
    }

    // 문제 URL 입력 (선택)
    let problemUrl = flags.url;
    if (problemUrl === undefined) {
      problemUrl = await question('문제 URL을 입력하세요 (선택, Enter로 건너뛰기): ');
    }

    // 날짜 디렉토리 입력 (선택, 기본값: 오늘 날짜 YYMMDD)
    const today = new Date();
    const defaultDate = today.getFullYear().toString().slice(2) +
                       String(today.getMonth() + 1).padStart(2, '0') +
                       String(today.getDate()).padStart(2, '0');

    let dateDir = flags.date;
    if (dateDir === undefined) {
      dateDir = await question(`날짜 디렉토리를 입력하세요 (기본값: ${defaultDate}): `);
    }
    dateDir = dateDir || defaultDate;

    rl.close();

    // 백준 예제 가져오기
    let examples = [];
    if (problemUrl && problemUrl.includes('acmicpc.net/problem/')) {
      const problemId = problemUrl.match(/problem\/(\d+)/)?.[1];
      if (problemId) {
        console.log('📥 문제 페이지에서 예제 추출 중...');
        try {
          examples = await fetchBaekjoonExamples(problemId);
          if (examples.length > 0) {
            console.log(`✅ ${examples.length}개의 예제를 찾았습니다.`);
          }
        } catch (error) {
          console.log('⚠️  예제 추출 실패, 기본 템플릿으로 생성합니다.');
        }
      }
    }

    // 디렉토리 경로 생성
    const year = '20' + dateDir.slice(0, 2);
    const month = dateDir.slice(2, 4);
    const day = dateDir.slice(4, 6);
    const targetDir = path.join(process.cwd(), year, month, day);

    // 디렉토리 생성
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    // 파일 경로
    const jsFile = path.join(targetDir, `${problemName}.js`);
    const testFile = path.join(targetDir, `${problemName}.test.js`);

    // .js 파일 템플릿
    const jsTemplate = `${problemUrl ? `// ${problemUrl}\n` : ''}// 문제 설명을 여기에 작성하세요
const solution = () => {
  // 여기에 솔루션 코드를 작성하세요
};

// 백준 제출용 코드
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim();
// 입력 처리 예시:
// const [n, m] = input.split(' ').map(Number);
// const lines = input.split('\\n');

// const result = solution();
// console.log(result);

module.exports = { solution };
`;

    // .test.js 파일 템플릿 (예제가 있으면 자동 생성)
    let testTemplate;
    if (examples.length > 0) {
      const testCases = examples.map((ex, idx) => {
        const inputLines = ex.input.split('\n');
        const outputLines = ex.output.split('\n');

        // 입력 파라미터 자동 파싱 시도
        let params = '';
        if (inputLines.length === 1 && inputLines[0].split(' ').length === 1) {
          // 단일 숫자
          params = `Number("${ex.input}")`;
        } else if (inputLines.length === 1) {
          // 한 줄, 여러 값
          const values = inputLines[0].split(' ');
          params = values.map(v => isNaN(v) ? `"${v}"` : `Number("${v}")`).join(', ');
        } else {
          // 여러 줄 - 문자열로 전달
          params = `\`${ex.input}\``;
        }

        // 출력 처리
        let expected;
        if (outputLines.length === 1 && !isNaN(outputLines[0])) {
          expected = Number(outputLines[0]);
        } else {
          expected = `\`${ex.output}\``;
        }

        return `test("예제 ${idx + 1}", () => {
  expect(solution(${params})).toBe(${expected});
});`;
      }).join('\n\n');

      testTemplate = `const { solution } = require("./${problemName}");

${testCases}
`;
    } else {
      testTemplate = `const { solution } = require("./${problemName}");

test("테스트 케이스 1", () => {
  expect(solution()).toEqual(/* 예상 결과 */);
});

// 추가 테스트 케이스를 작성하세요
`;
    }

    // 파일 생성
    fs.writeFileSync(jsFile, jsTemplate);
    console.log(`✅ 파일 생성: ${jsFile}`);

    fs.writeFileSync(testFile, testTemplate);
    console.log(`✅ 파일 생성: ${testFile}`);

    console.log('\n🎉 코딩 테스트 셋업 완료!');
    console.log(`\n다음 명령어로 테스트를 실행하세요:`);
    console.log(`  npm test -- ${testFile}`);

  } catch (error) {
    console.error('오류 발생:', error.message);
    rl.close();
    process.exit(1);
  }
}

main();
