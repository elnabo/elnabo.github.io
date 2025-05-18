import { solve } from './solver';
import { Board, Constraint, empty, filled, Grid, stringify } from './utils';

import * as fs from 'fs';
import * as process from 'process'


function doGenerate(height:number, width: number, density:number): Board {
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

	solve(colConstraints, rowConstraints);

	return { colConstraints, rowConstraints };
}

async function generate(density: number, count:number) {
	if (height < 5 || height > 25 || width < 5 || width > 25 || density < 0.2 || density > 0.8) {
		throw new Error('Invalid spec');
	}


	// const boards:Array<ReturnType<typeof doGenerate>> = [];
	let added = 0;



	while (boards.length <= count) {
		try {
			// boards.push(doGenerate(height, width, density));
			const board = doGenerate(height, width, density);
			// const stream = fs.createWriteStream(boardsFile, {flags: 'a'});
			// stream.write(stringify(board));
			// stream.write('\n');
			// stream.end()

			boards.push(stringify(board));
			console.log(boards.length)

			// added += 1;
		}
		catch(err:any){
			/* Do nothing */
		}
	}

}



const height = 10;
const width = 10;
function exitHandler() {
	console.log('exit');
	fs.appendFileSync(`./out/${height}_${width}.dat`, boards.join('\n'));
}
const abortHandler = () => {
	console.log('abord')
	exitHandler();
	process.exit();
}
process.stdin.resume();//so the program will not close instantly
process.on('exit', exitHandler);
//catches ctrl+c event
process.on('SIGINT', abortHandler);
// catches "kill pid" (for example: nodemon restart)
process.on('SIGUSR1', abortHandler);
process.on('SIGUSR2', abortHandler);
const boards:Array<string> = [];
await generate(0.5, 10)
process.exit();