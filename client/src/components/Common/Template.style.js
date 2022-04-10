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
    ${({ page }) => page === "createNotebook" ? 
    css`
        border-radius: 0.25em 1em 1em 0.25em;
    ` : 
        null 
    }
    align-self: center;

    @media only screen and (min-width: 360px) and (max-width: 600px) {

    }

    @media only screen and (min-width: 360px) and (max-width: 600px) and (max-height: 350px) {
        width: 40%;
        justify-self: center;
    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {
        width: 90%;
        justify-self: center;
    }   

    @media only screen and (min-width: 600px) and (max-width: 768px) and (max-height: 380px) {
        width: 40%;
        justify-self: center;
    }
    
    @media only screen and (min-width: 768px) and (max-width: 992px) {
        width: 80%;
        justify-self: center;
    }

    @media only screen and (min-width: 768px) and (max-width: 992px) and (max-height: 450px) {
        width: 30%;
        justify-self: center;
    }

    @media only screen and (min-width: 768px) and (max-width: 992px) and (min-height: 900px) {
        width: 60%;
        justify-self: center;
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) and (max-height: 700px) {
        width: 80%;
        justify-self: center;
    }

    @media only screen and (min-width: 1200px) {
        height: 90%;
        width: 80%;
    }

    @media only screen and (min-width: 1200px) and (max-height: 1105px) {
        height: 90%;
        width: 80%;
    }
`;

export const TemplateEditNote = styled.div`

    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: repeat(4, 25%);
    margin: auto;
    height: 90%;
    width: 90%;
    border: 1px solid #7E2D005F;

    @media only screen and (min-width: 360px) and (max-width: 600px) {

    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {

    }   

    @media only screen and (min-width: 768px) and (max-width: 992px) {

    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        width: 45%;
        
    }

    @media only screen and (min-width: 1200px) {
        width: 30%;
    }
`;

export const TemplateReadNote = styled.div`

    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: repeat(4, 25%);
    margin: auto;
    height: 90%;
    width: 90%;
    border: 1px solid #7E2D005F;

    @media only screen and (min-width: 360px) and (max-width: 600px) {

    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {

    }   

    @media only screen and (min-width: 768px) and (max-width: 992px) {

    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        width: 45%;
        
    }

    @media only screen and (min-width: 1200px) {
        width: 30%;
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

    @media only screen and (min-width: 600px) and (max-width: 768px) {

    }   

    @media only screen and (min-width: 768px) and (max-width: 992px) {

    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        width: 90%;
        
    }

    @media only screen and (min-width: 1200px) {
        width: 70%;
    }
`;

export const TemplateCreateNotebook = styled.div`

    display: grid;
    grid-template-columns: repeat(12, calc(100% / 12));
    grid-template-rows: repeat(4, 25%);
    grid-auto-flow: columns;
    height: 80%;
    width: 100%;
    background-color: ${({colour}) => colour ? colour : "antiquewhite"};
    border: 1px solid black;
    ${({ page }) => page === "createNotebook" ? 
    css`
        border-radius: 0.25em 1em 1em 0.25em;
    ` : 
        null 
    }
    align-self: center;

    @media only screen and (min-width: 360px) and (max-width: 600px) {

    }

    @media only screen and (min-width: 360px) and (max-width: 600px) and (max-height: 350px) {
        width: 40%;
        justify-self: center;
    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {

    }   

    @media only screen and (min-width: 600px) and (max-width: 768px) and (max-height: 380px) {
        width: 40%;
        justify-self: center;
    }

    @media only screen and (min-width: 768px) and (max-width: 992px) {

    }

    @media only screen and (min-width: 768px) and (max-width: 992px) and (max-height: 450px) {
        width: 40%;
        justify-self: center;
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        
    }


    @media only screen and (min-width: 1200px) {
        height: 90%;
        width: 80%;
    }
`;

export const TemplateUserHome = styled.div`

    display: grid;
    grid-template-rows: repeat(4, 25%);
    grid-auto-flow: columns;
    height: 7em;
    width: 5em;
    ${({ shape, colour }) => shape === "notebook" ? css`
        grid-template-columns: repeat(12, calc(100% / 12));
        border-radius: 0.25em 1em 1em 0.25em;
        background-color: ${ colour };
    ` : css`
        grid-template-columns: repeat(4, 25%);
        background-color: whitesmoke;
    `}
    border: 1px solid black;
    align-self: end;
    cursor: pointer;

    @media only screen and (min-width: 360px) and (max-width: 600px) {

    }

    @media only screen and (min-width: 360px) and (max-width: 600px) and (max-height: 350px) {
        height: 5em;
        width: 4em;
    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {

    }   

    @media only screen and (min-width: 768px) and (max-width: 992px) {

    }

    @media only screen and (min-width: 600px) and (max-width: 768px) and (max-height: 380px) {
        
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        
    }

    @media only screen and (min-width: 1200px) {
        
    }
`;