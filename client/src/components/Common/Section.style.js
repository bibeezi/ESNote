import styled, { css } from "styled-components";

export const Sections = styled.div`

    border: 1px solid red;

    ${ ({ section }) => css`
        grid-column: ${ section.values.x } / span ${ section.values.w };
        grid-row: ${ section.values.y } / span ${ section.values.h };
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

export const TextArea = styled.textarea`

    margin: 0;
    resize: none;
    border: 1px dashed lightblue;

    ${ ({ values }) => css`
        grid-column: ${ values.x } / span ${ values.w };
        grid-row: ${ values.y } / span ${ values.h };
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