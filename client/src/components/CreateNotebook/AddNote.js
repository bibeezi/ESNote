
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
    const [addNotes, setAddNotes] = useState([]);
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

    const handleChange = ({ target }) => {
        const { value } = target;

        setShowList(true);

        var notesAdded = addNotes.map((note, index) => index % 2 === 0 ? note.props.children.toLowerCase() : "img");

        var filtered = notes.filter((note) => 
            note.title.toLowerCase().startsWith(value.toLowerCase()) && notesAdded.indexOf(note.title.toLowerCase()) === -1);
        
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

    const displayOption = ({ target }) => {
        const { id, title } = target;

        setAddNotes((prevState) => [
            ...prevState,
            <NotebookNoteHeading key={ id }>{ title }</NotebookNoteHeading>,
            <img src={ Images.Delete } alt="Delete Note" />
        ]);
    }

    const handleList = () => {
        setShowList((prevState) => !prevState);
    }

    const handleBlur = ({ target }) => {
        const { value } = target;

        setShowList(false);

        var notesAdded = addNotes.map((note, index) => index % 2 === 0 ? note.props.children.toLowerCase() : "img");

        var filtered = notes.filter((note) => 
            note.title.toLowerCase().startsWith(value.toLowerCase()) && notesAdded.indexOf(note.title.toLowerCase()) === -1);
        
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

    useEffect(() => {
        console.log(addNotes);
    }, [addNotes])

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

                    { addNotes.length ? 
                        <SettingHeading>Notes to be Added:</SettingHeading> &&

                        <SettingHeader>

                            { addNotes }

                        </SettingHeader> 
                    : null }
                </List>
            </SettingContainer>
        </SettingsGrid>
        </>
    );
}
 
export default AddNote;