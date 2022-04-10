// React Hooks
import { useEffect, useState } from "react";

// Promise-based HTTP client
import axios from "axios";

// Styled Components
import { TemplateContainer, TemplateEditNote } from "../Common/Template.style"
import { TextArea } from "../Common/Section.style";

// props passed from 'EditNote.js'
const Note = ({ 
    handleChange, 
    note, 
    setNote, 
    textareaRef 
}) => {

    // Holds the template details for the note displayed
    const [template, setTemplate] = useState({});


    // Runs when note state is changed
    useEffect(() => {

        // Wait 50 milliseconds
        setTimeout(() => {

            // Gather data to send to the server
            const payload = {
                noteID: localStorage.getItem("newNoteID")
            }
    
            // Get the current note's details from MongoDB
            axios.get('/note/getNote', {
                params: {
                    data: payload
                }
            })
            .then((res) => {

                // Set the note details in note state
                setNote(res.data);
    
                // Get the template for the current note
                getTemplate(res.data.template);
            })
            .catch((error) => {
                console.log("ERROR in EditNote Note - /note/getNote", error);
            });
        }, 50);

        // Get the template for the current note
        const getTemplate = (templateID) => {

            // Gather data to send to the server
            const payload = {
                templateID: templateID
            }
    
            // Get the template's details from MongoDB
            axios.get('/template/getTemplate', {
                params: {
                    data: payload
                }
            })
            .then((res) => {
                // Set the template details in template state
                setTemplate(res.data);
            })
            .catch((error) => {
                console.log("ERROR in Note - /getTemplate", error);
            });
        }
    }, [setNote]);

    // Displays the textareas onto the TemplateEditNote component
    const showTextAreas = (template) => {
        // Only show textarea when there is a template
        if(Object.keys(template).length !== 0) 
            // Return the Textarea components to render
            return template.sections.map((section, index) => (
                <TextArea 
                    key={ section._id }
                    name={ section._id }
                    values={ section }
                    defaultValue={ 
                        note.body[index].sectionID === section._id ? 
                            note.body[index].content
                        : 
                            null 
                    }
                    onChange={ handleChange }>
                </TextArea>
            ));
    }
    
    return (
        <TemplateContainer>
            {/* Displays the template only when it exists */}
            { Object.keys(template).length !== 0 &&

                <TemplateEditNote ref={ textareaRef }>


                    {/* Displays textareas from the template */}   
                    { showTextAreas(template) }

                </TemplateEditNote>
                
            }
        </TemplateContainer>
    );
}
 
export default Note;