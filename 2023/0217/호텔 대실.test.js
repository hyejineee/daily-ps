const solution = (book_time) => {
  const rooms = Array(1000)
    .fill(0)
    .map(() => []);

  const bookTimes = book_time
    .map(([start, end]) => [getMinutes(start), getMinutes(end)])
    .sort(([startA], [startB]) => startA - startB);

  let guestIndex = 0;
  while (guestIndex < bookTimes.length) {

    for (let i = 0; i < 1001; i++) {
      if (rooms[i].length <= 0) {
        rooms[i].push(bookTimes[guestIndex][1]);
        guestIndex++;
        break;
      }

      if (bookTimes[guestIndex][0] - rooms[i][0] >= 10) {
        rooms[i].pop();

        rooms[i].push(bookTimes[guestIndex][1]);
        guestIndex++;
        break;
      }
    }
  }

  return rooms.filter((room) => room.length > 0).length;
};

const getMinutes = (time) => {
  const h = time.split(':')[0];
  const m = time.split(':')[1];

  return Number(h) * 60 + Number(m);
};

test(`호텔 대실`, () => {
  expect(
    solution([
      ['15:00', '17:00'],
      ['16:40', '18:20'],
      ['14:20', '15:20'],
      ['14:10', '19:20'],
      ['18:20', '21:20'],
    ])
  ).toEqual(3);

  expect(
    solution([
      ['09:10', '10:10'],
      ['10:20', '12:20'],
    ])
  ).toEqual(1);

  expect(
    solution([
      ['10:20', '12:30'],
      ['10:20', '12:30'],
      ['10:20', '12:30'],
    ])
  ).toEqual(3);
});
