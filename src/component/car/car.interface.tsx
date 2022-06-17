export interface ICar {
	type?: CarType;
	name: string;
	engine: string;
	seats?: number;
	color: string;
	isBroken?: boolean;
}

export type CarType = 'electric' | '2wheels' | 'sport';