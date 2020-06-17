import React, { useState } from 'react';
import Droping from "./Droping.js"
import { Dropdown, Drop, DropdownItem, Bigbox,SidePanel,NavBar } from "./style.js";
 // might want to set the panel size to a global state 
let SideBloc = () => { 
    const [Panel, setPanel] = useState("200px");
    return (
      // not perfect
      <>
     
        
        
        
        <SidePanel width={Panel}>
          <Droping></Droping>
          <Droping></Droping>
          
        </SidePanel>
      </>
    ); 
}
export default SideBloc;