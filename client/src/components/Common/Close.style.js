import styled from "styled-components";

export const CloseButton = styled.div`

    display: inline-block;
    position: relative;
    height: 32px;
    width: 32px;
    z-index: 2;
    content: "\\00d7";
    top: 0.75em;
    opacity: 0.3;

    &:hover {
        cursor: pointer;
        opacity: 1;
    }

    &:before, &:after {
        position: absolute;
        left: 15px;
        content: ' ';
        height: 33px;
        width: 2px;
        background-color: #333;
    }

    &:before {
        transform: rotate(45deg);
    }    
    
    &:after {
        transform: rotate(-45deg);
    }

    /* max-width: 360px */
    right: 50%;

    @media only screen and (min-width: 360px) and (max-width: 600px) {
        right: 55%;
    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {
        top: 1.5em;
        right: 60%;
    }   

    @media only screen and (min-width: 768px) and (max-width: 992px) {
        top: 1.5em;
        right: 65%;
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        top: 1.5em;
        right: 70%;
    }

    @media only screen and (min-width: 1200px) {
        top: 1.5em;
        right: 70%;
    }
`;