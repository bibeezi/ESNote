import styled from "styled-components";

export const StyledPresentation = styled.div`

    box-shadow: 0 0em 1em grey;
    border-radius: 1em;

    img {
        display: block;
        margin: auto;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 1em;
    }

    /* max-width: 360px */
    margin: 5em 2em 0 2em;
    height: 20em;

    @media only screen and (min-width: 360px) and (max-width: 600px) {
       
    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {

    }   

    @media only screen and (min-width: 768px) and (max-width: 992px) {
        margin: 10em 2em 0 2em;
        height: 35em;
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        margin: 10em 2em 0 2em;
        height: 35em;
    }

    @media only screen and (min-width: 1200px) {
        margin-top: 10em;
        height: 30em;
    }
`;