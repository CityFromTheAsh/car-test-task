import { ChangeEvent } from "react";

export interface ISelect {
	defaultText: string,
	name: string,
	options: IOption[],
	keyPrefix: string,
	onChange: ChangeFunctionType
}

export interface IOption { value?: string, text?: string }

export type ChangeFunctionType = (e: ChangeEvent<HTMLSelectElement>) => void