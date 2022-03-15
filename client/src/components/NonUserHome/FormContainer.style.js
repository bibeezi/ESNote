import styled from "styled-components";

export const FormContainer = styled.div`

    display: flex;
    margin: 2em;
    padding: 2em;
    background-color: #FAF3EB;
    border-radius: 1em;
    align-items: center;
    box-shadow: 0 0em 1em grey;

    /* max-width: 360px */


    @media only screen and (min-width: 360px) and (max-width: 600px) {
        margin: 2em 2em 2em 2em;
    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {
        height: 50%;
        width: 70%;
        margin: 2em auto 2em auto;
    }   

    @media only screen and (min-width: 768px) and (max-width: 992px) {
        height: 50%;
        width: 60%;
        margin: 2em auto 2em auto;
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        height: 70%;
        width: 50%;
        margin: 2em auto 2em auto;
    }

    @media only screen and (min-width: 1200px) {
        height: 50%;
        width: 50%;
        margin: 10em auto auto auto;
    }
`;