import styled from "styled-components";

export const StyledNotes = styled.div`
    
    /* max-width: 360px */

    @media only screen and (max-width: 360px) {
        border-bottom: 1px solid #7E2D009A;
        width: 100vw;
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

export const NotesGrid = styled.div`

    /* max-width: 360px */

    @media only screen and (max-width: 360px) {
        display: grid;
        height: calc(100% - 3.4em);
        grid-auto-flow: column;
        overflow-x: auto;
        grid-auto-columns: 50%;
        column-gap: 5%;
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

export const NoteContainer = styled.div`

    /* max-width: 360px */

    @media only screen and (max-width: 360px) {
        display: grid;
        height: 100%;
        grid-template-rows: 80% 20%;
        justify-items: center;
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

export const Note = styled.div`

    /* max-width: 360px */

    @media only screen and (max-width: 360px) {
        display: flex;
        background-color: #F4EDDE;
        height: 70%;
        width: 45%;
        border: 1px solid #80655C;
        border-radius: 0.25em 1em 1em 0.25em;
        align-self: center;
        align-items: center;
        justify-content: center;
        
        img {
            position: relative;
            height: 2em;
            width: 2em;
        }
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