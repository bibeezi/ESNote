import styled, { css } from "styled-components";

export const NotePreview = styled.textarea`

    border: 1px solid black;
    background-color: white;
    margin: 0 auto;
    
    ${ ({ noteHeight, noteWidth }) => noteHeight || noteWidth ? css`
        height: ${ noteHeight + "px" };
        width: ${ noteWidth + "px" };
    ` : ``}
`;