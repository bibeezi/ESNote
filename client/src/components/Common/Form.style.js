import styled from "styled-components";

export const LoginFormContainer = styled.div`

    margin: 2em;
    padding: 2em;
    background-color: #E2F3F9;
    border-radius: 1em;
    box-shadow: 0 0 1em grey;
    

    @media only screen and (min-width: 360px) and (max-width: 600px) {

    }

    @media only screen and (min-width: 360px) and (max-width: 600px) and (max-height: 350px) {
        margin: 2em 5em;
    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {
        height: fit-content;
        margin: 2em 6em;
    }   
    
    @media only screen and (min-width: 768px) and (max-width: 992px) {
        height: fit-content;
        margin: 2em 8em;
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {

    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) and (max-height: 700px) {
        height: 25em;
    }

    @media only screen and (min-width: 1200px) {
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

    @media only screen and (min-width: 360px) and (max-width: 600px) and (max-height: 350px) {
        hr {
            width: 80%;
        }
    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {
        hr {
            width: 80%;
        }
    }   

    @media only screen and (min-width: 768px) and (max-width: 992px) {
        hr {
            width: 75%;
        }
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        hr {
            width: 70%;
        }
    }

    @media only screen and (min-width: 1200px) {
        hr {
            width: 70%;
        }
    }
`;

export const RegistrationFormContainer = styled.div`

    display: flex;
    width: 72%;
    min-height: fit-content;
    max-height: 90%;
    background-color: #E2F3F9;
    border-radius: 1em;
    box-shadow: 0 0 1em grey;
    overflow-y: auto;
    justify-content: center;
    scrollbar-width: none;

    @media only screen and (min-width: 360px) and (max-width: 600px) {
        width: 82%;
    }

    @media only screen and (min-width: 360px) and (max-width: 600px) and (max-height: 350px) {

    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {

    }   

    @media only screen and (min-width: 768px) and (max-width: 992px) {
        width: 67%;
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        width: 50%;
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) and (max-height: 700px) {
        width: 50%;
    }

    @media only screen and (min-width: 1200px) {
        width: 30%;
    }

    @media only screen and (min-width: 1200px) and (max-height: 810px) {
        width: 50%;
    }
`;

export const StyledRegistrationForm = styled.form`

    text-align: center;
    width: 80%;

    @media only screen and (min-width: 360px) and (max-width: 600px) {
        width: 70%;
    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {
        width: 70%;
    }   

    @media only screen and (min-width: 768px) and (max-width: 992px) {

    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {

    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) and (max-height: 700px) {
        width: 65%;
    }

    @media only screen and (min-width: 1200px) {
        width: 70%;
    }

    @media only screen and (min-width: 1200px) and (max-height: 810px) {
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

export const ReadSettingsFormContainer = styled.div`

    min-height: fit-content;
    max-height: 90%;
    width: 90%;
    margin: auto;
    background-color: #E2F3F9;
    border-radius: 1em;
    box-shadow: 0 0 1em grey;
    overflow-y: auto;
    justify-content: center;
    scrollbar-width: none;

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

export const SettingContainer = styled.div`

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

export const StyledSettingsFormRead = styled.form`

    height: 100%;
    margin: 0 auto 1em auto;
    text-align: center;
    width: 80%;

    @media only screen and (min-width: 360px) and (max-width: 600px) {
        width: 72%;
    }

    @media only screen and (min-width: 360px) and (max-width: 600px) and (max-height: 350px) {
        width: 72%;
    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {
        width: 74%;
    }   

    @media only screen and (min-width: 600px) and (max-width: 768px) and (max-height: 380px) {
        width: 74%;
    }

    @media only screen and (min-width: 768px) and (max-width: 992px) {
        width: 82%;
    }

    @media only screen and (min-width: 768px) and (max-width: 992px) and (max-height: 1200px) {
        width: 82%;
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        width: 80%;
    }

    
    @media only screen and (min-width: 992px) and (max-width: 1200px) and (max-height: 700px) {
        width: 66%;
    }

    @media only screen and (min-width: 1200px) {
        width: 72%;
    }
`;

export const AddedItemsGrid = styled.div`

    display: grid;
    width: 100%;
    grid-template-columns: 80% 20%;
    align-items: center;
    justify-items: center;

    img {
        height: 1.5em;
        cursor: pointer;
    }

    @media only screen and (min-width: 360px) and (max-width: 600px) {

    }

    @media only screen and (min-width: 360px) and (max-width: 600px) and (max-height: 350px) {
        grid-template-columns: 90% 10%;
    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {
        width: 65%;
    }   

    @media only screen and (min-width: 768px) and (max-width: 992px) {
        width: 54%;
        grid-template-columns: 85% 15%;
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        width: 63%;
        grid-template-columns: 85% 15%;
    }
    
    @media only screen and (min-width: 992px) and (max-width: 1200px) and (max-height: 700px) {
        width: 90%;
    }   

    @media only screen and (min-width: 1200px) {
        width: 50%;
    }

    @media only screen and (min-width: 1200px) and (max-height: 810px) {
        width: 77%;
        grid-template-columns: 85% 15%;
    }
`;