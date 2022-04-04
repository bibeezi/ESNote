import { useState, useEffect } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

import Images from "../../images/Images";
import { CloseButton } from "../Common/Close.style";
import { SettingContainer, StyledSettingsFormRead, AddedItemsGrid } from "../Common/Form.style";
import { SettingHeaderRead } from "../Common/Header.style";
import { FormHeadingModal, SettingHeading, NotebookNoteHeading } from "../Common/Heading.style";
import { ErrorMessages } from "../Common/Messages.style"
import { List, ListOptionSetting } from "../Common/List.style";
import { SearchInputList } from "../Common/Inputs.style";
import { BlueButtonRegistration } from "../Common/Button.style"

const Settings = ({ handleSettings, notebooks, note, getNotebooks }) => {

    const [home, setHome] = useState(false);
    const [deleteCounter, setDeleteCounter] = useState(0);
    const [showList, setShowList] = useState(false);
    const [filteredNotebooks, setFilteredNotebooks] = useState([]);
    const [addedNotebooks, setAddedNotebooks] = useState([]);

    useEffect(() => {
        var addedNotebooksIDs = addedNotebooks.filter((notebook) => notebook.props.id.substring(24) !== "img").map((notebook) => notebook.props.id);
        
        localStorage.setItem("addedNotebookIDs", JSON.stringify(addedNotebooksIDs));
    }, [addedNotebooks]);


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

    const addNotebook = ({ target }) => {
        const { id, title } = target;

        setAddedNotebooks((prevState) => [
            ...prevState,
            <NotebookNoteHeading 
                key={ id } 
                id={ id }>
                { title }
            </NotebookNoteHeading>,
            <img 
                key={ id + "img" } 
                id={ id + "img" } 
                onClick={ (e) => deleteAddedNotebook(e) } 
                src={ Images.Delete } 
                alt="Delete Note" 
            />
        ]);
    }

    const deleteAddedNotebook = ({ target }) => {
        const { id } = target;

        setAddedNotebooks((prevState) => 
            prevState.filter((notebook) => notebook.props.id.substring(24) === "img" ? 
                notebook.props.id.substring(0, 24) !== id.substring(0, 24) 
            :   
                notebook.props.id !== id.substring(0, 24) 
            ).map(component =>
                component
            )
        );

        var value = target.parentNode.parentNode.childNodes[0].childNodes[0].value;

        displayList(value);
    }

    const displayList = (value) => {

        var notebookIDsAdded = addedNotebooks.map((notebook) => notebook.props.id);

        var filtered = notebooks.filter((notebook) => 
            notebook.title.toLowerCase().startsWith(value.toLowerCase()) && 
            notebookIDsAdded.indexOf(notebook._id) === -1 &&
            !notebook.notes.includes(note._id));

        setFilteredNotebooks(filtered.length ? filtered.map(notebook => 
                <ListOptionSetting
                    key={ notebook._id }
                    id={ notebook._id }
                    title={ notebook.title }
                    onMouseDown={ (e) => addNotebook(e) }>
                    { notebook.title }
                </ListOptionSetting>
            ) : 
                <ListOptionSetting>
                    { 
                        notebooks.filter((notebook) => 
                            !notebook.notes.includes(note._id)).length ? 
                                "No Notebooks Available!" 
                            : 
                                "Note Added to All"
                    }
                </ListOptionSetting>
        );
    }

    const saveNotebooks = () => {
        const payload = {
            notebookIDs: JSON.parse(localStorage.getItem("addedNotebookIDs")),
            noteID: note._id
        }

        axios.put('/notebook/saveNote', {
            data: payload
        }).then((res) => {
            getNotebooks();
            
            goHome();
            }).catch((err) => {
            console.log("ERROR in NotebookPreview - /saveNotebook", err);
        });
    }

    const deleteNote = () => {
        if(deleteCounter === 1) {
            const payload = {
                userID: localStorage.getItem("userID"),
                note: localStorage.getItem("clickedNoteID")
            }

            axios.delete('/note/deleteNote', {
                data: payload
            }).then((res) => {
                goHome();
            }).catch((err) => {
                console.log("ERROR in Settings - /deleteNote", err)
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
            <CloseButton onMouseDown={ (e) => { handleSettings(e); setDeleteCounter(0); } }></CloseButton>
            <FormHeadingModal>Note Settings</FormHeadingModal>

            <SettingHeaderRead>
                <SettingHeading>Add to Notebooks</SettingHeading>        
            </SettingHeaderRead>

            <SettingContainer>
                <List showList={ showList }>
                    <label>
                        <SearchInputList
                            showList={ showList } 
                            onChange={ (e) => handleChange(e) }
                            onFocus={ handleList }
                            onBlur={ (e) => handleChange(e) }
                            name="notebook"
                            type="text"
                            placeholder="Search Notebooks"> 
                        </SearchInputList>
                    </label>

                    { showList ? <div>{filteredNotebooks}</div> : null }

                    { addedNotebooks.length ? 
                        <SettingHeading>Notes to be Added:</SettingHeading> &&

                        <AddedItemsGrid>

                            { addedNotebooks }

                        </AddedItemsGrid> 
                    : 
                        null }
                </List>
            </SettingContainer>

            <SettingHeaderRead>
                <SettingHeading>Delete Note</SettingHeading>  
                <img onClick={ deleteNote } src={ Images.Delete } alt="Delete Note"></img>          
            </SettingHeaderRead>
            <ErrorMessages active={ deleteCounter !== 1 ? false : true }>
                { deleteCounter === 1 ? "Click the Delete Icon Again If You're Sure You Want To Delete This Note!" : null }
            </ErrorMessages>

            <BlueButtonRegistration 
                type="button"
                onClick={ (e) => { saveNotebooks(); displayList(''); } }>
                Update Note
            </BlueButtonRegistration>

            { home ? <Navigate to="/user-home" /> : null }
        </StyledSettingsFormRead>
    );
}
 
export default Settings;