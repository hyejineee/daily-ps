const solution = (cacheSize, cities) => {
  const q = [];
  let time = 0;

  for (let e of cities.map((e) => e.toUpperCase())) {
    const idx = q.indexOf(e);

    if (idx === -1) {
      time += 5;
      q.unshift(e);

      if (q.length > cacheSize) {
        q.pop();
      }
      continue;
    }

    time += 1;
    q.splice(idx, 1);
    q.unshift(e);
  }

  return time;
};

// function solution(cacheSize, cities) {
//   const map = new Map();
//   const cacheHit = (city, map) => {
//     map.delete(city);
//     map.set(city, city);
//     return 1;
//   };
//   const cacheMiss = (city, map, size) => {
//     if (size === 0) return 5;
//     map.size === size && map.delete(map.keys().next().value);
//     map.set(city, city);
//     return 5;
//   };
//   const getTimeCache = (city, map, size) =>
//     (map.has(city.toLocaleLowerCase()) ? cacheHit : cacheMiss)(
//       city.toLocaleLowerCase(),
//       map,
//       size
//     );
//   return cities
//     .map((city) => getTimeCache(city.toLocaleLowerCase(), map, cacheSize))
//     .reduce((a, c) => a + c, 0);
// }

test(`캐시`, () => {
  expect(
    solution(3, [
      "Jeju",
      "Pangyo",
      "Seoul",
      "NewYork",
      "LA",
      "Jeju",
      "Pangyo",
      "Seoul",
      "NewYork",
      "LA",
    ])
  ).toEqual(50);

  expect(
    solution(3, [
      "Jeju",
      "Pangyo",
      "Seoul",
      "Jeju",
      "Pangyo",
      "Seoul",
      "Jeju",
      "Pangyo",
      "Seoul",
    ])
  ).toEqual(21);

  expect(
    solution(2, [
      "Jeju",
      "Pangyo",
      "Seoul",
      "NewYork",
      "LA",
      "SanFrancisco",
      "Seoul",
      "Rome",
      "Paris",
      "Jeju",
      "NewYork",
      "Rome",
    ])
  ).toEqual(60);

  expect(
    solution(5, [
      "Jeju",
      "Pangyo",
      "Seoul",
      "NewYork",
      "LA",
      "SanFrancisco",
      "Seoul",
      "Rome",
      "Paris",
      "Jeju",
      "NewYork",
      "Rome",
    ])
  ).toEqual(52);

  expect(solution(2, ["Jeju", "Pangyo", "NewYork", "newyork"])).toEqual(16);

  expect(solution(0, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA"])).toEqual(25);
});
