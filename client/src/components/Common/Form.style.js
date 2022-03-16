import styled from "styled-components";

export const StyledLoginForm = styled.form`
    
    text-align: center;

    hr {
        width: 100%;
    }

    /* max-width: 360px */

    @media only screen and (min-width: 360px) and (max-width: 600px) {
        
    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {

    }   

    @media only screen and (min-width: 768px) and (max-width: 992px) {

    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        text-align: left;

    }

    @media only screen and (min-width: 1200px) {
        text-align: left;

    }
`;

export const StyledRegistrationForm = styled.form`

    height: 100%;
    margin: 0 auto;
    text-align: center;

    /* max-width: 360px */
    width: 80%;

    @media only screen and (min-width: 360px) and (max-width: 600px) {
        width: 75%;
    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {
        width: 70%;
    }   

    @media only screen and (min-width: 768px) and (max-width: 992px) {
        width: 65%;
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        width: 60%;
    }

    @media only screen and (min-width: 1200px) {
        width: 60%;
    }
`;