import styled from "styled-components";

export const OrangeButton = styled.button`

    border-radius: 1.5em;
    border: none;
    font-family : inherit;
    font-size: 1em;
    letter-spacing: 0.1em;
    background-color: #FFBB4D;
    margin: 1em auto 1em auto;
    padding: 0.5em 1.5em 0.5em 1.5em;

    @media only screen and (min-width: 360px) and (max-width: 600px) {

    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {
        margin: 1.5em auto 1.5em auto;
        padding: 0.5em 2em 0.5em 2em;
        
    }   

    @media only screen and (min-width: 768px) and (max-width: 992px) {
        margin: 1.5em auto 1.5em auto;
        padding: 0.5em 2em 0.5em 2em;
        
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        margin: 1.5em auto 1.5em auto;
        padding: 0.5em 2em 0.5em 2em;
        
    }

    @media only screen and (min-width: 1200px) {
        margin: 1.5em auto 1.5em auto;
        padding: 0.5em 2em 0.5em 2em;
       
    }
`;

export const BlueButton = styled.button`

    border-radius: 1.5em;
    border: none;
    font-family : inherit;
    font-size: 1em;
    letter-spacing: 0.1em;
    background-color: #61D4D4;
    margin: 0 auto 3em auto;
    padding: 0.5em 1.5em 0.5em 1.5em;

    @media only screen and (min-width: 360px) and (max-width: 600px) {
        
    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {
        display: block;
        padding: 0.5em 2em 0.5em 2em;
       
    }   

    @media only screen and (min-width: 768px) and (max-width: 992px) {
        display: block;
        padding: 0.5em 2em 0.5em 2em;
        
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        display: block;
        padding: 0.5em 2em 0.5em 2em;
        
    }

    @media only screen and (min-width: 1200px) {
        display: block;
        padding: 0.5em 2em 0.5em 2em;
    }
`;

export const BlueButtonRegistration = styled.button`

    border-radius: 1.5em;
    border: none;
    font-family : inherit;
    font-size: 1em;
    letter-spacing: 0.1em;
    background-color: #61D4D4;
    margin: 1em auto;
    padding: 0.5em 1.5em 0.5em 1.5em;

    @media only screen and (max-height: 360px) {
        margin: 0.25 auto;
        font-size: 1em;
    }

    @media only screen and (min-width: 360px) and (max-width: 600px) {
        
    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {
        padding: 0.5em 2em 0.5em 2em;
       
    }   

    @media only screen and (min-width: 768px) and (max-width: 992px) {
        padding: 0.5em 2em 0.5em 2em;
        
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        padding: 0.5em 2em 0.5em 2em;
        
    }

    @media only screen and (min-width: 1200px) {
        padding: 0.5em 2em 0.5em 2em;
    }
`;

export const NextButton = styled.button`

    height: fit-content;
    width: fit-content;
    margin-top: 1.5em;
    padding: 0.25em 1em 0.25em 1em;
    border-radius: 1.5em;
    border: none;
    font-family : inherit;
    font-size: 1em;
    letter-spacing: 0.1em;
    background-color: #61D4D4;
    justify-self: center;

    @media only screen and (min-width: 360px) and (max-width: 600px) {

    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {
        margin-top: 2.5em;
        padding: 0.5em 2em 0.5em 2em;
        
    }   

    @media only screen and (min-width: 768px) and (max-width: 992px) {
        margin-top: 3.5em;
        padding: 0.5em 2em 0.5em 2em;
        
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        margin-bottom: 1.5em;
        padding: 0.5em 2em 0.5em 2em;
        align-self: end;
        
    }

    @media only screen and (min-width: 1200px) {
        margin-bottom: 1.5em;
        padding: 0.5em 2em 0.5em 2em;
        align-self: end;
    }
`;

export const SaveButton = styled.button`

    height: fit-content;
    width: fit-content;
    padding: 0.25em 1em 0.25em 1em;
    border-radius: 1.5em;
    border: none;
    font-family : inherit;
    font-size: 1em;
    letter-spacing: 0.1em;
    background-color: #FFBB4D;
    justify-self: right;
    transform: translateY(-0.5em);

    @media only screen and (min-width: 360px) and (max-width: 600px) {
        padding: 0.5em 2em 0.5em 2em;

    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {
        font-size: 1.25em;
        padding: 0.5em 2em 0.5em 2em;
    
    }
    
    @media only screen and (min-width: 600px) and (max-width: 768px) and (max-height: 380px) {
        font-size: 1em;
        
    }


    @media only screen and (min-width: 768px) and (max-width: 992px) {
        font-size: 1.25em;
        padding: 0.5em 2em 0.5em 2em;
        
        
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        font-size: 1.5em;
        padding: 0.5em 2em 0.5em 2em;
        transform: translateY(-1.5em);
        
    }

    @media only screen and (min-width: 1200px) {
        font-size: 1.5em;
        padding: 0.5em 2em 0.5em 2em;
        
    }
`;