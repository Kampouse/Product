import styled from "styled-components";

export const Bigbox = styled.div`
display:list-item;


width:100%;
height:-1%;
`
export const Dropdown = styled.div`
position:relative;
overflow:hidden;

max-height:${props => props.height};
text-align: center;
cursor:pointer;
color:palevioletred;

transition:0.5s;
display:grid;

border-color:palevioletred;
border-left-color:palevioletred;   
border-right-color:palevioletred;
border-top-color:none;
border-bottom:none;
border-left:none;
border-right:none;
 transition:0.5s;
 &:hover{
   position:relative;
color:purple;

transition:1s;

 }
`;

export const DropdownItem = styled.a`
         position: relative;
         width:auto;
         top: -2px;
         left: auto;
         position: center;
         cursor: pointer;
         background-color: violet;
         color: palevioletred;
         font-size: 1.5em;
         text-align: center;
         border-style: groove;
         border-top:none;
         border-width:3px;
         border-color: palevioletred;
         grid-column-gap: fit-content;

         transition: 1s;
         &:hover {
           background-color: pink;
           text-align: center;
           transition: 1s;
           color: pink;
         }
       `;

export const Drop = styled.div`

width:200px;

position:relative;
height:fit-content;
overflow:block;
cursor:pointer;
background-color:violet;
border-style:groove;
color:palevioletred;
border-color:rgba(208, 109, 109, 0.4);
y-axis:0.9;
font-size: 1.5em;
text-align: center;`

export const SidePanel = styled.div`
         position: relative;
         display: flex;
         top:40px;
         flex-direction: column;
         align-items: center;
         overflow: Hidden;
         height: 560px;
         width: ${(props) => props.width};
         background-color: purple;
         max-width: 225;
         transition: 1s;
       `;


export const NavBar = styled.div`
overflow: hidden;
  background-color: hotpink;
  display:flex;
  justify-content: center;
  position: fixed; 
  top: 0; 
  width: 100%;
  z-index:1;
  opacity:0.9;
  border-style:groove;
  border-color: palevioletred;




`

export const NavElement =  styled.a`


color:purple;
backgroud-color:palevioletred;
border-style: groove;
border-color:red;
height:fit-content;
margin:5px;
cursor:pointer;
transition:1s;
&:hover {

background-color:red;
transition: 1s;
}
`

export const Background = styled.div`
background-color:lightpink;
positon:fixed;
top:0;
height:600px;
`