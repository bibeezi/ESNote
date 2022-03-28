import styled from "styled-components";

export const SelectSort = styled.select`

    margin-left: 0.5em;
    height: 2.5em;
    width: 70%;
    align-self: center;
    background-color: #FEFEFE;
    border: 1px solid #7E2D009A;
    border-radius: 0.5em;
    font-size: 0.75em;
    font-family: Nunito;

    /* max-width: 360px */

    @media only screen and (max-height: 360px) {

    }

    @media only screen and (min-width: 360px) and (max-width: 600px) {

    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {

    }   

    @media only screen and (min-width: 768px) and (max-width: 992px) {
        margin-left: 1em;
        height: 3em;
        font-size: 1em;
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        height: 3em;
        width: 50%;
        margin-left: 1em;
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
        margin-left: 1em;
        font-size: 1em;
    }
`;