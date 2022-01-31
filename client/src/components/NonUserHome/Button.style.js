import styled from 'styled-components';

export const Button = styled.button`

    padding: 0.5em 2em 0.5em 2em;
    height: 2.5rem;
    width: fit-content;
    border-radius: 1.5em;
    border: none;
    font-family : inherit;
    font-size: 1rem;
    letter-spacing: 0.1em;

    ${ ({ colours }) => colours === "blue" ? `
        margin: 0 auto 5% auto;
        background-color: #61D4D4;
    ` : colours === "orange" ? `
        margin: 3% auto 5% auto;
        background-color: #EDB68A;
    ` : `` 
    }

    ${ ({ active }) => active && `
        margin: 3% 15% 5% 15%;
    `}
`;