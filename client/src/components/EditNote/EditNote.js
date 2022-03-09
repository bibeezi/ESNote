
import { useState, useEffect } from 'react';
// import axios from 'axios';

import Images from "../../images/Images";

import { Header } from "../Common/Header.style";
import { Heading } from "../Common/Heading.style";
import { Content } from '../Common/Content.style';
import { NotePreview } from './NotePreview.style';
import { Form } from "../Common/Form.style";
import { Button } from '../Common/Button.style';
import { Grid } from './Grid.style';

const EditNote = () => {

    const [noteSize, setNoteSize] = useState({
        noteWidth: "0",
        noteHeight: "0"
    }); 
    const [notePreviews, setNotePreviews] = useState([]);

    const handleInputChange = ({ target }) => {
        const { name, value } = target;

        switch(name) {
            case "noteWidth": 
                if(value === "") {
                    setNoteSize((prevState) => ({
                        [name]: "0",
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
                        [name]: "0"
                    }));    
                    break;
                }

                setNoteSize((prevState) => ({
                    noteWidth: prevState.noteWidth,
                    [name]: value.toString()
                }));
                break;
            default:
                break;
        }
    }

    const handleInputSend = (event) => {
        event.preventDefault();
    }

    const addNotePreview = () => {
    //     notePreviews.push(<NotePreview
    //         key={  }
    //         noteHeight={ noteSize.noteHeight }
    //         noteWidth={ noteSize.noteWidth }>
    //     </NotePreview>);
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
                    {/* <img id="f" alt="help"></img> */}
                </div>
            </Header>

            <Content
            page = { "note-taking" }>
                <Grid>
                    {/* <div id="note-preview"></div> */}
                    <NotePreview
                        noteHeight={ noteSize.noteHeight }
                        noteWidth={ noteSize.noteWidth }>
                    </NotePreview>
                    { notePreviews.length ? notePreviews : null}
                </Grid>

                <div>
                    <Form onSubmit={ (e) => handleInputSend }>
                        <div className='line'>
                            <h2>Page Size:</h2>
                            <div className='indent'>
                                <label>Height:</label>
                                <input 
                                    onChange={ handleInputChange } 
                                    name="noteHeight" 
                                    placeholder="e.g. 100">
                                </input>
                                <label>Width:</label>
                                <input
                                    onChange={ handleInputChange }
                                    name="noteWidth"
                                    placeholder="e.g. 50">
                                </input>
                            </div>
                        </div>
                        <Button
                            type="button"
                            onClick={ addNotePreview }>
                            Add
                        </Button>
                        <Button>Submit</Button>
                    </Form>
                </div>
            </Content>
        </div>
    );
}
 
export default EditNote;