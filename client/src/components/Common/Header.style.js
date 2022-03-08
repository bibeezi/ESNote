import styled from 'styled-components';

export const Header = styled.header`
    
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: repeat(3, 33.3%);
    width: 100%;
    position: absolute;
    top: 0;
    background-color: #F7F3E7;
    box-shadow: 0 0 0.5em grey;
    z-index: 10;

    ${ ({ page }) => page === "user" ? `
        box-shadow: none;
    ` : ``}

    ${ ({ bottom }) => bottom === "shadow" ? `
        box-shadow: none;
        top: 4em;
        height: 3em;
        z-index: 9;
    ` : ``}

    img {
        margin: 0 auto;
        padding: 0.5em;
        height: 3em;
        width: 3em;
        vertical-align: middle;
    }

    div:nth-of-type(2) {
        display:flex;
        align-items: center;
        justify-content: center;
    }

    div:nth-of-type(3) {
        display: grid;
        grid-template-areas:
        "a a a a a b c d e f";
        grid-auto-flow: column;
    }

    div:nth-of-type(3) img {
        height: 100%;
        width: 100%;
        padding: 0;
    }

    #b {
        grid-area: b;
    }

    #c {
        grid-area: c;
    }

    #d {
        grid-area: d;
    }

    #e {
        grid-area: e;
    }

    #f {
        grid-area: f;
    }

    #select-wrapper {
        display: flex;
        align-items: center;
    }

    select {
        height: 80%;
        width: 90%;
        margin: 0 auto;
        background-color: whitesmoke;
        border: 1px solid #7E2D00;
    }

    @media (min-width: 360px) and (max-width: 530px) {
        img {
            height: 2em;
            width: 2em;
        }
    }

    @media (max-width: 360px) {
        img {
            margin: 0 auto;
            padding: 0.5em;
            width: 1em;
            height: 1em;
        }
    }
`;