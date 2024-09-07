import React from 'react'

interface IOption {
    value: string;
    valueText:string;
}

interface Props {
    name?: string;
    label?: string;
    options: IOption[];
}

export const DropDown = (props: Props) =>{
    const{ name, label,options } = props;

 return (
    <>
    <div>Select {label}</div>
        <select name={name}>
            {options.map((option:IOption)=>{
                return <option key={option.value} value={option.value}>{option.valueText}</option>
            })}
        </select>
    </>
  )
}