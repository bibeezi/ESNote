import styled, { css } from "styled-components";

export const Sections = styled.div`

    border: 4px solid ${({ colour }) => colour};
    background-color: whitesmoke;

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

export const ReadSections = styled.div`

    padding: 1em;
    background-color: whitesmoke;
    border: 2px solid lightblue;
    border-style: dotted;
    word-wrap: break-word;

    ${ ({ section }) => css`
        grid-column: ${ section.x } / span ${ section.w };
        grid-row: ${ section.y } / span ${ section.h };
    `}

    @media only screen and (min-width: 360px) and (max-width: 600px) {
    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {
        font-size: 1.25em;
    }   

    @media only screen and (min-width: 768px) and (max-width: 992px) {
        font-size: 1.25em;

    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        font-size: 1.25em;
        
    }

    @media only screen and (min-width: 1200px) {
        font-size: 1.25em;
        
    }
`;

export const UserHomeSections = styled.div`

    padding: 1em;
    background-color: whitesmoke;
    border: 2px solid lightblue;
    border-style: dotted;
    font-size: 0.2em;
    overflow: hidden;
    word-wrap: break-word;
    cursor: pointer;

    ${ ({ section }) => css`
        grid-column: ${ section.x } / span ${ section.w };
        grid-row: ${ section.y } / span ${ section.h };
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
    padding: 1em;
    resize: none;
    overflow-x: hidden;
    border: 1px dashed lightblue;

    ${ ({ values }) => css`
        grid-column: ${ values.x } / span ${ values.w };
        grid-row: ${ values.y } / span ${ values.h };
    `}

    @media only screen and (min-width: 360px) and (max-width: 600px) {
    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {
        font-size: 1.25em;

    }   

    @media only screen and (min-width: 768px) and (max-width: 992px) {
        font-size: 1.25em;

    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        font-size: 1.5em;
        
    }

    @media only screen and (min-width: 1200px) {
        font-size: 1.5em;
    }
`;

export const Strap = styled.div`

    ${({ strap }) => strap.show === true && css`
        grid-column: ${ strap.x } / span 1;
        grid-row: 1 / span 4;
        border: 1px solid ${ strap.hex };
        background-color: ${ strap.hex };
    `}

    @media only screen and (min-width: 360px) and (max-width: 600px) {

    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {
        font-size: 1.25em;

    }   

    @media only screen and (min-width: 768px) and (max-width: 992px) {
        font-size: 1.25em;

    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        font-size: 1.5em;
        
    }

    @media only screen and (min-width: 1200px) {
        font-size: 1.5em;
    }
`;

export const Bookmark = styled.div`

    ${({ bookmark }) => bookmark.show === true && css`
        grid-column: ${ bookmark.x } / span 1;
        grid-row: 1 / span 1;
        border: 1px solid ${ bookmark.hex };
        background-color: ${ bookmark.hex };
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

export const GridLines = styled.div`
    
    ${({ gridRow, gridColumn }) => css`
        grid-row: ${ gridRow };
        grid-column: ${ gridColumn };
    `}
    border: 1px dotted lightblue;

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