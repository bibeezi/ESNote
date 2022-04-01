
import { useEffect, useState } from "react";
import axios from "axios";

import { SettingsGrid, SettingContainer } from "../Common/Form.style";
import { SettingHeader } from "../Common/Header.style";
import { SettingHeading } from "../Common/Heading.style";
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
            console.log("ERROR in UserHome - /getNotes", error);
        });
    }, [])

    const handleChange = ({ target }) => {
        const { value } = target;

        setShowList(true);

        var filteredNotes = notes.filter((note) => note.title.toLowerCase().startsWith(value.toLowerCase()) ? note : null);
        
        setFilteredNotes(filteredNotes.length ? filteredNotes.map(note => 
            <ListOption 
                key={ note._id }
                title={ note.title }
                onMouseDown={ (e) => displayOption(e) }>
                { note.title }
            </ListOption>) : <ListOption>No Notes Found!</ListOption>
        );
    }

    const displayOption = ({ target }) => {
        console.log(target);
    }

    const handleList = () => {
        setShowList((prevState) => !prevState);
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
                            onBlur={ handleList }
                            name="note"
                            type="text"
                            placeholder="Search Note"> 
                        </SearchInputCreateNotebook>
                    </label>
                    { showList ? filteredNotes : null }
                </List>
            </SettingContainer>
        </SettingsGrid>
        </>
    );
}
 
export default AddNote;