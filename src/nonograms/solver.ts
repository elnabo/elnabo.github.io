const empty = '_'
const filled = 'o'
type Value = typeof empty | typeof filled |'?';
type Constraint = Array<number>;
type Grid = Array<Array<Value>>;
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

function permToString(value:number, size:number) {
	let res = '';
	for (let i=0; i<size; i++) {
		res = res + ((value & 1) ? filled : empty);
		value = value >> 1;
	}
	return res;
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


function solve(colConstraints:Array<Constraint>, rowConstraints:Array<Constraint>) {
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

function doGenerate(height:number, width: number, density:number) {
	const grid:Grid = [];
	for (let i=0; i<height; i++) {
		grid.push([]);
		for (let j=0; j<width; j++) {
			grid[i].push(Math.random() <= density ? filled : empty);
		}
	}

	const colConstraints:Array<Constraint> = [];
	const rowConstraints:Array<Constraint> = [];

	for (let row=0; row<height; row++) {
		rowConstraints.push([]);
		let consecutives = 0;
		let inFilled = false;
		for (let col=0; col<width; col++) {
			if (grid[row][col] === 'o') {
				inFilled = true;
				consecutives += 1;
			}
			else if (inFilled) {
				rowConstraints[row].push(consecutives);
				consecutives = 0;
				inFilled = false
			}
		}

		if (rowConstraints[row].length === 0 || rowConstraints[row][0] === width) {
			throw new Error('Invalid generation');
		}
	}

	for (let col=0; col<width; col++) {
		colConstraints.push([]);
		let consecutives = 0;
		let inFilled = false;
		for (let row=0; row<height; row++) {
			if (grid[row][col] === 'o') {
				inFilled = true;
				consecutives += 1;
			}
			else if (inFilled) {
				colConstraints[col].push(consecutives);
				consecutives = 0;
				inFilled = false
			}
		}

		if (colConstraints[col].length === 0 || colConstraints[col][0] === width) {
			throw new Error('Invalid generation');
		}
	}

	const solution = solve(colConstraints, rowConstraints);

	return { grid, colConstraints, rowConstraints, solution };
}

async function generate(height:number, width:number, density: number) {
	if (height < 5 || height > 25 || width < 5 || width > 25 || density < 0.2 || density > 0.8) {
		throw new Error('Invalid spec');
	}

	while (true) {
		try {
			return doGenerate(height, width, density);
		}
		catch(err:any){
			/* Do nothing */
		}
	}
}

function printGrid(grid:Grid) {
	grid.forEach(row => console.log(row.join(', ')));
}

generate(10, 10, 0.5).then(({ grid, colConstraints, rowConstraints, solution }) => {
	printGrid(grid);
	console.log(colConstraints);
	console.log(rowConstraints);
	printGrid(solution);
});