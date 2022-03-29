import { useEffect, useState } from "react";
import axios from "axios";

import { TemplateContainerEditNote, TemplateEditNote } from "../Common/Template.style"
import { TextArea } from "../Common/Section.style";

const Note = ({ handleChange, setNoteContent, note, setNote }) => {

    const [template, setTemplate] = useState({});

    useEffect(() => {
        setTimeout(() => {
            getNote();
        }, 50);
    }, []);


    const getNote = () => {

        const payload = {
            noteID: localStorage.getItem("newNoteID")
        }

        axios.get('/note/getNote', {
            params: {
                data: payload
            }
        })
        .then((res) => {
            setNote(res.data);

            getTemplate(res.data.template);

            setNoteContent(prevState => ({
                ...prevState,
                template: res.data.template
            }));
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

            res.data.sections.map((section) => {
                return setNoteContent(prevState => ({
                    ...prevState,
                    body: [
                        ...prevState.body,
                        {
                            sectionID: section._id,
                            content: ""
                        }
                    ]
                }));
            });
        })
        .catch((error) => {
            console.log("ERROR in Note - /getTemplate", error);
        });
    }

    const showTextAreas = (template) => {
        if(Object.keys(template).length !== 0) 
            return template.sections.map((section, index) => (
                <TextArea 
                    key={ section._id }
                    name={ section._id }
                    values={ section }
                    defaultValue={ note.body.length !== 1 ? note.body[index].content : null }
                    onChange={ (e) => handleChange(e) }>
                    {  }
                </TextArea>
            ));
    }


    useEffect(() => {
        showTextAreas(template);
    }, [template, note])

    return (
        <TemplateContainerEditNote>
            { Object.keys(template).length !== 0 &&

                <TemplateEditNote>

                    { showTextAreas(template) }

                </TemplateEditNote>
                
            }
        </TemplateContainerEditNote>
    );
}
 
export default Note;