import styled from "styled-components";

export const NonUserHomeContent = styled.div`

    display: grid;
    min-height: 100vh;
    background-image: linear-gradient(#E98DBE, #AED9EA);

    /* max-width: 360px */
    grid-template-columns: none;
    padding-top: 5rem;        

    @media only screen and (min-width: 360px) and (max-width: 600px) {
        grid-template-columns: none;
    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {
        grid-template-columns: none;
    }   

    @media only screen and (min-width: 768px) and (max-width: 992px) {
        grid-template-columns: 60% 40%;
        padding-top: 10rem;  
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        grid-template-columns: 60% 40%;
        padding-top: 10rem;  
    }

    @media only screen and (min-width: 1200px) {
        grid-template-columns: 60% 40%;
        padding-top: 10rem;  
    }
`;