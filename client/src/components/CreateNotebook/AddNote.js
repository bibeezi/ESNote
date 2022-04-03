
import { useEffect, useState } from "react";
import axios from "axios";

import Images from "../../images/Images";

import { SettingsGrid, SettingContainer, AddedItemsGrid } from "../Common/Form.style";
import { SettingHeader } from "../Common/Header.style";
import { SettingHeading, NotebookNoteHeading } from "../Common/Heading.style";
import { SearchInputList } from "../Common/Inputs.style";
import { List, ListOption } from "../Common/List.style";

const AddNote = () => {

    const [notes, setNotes] = useState([]);
    const [filteredNotes, setFilteredNotes] = useState([]);
    const [addedNotes, setAddedNotes] = useState([]);
    const [showList, setShowList] = useState(false);

    
    useEffect(() => {
        const payload = {
            userID: localStorage.getItem("userID")
        };

        axios.get('/note/getNotes', {
            params: {
                data: payload
            }
        })
        .then((res) => {
            res.data.msg !== "Notes Not Found" && setNotes(res.data);
        })
        .catch((error) => {
            console.log("ERROR in AddNote - /getNotes", error);
        });
    }, [])

    useEffect(() => {
        var addedNotesIDs = addedNotes.filter((note) => note.props.id.substring(24) !== "img").map((note) => note.props.id);
        
        localStorage.setItem("addedNoteIDs", JSON.stringify(addedNotesIDs));
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

        var noteIDsAdded = addedNotes.map((noteheader) => noteheader.props.children);

        console.log(noteIDsAdded);

        var filtered = notes.filter((note) => 
            note.title.toLowerCase().startsWith(value.toLowerCase()) && noteIDsAdded.indexOf(note._id) === -1);
        
        setFilteredNotes(filtered.length ? filtered.map(note => 
            <ListOption 
                key={ note._id }
                id={ note._id }
                title={ note.title }
                onMouseDown={ (e) => addNote(e) }>
                { note.title }
            </ListOption>) : <ListOption>No Notes Found!</ListOption>
        );
    }

    return (
        <>
        <SettingHeader>
            <SettingHeading>Add Notes</SettingHeading>
        </SettingHeader>

        <SettingsGrid>
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
                            placeholder="Search Note"> 
                        </SearchInputList>
                    </label>

                    { showList ? <div>{ filteredNotes }</div> : null }

                    { addedNotes.length ? 
                        <SettingHeading>Notes to be Added:</SettingHeading> &&

                        <AddedItemsGrid>

                            { addedNotes }

                        </AddedItemsGrid> 
                    : null }
                </List>
            </SettingContainer>
        </SettingsGrid>
        </>
    );
}
 
export default AddNote;