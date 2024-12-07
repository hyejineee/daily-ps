function canCross(stones: number[]): boolean {
  if (stones[1] !== 1) return false;

  const map = new Map<number, Set<number>>();
  stones.forEach((stone) => {
    map.set(stone, new Set());
  });

  map.get(0)?.add(1);

  for (const stone of stones) {
    const distances = map.get(stone)!;

    if (distances.size <= 0) continue;

    for (const distance of distances) {
      const reachablePosition = stone + distance;
      if (!map.has(reachablePosition)) continue;

      if (distance - 1 > 0) map.get(reachablePosition)?.add(distance - 1);
      map.get(reachablePosition)?.add(distance);
      map.get(reachablePosition)?.add(distance + 1);
    }
  }

  return map.get(stones[stones.length - 1])!.size > 0;
}

test("solution", () => {
  expect(canCross([0, 1, 3, 5, 6, 8, 12, 17])).toBe(true);
  expect(canCross([0, 1, 2, 3, 4, 8, 9, 11])).toBe(false);
  expect(canCross([0, 1, 3, 6, 10, 15, 16, 21])).toBe(true);
});
