import styled, { css } from "styled-components";

export const Input = styled.input`

    display: block;
    margin: 0.5em auto;
    padding: 0.2em 0.2em 0.2em 0.5em;
    height: 2.5em;
    width: 100%;
    box-sizing: border-box;
    border-radius: 0.5em;
    border: 0.1px solid grey;
    font-size: 1em;

    @media only screen and (min-width: 360px) and (max-width: 600px) and (max-height: 350px) {
        width: 80%;
    }

    @media only screen and (min-width: 360px) and (max-width: 600px) {

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

export const SearchInput = styled.input`

    margin-right: 0.5em;
    padding: 0.2em 0.2em 0.2em 0.5em;
    height: 2.5em;
    width: 70%;
    align-self: center;
    background-color: #FEFEFE;
    box-sizing: border-box;
    border-radius: 0.5em;
    border: 1px solid #7E2D009A;
    font-size: 0.75em;
    font-family: Nunito;

    @media only screen and (min-width: 360px) and (max-width: 600px) {

    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {

    }   

    @media only screen and (min-width: 768px) and (max-width: 992px) {
        height: 3em;
        margin-right: 1em;
        font-size: 1em;
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        height: 3em;
        width: 50%;
        margin-right: 1em;
        font-size: 1em;
    }

    @media only screen and (min-width: 768px) and (max-width: 992px) and (max-height: 450px) {
        height: 2.5em;
        margin-right: 0.5em;
        font-size: 0.75em;
    }

    @media only screen and (min-width: 1200px) {
        height: 3em;
        width: 50%;
        margin-right: 1em;
        font-size: 1em;
    }
`;

export const SettingInput = styled.input`

    margin: 0.5em;
    padding: 0.2em 0.2em 0.2em 0.5em;
    height: 2.5em;
    width: 90%;
    align-self: center;
    background-color: #FEFEFE;
    box-sizing: border-box;
    border-radius: 0.5em;
    border: 1px solid #7E2D009A;
    font-size: 1em;
    font-family: Nunito;

    @media only screen and (min-width: 360px) and (max-width: 600px) {

    }

    @media only screen and (min-width: 360px) and (max-width: 600px) and (max-height: 350px) {
        width: 40%;
    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {
        width: 95%;
    }   
    
    @media only screen and (min-width: 600px) and (max-width: 768px) and (max-height: 380px) {
        width: 40%;
    }

    @media only screen and (min-width: 768px) and (max-width: 992px) {
        width: 95%;
    }

    @media only screen and (min-width: 768px) and (max-width: 992px) and (max-height: 1000px) {
        width: 45%;
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        
    }

    @media only screen and (min-width: 1200px) {
        font-size: 1em;
    
    }
`;

export const LongSettingInput = styled.input`

    margin: 0.5em;
    padding: 0.2em 0.2em 0.2em 0.5em;
    height: 2.5em;
    width: 85%;
    align-self: center;
    background-color: #FEFEFE;
    box-sizing: border-box;
    border-radius: 0.5em;
    border: 1px solid #7E2D009A;
    font-size: 1em;
    font-family: Nunito;

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
        font-size: 1em;
    
    }
`;

export const SearchInputList = styled.input`

    margin: 0.5em 0;
    padding: 0.2em 0.2em 0.2em 0.5em;
    height: 2.5em;
    width: 100%;
    align-self: center;
    background-color: #FEFEFE;
    box-sizing: border-box;
    ${({ showList }) => showList === true ? css`
        border-radius: 0.5em 0.5em 0 0;
    ` : css`
        border-radius: 0.5em;
    `}
    border: 1px solid #7E2D009A;
    font-size: 1em;
    font-family: Nunito;

    @media only screen and (min-width: 360px) and (max-width: 600px) {

    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {

    }   
    
    @media only screen and (min-width: 600px) and (max-width: 768px) and (max-height: 380px) {
        font-size: 1.25em;
    }
    
    @media only screen and (min-width: 768px) and (max-width: 992px) {
        
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
    }

    @media only screen and (min-width: 1200px) {
        font-size: 1em;
    
    }
`;

export const SettingInputSearch = styled.input`

    display: inline-block;
    margin: 0.5em;
    padding: 0.2em 0.2em 0.2em 0.5em;
    height: 2.5em;
    width: 40%;
    align-self: center;
    background-color: #FEFEFE;
    box-sizing: border-box;
    border-radius: 0.5em;
    border: 1px solid #7E2D009A;
    font-size: 0.75em;
    font-family: Nunito;

    @media only screen and (min-width: 360px) and (max-width: 600px) {

    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {

    }

    @media only screen and (min-width: 768px) and (max-width: 992px) {
        
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
    }

    @media only screen and (min-width: 1200px) {
        font-size: 1em;
    
    }
`;

export const EditNoteInput = styled.input`

    margin-left: 0.5em;
    padding: 0.2em 0.2em 0.2em 0.5em;
    height: 2.5em;
    width: 78%;
    background-color: #FEFEFE;
    box-sizing: border-box;
    border: 1px solid #7E2D009A;
    font-size: 0.75em;
    font-family: Nunito;

    @media only screen and (min-width: 360px) and (max-width: 600px) {
        width: 80%;
    }

    @media only screen and (min-width: 360px) and (max-width: 600px) and (max-height: 350px) {
        width: 83%;
    }

    @media only screen and (min-width: 600px) and (max-width: 768px) and (max-height: 380px) {
        width: 83%;
    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {
        font-size: 1em;
    }   

    @media only screen and (min-width: 768px) and (max-width: 992px) {
        font-size: 1em;
        width: 63.5%;
    }

    @media only screen and (min-width: 768px) and (max-width: 992px) and (max-height: 1000px) {
        width: 45%;    
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        width: 40.5%;
        font-size: 1em;
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) and (max-height: 700px) {
        width: 28%;
    }

    @media only screen and (min-width: 1200px) {
        font-size: 1.25em;
        width: 24.5%;
    }

    @media only screen and (min-width: 1200px) and (max-height: 810px) {
        width: 28%;
        font-size: 1.25em;
    }
`;