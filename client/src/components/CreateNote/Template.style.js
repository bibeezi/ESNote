import styled, { css } from "styled-components";

export const Template = styled.div`

    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: repeat(4, 25%);
    grid-auto-flow: columns;
    height: 80%;
    width: 40%;
    background-color: whitesmoke;
    border: 1px solid black;

    @media only screen and (min-width: 360px) and (max-width: 600px) {
    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {

    }   

    @media only screen and (min-width: 768px) and (max-width: 992px) {

    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        
    }

    @media only screen and (min-width: 1200px) {
        
    }
`;

export const Sections = styled.div`

    ${ ({ section }) => css`
        grid-column: ${ section.values.x } / span ${ section.values.w };
        grid-row: ${ section.values.y } / span ${ section.values.h };
        border: 1px solid red;
    `}

    @media only screen and (min-width: 360px) and (max-width: 600px) {
    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {

    }   

    @media only screen and (min-width: 768px) and (max-width: 992px) {

    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        
    }

    @media only screen and (min-width: 1200px) {
        
    }
`;