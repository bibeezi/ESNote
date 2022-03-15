import styled from "styled-components";

export const HeaderHeading = styled.h1`

    letter-spacing: 0.2em;
    color: #7E2D00;

    /* max-width: 360px */
    margin-left: 0.5em;
    font-size: 0.75em;

    @media only screen and (min-width: 360px) and (max-width: 600px) {
        margin-left: 0.5em;
        font-size: 1em;
    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {
        margin-left: 0.5em;
        font-size: 1em;
    }

    @media only screen and (min-width: 768px) and (max-width: 992px) {
        margin-left: 0.5em;
        font-size: 2em;
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        margin-left: 0.5em;
        font-size: 2em;
    }

    @media only screen and (min-width: 1200px) {
        margin-left: 0.5em;
        font-size: 2em;
    }
`;