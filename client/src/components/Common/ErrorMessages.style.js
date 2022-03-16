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