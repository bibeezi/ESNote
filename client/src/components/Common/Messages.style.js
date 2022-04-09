import styled from "styled-components";

export const ErrorMessages = styled.p`

    display: inline-block;
    margin: 1em auto;
    padding: 1em;
    width: 100%;
    box-sizing: border-box;
    background-color: lightcoral;
    color: white;
    border-radius: 0.5em;

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

export const SavedMessages = styled.p`

    margin: 0;
    width: fit-content;
    font-size: 1.25em;
    transform: translateY(-0.5em);

    @media only screen and (min-width: 360px) and (max-width: 600px) {

    }

    @media only screen and (min-width: 360px) and (max-width: 600px) and (max-height: 350px) {

    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {
        font-size: 1.5em;
        transform: translateY(-0.2em);

    }   

    @media only screen and (min-width: 768px) and (max-width: 992px) {
        font-size: 1.75em;
        transform: translateY(-0.25em);
        
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        font-size: 1.75em;
        transform: translateY(-1em);
        
    }

    @media only screen and (min-width: 1200px) {
        font-size: 1.75em;
        
    }
`;
