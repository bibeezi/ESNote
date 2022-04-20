import styled from 'styled-components';

export const SaveContainer = styled.div`

    display: grid;
    grid-template-columns: 50% 50%;
    height: fit-content;
    padding: 0 1em;
    align-items: center;

    @media only screen and (min-width: 360px) and (max-width: 600px) {
        
    }

    @media only screen and (min-width: 360px) and (max-width: 600px) and (max-height: 350px) {
        padding: 0 1.7em;
    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {
        padding: 0 1.8em;
    }   

    @media only screen and (min-width: 600px) and (max-width: 768px) and (max-height: 380px) {
        padding: 0 1.9em;
    }

    @media only screen and (min-width: 768px) and (max-width: 992px) {
        padding: 0 7em;
    }

    @media only screen and (min-width: 768px) and (max-width: 992px) and (max-height: 1000px) {
        transform: translateY(-5em);
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        transform: translateY(-5em);
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) and (max-height: 700px) {
        transform: translateY(-4em);
    }

    @media only screen and (min-width: 1200px) {
        transform: translateY(-5.4em);
    }

    @media only screen and (min-width: 1200px) and (max-height: 810px) {
        transform: translateY(-5em);
    }
`;