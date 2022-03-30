import { useEffect, useState } from "react";
import axios from "axios";

import { ReadSections } from "../Common/Section.style";
import { TemplateContainer, TemplateReadNote } from "../Common/Template.style";

const Note = ({ note, setNote }) => {

    const [template, setTemplate] = useState({});

    useEffect(() => {
        setTimeout(() => {
            getNote();
        }, 50);
    }, []);


    const getNote = () => {

        const payload = {
            noteID: localStorage.getItem("clickedNoteID")
        }

        axios.get('/note/getNote', {
            params: {
                data: payload
            }
        })
        .then((res) => {
            setNote(res.data);

            getTemplate(res.data.template);
        })
        .catch((error) => {
            console.log("ERROR in Note - /getNote", error);
        });
    };

    const getTemplate = (templateID) => {

        const payload = {
            templateID: templateID
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
        <TemplateContainer>
            <TemplateReadNote>
                { Object.keys(template).length !== 0 && showNote(template.sections) }
            </TemplateReadNote>
        </TemplateContainer>            
    );
}
 
export default Note;