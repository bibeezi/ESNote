import { useEffect, useState, useRef } from "react";
import axios from "axios";

import Header from "./Header";
import Note from "./Note";
import Settings from "../ReadNote/Settings";
import { TitleContainer } from "../Common/Header.style";
import { EditNoteInput } from "../Common/Inputs.style";
import { EditNoteContent } from "../Common/Content.style";
import { SaveContainer, SaveButtonContainer, SaveMessageContainer } from "./EditNote.style";
import { SavedMessages } from "../Common/Messages.style";
import { SaveButton } from "../Common/Button.style";
import { Modal } from "../Common/Modal.style";
import { ReadSettingsFormContainer } from "../Common/Form.style";

const EditNote = () => {

    const CHAR_SAVE = 150;
    const [note, setNote] = useState({title: ''});
    const [noteContent, setNoteContent] = useState({
        title: "",
        body: [],
        template: ""
    });
    const [charCount, setCharCount] = useState(0);
    const [saved, setSaved] = useState(false);
    const [openSettings, setOpenSettings] = useState(false);
    const [notebooks, setNotebooks] = useState([]);
    const inputRef = useRef(null);
    const textareaRef = useRef(null);
    
    useEffect(() => {
        setTimeout(() => {
            saveOnLoad();
        }, 500);
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setSaved(false);
        }, 3000);

        getNotebooks();
    }, [saved]);


    const handleSettings = (event) => {
        event.preventDefault();

        setOpenSettings(prevState => !prevState);
    }

    const handleChange = ({ target }) => {
        const { name, value } = target;

        name === 'title' && setNoteContent(prevState => ( { ...prevState, [name]: value }));

        if(charCount === CHAR_SAVE && name !== 'title') {

            var newBody = Array.from(target.parentNode.children).map((child) => {
                return { sectionID: child.name, content: child.value }
            });
    
            setNoteContent(prevState => ({
                ...prevState,
                body: newBody
            }));

            axios.put('/note/saveNote', {
                noteBodies: newBody,
                noteTitle: noteContent.title,
                noteTemplate: noteContent.template,
                noteID: note._id
            })
            .catch((err) => {
                console.log("ERROR in EditNote - /saveNote", err);
            });

            setCharCount(0);
            setSaved(true);
        }
        else if(charCount === CHAR_SAVE) {
            setCharCount(0);
        }
        else {
            setCharCount(charCount + 1);
        }
    }

    const save = ({ target }) => {

        const textareas = target.parentNode.parentNode.parentNode.childNodes[1].childNodes[0].childNodes;
        const title = target.parentNode.parentNode.parentNode.childNodes[0].childNodes[1];

        var newBody = Array.from(textareas).map((child) => {
            return { sectionID: child.name, content: child.value }
        });

        setNoteContent(prevState => ({
            ...prevState,
            body: newBody
        }));

        axios.put('/note/saveNote', {
            noteBodies: newBody,
            noteTitle: title.value,
            noteTemplate: noteContent.template,
            noteID: note._id
        })
        .then((res) => {
            setSaved(true);
        })
        .catch((err) => {
            console.log("ERROR in EditNote - /saveNote", err);
        });
    }

    const saveOnLoad = () => {

        const textareas = textareaRef.current?.childNodes;
        const title = inputRef.current;

        var newBody = Array.from(textareas).map((child) => {
            return { sectionID: child.name, content: child.value }
        });

        setNoteContent(prevState => ({
            ...prevState,
            body: newBody
        }));

        axios.put('/note/saveNote', {
            noteBodies: newBody,
            noteTitle: title.value,
            noteTemplate: noteContent.template,
            noteID: note._id
        })
        .then((res) => {
            setSaved(true);
        })
        .catch((err) => {
            console.log("ERROR in EditNote - /saveNote", err);
        });
    }

    const getNotebooks = () => {

        const payload = {
            userID: localStorage.getItem("userID")
        };

        axios.get('/notebook/getNotebooks', {
            params: {
                data: payload
            }
        })
        .then((res) => {
            res.data.msg !== "Notebooks Not Found" && setNotebooks(res.data);
        })
        .catch((error) => {
            console.log("ERROR in ReadNote - /notebook/getNotebooks", error);
        });
    };

    return (
        <div>
            <Header 
                handleSettings={ handleSettings }
                note={ note }
                noteContent={ noteContent }>                    
            </Header>

            <EditNoteContent>
                <TitleContainer>
                    <label>Title:</label>

                    <EditNoteInput 
                        ref={ inputRef }
                        name="title"
                        type="text"
                        placeholder="Title"
                        defaultValue={ note.title }
                        onChange={ handleChange }> 
                    </EditNoteInput>
                </TitleContainer>

                <Note
                    textareaRef={ textareaRef }
                    note={ note }
                    setNote={ setNote }
                    setNoteContent={ setNoteContent }
                    handleChange={ handleChange }>
                </Note>

                <SaveContainer>
                    <SaveMessageContainer>
                        { saved ? <SavedMessages>Saved!</SavedMessages> : <SavedMessages></SavedMessages> }
                    </SaveMessageContainer>

                    <SaveButtonContainer>
                        <SaveButton onClick={ (e) => save(e) }>Save</SaveButton>
                    </SaveButtonContainer>
                </SaveContainer>

                { openSettings && 
                <Modal onClick={ (e) => handleSettings(e) }>
                    <ReadSettingsFormContainer onClick={ (e) => handleSettings(e) }>
                        <Settings
                            handleSettings={ handleSettings }
                            note={ note }
                            notebooks={ notebooks }
                            getNotebooks={ getNotebooks }>
                        </Settings>
                    </ReadSettingsFormContainer>
                </Modal>}
            </EditNoteContent>
        </div>
    );
}
 
export default EditNote;