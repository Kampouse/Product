import React, {useState} from 'react';
import {Dropdown,Drop,DropdownItem,Bigbox} from "./style.js"
import {useComponentVisible} from "../hooked.js"

function Droping() {
 
const { ref, isComponentVisible,setIsComponentVisible } = useComponentVisible("0px");
const [Maggy, setMaggy] = useState("basic")
function dog() {
  setIsComponentVisible("214px")
  setMaggy("down")
}
function cat() {
  setIsComponentVisible("0px")
  setMaggy("death")
} 


return(
<Bigbox  ref={ref}>
<Drop 
onClick={() => { 
  isComponentVisible === "0px"?dog():cat()}}>
    {Maggy}</Drop>
       <Dropdown  height = {isComponentVisible}>
         <DropdownItem>yes</DropdownItem>
         <DropdownItem>yes</DropdownItem>
         <DropdownItem>yes</DropdownItem>
       </Dropdown>
    </Bigbox>)
}
export default Droping;
