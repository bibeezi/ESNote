import styled, { css } from "styled-components";

export const List = styled.div`

    ${({ showList}) => showList === true ? css`     
        position: relative;
        width: 100%;
        background-color: transparent;
        z-index: 2;
    ` : null}

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

export const ListOption = styled.div`

    background-color: whitesmoke;
    box-shadow: inset 0 1px 1px 0 grey;
    padding: 1em 0 1em 0.5em;
    margin-left: 0.25em;
    width: 83.5%;
    transform: translateY(-0.25em);
    text-overflow: ellipsis;
    overflow: hidden;

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