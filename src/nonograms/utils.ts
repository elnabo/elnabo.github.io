export const empty = '_'
export const filled = 'o'
export type Value = typeof empty | typeof filled |'?';
export type Constraint = Array<number>;
export type Grid = Array<Array<Value>>;
export type Board = { colConstraints: Array<Constraint>, rowConstraints: Array<Constraint> };

function stringifyCstr(constraints:Array<Constraint>) {
	return constraints.map(cstr => cstr.join('_')).join('|');
}

export function stringify(board: Board) {
	return `${stringifyCstr(board.colConstraints)};${stringifyCstr(board.rowConstraints)}`;
}

function parseCstr(str:string): Array<Constraint> {
	return str.split('|').map(part => part.split('_').map(s => parseInt(s)));
}

export function parse(str:string): Board {
	const parts = str.split(';');
	return {
		colConstraints: parseCstr(parts[0]),
		rowConstraints: parseCstr(parts[1]),
	};
}