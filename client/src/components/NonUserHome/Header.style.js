import styled from 'styled-components';

export const Header = styled.header`
    
    display: grid;
    grid-auto-flow: column;
    border-bottom: 3px solid black;
    grid-auto-columns: 20em auto auto;

    h1 {
        display: inline-flex;
        margin: 0 auto;
        vertical-align: middle;
        letter-spacing: 5px;
    }

    img {
        margin: 0 auto;
        padding: 2% 5% 2% 2%;
        width: 40px;
        height: 40px;
        vertical-align: middle;
    }
`;