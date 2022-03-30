import styled, { css } from "styled-components";

export const ErrorMessages = styled.p`

    /* max-width: 360px */
    @media only screen and (max-width: 360px) {
        ${ ({ active }) => active === true ? css`
            display: inline-block;
            margin: 1em auto;
            padding: 1em;
            width: 100%;
            box-sizing: border-box;
            background-color: lightcoral;
            color: white;
            border-radius: 0.5em;
        ` : css`
            display: none;
        `} 
    }

    @media only screen and (min-width: 360px) and (max-width: 600px) {
        ${ ({ active }) => active === true ? css`
            display: inline-block;
            margin: 1em auto;
            padding: 1em;
            width: 100%;
            box-sizing: border-box;
            background-color: lightcoral;
            color: white;
            border-radius: 0.5em;
        ` : css`
            display: none;
        `} 
    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {
        ${ ({ active }) => active === true ? css`
            display: inline-block;
            margin: 1em auto;
            padding: 1em;
            width: 100%;
            box-sizing: border-box;
            background-color: lightcoral;
            color: white;
            border-radius: 0.5em;
        ` : css`
            display: none;
        `} 
    }   

    @media only screen and (min-width: 768px) and (max-width: 992px) {
        ${ ({ active }) => active === true ? css`
            display: inline-block;
            margin: 1em auto;
            padding: 1em;
            width: 100%;
            box-sizing: border-box;
            background-color: lightcoral;
            color: white;
            border-radius: 0.5em;
        ` : css`
            display: none;
        `} 
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        ${ ({ active }) => active === true ? css`
            display: inline-block;
            margin: 1em auto;
            padding: 1em;
            width: 100%;
            box-sizing: border-box;
            background-color: lightcoral;
            color: white;
            border-radius: 0.5em;
        ` : css`
            display: none;
        `} 
    }

    @media only screen and (min-width: 1200px) {
        ${ ({ active }) => active === true ? css`
            display: inline-block;
            margin: 1em auto;
            padding: 1em;
            width: 100%;
            box-sizing: border-box;
            background-color: lightcoral;
            color: white;
            border-radius: 0.5em;
        ` : css`
            display: none;
        `} 
    }
`;

export const SavedMessages = styled.p`

    margin: 0;
    width: fit-content;
    font-size: 1.25em;
    position: absolute;
    bottom: 1em;
    left: 1em;

    @media only screen and (min-width: 360px) and (max-width: 600px) {

    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {
        font-size: 1.5em;

    }   

    @media only screen and (min-width: 768px) and (max-width: 992px) {
        font-size: 1.75em;
        bottom: 2em;
        left: 2em;
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        font-size: 1.75em;
        bottom: 2em;
        left: 2em;
    }

    @media only screen and (min-width: 1200px) {
        font-size: 1.75em;
        bottom: 2em;
        left: 2em;
    }
`;
