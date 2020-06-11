import styled from "styled-components";

export const Bigbox = styled.div`
width:25%;



`

export const Dropdown = styled.div`

overflow:hidden;

max-height:${props => props.height};
text-align: center;
cursor:pointer;
color:palevioletred;

transition:0.5s;
display:grid;
border-style:groove;
border-color:palevioletred;
border-left-color:palevioletred;   
border-right-color:palevioletred;
border-top-color:none;
border-bottom:none;
border-left:none;
border-right:none;
 transition:0.5s;
 &:hover{
color:purple;
right:10%;
transition:1s;

 }
`;

export const DropdownItem = styled.a`
         position: relative;
         width: auto;
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

overflow:block;
cursor:pointer;
background-color:violet;
border-style:groove;
color:palevioletred;
border-color:palevioletred;
border-bottom:none;

font-size: 1.5em;
text-align: center;`
