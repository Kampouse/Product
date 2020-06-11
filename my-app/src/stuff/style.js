import styled from "styled-components";

export const Bigbox = styled.div`
width:25%;



`

export const Dropdown = styled.div`

overflow:hidden;
widht:inherit;
 height:${props => props.height};
text-align: center;
cursor:pointer;
color:palevioletred;
background-color:palevioletred;
transition:0.5s;
display:grid;
border-style:groove;
border-color:palevioletred;
border-left-color:palevioletred;   
border-right-color:palevioletred;
border-top-color:none;
 transition:1s;
 &:hover{
color:purple;
right:10%;
transition:1s;

 }
`;

export const DropdownItem  = styled.a
`
position:relative;
width:122%;
top:-2px;
left:-20%;

padding-left:25%;
padding-right:25%;
padding-bottom:25%;
position:center;
cursor:pointer;
background-color:violet;
color:palevioletred;
font-size: 1.5em;
text-align: center;
border-style:groove;
border-color:inherit;
grid-column-gap: 50px;

transition:5s;
&:hover{
background-color:pink;
border-color:pink;
text-align: center;
transition:1s;
color:pink;
}
`


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
