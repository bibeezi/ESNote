import styled from "styled-components";

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
    background-color: whitesmoke;
    border: 1px solid black;
    align-self: center;

    @media only screen and (min-width: 360px) and (max-width: 600px) {

    }

    @media only screen and (min-width: 360px) and (max-width: 600px) and (max-height: 350px) {
        width: 40%;
        justify-self: center;
    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {

    }   

    @media only screen and (min-width: 768px) and (max-width: 992px) {

    }

    @media only screen and (min-width: 600px) and (max-width: 768px) and (max-height: 380px) {
        width: 40%;
        justify-self: center;
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        
    }

    @media only screen and (min-width: 1200px) {
        
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
