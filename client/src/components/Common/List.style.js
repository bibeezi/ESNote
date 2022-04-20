import styled, { css } from "styled-components";

export const List = styled.div`

    display: inline-grid;
    justify-items: center;

    ${({ showList }) => showList === true ? css`     
        position: relative;
        width: 100%;
        background-color: transparent;
        z-index: 2;

        ::-webkit-scrollbar {
            background: transparent;
        }
    ` : css `
        
    `}

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

    }
`;

export const Options = styled.div`

    display: inline-block;
    width: 92.5%;
    overflow: auto;
    max-height: 7em;
    -ms-overflow-style: none;
    transform: translateY(-0.5em);
    cursor: pointer;
    scrollbar-width: none;


    @media only screen and (min-width: 360px) and (max-width: 600px) {
        width: 87%;
    }

    @media only screen and (min-width: 360px) and (max-width: 600px) and (max-height: 350px) {
        width: 65%;
    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {
        width: 49%;
    }   

    @media only screen and (min-width: 600px) and (max-width: 768px) and (max-height: 380px) {
        transform: translateY(-0.65em);
        width: 60%;
    }

    @media only screen and (min-width: 768px) and (max-width: 992px) {
        width: 46.5%        
    }

    @media only screen and (min-width: 768px) and (max-width: 992px) and (max-height: 1200px) {
        width: 40.5%
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        width: 48%
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) and (max-height: 700px) {
        width: 62.5%
    }

    @media only screen and (min-width: 1200px) {
        width: 38.5%
    }

    @media only screen and (min-width: 1200px) and (max-height: 810px) {
        width: 57%
    }
`;

export const ListOption = styled.div`

    background-color: whitesmoke;
    box-shadow: inset 0 1px 1px 0 grey;
    padding: 1em;
    transform: translateY(-0.25em);
    overflow-x: hidden;
    text-overflow: ellipsis;

    @media only screen and (min-width: 360px) and (max-width: 600px) {

    }

    @media only screen and (min-width: 360px) and (max-width: 600px) and (max-height: 350px) {
        
    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {

    }   

    @media only screen and (min-width: 600px) and (max-width: 768px) and (max-height: 380px) {

    }

    @media only screen and (min-width: 768px) and (max-width: 992px) {
        
    }

    @media only screen and (min-width: 768px) and (max-width: 992px) and (max-height: 450px) {

    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {

    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) and (max-height: 700px) {

    }

    @media only screen and (min-width: 1200px) {

    }
`;