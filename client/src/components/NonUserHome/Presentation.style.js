import styled from "styled-components";

export const StyledPresentation = styled.div`

    box-shadow: 0 0em 1em grey;
    border-radius: 1em;
    margin: 2em;
    height: 20em;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 1em;
    }

    @media only screen and (min-width: 360px) and (max-width: 600px) {
       
    }

    @media only screen and (min-width: 360px) and (max-width: 600px) and (max-height: 350px) {
        margin: 2em 4em;
    }

    
    @media only screen and (min-width: 600px) and (max-width: 768px) {
        margin: 2em 6em;
    }   

    @media only screen and (min-width: 768px) and (max-width: 992px) {
        margin: 2em 8em;
        height: 35em;
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        height: 27.5em;
        width: 80%;
        justify-self: center;
    }

    @media only screen and (min-width: 1200px) {
        height: 40em;
        width: 80%;
        justify-self: center;
    }

    @media only screen and (min-width: 1200px) and (max-height: 810px) {
        height: 27.5em;
        width: 80%;
        justify-self: center;
    }
`;