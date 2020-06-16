import React, { useState } from 'react';
import Droping from "./Droping.js"
import { Dropdown, Drop, DropdownItem, Bigbox,SidePanel } from "./style.js";
 
let SideBloc = () => { 
    const [Panel, setPanel] = useState("200px");
    return (
      <>

        <button onClick = {() =>  Panel === "0px"?setPanel("200px"):setPanel("0px")   }> yes</button>
        <SidePanel width={Panel}>
            
        <Droping></Droping>
            </SidePanel>
            </>
    ) 
}
export default SideBloc;