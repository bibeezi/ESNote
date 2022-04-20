import styled, { css } from "styled-components";

export const HeaderHeading = styled.h1`

    letter-spacing: 0.2em;
    color: #7E2D00;
    margin-left: 0.5em;
    font-size: 0.75em;
    ${({ cursor }) => cursor === "false" ? css`
        cursor: default;
    ` : css`
        cursor: pointer;
    `}

    @media only screen and (min-width: 360px) and (max-width: 600px) {
        margin-left: 0.5em;
        font-size: 1em;
    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {
        margin-left: 0.5em;
        font-size: 1em;
    }

    @media only screen and (min-width: 768px) and (max-width: 992px) {
        margin: 0 0 0 0.5em;
        font-size: 2em;
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        margin-left: 0.5em;
        font-size: 2em;
    }
    
    @media only screen and (min-width: 768px) and (max-width: 992px) and (max-height: 450px) {
        margin-left: 0.5em;
        font-size: 1.5em;
    }

    @media only screen and (min-width: 1200px) {
        margin-left: 0.5em;
        font-size: 2em;
    }
`;

export const WelcomeHeading = styled.h1`

    letter-spacing: 0.2em;
    color: #7E2D00;
    font-size: 0.75em;
    margin: auto;

    @media only screen and (min-width: 360px) and (max-width: 600px) {
        font-size: 0.75;
    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {
        font-size: 1em;
    }

    @media only screen and (min-width: 768px) and (max-width: 992px) {
        font-size: 1.25em;
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        font-size: 1.25em;
    }

    @media only screen and (min-width: 768px) and (max-width: 992px) and (max-height: 450px) {
        margin: 0 auto;
        font-size: 1em;
    }

    @media only screen and (min-width: 1200px) {
        font-size: 2em;
    }
`;

export const FormHeading = styled.h1`

    margin: 0 0 0.5em 0;
    font-size: 2em;

    @media only screen and (min-width: 360px) and (max-width: 600px) {

    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {
        font-size: 2.5em;
    }

    @media only screen and (min-width: 768px) and (max-width: 992px) {
        font-size: 2.5em;
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        font-size: 2.5em;
    }

    @media only screen and (min-width: 1200px) {
        font-size: 2.5em;
    }
`;

export const FormHeadingRegister = styled.h1`

    text-align: center;
    font-size: 1.5em;

    @media only screen and (min-width: 360px) and (max-width: 600px) {

    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {
        font-size: 2em;
    }

    @media only screen and (min-width: 768px) and (max-width: 992px) {
        font-size: 2em;
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        font-size: 2em;
    }

    @media only screen and (min-width: 1200px) {
        font-size: 2em;
    }
`;

export const FormHeadingModal = styled.h1`

    margin: 0;
    transform: translateY(-1.1em);
    font-size: 1.25em;

    @media only screen and (min-width: 360px) and (max-width: 600px) {
        transform: translateY(-1em);
        font-size: 1.5em;
    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {
        font-size: 2em;
        transform: translateY(-0.8em);
    }

    @media only screen and (min-width: 600px) and (max-width: 768px) and (max-height: 380px) {
        transform: translateY(-0.8em);
    }

    @media only screen and (min-width: 768px) and (max-width: 992px) {
        font-size: 2em;
        transform: translateY(-0.8em);
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        font-size: 2em;
        transform: translateY(-0.8em);
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) and (max-height: 700px) {
        transform: translateY(-0.8em);
    }

    @media only screen and (min-width: 1200px) {
        font-size: 2em;
        transform: translateY(-0.8em);
    }

    @media only screen and (min-width: 1200px) and (max-height: 810px) {
        font-size: 2em;
        transform: translateY(-0.8em);
    }
`;

export const Subheading = styled.h1`

    letter-spacing: 0.2em;
    color: #7E2D00;
    font-size: 1em;
    margin: auto;

    @media only screen and (min-width: 360px) and (max-width: 600px) {
        
    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {
        font-size: 1.25em;

    }

    @media only screen and (min-width: 768px) and (max-width: 992px) {
        font-size: 1.75em;
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        font-size: 2em;
    }

    @media only screen and (min-width: 768px) and (max-width: 992px) and (max-height: 450px) {
        font-size: 1em;

    }

    @media only screen and (min-width: 1200px) {
        font-size: 2em;
    }
`;

export const UserHomeTitle = styled.h1`

    height: fit-content;
    width: 70%;
    text-align: center;
    color: #7E2D00;
    font-size: 0.75em;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow-x: auto;
    cursor: pointer;

    scrollbar-width: none;

    ::-webkit-scrollbar {
        background: transparent;
    }

    @media only screen and (min-width: 360px) and (max-width: 600px) {

    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {

    }

    @media only screen and (min-width: 768px) and (max-width: 992px) {
        font-size: 1em;
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        font-size: 1em;
    }

    @media only screen and (min-width: 1200px) {
        font-size: 1.25em;
    }
`;

export const SettingHeading = styled.h1`

    display: inline-block;
    font-size: 1em;

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

export const AddedSettingHeading = styled.h1`

    font-size: 1em;

    @media only screen and (min-width: 360px) and (max-width: 600px) {
        
    }

    @media only screen and (min-width: 360px) and (max-width: 600px) and (max-height: 350px) {
        width: 80%;
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

export const NotebookNoteHeading = styled.h1`

    display: inline-block;
    width: 80%;
    font-size: 1em;
    font-weight: 100;
    overflow-x: auto;
    text-overflow: ellipsis;
    text-align: center;
    scrollbar-width: none;

    ::-webkit-scrollbar {
        background: transparent;
    }

    @media only screen and (min-width: 360px) and (max-width: 600px) {
        width: 76%;
    }

    @media only screen and (min-width: 360px) and (max-width: 600px) and (max-height: 350px) {
        width: 56%;
    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {
        width: 100%;
    }   

    @media only screen and (min-width: 600px) and (max-width: 768px) and (max-height: 380px) {
        width: 95%;
    }

    @media only screen and (min-width: 768px) and (max-width: 992px) {
        width: 100%;
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) and (max-height: 700px) {
        width: 89%;
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        width: 100%;
    }

    @media only screen and (min-width: 1200px) {
        width: 100%;
    }

    @media only screen and (min-width: 1200px) and (max-height: 810px) {
        width: 100%;
    }
`;

export const SectionTitle = styled.h1`

    width: fit-content;
    font-size: 1em;
    color: ${({ colour }) => colour };

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

export const ReadNoteTitle = styled.h1`

    height: fit-content;
    width: 100%;
    margin: 0;
    color: #7E2D00;
    font-size: 1.25em;
    overflow-x: auto;
    text-overflow: ellipsis;
    scrollbar-width: none;

    ::-webkit-scrollbar {
        background: transparent;
    }

    @media only screen and (min-width: 360px) and (max-width: 600px) {

    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {
        font-size: 1.5em;

    }

    @media only screen and (min-width: 768px) and (max-width: 992px) {
        font-size: 1.5em;

    }


    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        font-size: 1.75em;

    }

    @media only screen and (min-width: 1200px) {
        font-size: 1.75em;

    }
`;

export const ReadNotebookTitle = styled.h1`

    height: 1.5em;
    width: 90%;
    margin: 0 0.75em 0.25em 0.75em;
    color: #7E2D00;
    font-size: 1.25em;
    overflow-x: auto;
    text-overflow: ellipsis;
    scrollbar-width: none;

    ::-webkit-scrollbar {
        background: transparent;
    }

    @media only screen and (min-width: 360px) and (max-width: 600px) {

    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {
        font-size: 1.5em;
    }   

    @media only screen and (min-width: 768px) and (max-width: 992px) {
        width: 55%;
        font-size: 2em;
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        ${({ notebookLength }) => notebookLength > 1 ? css`
            width: 80%;
        ` : css`
            width: 45%;
        `}        
        font-size: 1.75em;
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) and (max-height: 700px) {
        ${({ notebookLength }) => notebookLength > 1 ? css`
            width: 65%;
        ` : css`
            width: 35%;
        `}
    }

    @media only screen and (min-width: 1200px) {
        ${({ notebookLength }) => notebookLength > 1 ? css`
            width: 55%;
        ` : css`
            width: 30%;
        `}
        font-size: 1.75em;
    }

    @media only screen and (min-width: 1200px) and (max-height: 810px) {
        ${({ notebookLength }) => notebookLength > 1 ? css`
            width: 65%;
        ` : css`
            width: 35%;
        `}
    }
`;