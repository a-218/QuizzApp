import React from 'react'

interface IOption {
    value: string;
    valueText:string;
}

interface Props {
    label?: string;
    options: IOption[];
}

export const DropDown = (props: Props) =>{
    const{ label,options } = props;

 return (
    <>
    <div>Select {label}</div>
        <select>
            {options.map((option:IOption)=>{
                return <option key={option.value} value={option.value}>{option.valueText}</option>
            })}
        </select>
    </>
  )
}