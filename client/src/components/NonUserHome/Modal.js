import styled from 'styled-components';

export const Modal = styled.div`

    height: 100vh;
    width: 100%;
    background-color: #FFFFFFBB;
    position: fixed;
    display: flex;
    justify-content: center;

    form {
        height: fit-content;
        width: 50%;
        background-color: #E0FFFF;
        border: 1px solid black;
        border-radius: 10px;
        align-self: center;
    }

    @media (min-width: 530px) and (max-width: 960px) {

        h1 {
            margin-top: 0 auto;
        }

        button {
            height: fit-content;
        }

    }

    @media (max-width: 530px) {

        button {
            height: fit-content;
        }

    }
`;