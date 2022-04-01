
import { useEffect, useState } from "react";
import axios from "axios";

import Images from "../../images/Images";

import { SettingsGrid, SettingContainer } from "../Common/Form.style";
import { SettingHeader } from "../Common/Header.style";
import { SettingHeading, NotebookNoteHeading } from "../Common/Heading.style";
import { SearchInputCreateNotebook } from "../Common/Inputs.style";
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


    const handleList = () => {
        setShowList((prevState) => !prevState);
    }

    const handleChange = ({ target }) => {
        const { value } = target;

        setShowList(true);

        displayList(value);
    }

    const displayOption = ({ target }) => {
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
                id={ id } 
                onClick={ (e) => deleteAddedNote(e) } 
                src={ Images.Delete } 
                alt="Delete Note" 
            />
        ]);
    }

    const deleteAddedNote = ({ target }) => {
        const { id } = target;
        
        setAddedNotes((prevState) => prevState.filter((note) => note === id || note === id + "img"));

        var value = target.parentNode.parentNode.childNodes[0].childNodes[0].value;

        displayList(value);
    }

    const handleBlur = ({ target }) => {
        const { value } = target;
        
        setShowList(false);

        displayList(value);
    }

    const displayList = (value) => {
        var noteIDsAdded = addedNotes.map((note) => note.props.id);

        var filtered = notes.filter((note) => 
            note.title.toLowerCase().startsWith(value.toLowerCase()) && noteIDsAdded.indexOf(note._id) === -1);
        
        setFilteredNotes(filtered.length ? filtered.map(note => 
            <ListOption 
                key={ note._id }
                id={ note._id }
                title={ note.title }
                onMouseDown={ (e) => displayOption(e) }>
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
                        <SearchInputCreateNotebook
                            showList={ showList } 
                            onChange={ (e) => handleChange(e) }
                            onFocus={ handleList }
                            onBlur={ (e) => handleBlur(e) }
                            name="note"
                            type="text"
                            placeholder="Search Note"> 
                        </SearchInputCreateNotebook>
                    </label>

                    { showList ? filteredNotes : null }

                    { addedNotes.length ? 
                        <SettingHeading>Notes to be Added:</SettingHeading> &&

                        <SettingHeader>

                            { addedNotes }

                        </SettingHeader> 
                    : null }
                </List>
            </SettingContainer>
        </SettingsGrid>
        </>
    );
}
 
export default AddNote;