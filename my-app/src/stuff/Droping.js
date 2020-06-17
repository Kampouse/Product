import React, {useState} from 'react';
import {Dropdown,Drop,DropdownItem,Bigbox} from "./style.js"
import {useComponentVisible} from "../hooked.js"

function Droping() {
 // do  you want it to be outer?
	// const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible("0px");
	const [Open,setOpen] = useState("0px")

	function Setmaximum() {
		// set(max-height  to a high nomber to keep an animation but should be to high to avoid large delay
	setOpen("300px")
}
function Setminimum() {
	setOpen("0px")
 
} 


return (
	<Bigbox>
		<Drop
			onClick={() => {
				// cant have 2 thing open... while using the custom hooks
				Open === "0px" ? Setmaximum() : Setminimum();
			}}
		>
			drop down content
		</Drop>

		<Dropdown height={Open}>
			<DropdownItem>yes</DropdownItem>
			<DropdownItem>yes</DropdownItem>
			<DropdownItem>yes</DropdownItem>
			<DropdownItem>yes</DropdownItem>
		</Dropdown>
	</Bigbox>
);
}
export default Droping;
