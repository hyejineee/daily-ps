#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const https = require('https');

// 커맨드라인 인자 파싱
const args = process.argv.slice(2);
const params = {};

args.forEach(arg => {
  const [key, value] = arg.split('=');
  const paramName = key.replace('--', '');
  params[paramName] = value?.replace(/^["']|["']$/g, '') || '';
});

// HTML 가져오기 함수
function fetchHtml(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

// 백준 문제 페이지에서 예제 추출
function extractExamples(html) {
  const examples = [];

  // 샘플 입력/출력 패턩 매칭
  const inputPattern = /<pre[^>]*id="sample-input-(\d+)"[^>]*>([\s\S]*?)<\/pre>/g;
  const outputPattern = /<pre[^>]*id="sample-output-(\d+)"[^>]*>([\s\S]*?)<\/pre>/g;

  const inputs = {};
  const outputs = {};

  let match;
  while ((match = inputPattern.exec(html)) !== null) {
    const num = match[1];
    const content = match[2].trim();
    inputs[num] = content;
  }

  while ((match = outputPattern.exec(html)) !== null) {
    const num = match[1];
    const content = match[2].trim();
    outputs[num] = content;
  }

  // 입력과 출력 매칭
  Object.keys(inputs).forEach(num => {
    if (outputs[num]) {
      examples.push({
        input: inputs[num],
        output: outputs[num]
      });
    }
  });

  return examples;
}

async function main() {
  const problemName = params.name;
  const problemUrl = params.url || '';
  const dateInput = params.date || '';

  if (!problemName) {
    console.error('❌ 문제 이름은 필수입니다. --name 옵션을 사용하세요.');
    process.exit(1);
  }

  // 날짜 처리
  let dateDir;
  if (dateInput) {
    // YYMMDD 형식 검증
    if (!/^\d{6}$/.test(dateInput)) {
      console.error('❌ 날짜는 YYMMDD 형식이어야 합니다. (예: 260212)');
      process.exit(1);
    }
    const year = '20' + dateInput.substring(0, 2);
    const month = dateInput.substring(2, 4);
    const day = dateInput.substring(4, 6);
    dateDir = `${year}/${month}/${day}`;
  } else {
    // 오늘 날짜 사용
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    dateDir = `${year}/${month}/${day}`;
  }

  const targetDir = path.join(process.cwd(), dateDir);

  // 디렉토리 생성
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  // 예제 추출 (URL이 있는 경우)
  let examples = [];
  if (problemUrl && problemUrl.includes('acmicpc.net')) {
    try {
      console.log('📥 문제 페이지에서 예제 추출 중...');
      const html = await fetchHtml(problemUrl);
      examples = extractExamples(html);
      console.log(`✅ ${examples.length}개의 예제를 찾았습니다.`);
    } catch (error) {
      console.warn('⚠️  예제 자동 추출 실패:', error.message);
      console.warn('기본 템플릿으로 생성합니다.');
    }
  }

  // 솔루션 파일 템플릿
  const solutionTemplate = `// ${problemUrl}
// 문제 설명을 여기에 작성하세요

const solution = (input) => {
  // 입력 처리
  // const lines = input.split('\\n');
  // const [n, m] = input.split(' ').map(Number);

  // 여기에 솔루션 코드를 작성하세요

  return result;
};

// 백준 제출용 코드
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim();
// const result = solution(input);
// console.log(result);

module.exports = { solution };
`;

  // 테스트 파일 템플릿 생성
  let testTemplate;
  if (examples.length > 0) {
    const testCases = examples.map((example, idx) => {
      const inputStr = example.input.includes('\n')
        ? '`' + example.input + '`'
        : `"${example.input}"`;
      const outputStr = example.output.includes('\n')
        ? '`' + example.output + '`'
        : `"${example.output}"`;

      return `test("예제 ${idx + 1}", () => {
  const input = ${inputStr};
  const expected = ${outputStr};
  expect(solution(input)).toEqual(expected);
});`;
    }).join('\n\n');

    testTemplate = `const { solution } = require("./${problemName}");

${testCases}
`;
  } else {
    testTemplate = `const { solution } = require("./${problemName}");

test("테스트 케이스 1", () => {
  const input = "";
  const expected = "";
  expect(solution(input)).toEqual(expected);
});

// 추가 테스트 케이스를 작성하세요
`;
  }

  // 파일 생성
  const solutionPath = path.join(targetDir, `${problemName}.js`);
  const testPath = path.join(targetDir, `${problemName}.test.js`);

  fs.writeFileSync(solutionPath, solutionTemplate);
  fs.writeFileSync(testPath, testTemplate);

  console.log('\n✅ 파일 생성 완료!');
  console.log(`\n생성된 파일:`);
  console.log(`- ${solutionPath}`);
  console.log(`- ${testPath}`);
}

main().catch(error => {
  console.error('❌ 오류 발생:', error.message);
  process.exit(1);
});
