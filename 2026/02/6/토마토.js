const solution = (M, N, grid) => {
	if (
		grid
			.flat()
			.filter((v) => v !== -1)
			.every((v) => v === 1)
	)
		return 0;

	let positions = [];

	for (let i = 0; i < N; i++) {
		for (let j = 0; j < M; j++) {
			if (Number(grid[i][j]) === 1) positions.push([i, j]);
		}
	}

	const dir = [
		[-1, 0],
		[1, 0],
		[0, -1],
		[0, 1],
	];

	let count = 0;

	while (positions.length !== 0) {
		const nextPositions = [];
		for (const [i, j] of positions) {
			for (const [ni, nj] of dir) {
				if (nearTomato(i + ni, j + nj, grid)) {
					nextPositions.push([i + ni, j + nj]);
				}
			}
		}

		if (nextPositions.length === 0) break;

		count++;
		positions = nextPositions;
	}

	// 토마토가 모두 익지는 못하는 상황
	if (grid.flat().filter((v) => v === 0).length > 0) return -1;

	return count;
};

const nearTomato = (i, j, grid) => {
	if (grid[i]?.[j] === 0) {
		grid[i][j] = 1;
		return [i, j];
	}
};

module.exports = { solution };
