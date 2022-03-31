
import { useEffect, useState } from "react";

import Header from "./Header";
import Note from "./Note";
import { ReadNoteContent } from "../Common/Content.style";
import { TitleContainer } from "../Common/Header.style";
import { ReadNoteTitle } from "../Common/Heading.style";

const ReadNote = () => {

    const [note, setNote] = useState({title: ''});

    useEffect(() => {
        showTitle(note);
    }, [note])

    
    const showTitle = (note) => {
        return <ReadNoteTitle>{ note.title }</ReadNoteTitle>
    }

    return (
        <div>
            <Header note={ note } />

            <ReadNoteContent>
                <div></div>
                
                <TitleContainer>
                    { showTitle(note) }
                </TitleContainer>

                <Note 
                    note={ note }
                    setNote={ setNote }>
                </Note>
            </ReadNoteContent>
        </div>
    );
}
 
export default ReadNote;