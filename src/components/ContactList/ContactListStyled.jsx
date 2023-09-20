import styled from "styled-components";

export const ContactLi = styled.li`

display: flex;
gap: 15px;
justify-content: center;
align-items: center;

`;

export const DelBtn = styled.button`

padding: 4px 8px;
text-decoration: none;
border: 1px solid var(--Accent, #E53B16);
color: black;
transition: background-color 0.3s ease-in-out;
border-radius: 8px;

&:hover {
background-color: #E53B16;
`;