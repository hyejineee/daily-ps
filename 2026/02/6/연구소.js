const d = [
	[1, 0],
	[-1, 0],
	[0, -1],
	[0, 1],
];

const solution = (M, N, grid) => {
	const vpositions = [];

	for (let i = 0; i < M; i++) {
		for (let j = 0; j < N; j++) {
			const area = grid[i][j];
			if (area === 2) {
				vpositions.push([i, j]);
			}
		}
	}

	let max = 0;

	for (let i = 0; i < M; i++) {
		for (let j = 0; j < N; j++) {
			if (i === 0) {
				console.log(i, j);
			}
			for (let i2 = 0; i2 < M; i2++) {
				for (let j2 = j + 1; j2 < N; j2++) {
					for (let i3 = 0; i3 < M; i3++) {
						for (let j3 = j2 + 1; j3 < N; j3++) {
							// if (grid[i3][j3] === 1) continue;

							if (i === 0) {
								console.log("2", i, j);
							}

							const copy = grid.map((v) => [...v]);
							const wall = grid.map((v) => [...v]);

							copy[i][j] = 1;
							copy[i2][j2] = 1;
							copy[i3][j3] = 1;

							wall[i][j] = 1;
							wall[i2][j2] = 1;
							wall[i3][j3] = 1;

							vpositions.forEach(([vi, vj]) => {
								spread(vi, vj, copy);
							});

							const count = copy.flat().filter((v) => v === 0).length;

							if (i === 0 && j === 4) {
								console.log(wall);
								console.log(copy);
								console.log(copy.flat().filter((v) => v === 0));
							}
							max = Math.max(max, count);
						}
					}
				}
			}
		}
	}

	return max;
};

const spread = (i, j, grid) => {
	for (const [di, dj] of d) {
		const [ni, nj] = [i + di, j + dj];
		if (grid[ni]?.[nj] === 0) {
			grid[ni][nj] = 2;
			spread(ni, nj, grid);
		}
	}
};

module.exports = { solution };
