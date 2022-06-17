import React from "react";
import { SelectComponent } from "../select/select";
import { IOption } from "../select/select.interface";
import { Car } from "./car";


export const CarComponent = () => {

	const { filters, onChange, result } = Car();

	return (<div>
		{filters.map(([attr, options]) => <SelectComponent
			defaultText={`Select ${attr}`}
			name={attr as string}
			options={options as IOption[]}
			keyPrefix={attr as string}
			onChange={onChange} />)}
		<h2>{result}</h2>
	</div>)
};