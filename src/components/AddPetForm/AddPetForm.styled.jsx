import styled from "@emotion/styled";
import {
    // FormikStepper,
    // FormikStep,
    // InputField,
    // CheckBoxField,
    RadioField,  
  } from "formik-stepper";
import { Link } from "react-router-dom";

export const RadioButton = styled(RadioField)`

appearance: none;
-webkit-appearance: none;
-moz-appearance: none;
 diplay:inline-block;
 height: 35px; 
 padding: 8px 16px 8px 16px;
 border-radius: 40px;
 border: none;
 color: var(--blue-color);
 background-color: var(--grey-color);
  /* text-align: center; */
  text-decoration: none;
  &:checked {
      background-color:blue;
      background:  linear-gradient(315deg, #419EF1 0%, #9BD0FF 100%);
      color: var(--white-color);

`;

export const BackLink = styled(Link)`
border: 1px solid black;
padding: 5px 10px;
text-decoration: none;
border-radius: 10px;
display: flex;
width: 90px;
color: black;
margin-bottom: 16px;
transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

&:hover, focus{
    color:rgb(196, 185, 185);
}

`;