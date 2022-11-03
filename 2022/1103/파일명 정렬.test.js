const solution = (files) => {
  return files
    .map((file, i) => [
      i,
      file.split(/[0-9]{1,}/g)[0].toLowerCase(),
      Number(file.match(/[0-9]{1,}/g)[0]),
    ])
    .sort((a, b) => {
      if (a[1] > b[1]) return 1;
      if (a[1] < b[1]) return -1;

      if (a[2] > b[2]) return 1;
      if (a[2] < b[2]) return -1;
    })
    .map(([i]) => files[i]);
};

test(`파일명정렬`, () => {
  expect(
    solution([
      "img12.png",
      "img10.png",
      "img02.png",
      "img1.png",
      "IMG01.GIF",
      "img2.JPG",
    ])
  ).toEqual([
    "img1.png",
    "IMG01.GIF",
    "img02.png",
    "img2.JPG",
    "img10.png",
    "img12.png",
  ]);
});
