import styled from "styled-components";

export const CommonHeader = styled.div`

    display: grid;
    grid-template-columns: repeat(3, calc(100% / 3));
    position: absolute;
    height: 3.4em;
    width: 100%;
    top: 0;
    background-color: #FAF3EB;
    box-shadow: 0 0 1em grey;
    z-index: 10;

    #home-div {
        display: flex;
        align-items: center;
    }

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

        height: 6.4em;

        img {
            margin-left: 1em;
            width: 4em;
            height: 4em;
        }
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {

        height: 6.4em;

        img {
            margin-left: 1em;
            width: 4em;
            height: 4em;
        }
    }

    @media only screen and (min-width: 1200px) {

        height: 6.4em;

        img {
            margin-left: 1em;
            width: 4em;
            height: 4em;
        }
    }
`;