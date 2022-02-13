import styled from "styled-components";

export const AddNote = styled.div`

    display: flex;
    margin: 2em auto 2em auto;
    width: 50%;
    border: 1px solid #7E2D00;
    border-radius: 0 1em 1em 0;
    align-items: center;
    background: #F7F3E7;

    img {
        margin: 0 auto;
        width: 50%;
        height: 35%;
    }

    h1 {
        position: relative;
        height: 50px;
        background: none;
        bottom: -115px;
        border-bottom: none;
        font-size: 15px;
        padding: 0.5em;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`;