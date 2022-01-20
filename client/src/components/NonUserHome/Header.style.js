import styled from 'styled-components';

export const Header = styled.header`
    
    display: grid;
    grid-auto-flow: column;
    border-bottom: 3px solid black;
    grid-auto-columns: 10% auto auto;

    h1 {
        display: inline-flex;
        margin: 0 auto;
        vertical-align: middle;
    }

    img {
        margin: 5%;
        width: 50px;
        height: 50px;
        vertical-align: middle;
    }
`;