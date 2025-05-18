import { Constraint, empty, filled, Grid, Value } from './utils';
type Permutations = Set<number>;

function sum(array:Array<number>) {
	let acc = 0;
	for (const v of array) {
		acc += v;
	}
	return acc;
}

function computePermutations(constraints:Array<number>, size:number) {
	const filled = sum(constraints);
	const mandatoryVoid = constraints.length - 1;
	const freeVoid = size - filled - mandatoryVoid;

	return computePerm(constraints, 0, freeVoid, 0, size, new Set<number>());
}

function computePerm(constraints:Array<number>, value:number, freeVoids: number, size:number, maxSize:number, results:Permutations) {
	if (constraints.length === 0 && size === maxSize && freeVoids === 0) {
		results.add(value);
		return results;
	}

	if (size >= maxSize) {
		return results;
	}

	const remainingConstraints = constraints.slice();
	const cstr = remainingConstraints.pop();
	if (cstr === undefined) {
		return results; // Should never happen
	}

	for (let i=0; i<=freeVoids; i++) {
		let newValue = value << i;
		let newSize = size + i;
		let newVoids = freeVoids - i;

		newValue = (newValue << cstr) + (1 << cstr) - 1;
		newSize += cstr;

		if (remainingConstraints.length > 0) {
			newValue = newValue << 1;
			newSize += 1;
		}
		else {
			newValue = newValue << (freeVoids - i);
			newSize = maxSize;
			newVoids = 0;
		}
		computePerm(remainingConstraints, newValue, newVoids, newSize, maxSize, results);
	}

	return results;
}

function merge(values:Array<Value>, permutations:Permutations, def:0|1, fn:(a:number,b:number) => number) {
	let value = convertToNumber(values, def);
	permutations.forEach(perm => value = fn(perm, value));
	return value;
}

function mergeAbsentPermutations(values:Array<Value>, permutations:Permutations) {
	return merge(values, permutations, 0, (a,b) => a | b);
}

function mergePresentPermutations(values:Array<Value>, permutations:Permutations) {
	return merge(values, permutations, 1, (a,b) => a & b);
}

function convertToNumber(values:Array<Value>, def=1) {
	let res = 0;
	for (let i=values.length; i>=0; i--) {
		res = res << 1;
		if (values[i] === filled) {
			res += 1;;
		}
		else if (values [i] === '?') {
			res += def;
		}
	}
	return res;
}

function getColumns(idx:number, grid:Grid) {
	return grid.map(row => row[idx]);
}

function updateGrid(grid:Grid, col:number, row:number, absent:number, present: number) {
	if (grid[row][col] !== '?') {
		return 0;
	}

	if ((absent & 1) === 0) {
		grid[row][col] = empty;
		return 1;
	}
	else if ((present & 1) === 1) {
		grid[row][col] = filled;
		return 1;
	}
	else {
		return 0;
	}
}

function applyColsConstraints(grid:Grid, colsPermutations:Array<Permutations>, rowsPermutations:Array<Permutations>) {
	let changedCell = 0;

	// Infer possible black/white from current state and column constraints
	for (let col=0; col<colsPermutations.length; col++) {
		const current = getColumns(col, grid);
		const permutations = colsPermutations[col];

		let absent = mergeAbsentPermutations(current, permutations);
		let present = mergePresentPermutations(current, permutations);

		for (let row=0; row<rowsPermutations.length; row++) {
			changedCell += updateGrid(grid, col, row, absent, present);
			absent = absent >> 1;
			present = present >> 1;
		}
	}

	// Update possible columns permutation from updated state
	for (let i=0; i<rowsPermutations.length; i++) {
		const column = grid[i];
		const mergeAnd = convertToNumber(column, 1);
		const mergeOr = convertToNumber(column, 0);

		const validPermutation = new Set<number>();
		rowsPermutations[i].forEach(perm => {
			if ((perm & mergeAnd) === perm && (perm | mergeOr) === perm) {
				validPermutation.add(perm);
			}
		});

		rowsPermutations[i] = validPermutation;
		if (validPermutation.size === 0) {
			throw new Error('Invalid constraints');
		}
	}

	return changedCell;
}


function applyRowsConstraints(grid:Grid, colsPermutations:Array<Permutations>, rowsPermutations:Array<Permutations>) {
	let changedCell = 0;

	// Infer possible black/white from current state and row constraints
	for (let row=0; row<rowsPermutations.length; row++) {
		const current = grid[row];
		const permutations = rowsPermutations[row];

		let absent = mergeAbsentPermutations(current, permutations);
		let present = mergePresentPermutations(current, permutations);

		for (let col=0; col<colsPermutations.length; col++) {
			changedCell += updateGrid(grid, col, row, absent, present);
			absent = absent >> 1;
			present = present >> 1;
		}
	}

	// Update possible columns permutation from updated state
	for (let i=0; i<colsPermutations.length; i++) {
		const column = getColumns(i, grid);
		const mergeAnd = convertToNumber(column, 1);
		const mergeOr = convertToNumber(column, 0);

		const validPermutation = new Set<number>();
		colsPermutations[i].forEach(perm => {
			if ((perm & mergeAnd) === perm && (perm | mergeOr) === perm) {
				validPermutation.add(perm);
			}
		});

		colsPermutations[i] = validPermutation;
		if (validPermutation.size === 0) {
			throw new Error('Invalid constraints');
		}
	}

	return changedCell
}


export function solve(colConstraints:Array<Constraint>, rowConstraints:Array<Constraint>) {
	const height = rowConstraints.length;
	const width = colConstraints.length;

	const puzzleGrid:Grid = [];
	for (let i=0; i<height; i++) {
		puzzleGrid.push([]);
		for (let j=0; j<width; j++) {
			puzzleGrid[i].push('?');
		}
	}

	const columnsPermutations = colConstraints.map(cstr => computePermutations(cstr, height));
	const rowsPermutations = rowConstraints.map(cstr => computePermutations(cstr, width));

	let toFind = height * width;
	while (toFind > 0) {
		const rowDelta = applyRowsConstraints(puzzleGrid, columnsPermutations, rowsPermutations);
		const colDelta = applyColsConstraints(puzzleGrid, columnsPermutations, rowsPermutations);
		if (rowDelta + colDelta === 0) {
			throw new Error('Invalid nonogram')
		}
		toFind -= rowDelta + colDelta;
	}

	return puzzleGrid;
}