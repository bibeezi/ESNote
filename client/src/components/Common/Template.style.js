import styled from "styled-components";

export const TemplateContainerEditNote = styled.div`
    
    display: flex;
    height: calc(100vh - 6.7em - 12%);
    width: 100vw;
    justify-content: center;

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
    margin-top: 5%;
    height: 80%;
    width: 90%;
    border: 1px solid #7E2D005F;

    @media only screen and (min-width: 360px) and (max-width: 600px) {

    }

    @media only screen and (min-width: 360px) and (max-width: 600px) and (max-height: 350px) {

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
