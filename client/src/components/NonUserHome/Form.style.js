import styled from 'styled-components';

export const Form = styled.form`

    text-align: center;
    float: left;
    height: fit-content;
    width: 100%;

    h1:first-child {
        margin-top: 0;
        font-size: 2.5em;
    }

    h1:nth-of-type(2) {
        margin-top: 2.5rem;
        margin-bottom: 1rem;
        font-size: 2.5em;
    }

    input {
        display: block;
        margin: 5% auto 2.5% auto;
        padding: 0.2rem 0.2rem 0.2rem 0.5rem;
        height: 2.5rem;
        width: 70%;
        border-radius: 0.75em;
        border: 0.1px solid grey;
        font-size: 1em;
    }

    button {
        padding: 0.5em 2em 0.5em 2em;
        height: 2.5rem;
        width: fit-content;
        border-radius: 1.5em;
        border: none;
        font-family : inherit;
        font-size: 1rem;
        letter-spacing: 0.1em;
    }

    #login {
        margin: 3% auto 5% auto;
        background-color: #EDB68A;
    }

    #registration {
        margin: 0 auto 5% auto;
        background-color: #61D4D4;
    }
    
    hr{
        width: 80%;
    }

`;