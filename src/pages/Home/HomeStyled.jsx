import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Title = styled.h1`
  
font-family: Red Hat Display;
font-size: 32px;
font-weight: 800;
line-height: 1.15;
text-transform: capitalize;
`;

export const Container = styled.div`

width: 520px;
text-align: center;
margin-right: auto;
margin-left: auto;
`;

export const HomeLink = styled(Link)`

padding: 8px 16px;
text-decoration: none;
border-radius: 8px;
border: 1px solid var(--Accent, #E53B16);
color: black;
transition: background-color 0.3s ease-in-out, border 0.3s ease-in-out;

&:hover {
    background-color: #E53B16;
    border: none;
  }

`;