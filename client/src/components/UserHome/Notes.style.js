import styled from "styled-components";

export const StyledNotes = styled.div`
    
    @media only screen and (min-height: 360px) and (max-height: 376px) {
        height: calc(100vh - 6.9em);

    }

    @media only screen and (min-width: 360px) and (max-width: 600px) and (max-height: 350px) {
        height: calc(100vh - 6.8em);
        border-left: 1px solid #7E2D009A;

    }


    @media only screen and (min-width: 360px) and (max-width: 600px) {
        
    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {
        
    }   

    @media only screen and (min-width: 768px) and (max-width: 992px) {

    }

    @media only screen and (min-width: 600px) and (max-width: 768px) and (max-height: 380px) {
        border-left: 1px solid #7E2D009A;
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        border-left: 1px solid #7E2D009A;
    }

    @media only screen and (min-width: 768) and (max-width: 992px) and (max-height: 450px) {
        height: calc(100vh - 6.8em);
        border-left: 1px solid #7E2D009A;
    }

    @media only screen and (min-width: 768px) and (max-width: 992px) and (max-height: 450px) {
        height: calc(100vh - 6.8em);
        border-left: 1px solid #7E2D009A;
        
    }

    @media only screen and (min-width: 1200px) {
        border-left: 1px solid #7E2D009A;

    }
`;

export const NotesGrid = styled.div`

    display: grid;
    height: calc(100% - 1.7em);
    grid-auto-flow: row;
    grid-template-columns: repeat(2, 50%);
    grid-auto-rows: 100%;
    overflow-y: auto;

    /* max-width: 360px */

    @media only screen and (min-width: 360px) and (max-width: 600px) {
        height: calc(100% - 2.5em);
        grid-template-columns: repeat(3, calc(100% / 3));
        grid-auto-rows: 80%;
    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {
        height: calc(100% - 3.4em);
        grid-template-columns: repeat(3, calc(100% / 3));
        grid-auto-rows: 50%;
    }
    
    @media only screen and (min-height: 360px) and (max-height: 376px) {
        grid-template-columns: 50% 50%;
        grid-auto-rows: 100%;
    }

    @media only screen and (min-width: 768px) and (max-width: 992px) {
        height: calc(100% - 5.4em);
        grid-template-columns: repeat(4, 25%);
        grid-auto-rows: 50%;
    }

    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        height: calc(100% - 5.4em);
        grid-template-columns: repeat(4, 25%);
        grid-auto-rows: calc(100% / 3);
    }

    @media only screen and (min-height: 376px) and (max-height: 651px) and (min-width: 321px) {
        grid-template-columns: repeat(4, 25%);
        grid-auto-rows: 50% 50%;
    }

    @media only screen and (min-width: 768px) and (max-width: 992px) and (max-height: 450px) {
        height: calc(100% - 3.4em);
        grid-template-columns: 50% 50%;
        grid-auto-rows: 100%;
    }

    @media only screen and (min-width: 1200px) {
        height: calc(100% - 5.4em);
        grid-template-columns: repeat(4, 25%);
        grid-auto-rows: 50% 50%;
    }
`;

export const Container = styled.div`

    display: grid;
    grid-template-rows: 70% auto;
    align-items: center;
    justify-items: center;

    /* max-width: 360px */

    @media only screen and (min-width: 360px) and (max-width: 600px) {
        grid-template-rows: 65% auto; 
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

export const NoteShape = styled.div`

    display: flex;
    background-color: #F4EDDE;
    height: 7em;
    width: 5em;
    border: 1px solid #80655C;
    border-radius: 0.25em 1em 1em 0.25em;
    align-self: end;
    align-items: center;
    justify-content: center;

    img {
        position: relative;
        height: 2em;
        width: 2em;
    }

    /* max-width: 360px */

    @media only screen and (max-height: 360px) {
        height: 5em;
        width: 4em;
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