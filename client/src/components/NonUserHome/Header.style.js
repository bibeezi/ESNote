import styled from 'styled-components';

export const Header = styled.header`
    
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 20em auto auto;
    background-color: #F7F3E7;
    box-shadow: 0 0 0.5em grey;
    z-index: 10;

    h1 {
        display: inline-flex;
        margin: 0 auto;
        padding-top: 0.2em;
        vertical-align: middle;
        letter-spacing: 0.2em;
        color: #7E2D00;
    }

    img {
        margin: 0 auto;
        padding: 0.5em;
        height: 3em;
        width: 3em;
        vertical-align: middle;
    }
`;