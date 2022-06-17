import { useEffect, useState } from "react";
import { Cars } from "../../resource/car";
import { useSelectHook } from "../select/select.hooks";

import { ICar } from "./car.interface";


const unique: <T>(value: T, index: number, self: T[]) => boolean = (value, index, self) => self.indexOf(value) === index;


export const initialFiltersState: ICar = {
	type: undefined,
	name: "",
	engine: "",
	seats: undefined,
	color: "",
	isBroken: undefined,
}

export const Car = () => {
	const [result, setResult] = useState("");
	const [filter, onChange] = useSelectHook(initialFiltersState);

	useEffect(() => {
		const cars = Cars.filter(car => {
			return (!filter.color || filter.color === car.color) &&
				(filter.type === car.type) &&
				(!filter.engine || filter.engine === car.engine) &&
				(!filter.seats || Number(filter.seats) === Number(car.seats)) &&
				((filter.isBroken !== null) || (filter.isBroken) == (car.isBroken))
		})
		setResult((cars ? (cars.length === 1) ? cars[0].name : `Found: ${cars.length} cars` : ""));
	}, [filter])

	const carAttrs: (keyof ICar)[] = ["type", "engine", "seats", "color", "isBroken"];
	const filters = carAttrs.map(attr => [attr, Cars.map((item) => item[attr]).filter(unique).map(type => ({ text: type, value: type }))]);

	return { filters, onChange, result };
}