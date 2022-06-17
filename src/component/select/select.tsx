import { ISelect } from "./select.interface";

export const SelectComponent = ({ defaultText, name, options, keyPrefix, onChange }: ISelect) => <div>
	<select className="select-component" name={name} onChange={onChange} defaultValue="_none">
		<option value='_none' key={keyPrefix + '_none'} disabled>{defaultText}</option>
		{options.map((option) => <option key={keyPrefix + option.value} value={option.value}>{option.text?.toString()}</option>)}
	</select>
</div>