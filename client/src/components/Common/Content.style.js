import styled from "styled-components";

export const NonUserHomeContent = styled.div`

    display: grid;
    min-height: 100vh;
    height: fit-content;
    background-image: linear-gradient(#AED9EA55, #E98DBE55);

    /* max-width: 360px */
    grid-template-columns: none;
    grid-template-rows: 25em;

    @media only screen and (min-width: 360px) and (max-width: 600px) {
        grid-template-rows: 30em;
    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {
        grid-template-rows: 30em;
    }   

    @media only screen and (min-width: 768px) and (max-width: 992px) {
        grid-template-rows: 50em;
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        grid-template-columns: 60% 40%;
        grid-template-rows: 100vh;
    }

    @media only screen and (min-width: 1200px) {
        grid-template-columns: 60% 40%;
        grid-template-rows: 100vh;
    }
`;

export const UserHomeContent = styled.div`

    display: grid;
    background-image: linear-gradient(#AED9EA55, #E98DBE55);
    height: calc(100vh - 3.4em);
    padding-top: 3.4em;
    grid-template-rows: 3.4em auto;

    @media only screen and (min-width: 360px) and (max-width: 600px) {
        
    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {

    }   

    @media only screen and (min-width: 768px) and (max-width: 992px) {
        height: calc(100vh - 5.4em);
        padding-top: 5.4em;
        grid-template-rows: 5.4em auto;
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        height: calc(100vh - 5.4em);
        padding-top: 5.4em;
        grid-template-rows: 5.4em auto;
    }

    @media only screen and (min-width: 768px) and (max-width: 992px) and (max-height: 450px) {
        height: calc(100vh - 3.4em);
        padding-top: 3.4em;
        grid-template-rows: 3.4em auto;
    }

    @media only screen and (min-width: 1200px) {
        height: calc(100vh - 5.4em);
        padding-top: 5.4em;
        grid-template-rows: 5.4em auto;
    }
`;

export const SlideContent = styled.div`

    display: grid;
    background-image: linear-gradient(#AED9EA55, #E98DBE55);
    height: calc(100vh - 6.8em);
    grid-template-rows: repeat(2, 50%);
    border-bottom: 1px solid black;

    @media only screen and (max-height: 360px) {
        height: calc(100vh - 6.8em);
        grid-template-columns: repeat(2, 50%);
        grid-template-rows: none; 
    }

    @media only screen and (min-height: 360px) and (max-height: 376px) {
        height: calc(100vh - 6.8em);
        grid-template-columns: repeat(2, 50%);
        grid-template-rows: none; 
    }

    @media only screen and (min-width: 360px) and (max-width: 600px) {

    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {
        
    }   

    @media only screen and (min-width: 768px) and (max-width: 992px) {
        height: calc(100vh - 10.8em);
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        height: calc(100vh - 10.8em);
        grid-template-columns: repeat(2, 50%);
        grid-template-rows: none; 
    }

    @media only screen and (min-width: 768px) and (max-width: 992px) and (max-height: 450px) {
        height: calc(100vh - 6.8em);
        grid-template-rows: none;
        grid-template-columns: repeat(2, 50%);
    }

    @media only screen and (min-width: 1200px) {
        height: calc(100vh - 10.8em);
        grid-template-columns: repeat(2, 50%);
        grid-template-rows: none; 
        
    }
`;

export const CreateNoteContent = styled.div`

    display: grid;
    background-image: linear-gradient(#AED9EA55, #E98DBE55);
    height: calc(100vh - 3.4em);
    padding-top: 3.4em;
    grid-template-rows: 40% 60%;

    /* max-width: 360px */

    @media only screen and (min-width: 360px) and (max-width: 600px) {
        
    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {

    }   

    @media only screen and (min-width: 768px) and (max-width: 992px) {
        height: calc(100vh - 5.4em);
        padding-top: 5.4em;
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        height: calc(100vh - 5.4em);
        padding-top: 5.4em;
        grid-template-rows: none;
        grid-template-columns: 60% 40%;
    }

    @media only screen and (min-width: 1200px) {
        height: calc(100vh - 5.4em);
        padding-top: 5.4em;
        grid-template-rows: none;
        grid-template-columns: 60% 40%;
    }
`;

export const EditNoteContent = styled.div`

    display: grid;
    grid-template-rows: 10% 83% 7%;
    background-image: linear-gradient(#AED9EA55, #E98DBE55);
    height: calc(100vh - 3.4em);
    padding-top: 3.4em;
    grid-auto-flow: row;

    @media only screen and (min-width: 360px) and (max-width: 600px) {

    }

    @media only screen and (min-width: 360px) and (max-width: 600px) and (max-height: 350px) {
        height: calc(100vw - 3.4em);
        overflow-y: auto;
    }


    @media only screen and (min-width: 600px) and (max-width: 768px) {

    }   

    @media only screen and (min-width: 600px) and (max-width: 768px) and (max-height: 380px) {
        height: calc(100vw - 3.4em);
        overflow-y: auto;
    }


    @media only screen and (min-width: 768px) and (max-width: 992px) {
        height: calc(100vh - 5.4em);
        padding-top: 5.4em;

    }

    @media only screen and (min-width: 768px) and (max-width: 992px) and (max-height: 450px) {
        height: calc(100vw - 3.4em);
        overflow-y: auto;
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        height: calc(100vh - 5.4em);
        padding-top: 5.4em;
    }

    @media only screen and (min-width: 1200px) {
        height: calc(100vh - 5.4em);
        padding-top: 5.4em;
    }
`;

export const ReadNoteContent = styled.div`

    display: grid;
    grid-template-rows: 5% 5% 90%;
    background-image: linear-gradient(#AED9EA55, #E98DBE55);
    height: calc(100vh - 3.4em);
    padding-top: 3.4em;
    grid-auto-flow: row;

    @media only screen and (min-width: 360px) and (max-width: 600px) {

    }

    @media only screen and (min-width: 360px) and (max-width: 600px) and (max-height: 350px) {
        height: calc(100vw - 3.4em);
        overflow-y: auto;
    }


    @media only screen and (min-width: 600px) and (max-width: 768px) {

    }   

    @media only screen and (min-width: 600px) and (max-width: 768px) and (max-height: 380px) {
        height: calc(100vw - 3.4em);
        overflow-y: auto;
    }


    @media only screen and (min-width: 768px) and (max-width: 992px) {
        height: calc(100vh - 5.4em);
        padding-top: 5.4em;

    }

    @media only screen and (min-width: 768px) and (max-width: 992px) and (max-height: 450px) {
        height: calc(100vw - 3.4em);
        overflow-y: auto;
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        height: calc(100vh - 5.4em);
        padding-top: 5.4em;
    }

    @media only screen and (min-width: 1200px) {
        height: calc(100vh - 5.4em);
        padding-top: 5.4em;
    }
`;

export const ReadNotebookContent = styled.div`

    display: grid;
    background-image: linear-gradient(#AED9EA55, #E98DBE55);
    height: fit-content;
    padding-top: 3.4em;
    grid-auto-flow: row;
    grid-auto-rows: calc(100vh - 3.4em);

    @media only screen and (min-width: 360px) and (max-width: 600px) {

    }

    @media only screen and (min-width: 360px) and (max-width: 600px) and (max-height: 350px) {
        grid-auto-rows: calc(100vw - 3.4em);

    }


    @media only screen and (min-width: 600px) and (max-width: 768px) {
        padding-top: 5.4em;

    }   

    @media only screen and (min-width: 600px) and (max-width: 768px) and (max-height: 380px) {
        grid-auto-rows: calc(100vw - 3.4em);
        
    }


    @media only screen and (min-width: 768px) and (max-width: 992px) {
        padding-top: 7.4em;

    }

    @media only screen and (min-width: 768px) and (max-width: 992px) and (max-height: 450px) {
        grid-auto-rows: calc(100vw - 3.4em);
        
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        grid-template-columns: 50% 50%;
        padding-top: 5.4em;
        
    }

    @media only screen and (min-width: 1200px) {
        grid-template-columns: 50% 50%;
        padding-top: 6.4em;
        
    }
`;