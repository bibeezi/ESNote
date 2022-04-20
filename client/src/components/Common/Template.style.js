import styled, { css } from "styled-components";

export const TemplateContainer = styled.div`
    
    display: flex;
    height: 100%;
    width: 100vw;
    justify-content: center;

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

export const Template = styled.div`

    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: repeat(4, 25%);
    grid-auto-flow: columns;
    height: 80%;
    width: 100%;
    background-color: transparent;
    border: 1px solid black;
    justify-self: center;
    align-self: center;

    ${({ page }) => page === "createNotebook" ? 
    css`
        border-radius: 0.25em 1em 1em 0.25em;
    ` : 
        null 
    }

    @media only screen and (min-width: 360px) and (max-width: 600px) {
        width: 70%;
    }

    @media only screen and (min-width: 360px) and (max-width: 600px) and (max-height: 350px) {
        width: 27.5%;
    }

    @media only screen and (min-width: 360px) and (max-width: 600px) and (min-height: 700px) {
        width: 85%;
    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {
        width: 85%;
    }   

    @media only screen and (min-width: 600px) and (max-width: 768px) and (max-height: 380px) {
        width: 32.5%;
    }
    
    @media only screen and (min-width: 768px) and (max-width: 992px) {
        width: 65%;
    }

    
    @media only screen and (min-width: 768px) and (max-width: 992px) and (max-height: 450px) {
        width: 27%;
    }

    @media only screen and (min-width: 768px) and (max-width: 992px) and (min-height: 1200px) {
        width: 85%;
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        height: 65%;
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) and (max-height: 700px) {
        width: 85%;
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) and (min-height: 700px) {
        height: 80%;
    }

    @media only screen and (min-width: 1200px) {
        height: 90%;
        width: 80%;
    }

    @media only screen and (min-width: 1200px) and (max-height: 810px) {
        height: 80%;
        width: 85%;
    }
`;

export const TemplateEditReadNote = styled.div`

    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: repeat(4, 25%);
    margin: auto;
    height: 95%;
    width: 90%;
    border: 1px solid #7E2D005F;

    @media only screen and (min-width: 360px) and (max-width: 600px) {

    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {
    }   

    @media only screen and (min-width: 768px) and (max-width: 992px) {
        width: 72.5%;    
    }

    @media only screen and (min-width: 768px) and (max-width: 992px) and (max-height: 1000px) {
        width: 50%;    
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        width: 45%;    
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) and (max-height: 700px) {
        height: 90%;
        width: 32.5%;
    }

    @media only screen and (min-width: 1200px) {
        height: 90%;
        width: 27.5%;
    }
    
    @media only screen and (min-width: 1200px) and (max-height: 810px) {
        height: 90%;
        width: 32.5%;
    }
`;

export const TemplateCreateNotebook = styled.div`

    display: grid;
    grid-template-columns: repeat(12, calc(100% / 12));
    grid-template-rows: repeat(4, 25%);
    height: 80%;
    width: 100%;
    background-color: ${({colour}) => colour ? colour : "antiquewhite"};
    border: 1px solid black;
    align-self: center;
    justify-self: center;

    ${({ page }) => page === "createNotebook" ? 
    css`
        border-radius: 0.25em 1em 1em 0.25em;
    ` : 
        null 
    }
    
    @media only screen and (min-width: 360px) and (max-width: 600px) {
        width: 70%;
    }

    @media only screen and (min-width: 360px) and (max-width: 600px) and (max-height: 350px) {
        width: 27.5%;
    }

    @media only screen and (min-width: 360px) and (max-width: 600px) and (min-height: 700px) {
        width: 85%;
    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {
        width: 85%;
    }   

    @media only screen and (min-width: 600px) and (max-width: 768px) and (max-height: 380px) {
        width: 32.5%;
    }
    
    @media only screen and (min-width: 768px) and (max-width: 992px) {
        width: 65%;
    }

    
    @media only screen and (min-width: 768px) and (max-width: 992px) and (max-height: 450px) {
        width: 27%;
    }

    @media only screen and (min-width: 768px) and (max-width: 992px) and (min-height: 1200px) {
        width: 85%;
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        height: 65%;
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) and (max-height: 700px) {
        width: 85%;
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) and (min-height: 700px) {
        height: 80%;
    }

    @media only screen and (min-width: 1200px) {
        height: 90%;
        width: 80%;
    }

    @media only screen and (min-width: 1200px) and (max-height: 810px) {
        height: 80%;
        width: 85%;
    }
`;

export const TemplateUserHome = styled.div`

    display: grid;
    grid-template-rows: repeat(4, 25%);
    grid-auto-flow: columns;
    height: 7em;
    width: 5em;
    border: 1px solid black;
    align-self: end;
    cursor: pointer;

    ${({ shape, colour }) => shape === "notebook" ? css`
        grid-template-columns: repeat(12, calc(100% / 12));
        border-radius: 0.25em 1em 1em 0.25em;
        background-color: ${ colour };
    ` : css`
        grid-template-columns: repeat(4, 25%);
        background-color: whitesmoke;
    `}

    @media only screen and (min-width: 360px) and (max-width: 600px) {

    }

    @media only screen and (min-width: 360px) and (max-width: 600px) and (max-height: 350px) {

    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {

    }   

    @media only screen and (min-width: 768px) and (max-width: 992px) {
        height: 8em;
        width: 6em;
    }

    @media only screen and (min-width: 600px) and (max-width: 768px) and (max-height: 380px) {
        
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        
    }

    @media only screen and (min-width: 1200px) {
        height: 9em;
        width: 7em;
    }
`;

export const TemplateReadNotebook = styled.div`

    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: repeat(4, 25%);
    margin: auto;
    height: 90%;
    width: 90%;
    border: 1px solid #7E2D005F;

    @media only screen and (min-width: 360px) and (max-width: 600px) {

    }

    @media only screen and (min-width: 360px) and (max-width: 600px) and (max-height: 350px) {
        height: 80vw;
    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {

    }

    @media only screen and (min-width: 768px) and (max-width: 992px) {
        height: 85%;
        width: 55%;
    }

    @media only screen and (min-width: 768px) and (max-width: 992px) and (max-height: 450px) {
        height: 80vw;
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        ${({ notebookLength }) => notebookLength > 1 ? css`
            height: 85%;
            width: 80%;
        ` : css`
            height: 85%;
            width: 45%;
        `}
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) and (max-height: 700px) {
        ${({ notebookLength }) => notebookLength > 1 ? css`
            height: 80%;
            width: 65%;
        ` : css`
            height: 80%;
            width: 35%;
        `}
    }

    @media only screen and (min-width: 1200px) {
        ${({ notebookLength }) => notebookLength > 1 ? css`
            height: 85%;
            width: 55%;
        ` : css`
            height: 85%;
            width: 30%;
        `}
    }

    @media only screen and (min-width: 1200px) and (max-height: 810px) {
        ${({ notebookLength }) => notebookLength > 1 ? css`
            height: 85%;
            width: 65%;
        ` : css`
            height: 85%;
            width: 35%;
        `}
    }
`;

export const NoteContainer = styled.div`

    height: calc(100vh - 5.4em);

    @media only screen and (min-width: 360px) and (max-width: 600px) {
        
    }

    @media only screen and (min-width: 360px) and (max-width: 600px) and (max-height: 350px) {
        height: calc(100vw - 3.4em);
    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {

    }   

    @media only screen and (min-width: 600px) and (max-width: 768px) and (max-height: 380px) {
        height: calc(100vw - 3.4em);
    }

    @media only screen and (min-width: 768px) and (max-width: 992px) {

    }

    @media only screen and (min-width: 768px) and (max-width: 992px) and (max-height: 450px) {
        height: calc(100vw - 3.4em);
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        height: calc(100vh - 5.4em);
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) and (max-height: 700px) {
        height: calc(100vh - 5.4em);
    }

    @media only screen and (min-width: 1200px) {
        
    }
`;