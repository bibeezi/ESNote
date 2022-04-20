import styled, { css } from "styled-components";

export const NonUserHomeContent = styled.div`

    display: grid;
    min-height: calc(100vh - 3.4em);
    max-height: fit-content;
    padding-top: 3.4em;
    background-image: linear-gradient(#AED9EA55, #E98DBE55);

    @media only screen and (min-width: 360px) and (max-width: 600px) {

    }
    
    @media only screen and (min-width: 600px) and (max-width: 768px) {
        grid-template-rows: min-content;
        align-items: center;
    }   

    @media only screen and (min-width: 768px) and (max-width: 992px) {
        min-height: calc(100vh - 5.4em);
        padding-top: 5.4em;
        grid-template-rows: min-content;
        align-items: center;
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        min-height: calc(100vh - 5.4em);
        padding-top: 5.4em;
        grid-template-columns: 60% 40%;
        grid-template-rows: 100%;
        align-items: center;
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) and (max-height: 700px) {
        min-height: calc(100vh - 5.4em);
        padding-top: 5.4em;
        grid-template-columns: 60% 40%;
        grid-template-rows: 100%;
        align-items: center;
    }

    @media only screen and (min-width: 1200px) {
        min-height: calc(100vh - 5.4em);
        padding-top: 5.4em;
        grid-template-columns: 60% 40%;
        grid-template-rows: 100%;
        align-items: center;
    }
`;

export const UserHomeContent = styled.div`

    display: grid;
    background-image: linear-gradient(#AED9EA55, #E98DBE55);
    height: calc(100vh - 3.4em);
    padding-top: 3.4em;
    grid-template-rows: 3.35em auto;

    @media only screen and (min-width: 360px) and (max-width: 600px) {
        
    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {

    }   

    @media only screen and (min-width: 768px) and (max-width: 992px) {
        height: calc(100vh - 5.4em);
        padding-top: 5.4em;
        grid-template-rows: 5.35em auto;
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        height: calc(100vh - 5.4em);
        padding-top: 5.4em;
        grid-template-rows: 5.35em auto;
    }

    @media only screen and (min-width: 768px) and (max-width: 992px) and (max-height: 450px) {
        height: calc(100vh - 3.4em);
        padding-top: 3.4em;
        grid-template-rows: 3.4em auto;
    }

    @media only screen and (min-width: 1200px) {
        height: calc(100vh - 5.4em);
        padding-top: 5.4em;
        grid-template-rows: 5.35em auto;
    }
`;

export const SlideContent = styled.div`

    display: grid;
    background-image: linear-gradient(#AED9EA55, #E98DBE55);
    height: calc(100vh - 6.8em);
    grid-template-rows: repeat(2, 50%);

    @media only screen and (min-width: 360px) and (max-width: 600px) {
        grid-template-rows: repeat(2, 50%);
    }

    @media only screen and (min-width: 360px) and (max-width: 600px) and (max-height: 350px) {
        grid-template-columns: repeat(2, 50%);
    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {
        height: calc(100vh - 6.8em);
        
    }   

    @media only screen and (min-width: 600px) and (max-width: 768px) and (max-height: 380px) {
        height: calc(100vh - 6.75em);
        grid-template-columns: repeat(2, 50%);
        grid-template-rows: none; 
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

export const CreateContent = styled.div`

    display: grid;
    background-image: linear-gradient(#AED9EA55, #E98DBE55);
    height: calc(100vh - 3.4em);
    padding-top: 3.4em;
    grid-template-rows: 40% 60%;

    @media only screen and (min-width: 360px) and (max-width: 600px) {
        
    }

    @media only screen and (min-width: 360px) and (max-width: 600px) and (max-height: 350px) {
        grid-template-rows: 50% 50%;
    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {

    }   

    @media only screen and (min-width: 600px) and (max-width: 768px) and (max-height: 380px) {
        grid-template-rows: 50% 50%;
    }

    @media only screen and (min-width: 768px) and (max-width: 992px) {
        height: calc(100vh - 5.4em);
        padding-top: 5.4em;
    }

    @media only screen and (min-width: 768px) and (max-width: 992px) and (max-height: 1000px) {
        grid-template-rows: 50% 50%;
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
    grid-template-rows: 10% 82% 8%;
    background-image: linear-gradient(#AED9EA55, #E98DBE55);
    height: calc(100vh - 3.4em);
    padding-top: 3.4em;
    grid-auto-flow: row;

    @media only screen and (min-width: 360px) and (max-width: 600px) and (max-height: 350px) {
        min-height: 100vh;
        height: fit-content;
        grid-template-rows: 15vh 200vh 15vh;
    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {
        grid-template-rows: 8% 84% 8%;
    }    

    @media only screen and (min-width: 600px) and (max-width: 768px) and (max-height: 380px) {
        min-height: 100vh;
        height: fit-content;
        grid-template-rows: 20vh 200vh 20vh;
    }


    @media only screen and (min-width: 768px) and (max-width: 992px) {
        height: calc(100vh - 5.4em);
        padding-top: 5.4em;
        grid-template-rows: 8% 84% 8%;
    }

    @media only screen and (min-width: 768px) and (max-width: 992px) and (max-height: 1000px) {
        height: calc(100vh - 5.4em);
        padding-top: 5.4em;
        grid-template-rows: 10% 90%;
    }

    @media only screen and (min-width: 768px) and (max-width: 992px) and (max-height: 450px) {
        height: calc(100vw - 3.4em);
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        height: calc(100vh - 5.4em);
        padding-top: 5.4em;
        grid-template-rows: 10% 90%;
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) and (max-height: 700px) {
        height: calc(100vh - 5.4em);
        padding-top: 5.4em;
        grid-template-rows: 12% 88%;
    }

    @media only screen and (min-width: 1200px) {
        height: calc(100vh - 5.4em);
        padding-top: 5.4em;
        grid-template-rows: 12% 88%;
    }
`;

export const ReadNoteContent = styled.div`

    display: grid;
    grid-template-rows: 10% 90%;
    background-image: linear-gradient(#AED9EA55, #E98DBE55);
    height: calc(100vh - 3.4em);
    padding-top: 3.4em;
    grid-auto-flow: row;

    @media only screen and (min-width: 360px) and (max-width: 600px) {
        grid-template-rows: 8% 92%;
    }

    @media only screen and (min-width: 360px) and (max-width: 600px) and (max-height: 350px) {
        height: calc(100vw - 3.4em);
    }


    @media only screen and (min-width: 600px) and (max-width: 768px) {
        grid-template-rows: 7% 93%;
    }   

    @media only screen and (min-width: 600px) and (max-width: 768px) and (max-height: 380px) {
        height: calc(100vw - 3.4em);
    }


    @media only screen and (min-width: 768px) and (max-width: 992px) {
        height: calc(100vh - 5.4em);
        padding-top: 5.4em;
        grid-template-rows: 7% 93%;
    }

    @media only screen and (min-width: 768px) and (max-width: 992px) and (max-height: 450px) {
        height: calc(100vw - 3.4em);
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
    height: calc(100vh - 3.4em);
    padding: 3.4em 0 0 0;
    grid-template-columns: 100%;
    grid-auto-flow: row;
    grid-auto-rows: calc(100vh - 3.4em);
    
    @media only screen and (min-width: 360px) and (max-width: 600px) {

    }

    @media only screen and (min-width: 360px) and (max-width: 600px) and (max-height: 350px) {
        ${({ notebookLength }) => notebookLength > 1 ? css`
            height: fit-content;
        ` : css`
            height: calc(100vw - 3.4em);
        `}
        grid-auto-rows: calc(100vw - 3.4em);
        padding: 3.4em 0 1.4em 0;
    }


    @media only screen and (min-width: 600px) and (max-width: 768px) {
        ${({ notebookLength }) => notebookLength > 1 ? css`
            height: fit-content;
        ` : css`
            height: calc(100vh - 5.4em);
        `}
        padding: 5.4em 0 0 0;
    }   

    @media only screen and (min-width: 600px) and (max-width: 768px) and (max-height: 380px) {
        ${({ notebookLength }) => notebookLength > 1 ? css`
            height: fit-content;
        ` : css`
            height: calc(100vw - 3.4em);
        `}
        grid-auto-rows: calc(100vw - 3.4em);
        padding: 3.4em 0;
    }


    @media only screen and (min-width: 768px) and (max-width: 992px) {
        ${({ notebookLength }) => notebookLength > 1 ? css`
            height: fit-content;
        ` : css`
            height: calc(100vh - 5.4em);
        `}
        padding: 5.4em 0 0 0;
    }

    @media only screen and (min-width: 768px) and (max-width: 992px) and (max-height: 450px) {
        grid-auto-rows: calc(100vw - 3.4em);
        padding: 5.4em 0 0 0;
    }
    
    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        ${({ notebookLength }) => notebookLength > 1 ? css`
            grid-template-columns: 50% 50%;
        ` : css`
            height: calc(150vh - 5.4em);
            grid-template-columns: 100%;
        `}
        padding: 5.4em 0 0 0;
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) and (max-height: 700px) {
        ${({ notebookLength }) => notebookLength > 1 ? css`
            grid-template-columns: 50% 50%;
        ` : css`
            height: calc(100vh - 5.4em);
            grid-template-columns: 100%;
        `}
        padding: 5.4em 0 0 0;
    }

    @media only screen and (min-width: 1200px) {
        ${({ notebookLength }) => notebookLength > 1 ? css`
            grid-template-columns: 50% 50%;
        ` : css`
            height: calc(100vh - 5.4em);
            grid-template-columns: 100%;
        `}
        padding: 5.4em 0 0 0;
    }

    @media only screen and (min-width: 1200px) and (max-height: 810px) {
        ${({ notebookLength }) => notebookLength > 1 ? css`
            grid-template-columns: 50% 50%;
        ` : css`
            height: calc(100vh - 5.4em);
            grid-template-columns: 100%;
        `}
        padding: 5.4em 0 0 0;
    }
`;

export const StyledPreview = styled.div`

    display: grid;
    grid-template-columns: 30% 40% 30%;

    @media only screen and (min-width: 360px) and (max-width: 600px) {
        grid-template-columns: 25% 50% 25%;
    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {

    }   

    @media only screen and (min-width: 768px) and (max-width: 992px) {

    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        grid-template-columns: 20% 60% 20%;
    }
    
    @media only screen and (min-width: 1200px) and (min-height: 800px) {
        grid-template-columns: 20% 60% 20%;

    }

    @media only screen and (min-width: 1200px) {

    }
`;

export const StyledSettings = styled.div`

    box-shadow: 0 0 1em -0.3em grey;
    overflow-y: auto;

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
