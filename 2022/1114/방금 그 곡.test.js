const solution = (m, musicinfos) => {
  m = convert(m);
  const result = [];

  musicinfos
    .map((e) => e.split(","))
    .forEach(([start, end, title, codes]) => {
      const diff =
        (new Date(`1999-01-01 ${end}:00`).getTime() -
          new Date(`1999-01-01 ${start}:00`).getTime()) /
        60000;

      let converted = convert(codes);

      if (diff > converted.length) {
        while (converted.length <= diff) {
          converted += converted;
        }
      } else {
        converted = converted.substring(0, diff + 1);
      }

      if (converted.match(new RegExp(`${m}`, "g")) !== null) {
        result.push({ title, diff });
      }
    });

  result.sort((a, b) => b.diff - a.diff);

  return result.length <= 0 ? "(None)" : result[0].title;
};

const convert = (origin) => {
  const c = ["C#", "D#", "F#", "G#", "A#"];

  c.forEach((e) => {
    origin = origin.replace(new RegExp(`${e}`, "g"), e[0].toLowerCase());
  });

  return origin;
};

test(`방금 그 곡`, () => {
  expect(
    solution("ABCDEFG", [
      "12:00,12:14,HELLO,CDEFGAB",
      "13:00,13:05,WORLD,ABCDEF",
    ])
  ).toEqual("HELLO");

  expect(
    solution("CC#BCC#BCC#BCC#B", [
      "03:00,03:30,FOO,CC#B",
      "04:00,04:08,BAR,CC#BCC#BCC#B",
    ])
  ).toEqual("FOO");
});
