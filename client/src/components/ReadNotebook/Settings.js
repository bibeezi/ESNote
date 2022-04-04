import { useState, useEffect } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

import Images from "../../images/Images";
import { CloseButton } from "../Common/Close.style";
import { StyledSettingsFormRead, SettingContainer, AddedItemsGrid } from "../Common/Form.style";
import { SettingHeaderRead } from "../Common/Header.style";
import { FormHeadingModal, SettingHeading, NotebookNoteHeading} from "../Common/Heading.style";
import { ErrorMessages } from "../Common/Messages.style";
import { BlueButtonRegistration } from "../Common/Button.style";
import { List, ListOptionSetting, Options } from "../Common/List.style"
import { SearchInputList } from "../Common/Inputs.style"

const Settings = ({ handleSettings, notebook, notes, getNotes }) => {

    const [home, setHome] = useState(false);
    const [deleteCounter, setDeleteCounter] = useState(0);
    const [showList, setShowList] = useState(false);
    const [addedNotes, setAddedNotes] = useState([]);
    const [filteredNotes, setFilteredNotes] = useState([]);

    useEffect(() => {
        var addedNoteIDs = addedNotes.filter((note) => note.props.id.substring(24) !== "img").map((note) => note.props.id);
        
        localStorage.setItem("addedNoteIDs", JSON.stringify(addedNoteIDs));
    }, [addedNotes]);

    const handleList = () => {
        setShowList((prevState) => !prevState);
    }

    const handleChange = (event) => {
        const { value } = event.target;
        const reactName = event._reactName;

        switch(reactName) {
            case "onBlur":
                setShowList(false);
                break;
            default:
                setShowList(true);
                break;
        }

        displayList(value);
    }

    const addNote = ({ target }) => {
        const { id, title } = target;

        setAddedNotes((prevState) => [
            ...prevState,
            <NotebookNoteHeading 
                key={ id } 
                id={ id }>
                { title }
            </NotebookNoteHeading>,
            <img 
                key={ id + "img" } 
                id={ id + "img" } 
                onClick={ (e) => deleteAddedNote(e) } 
                src={ Images.Delete } 
                alt="Delete Note" 
            />
        ]);
    }

    const deleteAddedNote = ({ target }) => {
        const { id } = target;

        setAddedNotes((prevState) => 
            prevState.filter((note) => note.props.id.substring(24) === "img" ? 
                note.props.id.substring(0, 24) !== id.substring(0, 24) 
            :   
                note.props.id !== id.substring(0, 24) 
            ).map(component =>
                component
            )
        );

        var value = target.parentNode.parentNode.childNodes[0].childNodes[0].value;

        displayList(value);
    }

    const displayList = (value) => {

        var noteIDsAdded = addedNotes.map((note) => note.props.id);

        var filtered = notes.filter((note) => 
                note.title.toLowerCase().startsWith(value.toLowerCase()) 
            && 
                noteIDsAdded.indexOf(note._id) === -1 
            &&
                !notebook.notes.includes(note._id)
        );

        setFilteredNotes(filtered.length ? filtered.map(note => 
                <ListOptionSetting
                    key={ note._id }
                    id={ note._id }
                    title={ note.title }
                    onMouseDown={ (e) => addNote(e) }>
                    { note.title }
                </ListOptionSetting>
            ) : 
                <ListOptionSetting>
                    { 
                        notes.filter((note) => 
                            !notebook.notes.includes(note._id)).length ? 
                                "No Notes Available!" 
                            : 
                                "No More Notes To Add"
                    }
                </ListOptionSetting>
        );
    }

    const saveNotebooks = () => {
        const payload = {
            noteIDs: JSON.parse(localStorage.getItem("addedNoteIDs")),
            notebookID: notebook._id
        }

        axios.put('/notebook/updateNotebook', {
            data: payload
        }).then((res) => {
            getNotes();

            goHome();
        }).catch((err) => {
            console.log("ERROR in Settings - /updateNotebook", err);
        });
    }

    const deleteNotebook = () => {
        if(deleteCounter === 1) {
            const payload = {
                userID: localStorage.getItem("userID"),
                notebook: localStorage.getItem("clickedNotebookID")
            }

            axios.delete('/notebook/deleteNotebook', {
                data: payload
            }).then((res) => {
                goHome();
            }).catch((err) => {
                console.log("ERROR in Settings - /deleteNotebook", err)
            });

            setDeleteCounter(0);
        } else {
            setDeleteCounter((prevState) => prevState + 1);
        }
    }

    const goHome = () => {
        setHome((prevState) => !prevState);
    }

    return (
        <StyledSettingsFormRead onSubmit={ (e) => e.preventDefault() }>
            <CloseButton onMouseDown={ (e) => { handleSettings(e); setDeleteCounter(0); } }/>
            <FormHeadingModal>Notebook Settings</FormHeadingModal>

            <SettingHeaderRead>
                <SettingHeading>Add Notes</SettingHeading>        
            </SettingHeaderRead>

            <SettingContainer>
                <List showList={ showList }>
                    <label>
                        <SearchInputList
                            showList={ showList } 
                            onChange={ (e) => handleChange(e) }
                            onFocus={ handleList }
                            onBlur={ (e) => handleChange(e) }
                            name="note"
                            type="text"
                            placeholder="Search Notes"> 
                        </SearchInputList>
                    </label>

                    { showList ? <Options>{ filteredNotes }</Options> : null }

                    { addedNotes.length ? 
                        <SettingHeading>Notes to be Added:</SettingHeading> &&

                        <AddedItemsGrid>

                            { addedNotes }

                        </AddedItemsGrid> 
                    : null }
                </List>
            </SettingContainer>

            <SettingHeaderRead>
                <SettingHeading>Delete Notebook</SettingHeading>
                <img onClick={ deleteNotebook } src={ Images.Delete } alt="Delete Note"></img>          
            </SettingHeaderRead>
            <ErrorMessages active={ deleteCounter !== 1 ? false : true }>
                { deleteCounter === 1 ? "Click the Delete Icon Again If You're Sure You Want To Delete This Notebook!" : null }
            </ErrorMessages>

            <BlueButtonRegistration 
                type="button"
                onClick={ (e) => { saveNotebooks(); displayList(''); } }>
                Update Notebook
            </BlueButtonRegistration>

            { home ? <Navigate to="/user-home" /> : null }
        </StyledSettingsFormRead>
    );
}
 
export default Settings;