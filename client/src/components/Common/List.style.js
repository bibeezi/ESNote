import styled, { css } from "styled-components";

export const List = styled.div`

    display: inline-grid;
    width: 100%;

    ${({ page }) => page === "CreateNotebook" ? css`             
        label {
            margin: 0.5em;
        }
    ` : css`

    `}

    ${({ showList }) => showList === true ? css`     
        position: relative;
        background-color: transparent;
        z-index: 2;

        ::-webkit-scrollbar {
            background: transparent;
        }
    ` : css `
        
    `}

    @media only screen and (min-width: 360px) and (max-width: 600px) {

    }

    @media only screen and (min-width: 360px) and (max-width: 600px) and (max-height: 350px) {
        
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

export const Options = styled.div`

    display: inline-block;
    width: 100%;
    overflow: auto;
    max-height: 7em;
    -ms-overflow-style: none;
    transform: translateY(-0.5em);
    cursor: pointer;
    scrollbar-width: none;
    justify-self: center;

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

export const CreateNotebookOptions = styled.div`

    display: inline-block;
    margin-left: 0.5em;
    overflow: auto;
    max-height: 7em;
    -ms-overflow-style: none;
    transform: translateY(-1em);
    cursor: pointer;
    scrollbar-width: none;


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

export const CreateNotebookListOption = styled.div`

    background-color: whitesmoke;
    box-shadow: inset 0 1px 1px 0 grey;
    padding : 0.5em 0.2em 0.5em 0.5em;
    width: 65%;
    transform: translateY(-0.25em);
    overflow-x: hidden;
    text-overflow: ellipsis;

    @media only screen and (min-width: 360px) and (max-width: 600px) {
        width: 65%;
    }

    @media only screen and (min-width: 360px) and (max-width: 600px) and (max-height: 350px) {
        width: 66%;
    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {
        width: 67%;
    }   

    @media only screen and (min-width: 600px) and (max-width: 768px) and (max-height: 380px) {
        width: 67%;
    }

    @media only screen and (min-width: 768px) and (max-width: 992px) {
        width: 67.75%;
    }

    @media only screen and (min-width: 768px) and (max-width: 992px) and (max-height: 450px) {
        width: 67.5%;
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        
    }

    @media only screen and (min-width: 1200px) {
        width: 67.25%;
    }

    @media only screen and (min-width: 1200px) and (max-height: 910px) {
        width: 66%;
    }
`;

export const ListOption = styled.div`

    background-color: whitesmoke;
    box-shadow: inset 0 1px 1px 0 grey;
    padding : 0.5em 0.2em 0.5em 0.5em;
    width: 65%;
    transform: translateY(-0.25em);
    overflow-x: hidden;
    text-overflow: ellipsis;
    margin: 0 auto;

    @media only screen and (min-width: 360px) and (max-width: 600px) {
        width: 65%;
    }

    @media only screen and (min-width: 360px) and (max-width: 600px) and (max-height: 350px) {
        width: 66%;
    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {
        width: 67%;
    }   

    @media only screen and (min-width: 600px) and (max-width: 768px) and (max-height: 380px) {
        width: 67%;
    }

    @media only screen and (min-width: 768px) and (max-width: 992px) {
        width: 67.75%;
    }

    @media only screen and (min-width: 768px) and (max-width: 992px) and (max-height: 450px) {
        width: 67.5%;
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        width: 67.5%;
    }

    @media only screen and (min-width: 1200px) {
        width: 67.25%;
    }

    @media only screen and (min-width: 1200px) and (max-height: 910px) {
        width: 66%;
    }
`;