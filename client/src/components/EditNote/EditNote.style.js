import styled from 'styled-components';

export const TitleContainer = styled.div`

    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: end;

    label {
        margin-bottom: 0.25em;
    }

    @media only screen and (min-width: 360px) and (max-width: 600px) {
        
    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {
        label {
            margin-bottom: 0.25em;
            font-size: 1.25em;
        }
    }   

    @media only screen and (min-width: 768px) and (max-width: 992px) {
        label {
            margin-bottom: 0.25em;
            font-size: 1.25em;
        }
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        label {
            margin-bottom: 0.3em;
            font-size: 1.25em;
        }
    }

    @media only screen and (min-width: 1200px) {
        label {
            margin-bottom: 0.6em;
            font-size: 1.5em;
        }
    }
`;

export const Save = styled.div`

    display: grid;
    grid-template-columns: 50% 50%;
    padding: 0 1em 0 1em;
    position: relative;

    @media only screen and (min-width: 360px) and (max-width: 600px) {
        
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