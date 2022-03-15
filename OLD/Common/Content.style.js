import styled, { css } from 'styled-components';

export const Content = styled.div`

    min-height: 100vh;
    width: 100%;
    background-image: linear-gradient(#CDF0EA80, #BEAEE260);
    position: absolute;

    ${ ({ page }) => page === "user" ? css`
        display: grid;
        grid-template-columns: repeat(2, 50%);

        .contents {
            height: 100vh;
            border: 1px solid #7E2D00;
            text-align: center;
            color: #7E2D00;
            margin-top: 64px;
        }

        h1 {
            display: block;
            background: #F7F3E7;
            margin: 0 auto;
            padding: 0.5em 0 0.5em 0;
            border-bottom: 1px solid #7E2D00;
        }

        .note-title {
            background: none;
            border-bottom: none;
            font-size: large;
            bottom: -110px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(4, 25%);
            grid-auto-rows: 25vh;
            min-width: 80vh;
            height: fit-content;
            margin: 0px;
        }

        @media (min-width: 530px) and (max-width: 960px) {

        }

        @media (min-width: 360px) and (max-width: 530px) {

        }

        @media (max-width: 360px) {
            grid-template-columns: none;
            overflow: hidden;

            .contents {
                min-width: 100vw;
                font-size: 10px;
                border-left: none;
                border-right: none;
            }
            
            .notebooks {
                height: calc(100% - 33px);
                margin-top: 33px;
                border-bottom: none;
            }

            .notes {
                height: 100%;
                margin-top: 0px;
            }

            .notebook-grid {
                height: 100%;
                grid-template-columns: repeat(2, 50%);
                grid-auto-columns: minmax(160px, 1fr);
                grid-auto-flow: column;
                min-width: 0;
                overflow-x: auto;
            }
            
            .note-grid {
                height: 100%;
                grid-template-columns: repeat(2, 50%);
                grid-auto-columns: minmax(160px, 1fr);
                grid-auto-flow: column;
                min-width: 0;
                overflow-x: auto;
            }
        }
    ` : page === "note-taking" ? css`
        display: grid;
        grid-auto-flow: column;
        grid-template-columns: 70% 30%;

        div {
            display: flex;
            margin-top: 64px;
        }

        .line {
            display: block;
            margin: 25px auto 0 auto;
            border-bottom: 2px solid #000000A1;
            padding-bottom: 20px;
        }

        div form {
            width: 100%;
            padding: 50px;
        }

        /* #note-preview-container {
            border-right: 1px solid #7E2D00;
            align-items: center;
        } */

        /* #note-preview {
            border: 1px solid black;
            background-color: white;
            height: 90%;
            width: 50%;
            margin: 0 auto;
        } */

        .indent {
            display: block;
            margin-top: 0;
            margin-left: 20px;
            margin-right: 20px;
        }

        label {
            display: block;
            margin-top: 20px;
        }

        label, input {
            width: 100%;
            padding: 10px;
            box-sizing: border-box;
        }
    ` : css`
        display: grid;
        grid-auto-flow: rows;
        grid-template-columns: 60% 40%;
        height: 100%;

        #presentation {
            margin: 15rem 9.5rem 15rem 9.5rem;
            background-color: whitesmoke;
            box-shadow: 0 0 2em lightgray;
            overflow: hidden;
        }

        img {
            display: block;
            margin: auto;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .form {
            ${ ({ page }) => page === "note-taking" ? `
                margin: 10rem auto 5rem auto;
                width: 80%;
            ` : `
                margin: 10rem 10rem 10rem 0;
            `}
            border-radius: 1em; 
            background-color: #E0FFFF80;
            box-shadow: 0 0em 1em lightgray;
            display: flex;
            align-items: center;
        }

        @media (min-width: 530px) and (max-width: 960px) {
            height: fit-content;
            grid-template-columns: none;
            padding-top: 5rem;

            #presentation {
                margin: 0 5em;
                height: 40em;
                overflow: hidden;
            }

            .form {
                margin: 2em auto 2em auto;
                width: 80%;
                height: fit-content;
            }
        }

        @media (min-width: 360px) and (max-width: 530px) {
            height: fit-content;
            grid-template-columns: none;
            padding-top: 5rem;

            #presentation {
                margin: 0 2em;
                height: 30em;
                overflow: hidden;
            }

            .form {
                margin: 2em auto 2em auto;
                width: 80%;
                height: fit-content;
                font-size: x-small;
            }
        }

        @media (max-width: 360px) {
            height: fit-content;
            grid-template-columns: none;
            padding-top: 5rem;

            #presentation {
                margin: 0 2em;
                height: 20em;
                overflow: hidden;
            }

            .form {
                margin: 2em auto 2em auto;
                width: 80%;
                height: fit-content;
                font-size: x-small;
            }
        }
    `}

    // Note Taking Sample
    /* height: fit-content;

        .note-list {
            margin: 0 auto;
            width: 80%;
        }

        h1 {
            text-align: center;
        }

        .page-list {
            margin: 10px;
        }

        .page-content {
            margin-left: 15%;
            margin-right: 15%;
            border: 1px solid black;
            padding: 20px;
            background-color: white;
        } */
`;