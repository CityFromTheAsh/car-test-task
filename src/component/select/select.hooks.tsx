import { ChangeEvent, useState } from "react"
import { initialFiltersState } from "../car/car";
import { CarType, ICar } from "../car/car.interface";
import { ChangeFunctionType } from "./select.interface";



export const useSelectHook: (state: ICar) => [ICar, ChangeFunctionType] = (state: ICar) => {

	const [val, setVat] = useState(state);

	const onChange: ChangeFunctionType = (e: ChangeEvent<HTMLSelectElement>) => {
		if (e.target.name !== 'type') {
			setVat(prev => ({ ...prev, [e.target.name]: e.target.value }));
		} else {
			setVat({ ...initialFiltersState, type: e.target.value as CarType })
		}
	}


	return [val, onChange];
}