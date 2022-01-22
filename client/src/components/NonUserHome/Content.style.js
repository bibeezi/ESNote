import styled from 'styled-components';

export const Content = styled.div`

    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 60% 40%;
    height: 100%;
    background-image: linear-gradient(#CDF0EA80, #BEAEE260);

    #presentation {
        margin: 15% 7% 15% 7%;
        background-color: whitesmoke;
        box-shadow: 0 0 2em lightgray;
    }

    #register-login {
        margin: 15% 20% 15% 0;
        border: 1px solid grey;
        border-radius: 1em; 
        background-color: #E0FFFF80;
        box-shadow: 0 0em 1em lightgray;
        display: flex;
        align-items: center;
    }
`;