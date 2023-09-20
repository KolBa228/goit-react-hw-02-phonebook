import styled from "styled-components";

export const StyledHeader = styled.header`

display: flex;
gap: 15px;
justify-content: space-between;
width: 520px;
margin-right: auto;
margin-left: auto;
`;

export const NavList = styled.ul`

display: flex;
list-style: none;
gap: 20px;

`;

export const MenuList = styled.div`

display: flex;
    align-items: center;
    gap: 20px;
`;

export const HeaderBtn = styled.button`

padding: 8px 16px;
text-decoration: none;
border: 1px solid var(--Accent, #E53B16);
color: black;
transition: background-color 0.3s ease-in-out;
border-radius: 8px;

&:hover {
background-color: #E53B16;
`;