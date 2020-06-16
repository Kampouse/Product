import styled from "styled-components";

export const Bigbox = styled.div`
display:list-item;


width:100%;
height:100%;
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
 top:5%;
 &:hover{
   position:relative;
color:purple;

transition:1s;

 }
`;

export const DropdownItem = styled.a`
         position: relative;
         width: 200px;
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


export const Drop  = styled.div`
width:200px;
overflow:block;
cursor:pointer;
background-color:violet;
border-style:groove;
color:palevioletred;
border-color:palevioletred;


font-size: 1.5em;
text-align: center;`
