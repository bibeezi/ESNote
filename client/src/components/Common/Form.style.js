import styled from "styled-components";

export const RegisterForm = styled.form`



    @media only screen and (max-width: 360px) {

        position: relative;
        text-align: center;
        float: left;
        height: fit-content;
        width: 100%;
        ${ ({ active }) => active && `
            position: fixed;
        `}
    }

    @media only screen and (min-width: 360px) and (max-width: 600px) {
        
        position: relative;
        text-align: center;
        float: left;
        height: fit-content;
        width: 100%;
        ${ ({ active }) => active && `
            position: fixed;
        `}
    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {
        position: relative;
        text-align: center;
        float: left;
        height: fit-content;
        width: 100%;
        ${ ({ active }) => active && `
            position: fixed;
        `}
    }   

    @media only screen and (min-width: 768px) and (max-width: 992px) {
        position: relative;
        text-align: center;
        float: left;
        height: fit-content;
        width: 100%;
        ${ ({ active }) => active && `
            position: fixed;
        `}
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        position: relative;
        text-align: center;
        float: left;
        height: fit-content;
        width: 100%;
        ${ ({ active }) => active && `
            position: fixed;
        `}
    }

    @media only screen and (min-width: 1200px) {
        
        position: relative;
        text-align: center;
        float: left;
        height: fit-content;
        width: 100%;
        ${ ({ active }) => active && `
            position: fixed;
        `}
    }
`;