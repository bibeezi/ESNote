import styled from 'styled-components';

export const Content = styled.div`

    display: grid;
    grid-auto-flow: rows;
    grid-template-columns: 60% 40%;
    height: 100%;
    background-image: linear-gradient(#CDF0EA80, #BEAEE260);

    #presentation {
        margin: 15rem 7rem 15rem 7rem;
        background-color: whitesmoke;
        box-shadow: 0 0 2em lightgray;
        overflow: hidden;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    #register-login {
        margin: 10rem 10rem 10rem 0;
        border: 1px solid grey;
        border-radius: 1em; 
        background-color: #E0FFFF80;
        box-shadow: 0 0em 1em lightgray;
        display: flex;
        align-items: center;
    }

    @media (max-width: 360px) {
        
        grid-template-columns: none;
        grid-template-rows: 40% 60%;
        padding-top: 22%;

        #presentation {
            margin: 0 2em;
            border: 0.5px solid grey;
            height: 20em;
            overflow: hidden;
        }

        img {
            display: block;
            margin: auto;
            object-fit: cover;
        }
    }
`;