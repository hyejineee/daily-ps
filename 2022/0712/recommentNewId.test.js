const solution = (new_id) => {
  let result = new_id;
  //1. 아이디 소문자화
  result = result.toLowerCase();

  //2. 소문자, 숫자, -,_,.을 제외한 문자 제거 -> '[^a-z0-9-_.]
  const reg = new RegExp("[^a-z0-9-_.]", "g");
  result = result.replace(reg, "");

  //3. 연속된 마침표 하나로
  const dotReg = new RegExp("[.]{2,}", "g");
  result = result.replace(dotReg, ".");

  //4. 마침표가 처음 , 끝일 경우 제거
  const arr = result.split("");
  while (arr[0] === "." || arr[arr.length - 1] === ".") {
    if (arr[0] === ".") arr.shift();
    if (arr[arr.length - 1] === ".") arr.pop();
  }

  result = arr.join("");

  //5. (1~4)를 거친 문자열이 빈 문자열일 경우 a대입
  if (!result) result = result + "a";

  //6. 문자열 길이 16이상일 경우 인덱스 15부터 뒤에 날리기
  if (result.length > 15) result = result.slice(0, 15);

  if (result[result.length - 1] === ".") {
    const a = result.split("");
    a.pop();
    result = a.join("");
  }

  //7. 길이가 2이하라면 마지막 문자를 문자열 길이 3이 될때까지 반복
  if (result.length <= 2) {
    result = result + result[result.length - 1].repeat(3 - result.length);
  }

  console.log(result);
  return result;
};

test(`신규 아이디 추천`, () => {
  expect(solution("...!@BaT#*..y.abcdefghijklm")).toEqual("bat.y.abcdefghi");
  expect(solution("z-+.^.")).toEqual("z--");
  expect(solution("=.=")).toEqual("aaa");
  expect(solution("123_.def")).toEqual("123_.def");
  expect(solution("abcdefghijklmn.p")).toEqual("abcdefghijklmn");
});


// 정규표현식 미춌다
// function solution(new_id) {
//   const answer = new_id
//     .toLowerCase() // 1
//     .replace(/[^\w-_.]/g, "") // 2
//     .replace(/\.+/g, ".") // 3
//     .replace(/^\.|\.$/g, "") // 4
//     .replace(/^$/, "a") // 5
//     .slice(0, 15)
//     .replace(/\.$/, ""); // 6
//   const len = answer.length;
//   return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
// }