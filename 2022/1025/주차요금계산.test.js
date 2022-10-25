const solution = (fees, records) => {
  const map = new Map();
  const times = new Map();

  records.forEach((e) => {
    const [time, car, type] = e.split(" ");
    const carNum = Number(car);
    const h = Number(time.split(":")[0]);
    const m = Number(time.split(":")[1]);

    map[carNum]
      ? map[carNum].push([h, m, type])
      : (map[carNum] = [[h, m, type]]);

    times[carNum] = 0;
  });

  Object.keys(map).forEach((key) => {
    const arr = map[key];

    if (arr.length % 2 !== 0) {
      arr.push([23, 59, "OUT"]);
    }

    for (let i = 1; i < arr.length; i += 2) {
      const enter = new Date();
      enter.setHours(arr[i - 1][0]);
      enter.setMinutes(arr[i - 1][1]);

      const exit = new Date();
      exit.setHours(arr[i][0]);
      exit.setMinutes(arr[i][1]);

      times[key] = times[key] + toMinutes(exit - enter);
    }
  });

  return Object.keys(times)
    .sort((a, b) => a - b)
    .map((key) =>
      times[key] < fees[0]
        ? fees[1]
        : fees[1] + Math.ceil((times[key] - fees[0]) / fees[2]) * fees[3]
    );
};

const toMinutes = (milliseconds) => {
  return milliseconds / 60000 + (milliseconds % 60000);
};

test(`주차요금계산`, () => {
  expect(
    solution(
      [180, 5000, 10, 600],
      [
        "05:34 5961 IN",
        "06:00 0000 IN",
        "06:34 0000 OUT",
        "07:59 5961 OUT",
        "07:59 0148 IN",
        "18:59 0000 IN",
        "19:09 0148 OUT",
        "22:59 5961 IN",
        "23:00 5961 OUT",
      ]
    )
  ).toEqual([14600, 34400, 5000]);

  expect(
    solution(
      [120, 0, 60, 591],
      [
        "16:00 3961 IN",
        "16:00 0202 IN",
        "18:00 3961 OUT",
        "18:00 0202 OUT",
        "23:58 3961 IN",
      ]
    )
  ).toEqual([0, 591]);

  expect(solution([1, 461, 1, 10], ["00:00 1234 IN"])).toEqual([14841]);
});
