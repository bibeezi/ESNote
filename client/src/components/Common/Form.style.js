import styled from 'styled-components';

export const Form = styled.form`

    position: relative;
    text-align: center;
    float: left;
    height: fit-content;
    width: 100%;

   
    h1:first-of-type {
        margin-top: 0;
        font-size: 2.5em;

        ${ ({ active }) => active && `
            margin-top: 3rem;
        `}
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
    
    hr{
        width: 80%;
    }

    .close {
        display: inline-block;
        z-index: 10;
        content: "\\00d7";
        height: 32px;
        width: 32px;
        position: absolute;
        top: 1vh;
        right: 0.5vw;
        opacity: 0.3;
    }

    .close:hover {
        opacity: 1;
    }

    .close:before, .close:after {
        position: absolute;
        left: 15px;
        content: ' ';
        height: 33px;
        width: 2px;
        background-color: #333;
    }
    
    .close:before {
        transform: rotate(45deg);
    }

    .close:after {
        transform: rotate(-45deg);
    }

    textarea {
        display: block;
        margin: 0 auto;
        width: 70%;
    }
`;