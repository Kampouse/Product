import React,{useState} from 'react';
import {NavBar,NavElement} from "./style.js";
import kedge,{useStore} from "kedge"
import Store from "./Store.js"
// remove border with vertical line?


let Navigation = () => {
    let PanelSize = useStore( Store.PanelWidth)
 
    function SetPanel() {PanelSize === "0px"? Store.PanelWidth.set("200px") : Store.PanelWidth.set("0px")}
 
return(<NavBar>

<NavElement onClick= { () => {SetPanel()}}> left panel </NavElement>
<NavElement>long content</NavElement>

<NavElement>content</NavElement>
<NavElement>content</NavElement>
<NavElement>content</NavElement>
<NavElement>content</NavElement>
</NavBar>)

};
export default Navigation;