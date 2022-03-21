import styled from "styled-components";

export const HeaderBar = styled.div`

    display: grid;
    grid-template-columns: repeat(3, calc(100% / 3));
    position: absolute;
    height: 3.4em;
    width: 100%;
    top: 0;
    background-color: #FAF3EB;
    box-shadow: 0 0 1em grey;
    z-index: 1;

    /* max-width: 360px */

    @media only screen and (min-width: 360px) and (max-width: 600px) {
        
    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {

    }   

    @media only screen and (min-width: 768px) and (max-width: 992px) {
        height: 5.4em;
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        height: 5.4em;
    }

    @media only screen and (min-width: 1200px) {
        height: 5.4em;
    }
`;

export const HeaderBarUserHome = styled.div`

    display: grid;
    grid-template-columns: repeat(3, calc(100% / 3));
    position: absolute;
    height: 3.4em;
    width: 100%;
    top: 0;
    background-color: #FAF3EB;
    z-index: 1;

    /* max-width: 360px */

    @media only screen and (min-width: 360px) and (max-width: 600px) {
        
    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {

    }   

    @media only screen and (min-width: 768px) and (max-width: 992px) {
        height: 5.4em;
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        height: 5.4em;
    }

    @media only screen and (min-width: 1200px) {
        height: 5.4em;
    }
`;

export const HomeHeader = styled.div`

    display: flex;
    align-items: center;

    /* max-width: 360px */
    img {
        margin-left: 0.5em;
        width: 1.5em;
        height: 1.5em;
    }

    @media only screen and (min-width: 360px) and (max-width: 600px) {

        
    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {
        img {
            width: 2em;
            height: 2em;
        }
    }   

    @media only screen and (min-width: 768px) and (max-width: 992px) {
        img {
            margin-left: 1em;
            width: 3em;
            height: 3em;
        }
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        img {
            margin-left: 1em;
            width: 3em;
            height: 3em;
        }
    }

    @media only screen and (min-width: 1200px) {
        img {
            margin-left: 1em;
            width: 3em;
            height: 3em;
        }
    }
`;

export const WelcomeHeader = styled.div`
    
    /* max-width: 360px */
    display: flex;
    align-items: center;
    text-align: center;
    
    @media only screen and (min-width: 360px) and (max-width: 600px) {

    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {

    }   

    @media only screen and (min-width: 768px) and (max-width: 992px) {

    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {

    }

    @media only screen and (min-width: 1200px) {
        
    }
`;

export const IconsHeader = styled.div`

    display: grid;
    grid-auto-flow: column;

    img {
        height: 40%;
        margin: 0;
        align-self: center;
        justify-self: center;
    }

    /* max-width: 360px */
    overflow-x: auto;
    grid-auto-columns: 35%;
    column-gap: 5%;


    @media only screen and (max-height: 321px) {
        grid-auto-columns: 25%;
    }

    @media only screen and (min-width: 360px) and (max-width: 600px) {

    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {
        grid-auto-columns: 15%;
        column-gap: 0;
        justify-content: right;
    }   

    @media only screen and (min-width: 768px) and (max-width: 992px) {
        grid-auto-columns: 20%;
        column-gap: 0;
        justify-content: right;
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        grid-auto-columns: 15%;
        column-gap: 0;
        justify-content: right;
    }

    @media only screen and (min-width: 1200px) {
        grid-auto-columns: 15%;
        column-gap: 0;
        justify-content: right;
    }
`;

export const IconsHeaderCreateNote = styled.div`

    display: grid;
    grid-auto-flow: column;
    justify-content: end;

    img {
        height: 40%;
        margin: 0;
        align-self: center;
        justify-self: center;
    }

    /* max-width: 360px */
    overflow-x: auto;
    grid-auto-columns: 35%;
    column-gap: 5%;


    @media only screen and (max-height: 321px) {
        grid-auto-columns: 25%;
    }

    @media only screen and (min-width: 360px) and (max-width: 600px) {

    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {
        grid-auto-columns: 15%;
        column-gap: 0;
        justify-content: right;
    }   

    @media only screen and (min-width: 768px) and (max-width: 992px) {
        grid-auto-columns: 20%;
        column-gap: 0;
        justify-content: right;
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        grid-auto-columns: 15%;
        column-gap: 0;
        justify-content: right;
    }

    @media only screen and (min-width: 1200px) {
        grid-auto-columns: 15%;
        column-gap: 0;
        justify-content: right;
    }
`;

export const SearchSortHeader = styled.div`

    display: grid;
    grid-template-columns: repeat(2, 50%);
    background-color: #FAF3EB;
    box-shadow: 0 0 -1em 1em black;
    border-top: 1px solid #7E2D009A;
    border-bottom: 1px solid #7E2D009A;
    z-index: 2;

    /* max-width: 360px */

    @media only screen and (min-width: 360px) and (max-width: 600px) {
        
    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {
        
    }   

    @media only screen and (min-width: 768px) and (max-width: 992px) {
        
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        border-bottom: 2px solid #7E2D009A;
        
    }

    @media only screen and (min-width: 1200px) {
        border-bottom: 2px solid #7E2D009A;
    }
`;

export const SubheaderBar = styled.div`

    /* max-width: 360px */
    display: flex;
    height: 1.7em;
    align-items: center;
    justify-content: center;
    background-color: #FAF3EB;
    box-shadow: 0 0.5em 0.5em -0.5em grey;

    @media only screen and (min-width: 360px) and (max-width: 600px) {
        height: 2.5em;
        
    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {
        height: 3.4em;
        
    }   

    @media only screen and (min-width: 768px) and (max-width: 992px) {
        height: 5.4em;
        
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        height: 5.4em;
        
    }

    @media only screen and (min-width: 1200px) {
        height: 5.4em;
        
    }
`;

export const SectionHeader = styled.div`

    /* max-width: 360px */
    display: flex;
    height: fit-content;
    align-items: center;

    img {
        height: 1.5em;
        margin-left: 1em;
    }

    @media only screen and (min-width: 360px) and (max-width: 600px) {
        
    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {
        
    }   

    @media only screen and (min-width: 768px) and (max-width: 992px) {
        
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        
    }

    @media only screen and (min-width: 1200px) {
        
    }
`;