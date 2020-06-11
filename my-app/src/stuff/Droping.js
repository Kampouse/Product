import React, {useState} from 'react';
import {Dropdown,Drop,DropdownItem,Bigbox} from "./style.js"
import {useComponentVisible} from "../hooked.js"

function Droping() {
 
const { ref, isComponentVisible,setIsComponentVisible } = useComponentVisible("0px");
const [Maggy, setMaggy] = useState("basic")
  function dog() {
    // set(max-height  to a high nomber to keep an animation but should be to high to avoid large delay
  setIsComponentVisible("300px")
  setMaggy("down")
}
function cat() {
  setIsComponentVisible("0px")
 
} 


return (
  <Bigbox ref={ref}>
    <Drop
      onClick={() => {
        isComponentVisible === "0px" ? dog() : cat();
      }}
    >
      {Maggy}
    </Drop>
    <Dropdown height={isComponentVisible}>
      <DropdownItem>yes</DropdownItem>
      <DropdownItem>yes</DropdownItem>
      <DropdownItem>yes</DropdownItem>
      <DropdownItem>yes</DropdownItem>
      
    </Dropdown>
  </Bigbox>
);
}
export default Droping;
