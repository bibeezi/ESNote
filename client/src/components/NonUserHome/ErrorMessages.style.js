import styled, { css } from "styled-components";

export const ErrorMessages = styled.p`

    display: none;

    ${ ({ active }) => active === true ? css`
        margin: 0 auto;
        width: 60%;
        display: block;
        background-color: lightcoral;
        color: white;
        border-radius: 0.5em;
        padding: 16px;
    ` : ``} 
`;