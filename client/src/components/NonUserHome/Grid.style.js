import styled from 'styled-components';

export const Grid = styled.div`

    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 60% 40%;
    height: 100%;
    background-color: lightpink;

    #presentation {
        margin: 6em 4em 6em 4em;
        background-color: whitesmoke;
    }

    #register-login {
        margin: 8em;
        border: 1px solid black;
        border-radius: 1em;
    }

    #form {
        
    }

    hr{
        width: 10px;
    }
`;