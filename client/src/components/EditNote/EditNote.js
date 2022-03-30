import { useEffect, useState } from "react";
import axios from "axios";

import Header from "./Header";
import Note from "./Note";
import { TitleContainer } from "./EditNote.style";
import { EditNoteInput } from "../Common/Inputs.style";
import { EditNoteContent } from "../Common/Content.style";
import { Save } from "./EditNote.style";
import { SavedMessages } from "../Common/Messages.style";
import { SaveButton } from "../Common/Button.style";

const EditNote = () => {

    const CHAR_SAVE = 3;
    const [note, setNote] = useState({title: ''});
    const [noteContent, setNoteContent] = useState({
        title: "",
        body: [],
        template: ""
    });
    const [charCount, setCharCount] = useState(0);
    const [saved, setSaved] = useState(false);

    
    useEffect(() => {
        setTimeout(() => {
            setSaved(false);
        }, 3000);
    }, [saved]);


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

        const textareas = target.parentNode.parentNode.childNodes[1].childNodes[1].childNodes[0].childNodes;

        var newBody = Array.from(textareas).map((child) => {
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
        .then((res) => {
            setSaved(true);
        })
        .catch((err) => {
            console.log("ERROR in EditNote - /saveNote", err);
        });
    }

    return (
        <div>
            <Header />

            <EditNoteContent>
                <TitleContainer>
                    <label>Title:</label>

                    <EditNoteInput 
                        name="title"
                        type="text"
                        placeholder="Title"
                        defaultValue={ note.title }
                        onChange={ handleChange }> 
                    </EditNoteInput>
                </TitleContainer>

                <Note
                    note={ note }
                    setNote={ setNote }
                    setNoteContent={ setNoteContent }
                    handleChange={ handleChange }>
                </Note>
            </EditNoteContent>

            <Save>
                { saved ? <SavedMessages>Saved!</SavedMessages> : <SavedMessages></SavedMessages> }
                
                <SaveButton onClick={ (e) => save(e) }>Save</SaveButton>
            </Save>
        </div>
    );
}
 
export default EditNote;