import styled from "styled-components";

export const ErrorMessages = styled.p`

    display: block;
    margin: 0 auto 1em auto;
    padding: 0.5em;
    width: 100%;
    box-sizing: border-box;
    background-color: lightcoral;
    color: white;
    border-radius: 0.5em;

    @media only screen and (min-width: 360px) and (max-width: 600px) {

    }

    @media only screen and (min-width: 360px) and (max-width: 600px) and (max-height: 350px) {
        width: 80%;
    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {
        width: 80%;
    }   

    @media only screen and (min-width: 768px) and (max-width: 992px) {
        width: 75%;
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        width: 65%;
    }

    @media only screen and (min-width: 1200px) {
        width: 75%;
    }
`;

export const DeleteMessages = styled.p`

    display: block;
    margin: 0 auto 1em auto;
    padding: 0.5em;
    width: 90%;
    box-sizing: border-box;
    background-color: lightcoral;
    color: white;
    border-radius: 0.5em;

    @media only screen and (min-width: 360px) and (max-width: 600px) {

    }

    @media only screen and (min-width: 360px) and (max-width: 600px) and (max-height: 350px) {
        width: 80%;
    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {
        width: 80%;
    }   

    @media only screen and (min-width: 768px) and (max-width: 992px) {
        width: 75%;
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        width: 65%;
    }

    @media only screen and (min-width: 1200px) {
        width: 75%;
    }
`;

export const SavedMessages = styled.p`

    margin: 0;
    width: fit-content;
    font-size: 1.25em;

    @media only screen and (min-width: 360px) and (max-width: 600px) {

    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {
        font-size: 1.5em;
    }

    @media only screen and (min-width: 600px) and (max-width: 768px) and (max-height: 380px) {
        margin: 0.25em 0 0 0;
        font-size: 1.25em;
    }

    @media only screen and (min-width: 768px) and (max-width: 992px) {
        font-size: 1.75em;
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        font-size: 1.75em;
    }

    @media only screen and (min-width: 1200px) {
        font-size: 1.75em;
    }
`;
