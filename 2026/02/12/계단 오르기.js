// https://www.acmicpc.net/problem/2579
// 난이도: Silver 3
// 태그: 다이나믹 프로그래밍
// 계단 오르기 게임: 계단 아래에서 시작하여 계단 꼭대기에 올라가는 게임. 계단을 밟으면 점수를 얻으며, 점수의 최댓값을 구하는 문제. 규칙: 1) 한 번에 한 계단 또는 두 계단씩 오를 수 있다. 2) 연속된 세 개의 계단을 모두 밟으면 안 된다. 3) 마지막 도착 계단은 반드시 밟아야 한다.

const solution = (input) => {
  // 입력 처리
  const lines = input.split('\n');
  const n = Number(lines[0]);
  const stairs = [0, ...lines.slice(1).map(Number)]; // 1-indexed

  // 예외 처리
  if (n === 1) return stairs[1];
  if (n === 2) return stairs[1] + stairs[2];

  // DP 배열 초기화
  const dp = Array(n + 1).fill(0);
  dp[1] = stairs[1];
  dp[2] = stairs[1] + stairs[2];

  // DP 계산
  for (let i = 3; i <= n; i++) {
    // i번째 계단에 도달하는 2가지 방법:
    // 1) i-2에서 2칸 점프
    // 2) i-3에서 i-1로, i-1에서 i로 (연속 2개만)
    dp[i] = Math.max(
      dp[i - 2] + stairs[i],              // 방법 1
      dp[i - 3] + stairs[i - 1] + stairs[i] // 방법 2
    );
  }

  return dp[n];
};

// 백준 제출용 코드
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim();
// const result = solution(input);
// console.log(result);

module.exports = { solution };
