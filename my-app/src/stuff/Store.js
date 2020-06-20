import { createStore, useStore } from 'kedge';


 export  default { PanelWidth: createStore("0px"),

 SetPanel : function(PanelWidth,other) 
 {other ==="0px" ?PanelWidth.set("200px"):PanelWidth.set("0px")},
 ShowDropdown : createStore("0px")
 
};
