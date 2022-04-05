import styled from "styled-components";

export const LoginFormContainer = styled.div`

    display: flex;
    margin: 2em;
    padding: 2em;
    background-color: #E2F3F9;
    border-radius: 1em;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 1em grey;
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
        width: 60%;
        margin: 0 auto;
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) and (max-height: 700px) {
        height: 25em;
    }

    @media only screen and (min-width: 1200px) {
        height: 30em;
        width: 60%;
        margin: 0 auto;

    }
`;

export const StyledLoginForm = styled.form`
    
    text-align: center;

    hr {
        width: 100%;
    }

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

export const RegistrationFormContainer = styled.div`

    height: fit-content;
    margin: auto;
    background-color: #E2F3F9;
    border-radius: 1em;
    box-shadow: 0 0 1em grey;
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
        width: 50%;
    }
`;

export const StyledRegistrationForm = styled.form`

    height: 100%;
    margin: 0 auto;
    text-align: center;
    width: 80%;

    @media only screen and (max-height: 360px) {
        
    }
    
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

export const TemplateForm = styled.form`

    display: grid;
    margin: 0 auto 1em auto;
    height: fit-content;
    width: 95%;
    grid-auto-flow: row;
    grid-template-rows: fit-content(100%);

    @media only screen and (max-height: 360px) {
        
    }
    
    @media only screen and (min-width: 360px) and (max-width: 600px) {

    }

    @media only screen and (min-width: 360px) and (max-width: 600px) and (max-height: 350px) {
        margin-top: 1em;
        width: 80%;
    }
    
    @media only screen and (min-width: 600px) and (max-width: 768px) {
        margin-top: 2em;
        width: 80%;
    }   

    @media only screen and (min-width: 768px) and (max-width: 992px) {
        margin-top: 2em;
        width: 80%;
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        margin-top: 2em;
        width: 80%;
    }

    @media only screen and (min-width: 1200px) {
        margin-top: 2em;
        width: 80%;
    }
`;

export const SettingContainer = styled.div`

    margin: 0 1em 0 1em;
    padding-bottom: 1em;
    border-bottom: 1px solid black;

    @media only screen and (min-width: 360px) and (max-width: 600px) {
    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {

    }   

    @media only screen and (min-width: 768px) and (max-width: 992px) {

    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        
    }

    @media only screen and (min-width: 1200px) {
        margin: 0 2em 0 2em;
    }
`;

export const SettingsGrid = styled.div`

    display: grid;
    margin-bottom: 1em;

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

export const ReadSettingsFormContainer = styled.div`

    height: fit-content;
    margin: auto;
    background-color: #E2F3F9;
    border-radius: 1em;
    box-shadow: 0 0 1em grey;
    width: 80%;


    @media only screen and (min-width: 360px) and (max-width: 600px) {

    }

    @media only screen and (min-width: 360px) and (max-width: 600px) and (max-height: 350px) {
        width: 80%;
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

export const StyledSettingsFormRead = styled.form`

    height: 100%;
    margin: 2em auto;
    text-align: center;
    width: 80%;

    @media only screen and (max-height: 360px) {
        
    }

    @media only screen and (min-width: 360px) and (max-width: 600px) and (max-height: 350px) {
        width: 50%;
    }
    
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

export const AddedItemsGrid = styled.div`

    display: grid;
    margin-bottom: 1em;
    grid-template-columns: 80% 20%;
    align-items: center;

    img {
        height: 1.5em;
    }

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