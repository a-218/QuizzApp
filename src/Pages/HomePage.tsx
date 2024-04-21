import React from 'react'
import { DropDown } from '../components/DropDown'
import { category, difficulty } from '../Data/data';

interface Props {}

const HomePage = (props: Props) => {
  return (
    <>

    {/* need  three drop down and one input with error prompt for not over 50 
    */}
    <DropDown label= "Difficulty" options= {difficulty}/>
    <DropDown label= "Category" options= {category}/>
    <DropDown label= "Difficulty" options= {difficulty}/>
    <DropDown label= "Difficulty" options= {difficulty}/>
    </>
  )
}

export default HomePage;