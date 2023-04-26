import styled from "styled-components";


export const Card = styled.div`
position: relative;
width: 380px;
height: 460px;
background: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
border-radius: 20px;
padding-top: 284px;

`

export const Image = styled.img`
position: absolute;
width: 308px;
height: 168px;
left: 36px;
top: 28px;
`

export const Logo = styled.img`
width: 76px;
height: 22px;
position: absolute;
left: 20px;
top: 20px;
`

export const Avatar = styled.img`
position: absolute;
width: 62px;
height: 62px;
left: 9.48px;
top: 9.42px;
z-index: 1000;
background-color: #5736A3;
border-radius: 85.9232px;
`

export const Circle = styled.span`
position: absolute;
width: 80px;
height: 80px;
left: 150px;
top: 178px;
border-radius: 85.9232px;
background-color: #EBD8FF;
box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), inset 0px -2.19582px 4.39163px #AE7BE3, inset 0px 4.39163px 3.29372px #FBF8FF;
z-index: 500;
margin-bottom: 26px;
`
export const Line = styled.hr`
margin: 0;
border: 0;
position: absolute;
width: 380px;
height: 8px;
left: 0px;
top: 214px;
background: #EBD8FF;
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF;
`

export const UserInfo = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 16px;
margin-bottom: 26px;
`

export const Text = styled.p`
font-family: 'Montserrat';
font-size: 20px;
line-height: 24px;
text-transform: uppercase;
color: #EBD8FF;
margin: 0;
`

export const Button = styled.button`
width: 196px;
height: 50px;
background-color: #EBD8FF;
padding: 14px 28px;
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
border-radius: 10.3108px;
font-family: 'Montserrat';
font-weight: 600;
font-size: 18px;
line-height: 22px;
text-transform: uppercase;
color: #373737;
border: 0;
display: block;
margin-right: auto;
margin-left: auto;
cursor: pointer;
`;

