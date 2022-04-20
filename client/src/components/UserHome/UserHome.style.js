import styled, { css } from "styled-components";

export const StyledSort = styled.div`

    display: flex;
    justify-content: left;

    @media only screen and (max-height: 360px) {
    }

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

export const StyledSearch = styled.div`

    display: flex;
    justify-content: right;

    @media only screen and (max-height: 360px) {

    }

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

export const StyledGrid = styled.div`

    display: grid;
    height: calc(100% - 1.7em);
    grid-template-columns: repeat(2, 50%);
    grid-auto-rows: 100%;
    overflow-y: auto;

    @media only screen and (min-width: 360px) and (max-width: 600px) {
        height: calc(100% - 2.5em);
        grid-template-columns: repeat(3, calc(100% / 3));
    }

    @media only screen and (min-width: 360px) and (min-height: 800px) {
        height: calc(100% - 2.5em);
        grid-template-columns: repeat(3, calc(100% / 3));
        grid-auto-rows: 50%;
    }

    @media only screen and (min-width: 360px) and (max-width: 600px) and (max-height: 350px) {
        height: calc(100% - 1.7em);
        grid-template-columns: repeat(2, 50%);
    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {
        height: calc(100% - 3.4em);
        grid-template-columns: repeat(4, 25%);
        grid-auto-rows: 50%;
    }   

    @media only screen and (min-width: 600px) and (max-width: 768px) and (max-height: 380px) {
        height: calc(100% - 2.5em);
        grid-template-columns: repeat(2, 50%);
        grid-auto-rows: 100%;
    }

    @media only screen and (min-width: 768px) and (max-width: 992px) {
        height: calc(100% - 3.4em);
        grid-template-columns: repeat(4, 25%);
        grid-auto-rows: 50%;   
    }

    @media only screen and (min-width: 768px) and (max-width: 992px) and (max-height: 450px) {
        height: calc(100% - 3.4em);
        grid-template-columns: repeat(3, calc(100% / 3));
        grid-auto-rows: 100%;
    }

    @media only screen and (min-width: 600px) and (max-width: 992px) and (min-height: 500px) {
        grid-auto-rows: 100%;
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        height: calc(100% - 5.4em);
        grid-template-columns: repeat(4, 25%);
        grid-auto-rows: calc(100% / 3);
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) and (max-height: 700px) {
        height: calc(100% - 3.4em);
        grid-template-columns: repeat(4, 25%);
        grid-auto-rows: 50%;
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) and (max-height: 700px) {

    }

    @media only screen and (min-width: 1200px) {
        height: calc(100% - 5.4em);
        grid-template-columns: repeat(4, 25%);
        grid-auto-rows: calc(100% / 3);
    }

    @media only screen and (min-width: 1200px) and (max-height: 810px) {
        height: calc(100% - 5.4em);
        grid-template-columns: repeat(4, 25%);
        grid-auto-rows: 50%;
    }
`;

export const StyledContainer = styled.div`

    display: grid;
    grid-template-rows: 70% auto;
    justify-items: center;

    @media only screen and (min-width: 360px) and (max-width: 600px) {

    }
    
    @media only screen and (min-width: 360px) and (max-width: 600px) and (max-height: 350px) {
        grid-template-rows: 75% auto;
        
    }

    @media only screen and (min-width: 360px) and (min-height: 800px) {
        grid-template-rows: 80% auto;
    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {

    }  

    @media only screen and (min-width: 768px) and (max-width: 992px) {
        grid-template-rows: 75% auto;

    }

    @media only screen and (min-width: 600px) and (max-width: 992px) and (min-height: 500px) {
        grid-template-rows: 70% auto;
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        
    }

    @media only screen and (min-width: 1200px) {
        grid-template-rows: 75% auto;
        align-items: center;
    }
`;

export const StyledNotes = styled.div`

    @media only screen and (min-width: 360px) and (max-width: 600px) {
        
    }

    @media only screen and (min-width: 360px) and (max-width: 600px) and (max-height: 350px) {
        height: calc(100vh - 6.8em);
        border-right: 1px solid #7E2D009A;
    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {
        
    }   

    @media only screen and (min-width: 768px) and (max-width: 992px) {
        
    }

    @media only screen and (min-width: 600px) and (max-width: 768px) and (max-height: 380px) {
        height: calc(100vh - 6.8em);
        border-right: 1px solid #7E2D009A;
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        height: calc(100vh - 10.8em);
        border-right: 1px solid #7E2D009A;
    }

    @media only screen and (min-width: 768px) and (max-width: 992px) and (max-height: 450px) {
        height: calc(100vh - 6.8em);
        border-right: 1px solid #7E2D009A;
        
    }

    @media only screen and (min-width: 1200px) {
        height: calc(100vh - 10.8em);
        border-right: 1px solid #7E2D009A;
        
    }
`;

export const StyledNotebooks = styled.div`

    border-top: 1px solid #7E2D009A;

    @media only screen and (min-width: 360px) and (max-width: 600px) {
        
    }

    @media only screen and (min-width: 360px) and (max-width: 600px) and (max-height: 350px) {
        height: calc(100vh - 6.8em);
        border-top: none;
        
    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {
        
    }   

    @media only screen and (min-width: 600px) and (max-width: 768px) and (max-height: 380px) {
        height: calc(100vh - 6.8em);
        border-top: none;
    }

    @media only screen and (min-width: 768px) and (max-width: 992px) {

    }

    @media only screen and (min-width: 768px) and (max-width: 992px) and (max-height: 450px) {
        border-top: none;
        height: calc(100vh - 6.8em);
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        height: calc(100vh - 10.8em);
        border-top: none;
    }

    @media only screen and (min-width: 1200px) {
        border-top: none;

    }
`;

export const StyledShape = styled.div`

    display: flex;
    background-color: #F4EDDE;
    height: 7em;
    width: 5em;
    border: 1px solid #80655C;
    align-self: end;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    
    ${({ shape}) => shape === "note" ? css`
        border-radius: none;
    `
    : css`
        border-radius: 0.25em 1em 1em 0.25em;
    `}

    img {
        position: relative;
        height: 2em;
        width: 2em;
    }

    @media only screen and (min-width: 360px) and (max-width: 600px) {

    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {

    }   

    @media only screen and (min-width: 768px) and (max-width: 992px) {
        height: 8em;
        width: 6em;
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {

    }

    @media only screen and (min-width: 1200px) {
        height: 9em;
        width: 7em;
    }
`;