import { useEffect, useState } from "react";
import axios from "axios";

import { NotebookTitleContainer } from "../Common/Header.style";
import { ReadNotebookTitle } from "../Common/Heading.style";
import { TemplateReadNotebook } from "../Common/Template.style";
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
        return sections.map((section, index) => (
            section._id === note.body[index].sectionID ? 
                <ReadSections key={ section._id } section={ section }>{ note.body[index].content }</ReadSections> :
                null
        ));
    };
 
    return (
        <NoteContainer>
            <NotebookTitleContainer>
                <ReadNotebookTitle>{ note.title }</ReadNotebookTitle>
            </NotebookTitleContainer>
            <TemplateReadNotebook>
                { Object.keys(template).length !== 0 && showNote(template.sections) }
            </TemplateReadNotebook>
        </NoteContainer>            
    );
}
 
export default Notes;