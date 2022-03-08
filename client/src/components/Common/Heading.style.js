import styled from "styled-components";

export const Heading = styled.h1`

    display: inline-flex;
    margin: 0 auto;
    padding-top: 0.2em;
    vertical-align: middle;
    letter-spacing: 0.2em;
    color: #7E2D00;

    @media (min-width: 530px) and (max-width: 960px) {
        font-size: 1.5em;
    }


    @media (min-width: 360px) and (max-width: 530px) {
        font-size: 1em;
    }   

    @media (max-width: 360px) {
        font-size: 0.7em;
        text-align: center;
    }
`;