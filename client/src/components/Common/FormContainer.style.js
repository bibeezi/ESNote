import styled from "styled-components";

export const LoginFormContainer = styled.div`

    display: flex;
    margin: 2em;
    padding: 2em;
    background-color: #E2F3F9;
    border-radius: 1em;
    align-items: center;
    box-shadow: 0 0 1em grey;

    /* max-width: 360px */
    margin: 2em;

    @media only screen and (min-width: 360px) and (max-width: 600px) {
        margin: 0 2em 2em 2em;
    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {
        height: 30em;
        width: 70%;
        margin: 0 auto 2em auto;
    }   

    @media only screen and (min-width: 768px) and (max-width: 992px) {
        height: 30em;
        width: 60%;
        margin: 0 auto 2em auto;
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        height: 30em;
        width: 50%;
        margin: 10em auto auto auto;
    }

    @media only screen and (min-width: 1200px) {
        height: 30em;
        width: 60%;
        margin: 8em auto auto auto;

    }
`;

export const RegistrationFormContainer = styled.div`

    height: fit-content;
    margin: auto;
    background-color: #E2F3F9;
    border-radius: 1em;
    box-shadow: 0 0 1em grey;

    /* max-width: 360px */
    width: 80%;

    @media only screen and (max-height: 500px) {
        overflow-y: scroll;
        height: 80%;
        scrollbar-width: none;
    }

    @media only screen and (min-width: 360px) and (max-width: 600px) {

    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {

    }   

    @media only screen and (min-width: 768px) and (max-width: 992px) {
        width: 70%;
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        width: 50%;
    }

    @media only screen and (min-width: 1200px) {
        width: 40%;
    }
`;