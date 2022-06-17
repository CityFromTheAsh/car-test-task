import { ICar } from "../component/car/car.interface";


export const Cars: ICar[] = [
	{
		type: "electric",
		name: "Tesla Model X",
		color: "teal",
		engine: 'new',
		seats: 5,
		isBroken: true,
	},
	{
		type: "electric",
		name: "Tesla Model X",
		color: "black",
		engine: 'new',
		seats: 5,
		isBroken: false,
	},
	{
		type: "electric",
		name: "Tesla Model Y",
		color: "black",
		engine: 'new',
		seats: 6,
		isBroken: true,
	},

	{
		type: "sport",
		name: "Ferrari Model X",
		color: "yellow",
		engine: 'new',
		seats: 2,
		isBroken: true,
	},
	{
		type: "sport",
		name: "Ferrari Model X",
		color: "orange",
		engine: 'new',
		seats: 2,
		isBroken: false,
	},
	{
		type: "sport",
		name: "Ferrari Model Y",
		color: "orange",
		engine: 'old',
		seats: 3,
		isBroken: true,
	},

	{
		type: "2wheels",
		name: "Ford Model X",
		color: "yellow",
		engine: 'old',
		seats: 2,
		isBroken: true,
	},
	{
		type: "2wheels",
		name: "Ford Model X",
		color: "orange",
		engine: 'old',
		seats: 2,
		isBroken: false,
	},
	{
		type: "2wheels",
		name: "Ford Model Y",
		color: "orange",
		engine: 'old',
		seats: 3,
		isBroken: true,
	},
];