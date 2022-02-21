
import { useState, useEffect } from 'react';
// import axios from 'axios';

import Images from "../../images/Images";

import { Header } from "../Common/Header.style";
import { Heading } from "../Common/Heading.style";
import { Content } from '../Common/Content.style';
import { NotePreview } from './NotePreview.style';
// import { Form } from "../Common/Form.style";
// import { Button } from '../Common/Button.style';

const EditNote = () => {

    const [noteSize, setNoteSize] = useState({
        noteWidth: 0,
        noteHeight: 0
    }); 

    const handleInputChange = ({ target }) => {
        const { name, value } = target;

        switch(name) {
            case "noteWidth": 
                if(value === "") {
                    setNoteSize((prevState) => ({
                        [name]: 0,
                        noteHeight: prevState.noteHeight
                    }));    
                    break;
                }

                setNoteSize((prevState) => ({
                    [name]: value,
                    noteHeight: prevState.noteHeight
                }));
                break;
            case "noteHeight":
                if(value === "") {
                    setNoteSize((prevState) => ({
                        noteWidth: prevState.noteWidth,
                        [name]: 0
                    }));    
                    break;
                }

                setNoteSize((prevState) => ({
                    noteWidth: prevState.noteWidth,
                    [name]: value
                }));
                break;
            default:
                break;
        }

        changeNotesize();
    }

    const changeNotesize = () => {
        
    }

    const handleInputSend = (event) => {
        event.preventDefault();
    }

    return (
        <div>
            <Header>
                <div>
                    <img 
                        src={ Images.Home } 
                        alt="Home Icon">
                    </img>
                    <Heading>ESNote</Heading>
                </div>
                <div>
                    <Heading>Create a Note</Heading>
                </div>
                <div id="icons">
                    <img id="f" alt="help"></img>
                </div>
            </Header>

            <Content
            page = { "note-taking" }>
                <div id="note-preview-container">
                    {/* <div id="note-preview"></div> */}
                    <NotePreview
                        height={ noteSize.noteHeight }
                        width={ noteSize.noteWidth }>
                    </NotePreview>
                </div>

                <div>
                    <form onSubmit={ (e) => handleInputSend }>
                        <div className='line'>
                            <h2>Page Size:</h2>
                            <div className='indent'>
                                <label>Height:</label>
                                <input onChange={ handleInputChange } name="noteHeight" type="number" placeholder='e.g. 100'></input>
                                <label>Width:</label>
                                <input onChange={ handleInputChange } name="noteWidth" type="number" placeholder='e.g. 50'></input>
                            </div>
                        </div>
                    </form>
                </div>
            </Content>
        </div>
    );
}
 
export default EditNote;