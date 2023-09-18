import styled from "styled-components";

export const AddInput = styled.input`

width: 287px;
padding: 16px 10px 16px 16px;
align-items: center;
border-radius: 16px;
border: 1px solid rgba(255, 54, 10, 0.40);
background: rgba(255, 255, 255, 0.10);
`;

export const AddForm = styled.form`

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

export const AddBtn = styled.button`

    padding: 8px 16px;
    text-decoration: none;
    border-radius: 8px;
    border: 1px solid var(--Accent, #E53B16);
    color: black;
    transition: background-color 0.3s ease-in-out;
    margin-top: 20px;

    &:hover {
    background-color: #E53B16;
  }

`;