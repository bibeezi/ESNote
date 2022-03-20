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

    /* max-width: 360px */


    @media only screen and (max-width: 360px) {
        height: calc(100vh - 3.4em);
        padding-top: 3.4em;
        grid-template-rows: 3.4em auto;
    }

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

export const SlideContentUserHome = styled.div`

    display: grid;
    background-image: linear-gradient(#AED9EA55, #E98DBE55);

    /* max-width: 360px */


    @media only screen and (max-width: 360px) {
        height: calc(100vh - 6.8em);
        grid-template-rows: repeat(2, 50%);
    }

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