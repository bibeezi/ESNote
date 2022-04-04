import styled, { css } from "styled-components";

export const List = styled.div`

    ${({ showList }) => showList === true ? css`     
        display: inline-grid;
        position: relative;
        width: 100%;
        background-color: transparent;
        z-index: 2;
        justify-items: center;

        ::-webkit-scrollbar {
            background: transparent;
            width: 0px;
        }
    ` : 
        null
    }

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

    display: grid;
    overflow: auto;
    max-height: 7em;
    width: 84.5%;
    scrollbar-width: none;
    -ms-overflow-style: none;
    transform: translateY(-0.5em);

    @media only screen and (min-width: 360px) and (max-width: 600px) {
        width: 85.5%;

    }

    @media only screen and (min-width: 360px) and (max-width: 600px) and (max-height: 350px) {
        width: 62.5%;
    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {
        width: 58.5%
    }   

    @media only screen and (min-width: 600px) and (max-width: 768px) and (max-height: 380px) {
        width: 56.5%
    }

    @media only screen and (min-width: 768px) and (max-width: 992px) {
        width: 58.5%
        
    }

    @media only screen and (min-width: 768px) and (max-width: 992px) and (max-height: 450px) {

    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) and (max-height: 800px) {
        width: 70.5%

    }

    @media only screen and (min-width: 1200px) {
        width: 72.5%

    }

    @media only screen and (min-width: 1200px) and (max-height: 850px) {
        width: 80%

    }
`;

export const ListOption = styled.div`

    background-color: whitesmoke;
    box-shadow: inset 0 1px 1px 0 grey;
    padding: 1em 0;
    transform: translateY(-0.25em);
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

export const ListOptionSetting = styled.div`

    background-color: whitesmoke;
    box-shadow: inset 0 1px 1px 0 grey;
    padding: 1em 0;
    transform: translateY(-0.25em);
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