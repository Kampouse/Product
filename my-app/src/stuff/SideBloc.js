import React, { useState } from 'react';
import Droping from "./Droping.js"
import { Dropdown, Drop, DropdownItem, Bigbox,SidePanel,NavBar } from "./style.js";
import Kedge,{useStore} from "kedge"
import Store from "./Store.js"
// using Kedge for levering global state 
  
let SideBloc = () => { 
  let PanelSize = useStore(Store.PanelWidth)
  
    
    return (
      // not perfect
      <>
        <SidePanel width={PanelSize}>
          <Droping></Droping>
          <Droping></Droping>
          
        </SidePanel>
      </>
    ); 
}
export default SideBloc;