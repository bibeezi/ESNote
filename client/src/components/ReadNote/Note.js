import { useEffect, useState } from "react";
import axios from "axios";

import { ReadSections } from "../Common/Section.style";
import { TemplateContainer, TemplateReadNote } from "../Common/Template.style";

const Note = ({ note, setNote }) => {

    const [template, setTemplate] = useState({});
    const [readSections, setReadSections] = useState([]);

    
    useEffect(() => {
        setTimeout(() => {
            getNote();
        }, 50);
    }, []);

    useEffect(() => {
        setReadSections((prevState) => {
            if ( template ) {
                if ( template.sections ) {
                    return template.sections.map((section, index) => (
                        note.body.length === 1 && template.sections.length === 1 ?
                            note.body[index].sectionID === section._id ?
                                <ReadSections key={ section._id } section={ section }>{ note.body[0].content }</ReadSections> 
                            :
                                null
                        :
                            <ReadSections key={ section._id } section={ section }>{ note.body[index].content }</ReadSections> 
                    ));
                }
            }
        })
    }, [template])


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
 
    return (
        <TemplateContainer>
            <TemplateReadNote>
                { readSections }
            </TemplateReadNote>
        </TemplateContainer>            
    );
}
 
export default Note;