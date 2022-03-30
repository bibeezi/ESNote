import { useEffect, useState } from "react";
import axios from "axios";

import { ReadNoteTitle, NotebookTitleContainer } from "../Common/Heading.style";
import { TemplateReadNote } from "../Common/Template.style";
import { NoteContainer } from "./ReadNotebook.style";
import { ReadSections } from "../Common/Section.style";

const Notes = ({ note }) => {

    const [template, setTemplate] = useState({});

    useEffect(() => {
        getTemplate();
    }, [])

    const getTemplate = () => {

        const payload = {
            templateID: note.template
        }

        axios.get('/template/getTemplate', {
            params: {
                data: payload
            }
        })
        .then((res) => {
            setTemplate(res.data);
        })
        .catch((error) => {
            console.log("ERROR in Note - /getTemplate", error);
        });
    }

    const showNote = (sections) => {
        return sections.map((section) => (console.log(note),
            <ReadSections key={ section._id } section={ section }></ReadSections>
        ));
    };
 
    return (
        <NoteContainer>
            <NotebookTitleContainer>
                <ReadNoteTitle>{ note.title }</ReadNoteTitle>
            </NotebookTitleContainer>
            <TemplateReadNote>
                { Object.keys(template).length !== 0 && showNote(template.sections) }
            </TemplateReadNote>
        </NoteContainer>            
    );
}
 
export default Notes;