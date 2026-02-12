#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

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

    // 디렉토리 경로 생성
    const year = '20' + dateDir.slice(0, 2);
    const monthDay = dateDir.slice(2);
    const targetDir = path.join(process.cwd(), year, monthDay);

    // 디렉토리 생성
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
      console.log(`✅ 디렉토리 생성: ${targetDir}`);
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
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
// 입력 처리 예시:
// const [n, m] = input.split(' ').map(Number);
// const lines = input.split('\\n');

// const result = solution();
// console.log(result);

module.exports = { solution };
`;

    // .test.js 파일 템플릿
    const testTemplate = `const { solution } = require("./${problemName}");

test("테스트 케이스 1", () => {
  expect(solution()).toEqual(/* 예상 결과 */);
});

// 추가 테스트 케이스를 작성하세요
`;

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
