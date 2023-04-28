import styled from "styled-components";

export const BackButton = styled.button`
width: 150px;
height: 50px;
background-color: #c0e1f0;
padding: 14px 20px;
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
border-radius: 10.3108px;
font-family: 'Montserrat';
font-weight: 600;
font-size: 15px;
line-height: 22px;
text-align: center;
text-transform: uppercase;
color: #373737;
border: 0;
cursor: pointer;
transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), font-size 250ms cubic-bezier(0.4, 0, 0.2, 1);
&:hover, &:focus {
    box-shadow: #919191 0px 3px 12px;
    font-size: 15.5px;
}
`